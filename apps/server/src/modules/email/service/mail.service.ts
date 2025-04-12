import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

@Injectable()
export class MailerService {
    private transporter;
    private readonly logger = new Logger(MailerService.name);
    private readonly CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    private readonly CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    private readonly REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

    constructor() {
        const oAuth2Client = new google.auth.OAuth2(
            this.CLIENT_ID,
            this.CLIENT_SECRET,
        );

        oAuth2Client.setCredentials({ refresh_token: this.REFRESH_TOKEN });

        oAuth2Client.getAccessToken().then(accessToken => {
            this.transporter = nodemailer.createTransport({
                service: 'gmail',
                port: 465,
                secure: true,
                auth: {
                    type: 'OAuth2',
                    user: process.env.EMAIL_USER,
                    clientId: this.CLIENT_ID,
                    clientSecret: this.CLIENT_SECRET,
                    refreshToken: this.REFRESH_TOKEN,
                    accessToken: accessToken?.token || '',
                },
            });
        }).catch(error => {
            this.logger.error('Error getting access token:', error);
            throw new BadRequestException('Failed to get access token', error.message);
        });
    }

    private getFeedbackEmailTemplate(data: {
        name: string;
        phoneNumber: string;
        feedback: string;
    }) {
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #4f46e5; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #fff; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .details { background: #f7f9fc; padding: 15px; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Feedback Received</h1>
          </div>
          <div class="content">
            <p>Hello Support Team,</p>
            <p>A user has submitted feedback through the platform. Here are the details:</p>
            
            <div class="details">
              <h3>User Details</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
              <p><strong>Feedback:</strong></p>
              <p>${data.feedback}</p>
            </div>
  
            <p>Please follow up with the user if necessary.</p>
  
            <div class="footer">
              <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    }

    private getContactEmailTemplate(data: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }) {
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #4f46e5; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #fff; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .details { background: #f7f9fc; padding: 15px; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p>Hello Support Team,</p>
            <p>A user has contacted you through the platform. Here are the details:</p>
            
            <div class="details">
              <h3>Contact Details</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message}</p>
            </div>
  
            <p>Please respond to the user as soon as possible.</p>
  
            <div class="footer">
              <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    }

    private getConfirmationEmailTemplate(type: 'feedback' | 'contact') {
        const action = type === 'feedback' ? 'feedback' : 'message';
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #10b981; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #fff; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your ${type === 'feedback' ? 'Feedback' : 'Message'}</h1>
          </div>
          <div class="content">
            <p>Dear Valued User,</p>
            <p>We've successfully received your ${action} and appreciate you taking the time to reach out to us.</p>
            <p>Our team will review your ${action} and respond if necessary.</p>
            <p>For reference, here's what we received:</p>
            
            <p>If you have any urgent inquiries, please don't hesitate to contact our support team at support@yourcompany.com.</p>
  
            <div class="footer">
              <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    }

    async sendFeedbackEmail(
        feedbackData: {
            name: string;
            phoneNumber: string;
            feedback: string;
        },
        adminEmail: string
    ): Promise<void> {
        try {
            if (!this.transporter) {
                throw new BadRequestException('Email transporter is not initialized');
            }

            // Email to admin
            const adminMailOptions = {
                from: `"Feedback System" <${process.env.EMAIL_USER}>`,
                to: adminEmail,
                subject: 'New Feedback Submission',
                html: this.getFeedbackEmailTemplate(feedbackData)
            };

            // Confirmation email to user (if you have their email)
            // const userMailOptions = {
            //   from: `"Your Company" <${process.env.EMAIL_USER}>`,
            //   to: userEmail,
            //   subject: 'Thank You for Your Feedback',
            //   html: this.getConfirmationEmailTemplate('feedback')
            // };

            await this.transporter.sendMail(adminMailOptions);
            // await this.transporter.sendMail(userMailOptions);

            this.logger.log('Feedback email sent successfully');
        } catch (error) {
            this.logger.error('Error sending feedback email:', error);
            throw new Error('Failed to send feedback email');
        }
    }

    async sendContactEmail(
        contactData: {
            name: string;
            email: string;
            subject: string;
            message: string;
        },
        adminEmail: string
    ): Promise<void> {
        try {
            if (!this.transporter) {
                throw new BadRequestException('Email transporter is not initialized');
            }

            // Email to admin
            const adminMailOptions = {
                from: `"Contact System" <${process.env.EMAIL_USER}>`,
                to: adminEmail,
                subject: `New Contact Form: ${contactData.subject}`,
                html: this.getContactEmailTemplate(contactData)
            };

            // Confirmation email to user
            const userMailOptions = {
                from: `"Your Company" <${process.env.EMAIL_USER}>`,
                to: contactData.email,
                subject: 'We Received Your Message',
                html: this.getConfirmationEmailTemplate('contact')
            };

            await Promise.all([
                this.transporter.sendMail(adminMailOptions),
                this.transporter.sendMail(userMailOptions)
            ]);

            this.logger.log('Contact emails sent successfully');
        } catch (error) {
            this.logger.error('Error sending contact emails:', error);
            throw new Error('Failed to send contact emails');
        }
    }
}

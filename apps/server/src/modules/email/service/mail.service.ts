import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { FeedbackDto } from '../dto/feedback.dto';
import { ContactDto } from '../dto/contact.dto';
import { EmailTemplatesService } from "../templates/email-templates.service";

@Injectable()
export class MailerService {
  private readonly emailTemplatesService = new EmailTemplatesService();

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
        secure: true, // true for 465, false for other ports
        logger: true,
        debug: true,
        secureConnection: false,
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_USER,
          clientId: this.CLIENT_ID,
          clientSecret: this.CLIENT_SECRET,
          refreshToken: this.REFRESH_TOKEN,
          accessToken: accessToken?.token || '',
        },
        tls: {
          rejectUnAuthorized: true
        }
      });
    }).catch(error => {
      this.logger.error('Error getting access token:', error);
      throw new BadRequestException('Failed to get access token', error.message);
    });
  }


  async sendFeedbackEmail(
    feedbackData: FeedbackDto,
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
        html: this.emailTemplatesService.getFeedbackEmailTemplate(feedbackData)
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
      throw new BadRequestException('Failed to send feedback email');
    }
  }

  async sendContactEmail(
    contactData: ContactDto,
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
        html: this.emailTemplatesService.getContactEmailTemplate(contactData)
      };

      // Confirmation email to user
      const userMailOptions = {
        from: `"TikuretEntrance" <${process.env.EMAIL_USER}>`,
        to: contactData.email,
        subject: 'We Received Your Message',
        html: this.emailTemplatesService.getConfirmationEmailTemplate('contact')
      };

      await Promise.all([
        this.transporter.sendMail(adminMailOptions),
        this.transporter.sendMail(userMailOptions)
      ]);

      this.logger.log('Contact emails sent successfully');
    } catch (error) {
      this.logger.error('Error sending contact emails:', error);
      throw new BadRequestException('Failed to send contact emails');
    }
  }
}

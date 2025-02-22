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

    private getClientEmailTemplate(meetingDetails: any) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #00A3B8; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                    .content { background: #fff; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                    .meeting-details { background: #f7f9fc; padding: 15px; border-radius: 6px; margin: 20px 0; }
                    .button { display: inline-block; padding: 12px 24px; background: #00A3B8; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
                    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                    .important-note { color: #e74c3c; margin: 15px 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Your Consultation is Confirmed! 🎉</h1>
                    </div>
                    <div class="content">
                        <p>Dear Valued Client,</p>
                        <p>Your consultation meeting has been successfully scheduled. We're looking forward to meeting with you!</p>
                        
                        <div class="meeting-details">
                            <h3>📅 Meeting Details</h3>
                            <p><strong>Date & Time:</strong> ${new Date(meetingDetails.start_time).toLocaleString('en-US', {
            timeZone: 'Africa/Addis_Ababa',
            dateStyle: 'full',
            timeStyle: 'long'
        })}</p>
                            <p><strong>Duration:</strong> ${meetingDetails.duration} minutes</p>
                            <p><strong>Meeting ID:</strong> ${meetingDetails.id}</p>
                            <p><strong>Password:</strong> ${meetingDetails.password}</p>
                        </div>

                        <a href="${meetingDetails.join_url}" class="button">Join Meeting</a>

                        <div class="important-note">
                            <p>⚠️ Important Notes:</p>
                            <ul>
                                <li>Please join 5 minutes before the scheduled time</li>
                                <li>Ensure you have a stable internet connection</li>
                                <li>Find a quiet place for the consultation</li>
                            </ul>
                        </div>

                        <p>If you need to reschedule or have any questions, please contact us at support@wellnesscenter.com</p>

                        <div class="footer">
                            <p>© ${new Date().getFullYear()} Wellness Center. All rights reserved.</p>
                            <p>This is an automated message, please do not reply directly to this email.</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;
    }

    private getProviderEmailTemplate(meetingDetails: any) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                    .content { background: #fff; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                    .meeting-details { background: #f7f9fc; padding: 15px; border-radius: 6px; margin: 20px 0; }
                    .button { display: inline-block; padding: 12px 24px; background: #2c3e50; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
                    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                    .checklist { background: #e8f5e9; padding: 15px; border-radius: 6px; margin: 15px 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Consultation Scheduled</h1>
                    </div>
                    <div class="content">
                        <p>Hello Doctor,</p>
                        <p>A new consultation has been scheduled with a client.</p>
                        
                        <div class="meeting-details">
                            <h3>📅 Consultation Details</h3>
                            <p><strong>Date & Time:</strong> ${new Date(meetingDetails.start_time).toLocaleString('en-US', {
            timeZone: 'Africa/Addis_Ababa',
            dateStyle: 'full',
            timeStyle: 'long'
        })}</p>
                            <p><strong>Duration:</strong> ${meetingDetails.duration} minutes</p>
                            <p><strong>Meeting ID:</strong> ${meetingDetails.id}</p>
                        </div>

                        <a href="${meetingDetails.join_url}" class="button">Start Meeting</a>

                        <div class="checklist">
                            <h4>🔍 Pre-consultation Checklist:</h4>
                            <ul>
                                <li>Review any available patient history</li>
                                <li>Ensure your device is fully charged</li>
                                <li>Test your camera and microphone</li>
                                <li>Have your consultation materials ready</li>
                            </ul>
                        </div>

                        <div class="footer">
                            <p>© ${new Date().getFullYear()} Wellness Center. All rights reserved.</p>
                            <p>For technical support, contact IT at support@wellnesscenter.com</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;
    }

    private getAdminEmailTemplate(meetingDetails: any) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #34495e; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                    .content { background: #fff; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                    .meeting-details { background: #f7f9fc; padding: 15px; border-radius: 6px; margin: 20px 0; }
                    .status { display: inline-block; padding: 5px 10px; background: #27ae60; color: white; border-radius: 4px; }
                    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                    .system-info { background: #f8f9fa; padding: 15px; border-radius: 6px; margin: 15px 0; font-family: monospace; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Booking Confirmation</h1>
                    </div>
                    <div class="content">
                        <p>Hello Admin,</p>
                        <p>A new consultation meeting has been successfully booked.</p>
                        
                        <div class="meeting-details">
                            <p class="status">✓ CONFIRMED</p>
                            <h3>📅 Meeting Information</h3>
                            <p><strong>Date & Time:</strong> ${new Date(meetingDetails.start_time).toLocaleString('en-US', {
            timeZone: 'Africa/Addis_Ababa',
            dateStyle: 'full',
            timeStyle: 'long'
        })}</p>
                            <p><strong>Duration:</strong> ${meetingDetails.duration} minutes</p>
                            <p><strong>Meeting ID:</strong> ${meetingDetails.id}</p>
                        </div>

                        <div class="system-info">
                            <p><strong>System Details:</strong></p>
                            <p>Transaction ID: ${meetingDetails.id}</p>
                            <p>Zoom Meeting URL: ${meetingDetails.join_url}</p>
                            <p>Status: Active</p>
                        </div>

                        <p>This meeting has been automatically added to the system calendar.</p>

                        <div class="footer">
                            <p>© ${new Date().getFullYear()} Wellness Center - Admin Portal</p>
                            <p>Generated automatically by the Wellness Center Booking System</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;
    }

    async sendAppointmentEmail(clientEmail: string, providerEmail: string, adminEmail: string, meetingDetails: any): Promise<void> {
        try {
            if (!this.transporter) {
                throw new BadRequestException('Email transporter is not initialized');
            }

            // Client email
            const clientMailOptions = {
                from: `"Mela Wellness Center" <${process.env.EMAIL_USER}>`,
                to: clientEmail,
                subject: '🎉 Your Consultation Meeting is Confirmed!',
                html: this.getClientEmailTemplate(meetingDetails)
            };

            // Provider email
            const providerMailOptions = {
                from: `"Mela Wellness Center" <${process.env.EMAIL_USER}>`,
                to: providerEmail,
                subject: '📅 New Consultation Scheduled',
                html: this.getProviderEmailTemplate(meetingDetails)
            };

            // Admin email
            const adminMailOptions = {
                from: `"Mela Wellness Center System" <${process.env.EMAIL_USER}>`,
                to: adminEmail,
                subject: '🔔 New Meeting Booking Confirmation',
                html: this.getAdminEmailTemplate(meetingDetails)
            };

            await Promise.all([
                this.transporter.sendMail(clientMailOptions),
                this.transporter.sendMail(providerMailOptions),
                this.transporter.sendMail(adminMailOptions)
            ]);

            this.logger.log('All appointment emails sent successfully');
        } catch (error) {
            this.logger.error('Error sending emails:', error);
            throw new Error('Failed to send appointment emails');
        }
    }
}

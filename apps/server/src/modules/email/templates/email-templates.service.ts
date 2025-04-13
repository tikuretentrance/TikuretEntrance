import { Injectable } from "@nestjs/common";
import { ContactDto } from "../dto/contact.dto";
import { FeedbackDto } from "../dto/feedback.dto";

@Injectable()
export class EmailTemplatesService {
    constructor() { }
    getFeedbackEmailTemplate(data: FeedbackDto) {
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
              <p>© ${new Date().getFullYear()} Tikuret Entrance. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    }

    getContactEmailTemplate(data: ContactDto) {
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
              <p>© ${new Date().getFullYear()} Tikuret Entrance. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    }

    getConfirmationEmailTemplate(type: 'feedback' | 'contact') {
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
            
            <p>If you have any urgent inquiries, please don't hesitate to contact our support team at support@tikuretentrance.com.</p>
  
            <div class="footer">
              <p>© ${new Date().getFullYear()} Tikuret Entrance. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    }
}
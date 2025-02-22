import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ZoomService {
    private readonly clientId = process.env.ZOOM_CLIENT_ID;
    private readonly clientSecret = process.env.ZOOM_CLIENT_SECRET;
    private readonly accountId = process.env.ZOOM_ACCOUNT_ID;
    private readonly logger = new Logger(ZoomService.name);

    constructor() { }

    async getAccessToken(): Promise<string> {
        const url = `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${this.accountId}`;
        const authHeader = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');

        this.logger.log(`Getting access token from Zoom: ${authHeader}`);

        try {
            const response = await axios.post(url, null, {
                headers: {
                    Authorization: `Basic ${authHeader}`,
                },
            });
            return response.data.access_token;
        } catch (error) {
            this.logger.error('Error fetching Zoom access token:', error);
            throw new BadRequestException('Failed to get access token from Zoom', error.message);
        }
    }

    async createZoomMeeting(topic: string, startTime: string, duration: number) {

        const token = await this.getAccessToken();
        this.logger.log(`Token is: ${token}`);
        this.logger.log(`Creating Zoom meeting with topic: ${topic}, startTime: ${startTime}, duration: ${duration}`);

        const meetingUrl = 'https://api.zoom.us/v2/users/me/meetings';
        const meetingData = {
            topic: topic,
            type: 2,
            start_time: startTime,
            duration: duration,
            settings: {
                host_video: true,
                participant_video: true,
                waiting_room: true,
            },
        };

        try {
            const response = await axios.post(meetingUrl, meetingData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',

                },
            })
            const responseData = {
                id: response.data.id,
                password: response.data.password,
                join_url: response.data.join_url,
                date: response.data.start_time
            }
            console.log("Response Data is here..", response.data);

            return response.data;
        } catch (error) {
            throw new BadRequestException('Failed to create Zoom meeting', error.message);
        }
    }
}

import { client, publicSDK } from '@devrev/typescript-sdk';
import axios from 'axios';

export const send_reminder_function = async (events: any[]) => {
  for (const event of events) {
    try {
      const endpoint = event.execution_metadata.devrev_endpoint;
      const token = event.context.secrets.service_account_token;
      const devrevSDK = client.setup({ endpoint, token });

      // Extract necessary details from the event payload 
      const { workItemId, userId } = event.payload;

      // Create the reminder message
      const reminderMessage = `Reminder: You have a pending task with ID ${workItemId}. Please take necessary action.`;

      // Prepare the request body
      const requestBody = {
        workItemId,
        userId,
        comment: reminderMessage, 
      };

      // Sending the reminder using the DevRev SDK or external service
      // For example, using axios
      const response = await axios.post(
        `${endpoint}/works.update`,
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: token,
          },
        }
      );

      console.log('Reminder sent successfully:', response.data);
    } catch (error) {
      console.error(`Error sending reminder: ${(error as Error).message}`);
    }
  }
};

export default send_reminder_function;

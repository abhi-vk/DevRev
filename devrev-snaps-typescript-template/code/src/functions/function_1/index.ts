import { client } from '@devrev/typescript-sdk';
import axios from 'axios';

export const run = async (events: any[]) => {
  for (const event of events) {
    try {
      const endpoint = event.execution_metadata.devrev_endpoint;
      const token = event.context.secrets.service_account_token;
      const devrevSDK = client.setup({ endpoint, token });

      // Get time details from the event payload or context (MM minutes, HH hours, DD days)
      const { minutes, hours, days, workItemId, userId } = event.payload;

      const delayInSeconds = (minutes * 60) + (hours * 3600) + (days * 86400);
      const publishAt = new Date(Date.now() + delayInSeconds * 1000).toISOString();

      const eventPayload = {
        workItemId,
        userId,
        delayInSeconds,
      };

      const response = await axios.post(
        `${endpoint}/event-sources.schedule`,
        {
          id: event.input_data.event_sources["reminder-scheduler"],
          payload: Buffer.from(JSON.stringify(eventPayload)).toString('base64'),
          event_type: "reminder-scheduled",
          publish_at: publishAt,
          event_key: `reminder-for-${workItemId}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: token,
          },
        }
      );

      console.log('Scheduled reminder response:', response.data);
    } catch (error) {
      console.error(`Error scheduling reminder: ${(error as Error).message}`);

    }
  }
};

export default run;

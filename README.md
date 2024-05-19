---

# DevRev Snap-Ins for Reminder Management

This repository contains a set of Snap-Ins designed to manage reminders within the DevRev platform. These Snap-Ins enable users to schedule reminders for specific work items and send reminders to assigned users.

## Features

- **Schedule Reminder:** Functionality to schedule reminders for specific work items.
- **Send Reminder:** Functionality to send reminders to assigned users based on the scheduled events.
- **Command Integration:** Integration with DevRev commands to trigger reminder functionalities directly from discussions on issues or tickets.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/abhi-vk/DevRev.git
   ```

2. **Install Dependencies:**
   ```bash
   cd devrev-snaps-typescript-template
   npm install
   ```

3. **Configure Snap-Ins:**
   - Update the `manifest.yaml` file to include your service account details and configure event sources, functions, automations, and commands as per your requirements.

4. **Deploy Snap-Ins:**
   - Deploy the Snap-Ins to your DevRev environment using the provided deployment script or manual deployment steps.

## Usage

- **Scheduling a Reminder:**
  - To schedule a reminder, use the appropriate command or interface provided by the Snap-Ins, specifying the work item and the desired time for the reminder.

- **Sending a Reminder:**
  - Reminders will be automatically sent to the assigned users based on the scheduled events.

## Testing

- **Local Testing:**
  - Test your functions locally by adding test events under `src/fixtures` and running:
    ```bash
    npm run start:watch -- --functionName=function_1 --fixturePath=function_1_event.json
    npm run start:watch -- --functionName=function_2 --fixturePath=function_2_event.json
    ```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, please open an issue or submit a pull request.


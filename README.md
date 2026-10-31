# My Bulk Tracker

A mobile-first, installable progressive web app (PWA) for meal check-offs, calorie/protein tracking, daily records, and weight milestones.

## Run locally
Open `index.html` in a modern browser. Some PWA features (service worker and notifications) require HTTPS or localhost.

## Host it free
1. Create a GitHub repository and upload all files in this folder.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
4. Wait for GitHub Pages to publish the site. Open the provided HTTPS URL on your iPhone.
5. In Safari, tap **Share → Add to Home Screen**. Open the installed app, then enable Reminders in Daily targets and allow notifications.

## Important iOS notification limitation
This starter version checks meal times while the app is open. iOS may suspend background web apps, so it cannot guarantee exact-time reminders while closed. For reliable scheduled notifications, use a native app or a push-notification service with a backend.

## Data and privacy
Meal check-offs, settings, and weight records are stored in this browser's local storage on this device. Clearing Safari website data can erase them. Export/backup and cloud sync are not included in this starter version.

## Starter targets
Initial targets: 2,750 kcal and 120 g protein, with a first milestone of 65 kg. These are estimates, not medical prescriptions. Adjust based on weight trend, appetite, training, and advice from a qualified professional.

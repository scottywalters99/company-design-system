---
title: Notifications
description: Notification pattern guidelines
sidebarDepth: 0
---

# Notifications

Notifications are a vital part of communicating with users. They should provide informative, timely messages to ensure users always know where they are moving towards their goals.

[[toc]]

## Overview

The overarching goal of notifications is that they are informative, relevant, and timely. There are two types of notifications: `System-generated` notifications and `Task-generated` notifications.

### System-generated notifications

System-generated notifications get invoked by the application or the platform/system it runs on. These notifications give the user updates on system status, background processes, and other messages that are not directly related to the user's current task.

**Examples:**

- An upcoming scheduled Machine QA
- Machine tasks pending review
- Losing connection to a machine

### Task-generated notifications

Task-generated notifications are initiated directly from a user's actions when performing a task.

**Examples:**

- Completed tasks
- Problems when uploading files
- Authentication/permission errors
- Warning users of non-reversible actions

<!-- <base-alert type="tip">

**Design principle** - Only use notifications when it is necessary. Think of each Notification as a tap on your co-worker's shoulder when they are deeply involved in a task. Interrupting users can be a harrowing experience for users. On the other hand, users generally welcome non-intrusive notifications that provide feedback from their actions or keeping the user informed of the steps the software is taking.

</base-alert> -->

## Anatomy

Notifications are comprised of two things: `Notification Status` and `Notification Type`. Status and Type get paired together to form the appropriate notification pattern for both the UI and the workflow.

<!-- <docs-notification-types></docs-notification-types> -->

**Notification statuses:**

- Informational
- Success
- Warning
- Error

**Notification types:**

- Inline
- Banner
- Modal
- Notification panel
- Toast

**Visual Example**

<img src="/images/guide/patterns/notifications/notification-status.png" class="zoomable" alt="Notification status"/>

**Deciding what to use**

| Type          | Usage                                                                                                       | Action                                                                                                                      | Color  |
| :------------ | :---------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :----- |
| Informational | Provide useful information to users. Usually, of lower importance than a warning.                           | Does not require immediate action and can be dismissed by the user, programatically dismissed, or persist.                  | Blue   |
| Success       | Provide confirmation to users that a task or action was completed.                                          | Does not require immediate action and can be dismissed by the user, programatically dismissed, or persist.                  | Green  |
| Warning       | Warn users that they are taking actions that might have unexpected/unintended results or incomplete status. | Usually persist until the user dismisses the notification or action is taken that automatically dismisses the notification. | Yellow |
| Error         | Inform users of an error or failure. Often blocks users from moving forward in their workflow.              | Persist until the user resolves the error.                                                                                  | Red    |

<!-- <docs-notification-status-deciding-what-to-use></docs-notification-status-deciding-what-to-use> -->

## Notification types

<img src="/images/guide/patterns/notifications/notification-types.png" class="zoomable" alt="Notification types"/>

### Deciding what to use

| Table | Value |
| :---- | :---- |
| wer   | wer   |

<!-- <docs-notification-types-deciding-what-to-use></docs-notification-types-deciding-what-to-use> -->

## Components

### Inline notifications

Inline notifications must inform users of important information relevant to their current action or task.

<img src="/images/guide/patterns/notifications/inline-example.png" class="zoomable" alt="Inline notification example"/>

**Best practices:**

- Place the notification close to the relative UI component.
- Message should be articulate and give users clear next steps.
- Strive for no more than two lines of text.
- When possible, communicate the main message using just the title.
- Follow [Voice &amp; Tone](/docs/1.x/guidelines/content#voice--tone) guidelines for message content.

### Banner notifications

Banners stretch across the top of the UI to show general notifications for the product or system. They are not used for specific actions or tasks.

Banners persist until they are dismissed by the user (if allowed) or resolved by another action or state.

<img src="/images/guide/patterns/notifications/banner-example.png" class="zoomable" alt="Banner notification example"/>

**Best practices:**

- Place task-generated banners at the top of the relevant content area
- Place system-wide messages directly below the main header or navigation bar
- Keep the message text as short as possible

### Modal notifications

Modals are highly disruptive notifications that pause or block the user's workflow. Only use modals when the message is critical and demands the user's attention or interaction. A modal persists until the user is finished interacting with it or dismissed.

<img src="/images/guide/patterns/notifications/modal-example.png" class="zoomable" alt="Modal notification example"/>

**Best practices:**

- Use when you need to interrupt a user's task immediately
- Display only one modal at a time
- The modal title should describe the action
- Keep the message text as short as possible
- Provide users with clear steps to resolve the notification

### Notification panel

Notification panels are like a bank of messages that usually come in from Toast notifications or system alerts. The notifications persist until dismissed by the user.

<img src="/images/guide/patterns/notifications/notification-panel-example.png" class="zoomable" alt="Notification panel example"/>

**Best practices:**

- List notifications in chronological order
- Do not duplicate notifications unless necessary
- Can be managed in notification preferences (i.e. what shows up in the panel)

### Toast notifications

Toasts are notifications that typically appear in the top right corner of the page. They are more disruptive than inline notifications and are typically used for `system-generated` messages that do not relate to a specific section of the UI. Toast notifications disappear automatically after a set amount of time and can also be dismissed by users.

Toast notifications are to be at-a-glance messages. Their messages should not exceed three lines. If the message contains more than three lines, provide users with a "View more" link. The link can open another page or modal to expose the entire message.

<img src="/images/guide/patterns/notifications/toast-example.png" class="zoomable" alt="Toast notification example"/>

**Best practices:**

- Keep messages as short as possible
- Automatically dismiss after 4 seconds
- If messages stack, the newest message appears on top

## Conclusion

Only use notifications when it is necessary. Overuse can cause Alert Fatigue. Read more about [Alert Fatigue](https://psnet.ahrq.gov/primer/alert-fatigue, 'Alert Fatigue') and its effects on clinicians how it might jeopardize patient safety.

Think of each Notification as a tap on your co-worker's shoulder when they are deeply involved in a task. Lots of interruptions can be a harrowing experience for users. On the other hand, don't lose sight of how beneficial general feedback messages can be. Users generally welcome non-intrusive notifications that provide feedback.

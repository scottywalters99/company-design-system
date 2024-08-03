---
title: Button
description: A Button component
sidebarDepth: 0
---

# Button

:::: tabs
::: tab Usage

## Overview

Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.

### When to use

Use buttons to communicate actions users can take and to allow users to interact with the page. Each page should have one primary button, and any remaining calls to action should be represented as lower emphasis buttons.

### When not to use

Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.
:::

::: tab Style

## Color

### Default button

<img src="/images/guide/components/button/style-default-button.svg" class="zoomable" alt="Secondary button style" />

```vue
<ds-button :text="i18n.Enabled"></ds-button>
<ds-button :text="i18n.Disabled" isDisabled></ds-button>
```

| Style          | Property         | Value  |
| -------------- | ---------------- | --------- |
| `:hover`       | background | `#286090` (`#cccccc` <Badge type="warning" text="Proposed"></Badge>) |
| `:hover`  | border | `#204d74` (none <Badge type="warning" text="Proposed"></Badge>) |
| `:hover` | cursor | `pointer` |
| `:focus`       | background | use hover (`#e5e5e5` <Badge type="warning" text="Proposed"></Badge>) |
| `:focus`       | border           | use hover (`4px #003152` <Badge type="warning" text="Proposed"></Badge>)  |
| `:active`      | background | use hover (`#b2b2b2` <Badge type="warning" text="Proposed"></Badge>) |
| `:disabled`    | background | `gray` (`#e5e5e5` <Badge type="warning" text="Proposed"></Badge>) |
| `:disabled`    | color       | `white` (`#b9b9b9` <Badge type="warning" text="Proposed"></Badge>) |
| `:disabled` | cursor | `not-allowed` |

### Submit button <Badge type="warning" text="Proposed"></Badge>

<img src="/images/guide/components/button/style-submit-button.svg" class="zoomable" alt="Secondary button style" />

```vue
<ds-button type="submit" :text="i18n.Enabled"></ds-button>
<ds-button type="submit" :text="i18n.Disabled" isDisabled></ds-button>
```

| Style          | Property         | Value  |
| -------------- | ---------------- | --------- |
| Default | background | `#006fba` |
| Default | color | `#ffffff` |
| `:disabled`    | background | `#e5e5e5` |
| `:disabled`    | color       | `#b9b9b9` |
| `:hover`       | background | `#cccccc` |
| `:focus`       | background | `#e5e5e5` |
| `:focus`       | border           | `4px #003152`  |
| `:active`      | background | `#b2b2b2` |

### Modal header button

```vue
<ds-button isModalHeader :text="i18n.ModalHeader"></ds-button>
```

| Style | Property | Value |
| ----- | -------- | ----- |
| `.modal-header-btn` | background | `transparent` |
| `.modal-header-btn` | font | `14px` |
| `:hover`       | background |`transparent` |

## Structure

Button text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized.

| Style | Property | Value |
| ----- | -------- | ----- |
| `.ds-button` | padding | `6px 12px` |

## Typography

Button text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized.

| Style | Property | Value |
| ----- | -------- | ----- |
| `.ds-button` | font | `12px` |

## Sizes

| Style | Property | Value |
| ----- | --- | --- |
| `.large` | width | `120px` |
| `.medium` | width | `95px` |
| `.small` | width | `70px` |
| `.x-small` | width | `10px` |

:::

::: tab Code

## Code

```vue
<ds-button icon="ds" :text="i18n.ButtonLabel"></ds-button>
```

## Props

| Property | Type    | Default | Description                                                                     |
| -------- | ------- | ------- | ------------------------------------------------------------------------------- |
| `buttonSize` | DSButtonSize | `small` | The display size of the button |
| `icon` | String | | Display an icon from the icon library |
| `text` | String | Required | Display a text label on the button |
| `isActive` | Boolean | `true` | Make the component active |
| `isDisabled` | Boolean | `false` | Make the component non-interactive |
| `isModalHeader` | Boolean | `false` | A transparent button for display in modal headers |

## Slots

| Name    | Description                                                  |
| ------- | ------------------------------------------------------------ |
| Default <Badge type="warning" text="Proposed"></Badge> | The content within the button, usually a text label with an optional icon |

## Events

| Name  | Arguments | Description |
| ----- | --------- | ----------- |
| `click` | Native click event object | Emitted when non-disabled button is clicked |

:::

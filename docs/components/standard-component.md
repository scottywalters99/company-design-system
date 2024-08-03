---
title: Standard Component
description: Standard Component guidelines
sidebarDepth: 0
---

# standard-component <Badge type="tip" text="Proof-of-concept" vertical="top" />

This is an example of how to document components from the component library.

[[toc]]

## Live Demo

<LiveDemo componentName="demo-standard-component" />

## Source Code

@[code vue](@src/components/StandardComponent/StandardComponent.vue)

## Props

| Property | Type   | Default | Required | Description            |
| :------- | :----- | :------ | :------- | :--------------------- |
| title    | String | "Title" | true     | This is the card title |

## Slots

| Name    | Description                              |
| :------ | :--------------------------------------- |
| default | Content to place in the component (div). |

## Events

| Event | Arguments | Description |
| :---- | :-------- | :---------- |
| none  | --        | --          |

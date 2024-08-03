import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {

  '/foundations/': [
    {
      text: 'Foundations',
      collapsible: false,
      children: [
        '/foundations/README.md',
        '/foundations/color.md',
        '/foundations/iconography.md',
        '/foundations/typography.md'
      ]
    }
  ],
  '/content/': [
    {
      text: 'Content',
      collapsible: false,
      children: [
        '/content/README.md',
        '/content/date-and-time-guideline.md',
        '/content/terminology.md',
      ]
    }
  ],
  '/components/': [
    {
      text: 'Components',
      collapsible: false,
      children: [
        '/components/README.md',
        '/components/button.md',
        //'standard-component'
      ]
    }
  ],
  '/patterns/': [
    {
      text: 'Patterns',
      collapsible: false,
      children: [
        '/patterns/README.md',
        '/patterns/common-actions.md',
        '/patterns/login.md',
        '/patterns/notifications.md'
      ]
    }
  ]
}

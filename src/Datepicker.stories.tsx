import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Datepicker, DatepickerProps } from './Datepicker'

export default {
  title: 'Example/Datepicker',
  component: Datepicker,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<DatepickerProps> = (args) => <Datepicker {...args} />

export const Primary = Template.bind({})
Primary.args = {}

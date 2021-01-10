import React, { FC } from 'react'

export interface DatepickerProps {
  /**
   * Is foo?
   *
   * @default bar
   */
  foo?: string

  /**
   * Color variant
   *
   * @default ''
   */
  backgroundColor?: string
}

export const Datepicker: FC<DatepickerProps> = ({ foo, backgroundColor }) => (
  <div style={{ backgroundColor }}>I'm a datepicker {foo}</div>
)

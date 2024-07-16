import React from 'react'
import { DialogConfig } from '../config'
import { ActionDialog } from './actionDialog'
import { DialogType } from './dialogTypes'
import { AlertDialog } from './alertDialog'
import { PasswordDialog } from './passwordDialog'

export interface DialogRenderInterface {
  render: (index: number, config: DialogConfig) => JSX.Element
}

export const DialogRenderMap: {
  [key in DialogType]: DialogRenderInterface
} = {
  [DialogType.ACTION_DIALOG]: {
    render: (index: number, config: DialogConfig) => (
      <ActionDialog key={index} config={config} />
    ),
  },
  [DialogType.ALERT_DIALOG]: {
    render: (index, config) => <AlertDialog key={index} config={config} />,
  },
  [DialogType.PASSWORD_DIALOG]: {
    render: (index, config) => <PasswordDialog key={index} config={config} />,
  },
}

import { DialogType } from './dialog/dialogTypes'
import { ToastType } from './toast/toastTypes'

export interface DialogConfig {
  id?: string
  title?: string
  content?: string
  dialogType?: DialogType
  onConfirm?: (result?: any) => void
  onCancel?: () => void
  width?: number
  hideCancel?: boolean
}

export interface ToastConfig {
  message?: string
  type?: ToastType
}

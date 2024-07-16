import { ToastType } from './toast/toastTypes'

export interface DialogConfig {}

export interface ToastConfig {
  message?: string
  type?: ToastType
}

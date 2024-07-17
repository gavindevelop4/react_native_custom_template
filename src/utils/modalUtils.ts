import {
  DialogConfig,
  ToastConfig,
} from '@/components/rootSiblingsLayer/config'
import { rootSiblingsService } from '@/services/rootSiblings'

const modalUtils = {
  dialog(config: DialogConfig) {
    return rootSiblingsService.insertDialog(config)
  },

  toast(config: ToastConfig) {
    rootSiblingsService.insertToast(config)
  },
}

export default modalUtils

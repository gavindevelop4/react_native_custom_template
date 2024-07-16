import { ToastConfig } from '@/components/rootSiblingsLayer/config'
import { rootSiblingsService } from '@/services/rootSiblings'

const toastUtils = {
  insertToast(config: ToastConfig) {
    rootSiblingsService.insertToast(config)
  },
}

export default toastUtils

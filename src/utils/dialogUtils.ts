import { DialogConfig } from '@/components/rootSiblingsLayer/config'
import { rootSiblingsService } from '@/services/rootSiblings'

const dialogUtils = {
  alertDialog(config: DialogConfig) {
    return rootSiblingsService.insertAlertDialog(config)
  },
  actionDialog(config: DialogConfig) {
    return rootSiblingsService.insertActionDialog(config)
  },
  passwordDialog(config: DialogConfig) {
    return rootSiblingsService.insertPasswordDialog(config)
  },
}

export default dialogUtils

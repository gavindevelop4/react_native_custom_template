import { useCallback, useEffect, useState } from 'react'
import { BackHandler } from 'react-native'
import { DialogConfig } from './config'
import { DialogResult, DialogResultType } from './dialog/dialogResult'
import uuidUtils from '@/utils/uuidUtils'
import { DialogType } from './dialog/dialogTypes'

function useDialog() {
  const [dialogList, setDialogList] = useState<DialogConfig[]>([])

  useEffect(() => {
    const backAction = () => {
      if (dialogList.length === 0) {
        return false
      }

      setDialogList(list => {
        list.splice(0, 1)
        return [...list]
      })

      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )

    return () => backHandler.remove()
  }, [dialogList])

  const insertAlertDialog = useCallback(
    (config: DialogConfig) => {
      return new Promise<DialogResult>(resolve => {
        config.id = `AlertDialog_${uuidUtils.generate()}`
        config.dialogType = DialogType.ALERT_DIALOG

        const onConfirm = config.onConfirm
        config.onConfirm = async () => {
          if (onConfirm) {
            onConfirm()
          }
          hideDialog(config.id!)
          resolve({
            type: DialogResultType.CONFIRM,
          })
        }
        const onCancel = config.onCancel
        config.onCancel = async () => {
          if (onCancel) {
            onCancel()
          }
          hideDialog(config.id!)
          resolve({
            type: DialogResultType.CANCEL,
          })
        }

        setDialogList(list => {
          return [...list, config]
        })
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dialogList],
  )

  const insertActionDialog = useCallback(
    (config: DialogConfig) => {
      return new Promise<DialogResult>(resolve => {
        config.id = `ActionDialog_${uuidUtils.generate()}`
        config.dialogType = DialogType.ACTION_DIALOG

        const onConfirm = config.onConfirm
        config.onConfirm = async () => {
          if (onConfirm) {
            onConfirm()
          }
          hideDialog(config.id!)
          resolve({
            type: DialogResultType.CONFIRM,
          })
        }
        const onCancel = config.onCancel
        config.onCancel = async () => {
          if (onCancel) {
            onCancel()
          }
          hideDialog(config.id!)
          resolve({
            type: DialogResultType.CANCEL,
          })
        }

        setDialogList(list => {
          return [...list, config]
        })
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dialogList],
  )

  const insertPasswordDialog = useCallback(
    (config: DialogConfig) => {
      return new Promise<DialogResult>(resolve => {
        config.id = `PasswordDialog_${uuidUtils.generate()}`
        config.dialogType = DialogType.PASSWORD_DIALOG

        const onConfirm = config.onConfirm
        config.onConfirm = async (result: string) => {
          if (onConfirm) {
            onConfirm()
          }
          hideDialog(config.id!)
          resolve({
            type: DialogResultType.CONFIRM,
            result,
          })
        }
        const onCancel = config.onCancel
        config.onCancel = async () => {
          if (onCancel) {
            onCancel()
          }
          hideDialog(config.id!)
          resolve({
            type: DialogResultType.CANCEL,
          })
        }

        setDialogList(list => {
          return [...list, config]
        })
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dialogList],
  )

  const hideDialog = useCallback((id: string) => {
    setDialogList(list => {
      const index = list.findIndex(item => item.id === id)
      list.splice(index, 1)
      return [...list]
    })
  }, [])

  return {
    dialogList,
    insertAlertDialog,
    insertActionDialog,
    insertPasswordDialog,
    hideDialog,
  }
}

export default useDialog

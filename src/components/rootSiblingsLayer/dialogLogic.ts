import { useCallback, useEffect, useState } from 'react'
import { BackHandler } from 'react-native'
import { DialogConfig } from './config'
import { DialogResult, DialogResultType } from './dialog/dialogResult'
import uuidUtils from '@/utils/uuidUtils'

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

  const insertDialog = useCallback(
    (config: DialogConfig) => {
      return new Promise<DialogResult>(resolve => {
        config.id = `dialog_${uuidUtils.generate()}`

        const onConfirm = config.onConfirm
        config.onConfirm = async (result?: any) => {
          if (onConfirm) {
            onConfirm()
          }
          hideDialog(config.id!)
          let res: DialogResult = {
            type: DialogResultType.CONFIRM,
          }
          if (result) {
            res.result = result
          }
          resolve(res)
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

  const hideAllDialog = useCallback(() => {
    setDialogList([])
  }, [])

  return {
    dialogList,
    insertDialog,
    hideDialog,
    hideAllDialog,
  }
}

export default useDialog

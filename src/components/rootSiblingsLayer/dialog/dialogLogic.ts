import { useEffect, useState } from 'react'
import { BackHandler } from 'react-native'
import { DialogConfig } from '../config'

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

  return { dialogList }
}

export default useDialog

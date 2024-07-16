import { useState } from 'react'
import { ToastConfig } from '../config'

function useToast() {
  const [toastList, setToastList] = useState<ToastConfig[]>([])

  const insertToast = (config: ToastConfig) => {
    setToastList(list => [...list, config])
    setTimeout(() => {
      setToastList(list => {
        list.splice(list.indexOf(config), 1)
        return [...list]
      })
    }, 2000)
  }

  return { toastList, insertToast }
}

export default useToast

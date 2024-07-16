import { ForwardedRef, forwardRef, useEffect, useImperativeHandle } from 'react'

export interface RegisterProps<T> {
  onRegister?: (instance: T) => void
}

export const registerComponent = <
  Interface,
  Props extends RegisterProps<Interface>,
>(
  render: (props: Props) => { element: JSX.Element; instance: Interface },
) =>
  forwardRef<Interface, Props>(
    (props: Props, ref: ForwardedRef<Interface>): JSX.Element => {
      const { element, instance } = render(props)

      useEffect(() => {
        if (props.onRegister) {
          props.onRegister(instance)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      useImperativeHandle(ref, () => instance)

      return element
    },
  )

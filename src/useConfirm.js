import { useState, useEffect, useRef } from 'react'

const useConfirm = ( onConfirm, timeout = 3000 ) => {

  if(
    !onConfirm ||
    onConfirm.constructor!==Function
  ) throw new Error("invalid 'onConfirm' parameter on 'useConfirm'. It should be a funtion.")

  if(
    typeof timeout !== 'number' ||
    timeout <= 0
  ) throw new Error("invalid 'timeout' parameter on 'useConfirm'. It should be a number > 0.")

  const confirmTimeout = useRef()
  const [ confirming, setConfirming ] = useState( false )

  useEffect(() => {
    if(confirmTimeout.current) clearTimeout(confirmTimeout.current)
    if(!confirming) return () => {}
    confirmTimeout.current = setTimeout(() => {
      setConfirming(false)
    },timeout)
  },[ confirming ])

  const clickAction = () => {
    if(confirming) {
      setConfirming(false)
      onConfirm()
    }
    else setConfirming(true)
  }

  return [
    confirming,
    clickAction
  ]

}

export default useConfirm

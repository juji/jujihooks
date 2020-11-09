import { useRef, useEffect } from 'react'

const useTimeout = ( func, timeout = 200, watched = [] ) => {

  if(
    !func ||
    func.constructor !== Function
  ) throw new Error("invalid 'function' parameter on 'useTimeout'. It should be a function")

  if(
    typeof timeout !== 'number' ||
    timeout < 0
  ) throw new Error("invalid 'timeout' parameter on 'useTimeout'. It should be a number > 0")

  if(
    watched.constructor !== Array
  ) throw new Error("invalid 'watched' parameter on 'useTimeout'. It should be an array")

  const timeoutInstance = useRef()
  useEffect(() => {
    timeoutInstance.current = setTimeout(func,timeout)
    return () => clearTimeout(timeoutInstance.current)
  }, watched )

}

export default useTimeout

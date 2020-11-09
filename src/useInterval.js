import { useRef, useEffect } from 'react'

const useInterval = ( func, interval = 200 ) => {

  if(
    !func ||
    func.constructor !== Function
  ) throw new Error("invalid 'function' parameter on 'useInterval'. It should be a function")

  if(
    typeof interval !== 'number' ||
    interval < 0
  ) throw new Error("invalid 'interval' parameter on 'useInterval'. It should be a number > 0")

  const intervalInstance = useRef()
  useEffect(() => {
    intervalInstance.current = setInterval(func,interval)
    return () => clearInterval(intervalInstance.current)
  }, [])

}

export default useInterval

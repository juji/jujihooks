import { useRef } from 'react'

const useDebounce = ( func, timeout = 200 ) => {

  if(
    !func ||
    func.constructor !== Function
  ) throw new Error("invalid 'function' parameter on 'useDebounce'. It should be a function")

  if(
    typeof timeout !== 'number' ||
    timeout < 0
  ) throw new Error("invalid 'timeout' parameter on 'useDebounce'. It should be a number > 0")

  const debounceTimeout = useRef()

  const debouncedAction = function(){
    if(debounceTimeout.current) clearTimeout(debounceTimeout.current)
    debounceTimeout.current = setTimeout(() => {
      func.apply(func, [...arguments])
    }, timeout)
  }

  return debouncedAction

}

export default useDebounce

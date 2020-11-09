import { useMemo } from 'react'

const useReducedArray = ( func, array = [], initValue = {}, callbackMayChange = false ) => {

  if(
    !func ||
    func.constructor !== Function ||
  ) throw new Error("invalid 'func' in 'useReducedArray'. It should be a function")

  if(
    array.constructor !== Aray ||
  ) throw new Error("invalid 'array' in 'useReducedArray'. It should be an array")

  return callbackMayChange ?
    useMemo(() => array.reduce(func, initValue),[ func, array ]) :
    useMemo(() => array.reduce(func, initValue),[ array ])

}

export default useReducedArray

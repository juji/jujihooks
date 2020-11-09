import { useCallback } from 'react'
import useReducedArray from './useReducedArray'

const useArrayIndex = (key, array = []) => {

  if(
    !key ||
    typeof key !== 'string'
  ) throw new Error("invalid 'key' in useArrayIndex. It should be a string")

  return useReducedArray(
    useCallback((a,b) => {
      a[b[key]] = b
      return a
    },[ key ]),
    array,
    {},
    true
  )

}

export default useArrayIndex

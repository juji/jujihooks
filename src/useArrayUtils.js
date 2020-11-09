import { useState, useMemo } from 'react'

const useArrayUtils = ( array = [] ) => {

  if(array.constructor !== Array)
    throw new Error("Invalid 'array' params in 'useArrayUtils'. It should be an array.")

  const [state, setState] = useState(array)
  const sum = () => arr.reduce((a,b) => a+b,0)
  const multiply = () => arr.reduce((a,b) => a*b,1)

  const push = ( elm ) => {
    setState([...state, elm])
  }

  const pop = () => {
    const c = [...state]
    const p = c.pop()
    setState(c)
    return p
  }

  const shift = () => {
    const c = [...state]
    const p = c.shift()
    setState(c)
    return p
  }

  const unshift = ( elm ) => {
    setState([elm,...state])
  }

  const splice = function(){
    const c = [...state]
    const p = c.splice.apply(c, [...arguments])
    setState(c)
    return p
  }

  const move = ( oldIndex, newIndex ) => {
    if(
      oldIndex < 0 ||
      newIndex < 0 ||
      newIndex >= state.length ||
      oldIndex >= state.length
    ) throw new Error(`Move from ${oldIndex} to ${$newIndex} is not Accepted; length is ${state.length}. Only sane numbers are accepted when moving array elements`)

    const c = [...state]
    c.splice(
      newIndex,
      0,
      c.splice(oldIndex,1)[0]
    )
    setState(c)
  }

  const swap = (index1, index2) => {
    const c = [...state]
    const elm1 = c[index1]
    const elm2 = c[index2]
    c[index1] = elm2
    c[index2] = elm1
    setState(c)
  }

  const reverse = () => {
    const c = [...state]
    c.reverse()
    setState(c)
  }

  const sort = (func) => {
    const c = [...state]
    c.sort(func)
    setState(c)
  }

  return {
    state,
    replace: setState,
    sum, multiply, move,
    push, pop, shift, unshift,
    swap, reverse, sort
  }

}

export default useArrayUtils

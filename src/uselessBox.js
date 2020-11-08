import { useState, useEffect, useRef } from 'react'

const uselessBox = ( init, timeout = 1000 ) => {

  if(
    typeof timeout !== 'number' ||
    timeout <= 0
  ) throw new Error("invalid 'timeout' parameter on 'uselessBox'. It should be a number > 0.")

  const neverChange = useRef(init)
  const [ state, setState ] = useState(init)
  const waitTime = useRef()
  useEffect(() => {
    if(waitTime.current) clearTimeout(waitTime.current)
    if(state !== neverChange.current) waitTime.current = setTimeout(() => {
      setState(neverChange.current)
    },timeout)
  },[ state ])

  return [ state, setState ]

}

export default uselessBox

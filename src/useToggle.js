import { useState } from 'react'

const useToggle = (init) => {

  const [ val, setVal ] = useState(!!init)
  const toggle = () => {
    setVal(!val)
  }

  return [ val, toggle ]

}


export default useToggle

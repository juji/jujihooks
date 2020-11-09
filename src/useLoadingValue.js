import { useState, useEffect } from 'react'

export const useLoadingValue = (value, error) => {

  const [ loading, setLoading ] = useState(!value && !error)
  const [ val, setVal ] = useState(value)
  const [ err, setErr ] = useState(error)

  useEffect(() => {
    setLoading(!val && !err)
  },[ val, err ])

  const startLoading = () => {
    if(loading) return;
    setVal(null)
    setErr(null)
  }

  return {
    loading,
    startLoading,
    value: val,
    setValue: setVal,
    error: err,
    setError: setErr
  }

}

export default useLoadingValue

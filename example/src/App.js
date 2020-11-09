import React, { useState } from 'react'
import './index.css'

import useToggle from 'jujihooks/useToggle'
import {
  useConfirm,
  uselessBox,
  useLoadingValue,
  useDebounce
} from 'jujihooks'


const UseDebounce = () => {
  const [ str, setStr ] = useState('')
  const [ val, setVal ] = useState('')
  const action = useDebounce(n => {
    setStr(n)
  })

  const onChange = (e) => {
    console.log(e.target.value)
    setVal(e.target.value)
    action(e.target.value)
  }


  return <>
    <h2>useDebounce</h2>
    <p>String is: {str}</p>
    <p><input value={val} type="text" onChange={onChange} /></p>
  </>

}

const UseToggle = () => {
  const [ val, toggle ] = useToggle( 'adsf' )

  return <>
    <h2>useToggle</h2>
    <button onClick={toggle}>{val ? 'YES' : 'NO'}</button>
  </>
}

const UseLoadingValue = () => {
  const {
    loading,
    value,
    error,
    startLoading,
    setValue,
    setError
  } = useLoadingValue()

  return <>
    <h2>useLoadingValue</h2>
    <div>
      { loading ? <p>is Loading...</p> : null }
      { error ? <p style={{color:'red'}}>{error}</p> : null }
      { value ? <pre>value: {value}</pre> : null }
      <br />
      <button onClick={startLoading}>Start Loading</button>&nbsp;
      <button onClick={() => setValue('asdf')}>Set Value</button>&nbsp;
      <button onClick={() => setError('this is error')}>Set Error</button>
    </div>
  </>
}

const UseConfirm = () => {
  const onConfirm = () => { alert('It is confirmed') }
  const [ confirm, clickAction ] = useConfirm(onConfirm)

  return <>
    <h2>useConfirm</h2>
    <p>
      <button onClick={clickAction}>{ confirm ? 'cofirm?' : 'Do stuff'}</button>
    </p>
  </>
}

const UselessBox = () => {

  const [ boxState, setBoxState ] = uselessBox('asdf')

  return <>
    <h2>uselessBox</h2>
    <p>
      <button onClick={() => setBoxState('zxcv')}>{boxState}</button>
    </p>
  </>
}


const App = () => {

  return (
    <div className="App">
      <h1>Yo..</h1>
      <p>These are examples for jujiHooks</p>

      <UseConfirm />
      <UselessBox />
      <UseLoadingValue />
      <UseToggle />
      <UseDebounce />

    </div>
  );
}

export default App;

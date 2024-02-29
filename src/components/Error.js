import React, {useRouterError} from 'react'

const Error = () => {
    const err = useRouterError();
    console.log(err)
  return (
    <div>
      <h1>OOp !!!</h1>
      <h2>Somthing went wrong</h2>
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error

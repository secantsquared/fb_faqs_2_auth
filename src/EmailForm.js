import React, { useState } from 'react'
import firebase from './fbAuthUtils'

const formFlex = {
  display: 'flex',
  margin: '0 auto',
  width: '24%',
  border: '2px solid darkgrey',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  padding: '25px 0',
  borderRadius: '5px'
}
const inputStyles = {
  width: '160px',
  height: '16px',
  fontSize: '1rem',
  textAlign: 'center',
  margin: '10px',
  padding: '5px',
  border: '1px solid darkgray',
  borderRadius: '4px'
}
const submitStyles = {
  width: '80px',
  height: '25px',
  border: '2px solid black',
  margin: '30px'
}

const EmailForm = () => {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ pass, setPass ] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        firebase.register(username, email, pass)
        setUsername('')
        setEmail('')
        setPass('')
      }}
      style={formFlex}
    >
      <p
        style={{
          fontSize: '1.3rem',
          fontFamily: 'Helvetica',
          fontWeight: 100
        }}
      >
        Register an Email
      </p>
      <input
        type="text"
        placeholder="name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={inputStyles}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={inputStyles}
      />
      <input
        type="password"
        placeholder="pass"
        value={pass}
        onChange={e => setPass(e.target.value)}
        style={inputStyles}
      />
      <input type="submit" value="submit" style={submitStyles} />
    </form>
  )
}

export default EmailForm

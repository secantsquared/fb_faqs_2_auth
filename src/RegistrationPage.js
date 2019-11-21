import React from 'react'
import EmailForm from './EmailForm'
import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons'
import firebase from './fbAuthUtils'
import { withRouter } from 'react-router-dom'

const buttonDimensions = {
  minWidth: '60px',
  minHeight: '55px',
  padding: '0 0 0 18%'
}

const RegistrationPage = props => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center'
        }}
      >
        <EmailForm />

        <div
          style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            width: '25%'
          }}
        >
          <GoogleLoginButton
            onClick={async () => {
              await firebase.googleSignIn()
              props.history.push('/dashboard')
            }}
            style={buttonDimensions}
            text="Sign Up With Google"
          />
          <FacebookLoginButton
            style={buttonDimensions}
            text="Sign Up With Facebook"
          />
        </div>
      </div>
    </div>
  )
}

export default withRouter(RegistrationPage)

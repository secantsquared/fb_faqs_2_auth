import React from 'react'
import firebase from './fbAuthUtils'
import { withRouter } from 'react-router-dom'

const Dashboard = props => {
  return (
    <div>
      <button
        onClick={() => {
          firebase.signOut()
          localStorage.clear()
          return props.history.push('/')
        }}
      >
        SIGN OUT
      </button>
    </div>
  )
}

export default withRouter(Dashboard)

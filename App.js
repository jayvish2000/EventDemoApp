import React from 'react'
import Routes from './src/navigations/Routes'
import AuthProvider from './src/context/AuthContext'
import EventProvider from './src/context/EvenContext'

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '598484724821-2rn8gt1ovmqohl9nf56hmq7uuokqdfe3.apps.googleusercontent.com'
});

const App = () => {
  return (
    <AuthProvider>
      <EventProvider>
        <Routes />
      </EventProvider>
    </AuthProvider>
  )
}

export default App

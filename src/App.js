import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import Container from '@mui/material/Container';
import ChatDisplay from './Components/ChatDisplay'
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './Components/SignIn';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './Components/Firebase';
import SendingMsg from './Components/SendingMsg';
import YourComponent from './Components/YourComponent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Testing from './Components/Testing';
function App() {
  const [user]=useAuthState(auth);
  return (
    <div className="App">
     {user?  <ChatDisplay/> : <Welcome/>}
    </div>
  );
}

export default App;


import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/Chatpage';
import ChatProvider from './Context/ChatProvider';

function App() {
  return (
    <ChatProvider>
    <div className="App">
      <Route path="/" component={Homepage} exact /> 
      <Route path="/chats" component={ChatPage} /> 
    </div>
    </ChatProvider>
  );
}



export default App;

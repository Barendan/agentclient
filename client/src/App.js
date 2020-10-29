import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AgentList } from './components/AgentList'
import { AgentDetails } from './components/AgentDetails'
import { CustomerList } from './components/CustomerList'
import { CustomerDetails } from './components/CustomerDetails'
import { GlobalProvider } from './context/GlobalState'
import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
          <Route path='/' component={AgentList} exact/>
          <Route path='/agents/:id' component={AgentDetails} exact/>
          <Route path='/agents/:id/customers' component={CustomerList} exact/>
          <Route path='/agents/:id/customers/:id' component={CustomerDetails} exact/>
      </Router>
    </GlobalProvider>
  );
}

export default App;
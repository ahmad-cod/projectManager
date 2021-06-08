import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/project/:id' component={ProjectDetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateProject} />
        <Route exact path='/' component={Dashboard} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

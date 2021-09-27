import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo'
import Billing from './components/Billing';
import Payment from './components/Payment';
import Purchase from './components/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PersonalInfo}></Route>
          <Route path="/billinginfo" exact component={Billing}></Route>
          <Route path="/confirmpayment" exact component={Payment}></Route>
          <Route path="/success" exact component={Purchase}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

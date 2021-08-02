import Home from 'Screens/Home'
import Product from 'Screens/Product'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from 'Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/item/:tem" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;

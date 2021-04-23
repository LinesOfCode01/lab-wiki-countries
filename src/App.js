import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList />

          <Switch>
            <Route exact path="/country/:location" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

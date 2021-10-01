import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import NewProducts from './components/NewProduct';
import EditProducts from './components/EditProducts';
//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className='container mt-5'>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/products/new' component={NewProducts} />
            <Route exact path='/products/edit/:id' component={EditProducts} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;

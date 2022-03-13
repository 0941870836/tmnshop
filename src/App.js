import ProductFuture from 'features/Product';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PageNotFound from 'features/Product/pages/PageNotFound';
import Footer from 'components/Footer/Footer';
import CartFeature from './components/DetailCart/DetailCart';
import Intro from 'components/Intro/Intro';
import StepBuyProduct from 'components/StepByProduct/StepBuyProduct';
import Category from 'components/Category/Category';
import Listproduct from 'components/ListProduct/ListProduct';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from 'features/Product/pages/Home';

function App() {

    return (
        <BrowserRouter>
            <div className='app'>
                <header className='App-header'>
                    <Header />
                </header>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/products" component={ProductFuture} />
                    <Route path="/cart" component={CartFeature} />
                    <Route path='' exact={false} component={PageNotFound} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>


    );
}

export default App;

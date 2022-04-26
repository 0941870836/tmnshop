import Footer from 'components/Footer/Footer';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import ProductFuture from 'features/Product';
import Home from 'features/Product/pages/Home';
import PageNotFound from 'features/Product/pages/PageNotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import CartFeature from './components/DetailCart/DetailCart';
import HeaderChange from './components/Header/HeaderChange';

function App() {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className='app'>
                <header className='App-header'>

                    <HeaderChange />

                </header>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    {/* <Route path="/search/:keyword" component={ProductFuture} /> */}
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={Register} />
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

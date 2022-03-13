import DetailCart from "components/DetailCart/DetailCart";
import ProductFuture from "features/Product";
import Home from "features/Product/pages/Home";

export const routesHome = [
    { path: '/', exact: true, component: Home },
    { path: '/home', exact: true, component: Home },
    { path: '/home/detail-cart', exact: false, component: DetailCart },
    { path: '/products', exact: false, component: ProductFuture },

];
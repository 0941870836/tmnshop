import React from 'react';
import Category from "components/Category/Category";
import Intro from "components/Intro/Intro";
import Listproduct from "components/ListProduct/ListProduct";
import StepBuyProduct from "components/StepByProduct/StepBuyProduct";

export default function Home() {
    return (
        <div>
            <Intro />
            <Category />
            <Listproduct />
            <StepBuyProduct />
        </div>
    );
}

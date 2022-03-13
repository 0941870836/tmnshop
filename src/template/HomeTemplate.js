import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Home from "features/Product/pages/Home";
import React, { Fragment } from "react";

export default function HomeTeamplate() {

  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "./components/pages/ListPage";
import DetailPage from "./components/pages/DetailPage";
import { useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      TODO SHARE UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;

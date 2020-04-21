import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import { Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const HomePage = lazy(() =>
  import("../../Pages/HomePage/HomePage" /*webpackChunkName: "home-page"*/)
);

const MoviePage = lazy(() =>
  import("../../Pages/MoviePage/MoviePage" /*webpackChunkName: "movie-page"*/)
);

const MoviesPage = lazy(() =>
  import(
    "../../Pages/MoviesPage/MoviesPage" /*webpackChunkName: "movies-page"*/
  )
);

const Cast = lazy(() => import("../Cast/Cast" /*webpackChunkName: "cast"*/));

const Reviews = lazy(() =>
  import("../Reviews/Reviews" /*webpackChunkName: "reviews"*/)
);

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Nav />
        <Suspense fallback={<Loader active inline="centered" />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/" component={HomePage} />
          </Switch>
          <Route path="/movies/:id/Cast" component={Cast} />
          <Route path="/movies/:id/Reviews" component={Reviews} />
        </Suspense>
      </>
    );
  }
}

import React, { Component } from "react";
import * as api from "../../Services/ApiServices";
import ListMovesRouter from "../../Components/ListMovies/ListMovies";
import styles from "./HomePage.module.scss";

export default class HomePage extends Component {
  state = {
    data: [],
  };

  fetchTrendingMovies = () => {
    api
      .fetchTrendingMovies()
      .then((data) => this.setState({ data }))
      .catch(console.log);
  };

  componentDidMount() {
    this.fetchTrendingMovies();
  }

  render() {
    const { data } = this.state;

    return (
      <section>
        <div className={styles.container}>
          <h2 className={styles.head}>Trending today</h2>
          <ListMovesRouter data={data} />
        </div>
      </section>
    );
  }
}

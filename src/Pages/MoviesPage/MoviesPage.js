import React, { Component } from "react";
import * as api from "../../Services/ApiServices";
import ListMovesRouter from "../../Components/ListMovies/ListMovies";
import queryString from "query-string";
import PropTypes from "prop-types";
import styles from "./MoviesPage.module.scss";

export default class MoviesPage extends Component {
  state = { data: [], search: "" };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  componentDidMount = () => {
    const queryParams = queryString.parse(this.props.location.search);

    if (queryParams.search) {
      api
        .searchMovie(queryParams.search)
        .then(({ data }) => this.setState({ data: data.results }));

      this.setState({ search: queryParams.search });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { search } = this.state;

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `search=${search}`,
    });

    api
      .searchMovie(search)
      .then(({ data }) => this.setState({ data: data.results }));
  };

  render() {
    const { search, data } = this.state;

    return (
      <>
        <div className={styles.container}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit">
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search..."
              onChange={this.handleChange}
              value={search}
            />
          </form>
          <ListMovesRouter data={data} />
        </div>
      </>
    );
  }
}

MoviesPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

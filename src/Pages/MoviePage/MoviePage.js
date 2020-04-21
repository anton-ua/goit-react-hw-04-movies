import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as api from "../../Services/ApiServices";
import PropTypes from "prop-types";
import styles from "./MoviePage.module.scss";

export default class MoviePage extends Component {
  state = { data: [], buttonPath: "" };

  fetchMovie = (id) => {
    api.fetchMovie(id).then(({ data }) => this.setState({ data }));
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchMovie(id);

    const { state } = this.props.location;

    if (state) {
      this.setState({ buttonPath: state.from.pathname + state.from.search });
    }
  }

  render() {
    const {
      id,
      title,
      poster_path,
      vote_average,
      overview,
      genres,
    } = this.state.data;

    return (
      <section>
        <div className={styles.container}>
          <Link to={this.state.buttonPath}>
            <button className={styles.goBack}>&larr; Go back</button>
          </Link>
          <h2 className={styles.head}>{title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            height="350"
            className={styles.movieImg}
          />
          <p className={styles.p}>User Score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p className={styles.p}>{overview}</p>
          <h4>Genres</h4>
          <p className={(styles.last, styles.p)}>
            {genres && genres.map(({ name }) => name).join(" ")}
          </p>
          <div className={styles.additional}>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={`/movies/${id}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${id}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

MoviePage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

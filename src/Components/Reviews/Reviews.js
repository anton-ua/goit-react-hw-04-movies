import React, { Component } from "react";
import * as api from "../../Services/ApiServices";
import PropTypes from "prop-types";
import styles from "./Reviews.module.scss";

export default class Reviews extends Component {
  state = { data: [] };

  fetchReviews = (id) => {
    api.fetchReviews(id).then((data) => this.setState({ data }));
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.fetchReviews(id);
  }

  render() {
    const { data } = this.state;

    return data.length > 0 ? (
      <div className={styles.container}>
        {" "}
        <ul>
          {data.map(({ id, author, content }) => (
            <li key={id}>
              <h5>Author: {author}</h5>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div className={styles.container}>
        <p className={styles.noReviews}>
          We don&apos;t have any reviews for this movie
        </p>
      </div>
    );
  }
}

Reviews.propTypes = {
  match: PropTypes.object.isRequired,
};

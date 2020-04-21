import React, { Component } from "react";
import * as api from "../../Services/ApiServices";
import PropTypes from "prop-types";
import styles from "./Cast.module.scss";

export default class Cast extends Component {
  state = { data: [] };

  fetchCasts = (id) => {
    api.fetchCasts(id).then((data) => this.setState({ data }));
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;

    this.fetchCasts(id);
  };

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container} id="cast">
        <ul>
          {data.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <p className={styles.p}>{name}</p>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  height="250"
                />
              )}
              <p className={styles.p}>({character})</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Cast.propTypes = {
  match: PropTypes.object.isRequired,
};

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ListMovies.module.scss";

class ListMoves extends Component {
  render() {
    const { data } = this.props;

    return (
      <ul className={styles.list}>
        {data.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: this.props.location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
const ListMovesRouter = withRouter(ListMoves);

ListMoves.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default ListMovesRouter;

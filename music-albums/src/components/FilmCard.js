import React, { Component } from "react";


class FilmCard extends Component {
  render() {
    return (
      <>
        <h2 className="title">{this.props.film.html_url}</h2>
        <section className="Films">{this.props.film.description}</section>
      </>
    );
  }
}

export default FilmCard;

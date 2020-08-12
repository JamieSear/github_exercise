import React, { Component } from "react";
import FilmCard from "../components/FilmCard";


class FilmCards extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    // const name = this.state.username
    fetch(`https://api.github.com/users/despinaki/repos`)
      .then((r) => r.json())
      .then((data) => this.setState({ films: data }));
  }

  render() {
    const renderFilms = this.state.films.map((f) => (
      <FilmCard key={f.id} film={f} />
    ));

    return ( 
      <>
        <section className="Films">{renderFilms}</section>
        <p>{this.props.username}</p>
      </>
    )
    
  }
}

export default FilmCards;

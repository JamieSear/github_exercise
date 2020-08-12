import React, { Component } from 'react';
import FilmCard from "./FilmCard"

class SearchForm extends Component {
    state = { username: "", films: [] }

    handleSubmit = e => {
        //this.props.getResult(this.state.location);
        e.preventDefault()
        // this.setState({username: e.target.value})
        fetch(`https://api.github.com/users/${this.state.username}/repos`)
          .then((r) => r.json())
          .then((data) => this.setState({ films: data }))
          .catch(err => alert(err));
    }
    handleChange(event) {
        event.preventDefault()
        this.setState({ username: event.target.value });
      }

    //  componentDidMount() {
    //     // const name = this.state.username
    //     fetch(`https://api.github.com/users/${this.state.username}/repos`)
    //       .then((r) => r.json())
    //       .then((data) => this.setState({ films: data }));
    //   }

      render() {
    //     const renderFilms = this.state.films.map((f) => (
    //         <FilmCard key={f.id} film={f} />
    //       ));
          
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.username}
                    />
                    <input type="submit" defaultValue="Search" />
                </form>
                <section className="Films">{this.state.films.length>0 ? this.state.films.map((f)=>{return  <FilmCard key={f.id} film={f}/>}) : ""}</section>
                
            </>
        );
      }
    }
    
    export default SearchForm;
    
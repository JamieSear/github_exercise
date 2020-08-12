import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import SearchForm from "./components/searchForm.js";
import FilmCards from "./containers/FilmCards";
// import "./styles/App.css";


class App extends Component {
  state = {};

  render() {
    const redirect_uri = "http://localhost:8888";
    const handleLogin = () => {
      window.open(
        `https://accounts.spotify.com/authorize?response_type=code&client_id=662da5d5259c4e238ec99bcc1bf19deb&redirect_uri=${encodeURIComponent(
          redirect_uri
        )}`
      );
    };

    return (
      <main className="musicpage">
        <h1>Studio Ghibli</h1>
        <h4>Japanese Classical</h4>
        <header>
          <NavBar></NavBar>
          <button onClick={handleLogin}>click me</button>
        </header>
        <SearchForm />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1>Welcome to the world of Ghibli!</h1>}
          />
          <Route exact path="/Films" component={SearchForm}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;

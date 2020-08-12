import React, { Component } from "react";

import {SearchForm} from "../components/searchForm"



export default class Search extends Component {
  getResult = (searchTerm) => this.props.getResult(searchTerm);

  // componentDidMount() {
  //   this.props.getResult("London");
  // }

  renderResult = () =>
    this.props.loading ? (
      <p>Loading . . .</p>
    ) : (
      <Result result={this.props.result} />
    );

  render() {
    return (
      <div id="search">
        Where do you want to search?
        <SearchForm getResult={this.getResult} />
        <h1>{this.props.username}</h1>
        {this.props.error ? (
          <p>Oops there's been an error!</p>
        ) : (
          this.renderResult()
        )}
      </div>
    );
  }
}



import React, { Component } from 'react';
import ImgList from "./ImgList";

export default class App extends Component {
  render() {
    return (
      <div>
      	<h1>Manga list from mangaeden.com</h1>
      	<ImgList />
      </div>
    );
  }
}

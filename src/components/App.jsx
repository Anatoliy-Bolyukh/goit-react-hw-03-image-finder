import { Component } from 'react'

import Searchbar from './Searchbar/Searchbar'

export default class App extends Component {
  handleFormSubmit = name => {
  console.log(name);
}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
    </div>
  );
  } 
};

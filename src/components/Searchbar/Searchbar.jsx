// import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import { Component } from 'react';

class Seachbar extends Component {
  state = {
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  handleSubmite = event => {
      event.preventDefault();
      
      this.props.onSubmit()
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" class="Button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}


export default Seachbar
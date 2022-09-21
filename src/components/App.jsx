import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import TakePhotos from './API/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    gallery: '',
    images: [],
    page: 1,
  };

  handleFormSubmit = gallery => {
    this.setState({ gallery });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.gallery !== this.state.gallery || prevState.page !== this.state.page) {
      const array = await TakePhotos(this.state.gallery, this.state.page);

      if (this.state.page !== 1) {
      this.setState(prevState => ({
        images: [...prevState.images, ...array]
      }))
    } else {
       this.setState({ images: [...array] });
    }
    }

  }

  changePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery gallery={this.state.images} />
        {this.state.images.length > 1 && 
          <Button buttonTitle="Load more" changePage={this.changePage} />
        }
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

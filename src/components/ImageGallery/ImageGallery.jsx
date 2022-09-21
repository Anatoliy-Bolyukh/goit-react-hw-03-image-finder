const ImageGallery = ({ gallery }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <li className="ImageGalleryItem" key={id}>
            <img className="ImageGalleryItemImage" src={webformatURL} alt={tags} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;

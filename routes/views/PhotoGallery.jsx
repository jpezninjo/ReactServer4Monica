const React = require('react');
const connect = require('react-redux').connect;
const Photo = require('./Photo.jsx');

const PhotoGallery = React.createClass({

  render: function() {

    var photos = this.props.photos.map(function(photo) {
      return <Photo src={photo.url} caption={photo.caption} />
    });

    return (
      <div className='photo-gallery'>
        {photos}
      </div>
    );
  }
});

module.exports = PhotoGallery;
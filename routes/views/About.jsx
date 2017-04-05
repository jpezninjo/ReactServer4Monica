const React = require('react');
const PhotoGallery = require('./PhotoGallery.jsx');

module.exports = React.createClass({

	displayName: 'About',

	render: function(){
		let data = [
		  {
		    url: 'http://i.imgur.com/D0YQiuE.jpg',
		    caption: 'Food!'
		  },
		  {
		    url: 'http://i.imgur.com/oaqokB4.jpg',
		    caption: 'Food'
		  },
		  {
		    url: 'http://i.imgur.com/COnLTRt.jpg',
		    caption: 'Food'
		  }
		];

		return (
			<div>
				<p>
					Current: <strong>About</strong>
				</p>
				<PhotoGallery photos={data} />
			</div>
			)
	}
})


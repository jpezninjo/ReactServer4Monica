const React = require('react');
const PhotoGallery = require('./PhotoGallery.jsx');

module.exports = React.createClass({

	displayName: 'Fetch',

  	componentDidMount: function() {
  	},
	
	toggleLiked: function(data) {
		this.setState({
			_json: data
		});
	},

	fetchJSON: function() {
		let content = "";

	    fetch('menu.json')  
		  .then(  
	    	function(response) {  
		      if (response.status !== 200) {  
		        console.log('Looks like there was a problem. Status Code: ' +  
		          response.status);  
		        return;  
      		  }

		      // Examine the text in the response  
		      response.json().then(function(data) {
		      	document.getElementById("p-fetch").innerHTML = JSON.stringify(data);
		      });  
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		});    
	},

	getInitialState: function() {
		return {
  			_json: ""
		};
	},

	render: function(){
		return (
			<div>
				<button onClick={this.fetchJSON}>Fetch JSON</button>
				<p id="p-fetch">{this.state._json}</p>
			</div>
		)
	}
})


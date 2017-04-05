const React = require('react');

module.exports = React.createClass({

	getInitialState: function() {
	  return {
	    value: "Hello"
	  }
	},

	handleChange: function(event) {
	  this.setState({
	    value: event.target.value
	  });
	},

	handleSubmit(event) {
    	alert('A new value was submitted: ' + this.state.value);
    	event.preventDefault();
  	},

	render: function() {
	 	return (
	 		<div>
		 		<p>
						Current: <strong>Input</strong>
				</p>
				
		 		<form onSubmit={this.handleSubmit}>
				 	<input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
			  		<input type="submit" value="Submit" />
				  	<span>{this.state.value}</span>
				</form>
			</div>
  		)
	}

});
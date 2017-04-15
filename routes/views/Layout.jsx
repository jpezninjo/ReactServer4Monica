const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;


let Layout = React.createClass({

	_handleClick: function(){
		alert("JavaScript works!");
	},

	render: function(){
		let custom = this.props.custom;

		return (
			<html>
				<head>
					<title>{custom.title}</title>

					<link rel="stylesheet" 
					href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
					crossOrigin="anonymous"/>

					{/*<link rel="stylesheet" href="/styles.css"/>*/}
				</head>
				<body>
					<h1>{custom.title}</h1>
					<p>This stuff is hard</p>
					<button onClick={this._handleClick}>Click Me!</button>

					<ul>
						<li>
							<Link to='/'>Index</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/input'>Input</Link>
						</li>
						<li>
							<Link to='/fetch'>Fetch</Link>
						</li>
						<li>
							<Link to='/sockets'>Sockets</Link>
						</li>
					</ul>

					{this.props.children}
					
					<script dangerouslySetInnerHTML={{
						__html: 'window.PROPS=' + JSON.stringify(custom)
					}}/>
					<script src="/bundle.js"/>
				</body>
			</html>
			)
	}
});

let wrapper = connect(
	function(state){
		return {custom: state };
	}
);

module.exports = wrapper(Layout);
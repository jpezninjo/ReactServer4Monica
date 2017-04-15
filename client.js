const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./routes/routes.jsx');
const Redux = require('redux');
const Provider = require('react-redux').Provider;

require("./public/styles.css");
require("./public/messages.scss");

// var props = window.PROPS;
function reducer(state) {return state;}

let store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>, document
    // React.createElement(Component, props), document
);
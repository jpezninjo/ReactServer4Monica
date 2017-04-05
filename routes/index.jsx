const router = require('express').Router()
const React = require("react");
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const Redux = require('redux');
const Provider = require('react-redux').Provider;

function reducer(state) {return state;}

router.get('*', function(request, response){
	let initialState = { title: 'Universal React'};
	let store = Redux.createStore(reducer, initialState);

	ReactRouter.match({
		routes: require('./routes.jsx'),
		location: request.url
	}, function(error, redirectLocation, renderProps){
		if(renderProps){
			let html = ReactDOMServer.renderToString(
				<Provider store={store}>
					<ReactRouter.RouterContext {...renderProps} />
				</Provider>
			);
			response.send(html);
		} else {
			response.status(404).send("Not found");
		}
	});
});

module.exports = router;
const React = require("react");
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;

// if(typeof window === 'object'){
// 	function createElement(Component, props){
// 		return <Component {...props} custom={window.PROPS} />;
// 	}
// }

module.exports = (
	<Router history={browserHistory}>
		<Route path='/' component={require('./views/Layout.jsx')}>
			<IndexRoute component={require('./views/Index.jsx')}></IndexRoute>
			<Route path='about' component={require('./views/About.jsx')}></Route>
			<Route path='input' component={require('./views/Input.jsx')}></Route>
			<Route path='fetch' component={require('./views/Fetch.jsx')}></Route>
			<Route path='sockets' component={require('./views/Sockets.jsx')}></Route>
		</Route>
	</Router>
);
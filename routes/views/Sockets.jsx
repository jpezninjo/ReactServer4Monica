const React = require('react');
const Group = require('./Group.jsx');
const connect = require('react-redux').connect;

class Sockets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	email: "",
        	group: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log("Detected change");
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

	render() {
		return (
			<div>
				<p>
					Current: <strong>Sockets</strong>
				</p>
				<Group handleInputChange={this.handleInputChange} />
			</div>
		);
	}
}

let wrapper = connect(
	function(state){
		return {custom: state };
	}
);

module.exports = wrapper(Sockets);

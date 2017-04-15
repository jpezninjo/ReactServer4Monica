const React = require('react');

const GroupChatMessage = React.createClass({

	isURL: function(url){
		let pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	    return pattern.test(url);
	},

	render: function() {

		return (
			<div className={"message-container" + (this.props.renderRight == 'true' ? " author-is-user" : "")}>
				<a href={this.isURL(this.props.message.content) ? this.props.message.content: null}>
					<span className={"message-content" + (this.isURL(this.props.message.content) ? " link" : "")}>
						{this.props.message.content}
					</span>
				</a>
				<br/>
				<span className={"message-author" + (this.props.message.render_author == "false" ? " display-none" : "")}>{this.props.message.author}</span>
			</div>
		);
	}
});

module.exports = GroupChatMessage;
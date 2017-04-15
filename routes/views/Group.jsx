const React = require('react');
const GroupChat = require('./GroupChat.jsx');

class Group extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "Test_User",
            groupname: "Generic_Group",
        }
    }

    render() {

        let messages = [
          {
            author: "Jason",
            content: "Yoo"
          },
          {
            author: "Todd",
            content: "Whatsup, man?"
          },
          {
            author: "Jason",
            content: "I'm good, how ya doing?"
          },
        ]

        return (
          <div>
            {/*<link rel="stylesheet" href="/messages.css"/>*/}
            <GroupChat messages={messages} handleInputChange={this.props.handleInputChange} email={this.state.email} groupname={this.state.groupname} />
          </div>
        );
    }
};

module.exports = Group;
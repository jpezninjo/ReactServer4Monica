const React = require('react');
const GroupChatMessage = require('./GroupChatMessage.jsx');

// const io = require('socket.io-client');
// const socket = io()


class GroupChat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            socket: null,
            messages: [],
            message_field: "",
            email: this.props.email,
            groupname: this.props.groupname
        };
        this.sendMessageToServer = this.sendMessageToServer.bind(this);
        this._messageRecieve = this._messageRecieve.bind(this);

        // this.handleInputChange = this.props.handleInputChange.bind(this).bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        const socket = io();

        this.setState({
            socket: io(),
            email: $("#group-groupchat-form-name").val()
        });

        socket.emit("client connect", {
            author: this.state.email,
            group: this.state.groupname,
        });

        socket.on("server response", this._messageRecieve);
    }

    componentWillUnmount() {  
        this.state.socket.emit('leave room', {});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    _messageRecieve(data) {
        console.log("Eaewwa");
        console.log(data);
        if (data.length > 0 && data[0].group == this.state.groupname) {
            this.setState({messages: data});
            $('.chat-container').animate({scrollTop: $('.chat-container').prop("scrollHeight")}, 500);
        }
    }

    sendMessageToServer(e) {
        this.state.socket.emit("client message", {
            content: this.state.message_field,
            author: this.state.email,
            group: this.state.groupname,
        });

        this.setState({
            message_field: ""
        });

        e.preventDefault();
        e.stopPropagation();
        return false;

    }

    render() {

        let _email = this.state.email;
        let messages = this.state.messages.map(function(message, index) {
            return <GroupChatMessage key={index} message={{content: message.content, author: message.author, render_author: message.render_author}} renderRight={(message.author == _email).toString()} />
        });

        return (
          <div className='group-groupchat'>
            <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
            <script src="/socket.io/socket.io.js"></script>

            <script src = "faker.js" type = "text/javascript"/>

            <div className="col-sm-1"></div>
            <div className="col-sm-9">
                <form className="form-horizontal" style={{"marginBottom": "0px"}}>
                    <label className="control-label" htmlFor="email">Current Group:</label>
                    <input id="group-groupchat-form-group" className="form-control" name="groupname" autoComplete="off" value={this.state.groupname} onChange={this.handleInputChange} style={{"borderBottomLeftRadius": "0px", "borderBottomRightRadius": "0px"}}/>
                </form>

                <div className="chat-container">
                    {messages}
                </div>


                <form onSubmit={this.sendMessageToServer}>
                    <input id="group-groupchat-form-message" className="form-control" name="message_field" autoComplete="off" placeholder="Type a message" value={this.state.message_field} onChange={this.handleInputChange} />
                </form>

                <form className="form-horizontal">
                    <label className="control-label" htmlFor="email">Logged in:</label>
                        <input id="group-groupchat-form-name" className="form-control" name="email" autoComplete="off" placeholder={"Id of sender"} onChange={this.handleInputChange} />
                </form>
            </div>
            <script src="fake.js" type = "text/javascript"/>
          </div>
        );
    }
};

module.exports = GroupChat;
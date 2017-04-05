const React = require('react');
const connect = require('react-redux').connect;


const Photo = React.createClass({
  toggleLiked: function() {
    this.setState({
      liked: !this.state.liked
    });
  },

  getInitialState: function() {
    return {
      liked: false
    };
  },

  render: function() {
    let buttonClass = this.state.liked ? 'active' : '';

    return (
      <div className='photo'>
        <img src={this.props.src}  width='250px'/>

        <div className='bar'>
          <button onClick={this.toggleLiked} className={buttonClass}>
            ♥
          </button>
          <span>{this.props.caption}</span>
        </div>
      </div>
    );
  }
});

let wrapper = connect(
  function(state){
    return {custom: state };
  }
);

module.exports = wrapper(Photo);
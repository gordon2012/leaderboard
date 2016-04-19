var React = require('react');


var CamperRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.num}</td>
        <td className="absorbing-column"><img src={this.props.camper.img} style={{width: "32px"}}/><span style={{padding: "0 16px"}}><a target="_blank" href={'http://www.freecodecamp.com/' + this.props.camper.username}>{this.props.camper.username}</a></span></td>
        <td>{this.props.camper.recent}</td>
        <td>{this.props.camper.alltime}</td>
      </tr>
    );
  }
});


module.exports = CamperRow;

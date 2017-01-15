var React = require('react');
var CamperTable = require('./CamperTable');


var App = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <div className="jumbotron text-center">
          <h1>Camper Leaderboard</h1>
        </div>
        <CamperTable className="table-container" />
      </div>
    );
  }
});

module.exports = App;

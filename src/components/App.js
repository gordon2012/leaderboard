var React = require('react');
var CamperTable = require('./CamperTable');


var App = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <div className="jumbotron text-center">
          <h1>Camper Leaderboard</h1>
          <h3>A FreeCodeCamp project built with React and Sass</h3>
        </div>
        <CamperTable className="table-container" />
      </div>
    );
  }
});

module.exports = App;

var React = require('react');
var CamperRow = require('./CamperRow');
var $ = require('jquery');


var CamperTable = React.createClass({
  getInitialState: function() {
    return {
      sortRecent: true,
      recent: [],
      alltime: []
    };
  },

  getCampers: function() {
    this.recentRequest = $.get('http://fcctop100.herokuapp.com/api/fccusers/top/recent', (res) => {
      this.setState({
        recent: res
      });
      console.log('got recent');
    });

    this.alltimeRequest = $.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime', (res) => {
      this.setState({
        alltime: res
      });
      console.log('got alltime');
    });
  },

  componentDidMount: function() {
    this.getCampers();
    this.timerID = setInterval(this.getCampers, 60 * 1000);
  },

  componentWillUnmount: function() {
    this.recentRequest.abort();
    this.alltimeRequest.abort();
    clearInterval(this.timerID);
  },

  handleRecent: function() {
    if(!this.state.sortRecent)
    {
      this.setState({
        sortRecent: true
      });
    }
  },

  handleAlltime: function() {
    if(this.state.sortRecent)
    {
      this.setState({
        sortRecent: false
      });
    }
  },

  render: function() {
    var rows = [];

    var campers = this.state.sortRecent ? this.state.recent : this.state.alltime;

    for(var i = 0; i < campers.length; i++) {
      rows.push(<CamperRow camper={campers[i]} key={i} num={i+1}/>);
    }
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="heading" colSpan="4"><h3>Camper Leaderboard</h3></th>
          </tr>
          <tr>
            <th><h4>#</h4></th>
            <th><h4>Camper Name</h4></th>
            <th><button onClick={this.handleRecent}className={this.state.sortRecent ? "btn btn-primary" : "btn btn-default"}>Past 30 days</button></th>
            <th><button onClick={this.handleAlltime} className={!this.state.sortRecent ? "btn btn-primary" : "btn btn-default"}>All time</button></th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});


module.exports = CamperTable;

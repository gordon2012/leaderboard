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
      <table className="table table-striped table-bordered table-container">
        <thead>
          <tr>
            <th rowspan="4">Camper Leaderboard</th>
          </tr>
          <tr>
            <th><h4>#</h4></th>
            <th><h4>Camper Name</h4></th>
            <th><button onClick={this.handleRecent}className={this.state.sortRecent ? "btn btn-primary" : "btn btn-default"}>Past 30 days</button></th>
            <th><button onClick={this.handleAlltime} className={!this.state.sortRecent ? "btn btn-primary" : "btn btn-default"}>All time</button></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});


var App = React.createClass
({
  render: function()
  {
    return (
      <div>
        <div className="jumbotron">
          <h1>Camper Leaderboard</h1>
          <h3>A FreeCodeCamp project built with React and Sass</h3>
        </div>
        <CamperTable className="table-container"/>
      </div>
    );
  }
});


React.render(<App />, document.getElementById('app'));

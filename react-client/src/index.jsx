import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './components/map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div> 
          <GoogleMap activeCountry={this.state.activeCountry}/>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
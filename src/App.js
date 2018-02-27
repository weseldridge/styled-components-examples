import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/cards/Card';
import CardBody from './components/cards/CardBody';
import CardHeader from './components/cards/CardHeader';
import CardActions from './components/cards/CardActions';
import CardHeaderLabel from './components/cards/CardHeaderLabel';
import CardHeardAction from './components/cards/CardHeardAction';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro" style={{maxWidth: '400px', margin: '1rem auto'}}>
          <Card style={{marginBottom: '1rem'}}>
              <CardHeader>
                  <CardHeaderLabel>Test</CardHeaderLabel>
                  <CardHeardAction>&copy;</CardHeardAction>
              </CardHeader>
              <CardBody>
                <p>
                  This is the body!
                </p>
              </CardBody>
              <CardActions>
                  <button>Test</button>
              </CardActions>
          </Card>

          <Card>
              <CardHeader>
                  <CardHeaderLabel>Test</CardHeaderLabel>
                  <CardHeardAction>&copy;</CardHeardAction>
              </CardHeader>
              <CardBody blue={true}>
                <p>
                  This is the body!
                </p>
              </CardBody>
              <CardActions>
                  <button>Test</button>
              </CardActions>
          </Card>
        </p>
      </div>
    );
  }
}

export default App;

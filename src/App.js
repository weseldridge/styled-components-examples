import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Chards
import Card from './components/cards/Card';
import CardBody from './components/cards/CardBody';
import CardHeader from './components/cards/CardHeader';
import CardActions from './components/cards/CardActions';
import CardHeaderLabel from './components/cards/CardHeaderLabel';
import CardHeardAction from './components/cards/CardHeardAction';

//List
import TwoColumnList from './components/list/TwoColumnList';
import TwoColumnListItem from './components/list/TwoColumnListItem';

// App Bar
import Brand from './components/app_bar/Brand';
import AppBar from './components/app_bar/AppBar';
import Left from './components/app_bar/Left';
import Right from './components/app_bar/Right';

// Chips
import Chip from './components/chip/Chip';
import ChipLabel from './components/chip/ChipLabel';
import ChipIcon from './components/chip/ChipIcon';
import ChipButton from './components/chip/ChipButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
            <Left>
                <Brand>Brand Name</Brand>
            </Left>

            <Right>
              <button>&copy;</button>
            </Right>
        </AppBar>
        <div className="App-intro" style={{maxWidth: '400px', margin: '1rem auto'}}>
          <Card style={{marginBottom: '1rem'}}>
              <CardHeader>
                  <CardHeaderLabel>Test</CardHeaderLabel>
                  <CardHeardAction>&copy;</CardHeardAction>
              </CardHeader>
              <CardBody>
                <TwoColumnList>
                    <TwoColumnListItem>Item 1</TwoColumnListItem>
                    <TwoColumnListItem>Item 2</TwoColumnListItem>
                    <TwoColumnListItem>Item 3</TwoColumnListItem>
                    <TwoColumnListItem>Item 4</TwoColumnListItem>
                </TwoColumnList>
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

          <Card>
              <CardHeader>
                  <CardHeaderLabel>A card with chips</CardHeaderLabel>
                  <CardHeardAction>&copy;</CardHeardAction>
              </CardHeader>
              <CardBody blue={true}>
                <Chip>
                  <ChipLabel>Test</ChipLabel>
                  <ChipButton>x</ChipButton>
                </Chip>
              </CardBody>
              <CardActions>
                  <button>Test</button>
              </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;

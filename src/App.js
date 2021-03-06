import React from 'react';
import './App.css';
import { BrowserRouter as Rounter, Switch, Route} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Navbar from './components/Navbar/Navbar';
import Devices from './components/Devices/Devices';
import Settings from './components/Settings/Settings'; 
import Alerts from './components/Alerts/Alerts';
import BatteryData from './components/Devices/Device/BatteryData/BatteryData';
import MissingData from './components/Devices/Device/MissingData/MissingData';
import DuplicateData from './components/Devices/Device/DuplicateData/DuplicateData';
import GPSErrors from './components/Devices/Device/GPSErrors/GPSErrors'


class App extends React.Component {
  
  state = {
    devices: null,
    alerts_number: 0,
    refresh: 10000  
  };

  componentDidMount(){
    this.getDevices();
    this.getAlerts();
    this.timer = setInterval(()=> {
      this.getDevices();
      this.getAlerts();
    }, this.state.refresh);
  }
  
  async getDevices(){
  
   fetch('http://localhost:3000/devices/all', {method: "GET"})
    .then((response) => response.json())
    .then((responseData) =>
    {
       this.setState({
          devices: responseData
       });
    })
    .catch((error) => {
        console.error(error);
    });
  }

  async getAlerts(){
  
    fetch('http://localhost:3000/alerts/all', {method: "GET"})
     .then((response) => response.json())
     .then((responseData) =>
     {
        this.setState({
          alerts_number: responseData.length
        });
     })
     .catch((error) => {
         console.error(error);
     });

     
  }

  render(){
    
    return (
      <Rounter>
        <div className="App">
          <Navbar alerts={this.state.alerts_number}/>

          {/* <Grid
            container  
            spacing={0}
            direction="column"
            alignItems="center"
            style={{ minHeight: '100vh' }} > */}
         
         <Box justifyContent="center">
            <Switch>
              <Route path="/" exact component={() => <Devices devices={this.state.devices}/>}/>
              <Route path="/alerts" component={Alerts}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/battery/:id" component={BatteryData}/>
              <Route path="/missing_data/:id" component={MissingData}/>
              <Route path="/duplicate_data/:id" component={DuplicateData}/>
              <Route path="/gps_errors/:id" component={GPSErrors}/>
            </Switch>
          </Box>

          {/* </Grid> */}

        </div>
      </Rounter>
    );
  }
}

export default App;

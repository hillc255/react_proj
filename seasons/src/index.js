import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {lat: null,  errorMessage: ''};
    
        //component lifecycle methods - data loding
        componentDidMount(){
         window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
}
        
        //React says we have to define render - returns jsx
        renderContent() {
          if(this.state.errorMessage && !this.state.lat){
              return <div>Error: {this.state.errorMessage}</div>;
          }
          if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat = {this.state.lat} />
        }
    return <Spinner message="Please accept location request" />;
   //     return <Spinner />;
        }

        render(){
            return (
                <div className="border red">
                {this.renderContent()}
                </div>
            );
        }
    }

        ReactDOM.render( <App/ > , document.querySelector('#root') )
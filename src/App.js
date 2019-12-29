import React, { Component} from 'react';
import './App.css';
import { render } from 'react-dom';

class App extends Component {
  render(){
    return (
      <div className="container">
        <div className="row"> 
          <div className="col-sm-6"> {/* grille 12 collonne mais petit écran (sm) passe à 6 */} 
            <textarea 
              className='form-control'
              rows="35">
            </textarea>
          </div>
          <div className="col-sm-6">  
            <h1>Résultat</h1>
          </div>

        </div>
      </div>         
    );
  }
 
}

export default App

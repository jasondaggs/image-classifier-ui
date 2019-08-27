// Image Classifier

import React from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet'; 
import './App.css';

class App extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = { status: "Loading"};
    }

    componentDidMount()
    {
        const loadModel = async () => { 
            const model = await mobilenet.load();
            const imageEl = document.getElementById('img');
            const result = await model.classify(imageEl);
            const labels = result[0].className + " " + result[1].className + " " + result[2].className;
            this.setState({status: labels});
        }
        loadModel(); 
    }

    render() 
    {
      return (
        <div className="App">
          <header className="App-header">
            <img crossOrigin="anonymous" width='320' height='240' id='img'src = 'https://media.istockphoto.com/photos/snail-picture-id511478884' />
           {this.state.status} 
          </header>
        </div>
      );
    }
}

export default App;

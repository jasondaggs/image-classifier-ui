// Image Classifier

import React,{Component} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet'; 
import * as d3 from 'd3';
import BarChart from './BarChart.js'
import Shell from './Shell.js'
import './App.css';

const IMAGE_URL='https://media.istockphoto.com/photos/snail-picture-id511478884'

class App extends Component {

     	render ()
	{
      		return (
                <Shell />
            )
      	} 
}

export default App;

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

	constructor(props)
	{
		super(props);
		this.state =  {label : "Loading"};
	}

    	componentDidMount()
    	{
    		const loadModel = async () => {
    			const model = await mobilenet.load();
    			const imageEl = document.getElementById('img');
    	    		const result = await model.classify(imageEl);
			this.setState({label: "Done",result:result});
    		}

    		loadModel();
    	}

     	render ()
	{
      		return (
                <Shell data={this.state.result}/>
            )
      } 
}

export default App;

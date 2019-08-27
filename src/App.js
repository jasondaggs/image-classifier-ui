// Image Classifier

import React,{Component} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet'; 
import * as d3 from 'd3';
import BarChart from './BarChart.js'
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
        		<div className="App">
          			<header className="App-header">
	   			<BarChart data={this.state.result}/>
            			<img crossOrigin="anonymous" width='320' height='240' id='img'src={IMAGE_URL}  />
           				{this.state.label} 
          			</header>
        		</div>)
      } 
}

export default App;

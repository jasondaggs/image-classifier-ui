
import React, { Component } from 'react';
import predict from './predict'
import ClassifierView from './ClassifierView.js'

class Classifier extends Component
{
    constructor(props)
    {
       	super(props);

	    this.handleChange = this.handleChange.bind(this);
	    this.update = this.update.bind(this);

	    this.state = {file:null,
                        result:null,
                        status:"Predicting",
                        initialImage:"https://i.imgur.com/uVB1HOu.jpg",
                        fileName:"https://i.imgur.com/uVB1HOu.jpg",
                        handleChange:this.handleChange };
    }
	
	update (result)
	{
		this.setState({result:result,status:"Done"});
	}

	handleChange(event)
	{
		const img = document.getElementById("img");

		if ( event.target.files[0] == null )
			return;

		const url = URL.createObjectURL(event.target.files[0]);
		img.src = url 
		this.setState({file: url,result:null,status:"Predicting",fileName:event.target.files[0].name});
		predict(this.update);
	}

	componentDidMount()
	{
		predict(this.update);
	}

	render () {
		return (
            <ClassifierView model={this.state} />
		);
	}
}

export default Classifier;

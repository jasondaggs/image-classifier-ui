
import React, { Component } from 'react';
import './Shell.css';
import BarChart from './BarChart.js'
import Title from './Title.js'
import Footer from './Footer'
import predict from './predict'

class Shell extends Component
{
    	constructor(props)
    	{
        	super(props);
		this.state = {file:null,result:null,label:"Loading"};
		this.handleChange = this.handleChange.bind(this);
		this.update = this.update.bind(this);
    	}
	
	update (result)
	{
		this.setState({result:result});
	}

	handleChange(event)
	{
		const img = document.getElementById("img");
		if ( event.target.files[0] == null )
			return;

		const url = URL.createObjectURL(event.target.files[0]);
		img.src = url 
		this.setState({file: url,result:null});
		predict(this.update);
	}
	componentDidMount()
	{
		predict(this.update);
	}
	render () {
		return (
			<div className="container">
				<header className="header-container">
                    			<Title /> 
				</header>

				<div className="main-container">
                    			<img id="img" crossOrigin="anonymous" width="227" height="227" src="https://i.imgur.com/uVB1HOu.jpg" />
					<input type="file" id="single" onChange={this.handleChange} /> 
                    			<BarChart data={this.state.result} />
				</div>
			
				<footer className="footer-container"> 
                    			<Footer />                
				</footer>
			</div>
		);
	}
}

export default Shell;

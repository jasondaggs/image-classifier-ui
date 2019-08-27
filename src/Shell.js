
import React, { Component } from 'react';
import './Shell.css';
import BarChart from './BarChart.js'
import Title from './Title.js'
import Footer from './Footer'

class Shell extends Component
{
    constructor(props)
    {
        super(props);
    }
	render () {
		return (
			<div className="container">
				<header className="header-container">
                <Title /> 
				</header>

				<div className="main-container">
                
                <img id="img" crossOrigin="anonymous" width="320" height="240" src="https://media.istockphoto.com/photos/snail-picture-id511478884" />
                <BarChart data={this.props.data} />
				</div>
			
				<footer className="footer-container"> 
                    <Footer />                
				</footer>
			</div>
		);
	}
}

export default Shell;

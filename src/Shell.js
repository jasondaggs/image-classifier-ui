
import React, { Component } from 'react';
import './Shell.css';
import BarChart from './BarChart.js'
import Title from './Title.js'
import Footer from './Footer'
import FileUpload from './FileUpload'

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
                    <FileUpload />
                    <img id="img" crossOrigin="anonymous" width="227" height="227" src="https://i.imgur.com/uVB1HOu.jpg" />
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

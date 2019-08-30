import React,{Component} from 'react'

import Title from './Title.js'
import BarChart from './BarChart.js'
import Footer from './Footer.js'

import './ClassifierView.css'

class ClassifierView extends Component
{
    render() {
    return (
        <div className="container">
            <header className="header-container">
                   <Title /> 
		    </header>
			<div className="main-container">
	    		<div className="grid-container">
                   <img alt="classification target" id="img" crossOrigin="anonymous" width="227" height="227" src={this.props.model.initialImage} />
	   	   <input type="file" id="single" onChange={this.props.model.handleChange} /> 
                   <div style={{color: 'black'}} >{this.props.model.fileName} </div>
                   <BarChart data={this.props.model.result} />
                   <div style={{color: 'black'}} >Status: {this.props.model.status} </div>
	    		</div>
			</div>
			    <footer className="footer-container"> 
                    <Footer />                
			    </footer>
			 </div>
        )
    }
}

export default ClassifierView;

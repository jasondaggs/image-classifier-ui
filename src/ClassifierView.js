import React,{Component} from 'react'

import Title from './Title.js'
import BarChart from './BarChart.js'
import Footer from './Footer.js'

import './ClassifierView.css'

class ClassifierView extends Component
{
    constructor(props)
    {
        super(props);
    }

    render() {
    return (
        <div className="container">
            <header className="header-container">
                   <Title /> 
		    </header>
			<div className="main-container">
                   <img id="img" crossOrigin="anonymous" width="227" height="227" src={this.props.model.initialImage} />
			   	   <input type="file" id="single" onChange={this.props.model.handleChange} /> 
                   <h2 style={{color: 'black'}} >{this.props.model.fileName} </h2>
                   <BarChart data={this.props.model.result} />
                   <h2 style={{color: 'black'}} >Status: {this.props.model.status} </h2>
			</div>
			    <footer className="footer-container"> 
                    <Footer />                
			    </footer>
			 </div>
        )
    }
}

export default ClassifierView;

import React,{Component} from 'react'
import './FileUpload.css'


class FileUpload extends Component
{
	constructor(props)
	{	
		super(props)
		this.state ={
			file: null
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event)
	{
		const img = document.getElementById("img");
		img.src = event.target.files[0];
		this.setState({file: URL.createObjectURL(event.target.files[0])});
	}
	render()
	{
    		return ( 
			
		<div>	
			<input type="file" id="single" onchange={this.handleChange} /> 
		
                    <img id="img" crossOrigin="anonymous" width="227" height="227" src="https://i.imgur.com/uVB1HOu.jpg" />
			</div>
		);
	}
}

export default FileUpload;

import React, {Component,useState,useEffect} from 'react'
import * as d3 from 'd3'

function BarChart(data)
{
	const canvasHeight = 240;
	const scale = 240.0;

	d3.selectAll("svg").remove();

	if ( data.data != null)
	{
 		const svg = d3.select("#chart")
		.append("svg")
		.attr("width", 320)
		.attr("height",240)
		.style("border","1px solid black");

		svg.selectAll("rect")
    		.data(data.data).enter()
        	.append("rect")
        	.attr("width", 20)
		.attr("x",(d,i) => i * 30)
		.attr("y", (d) => canvasHeight - d.probability * scale)
		.attr("height",(d) => d.probability * scale)
		.attr("fill",(d,i) => i == 0 ? "blue": i == 1 ? "green" : "yellow");
		svg.selectAll("rect")
		.data(data.data).enter()
		.append("rect")
		.attr("width",20)
		.attr("height",20)
		.attr("x",10)
		.attr("y",(d,i) => i * 30 )
		.attr("fill",(d,i) => i == 0 ? "blue": i == 1 ? "green" : "yellow");
		
	}

	return (<div id="chart"></div>)
}

export default BarChart;

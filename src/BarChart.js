import React from 'react'
import * as d3 from 'd3'
import './BarChart.css'

function BarChart(data)
{
	const canvasHeight = 227;
	const scale = 227.0;

	d3.selectAll("svg").remove();

	if ( data.data != null)
	{
        // Build the svg canvas
 		const svg = d3.select("#chart")
		.append("svg")
		.attr("width", 227)
		.attr("height",227);

        // Add the probabilities
		svg.selectAll("rect")
    		.data(data.data).enter()
        	.append("rect")
        	.attr("width", 20)
		.attr("x",(d,i) => i * 30 + 10)
		.attr("y", (d) => canvasHeight - d.probability * scale)
		.attr("height",(d) => d.probability * scale)
		.attr("fill",(d,i) => i === 0 ? "blue": i === 1 ? "green" : "yellow");

        // Add the legend
        var legend = svg.selectAll(".legend")
                .data(data.data)
                .enter()
                .append("g")
		legend.selectAll("rect")
		.data(data.data).enter()
		.append("rect")
		.attr("width",20)
		.attr("height",20)
		.attr("x",10)
		.attr("y",(d,i) => i * 30 )
		.attr("fill",(d,i) => i === 0 ? "blue": i === 1 ? "green" : "yellow");

        // Add legend labels
        legend.append("text")
        .attr("class","label")
        .attr("y", (d,i) => i * 30 + 15 )
        .attr("x", 40)
        //.attr("fill","white")
        .text((d) => d.className)
		
	}

	return (<div id="chart"></div>)
}

export default BarChart;

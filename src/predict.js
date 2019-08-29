import React from 'react'

import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet'; 


function predict(update)
{
    		const loadModel = async () => {
    			const model = await mobilenet.load();
    			const imageEl = document.getElementById('img');
    			const offset = tf.scalar(127.5);
			if ( imageEl == null)
			{
				return;
			}

			let tensor = tf.browser.fromPixels(imageEl)
                 	//.resizeNearestNeighbor([224, 224])
                 	.toFloat()
                 	//.sub(offset).div(offset)
                 	//.expandDims();
    	    		const result = await model.classify(tensor);
			update(result);	
		}	
		loadModel();
}

export default predict;

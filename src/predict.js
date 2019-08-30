
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet'; 

function predict(update)
{
    		const loadModel = async () => {
    			const model = await mobilenet.load();
    			const imageEl = document.getElementById('img');
			if ( imageEl == null)
			{
				return;
			}

			let tensor = tf.browser.fromPixels(imageEl)
                 	.toFloat()
    	    		const result = await model.classify(tensor);
			update(result);	
		}	
		loadModel();
}

export default predict;

define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Black Americans', //Will appear in the data.
			title : {
				media : {word : 'Black Americans'}, //Name of the category presented in the task.
				css : {color:'#000000','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
  		        {image : 'CFD-BF-017.jpg'}, 
    			{image : 'CFD-BF-040.jpg'}, 
    			{image : 'CFD-BF-208.jpg'}, 
   			    {image : 'CFD-BM-038.jpg'}, 
   			    {image : 'CFD-BM-205.jpg'}, 
   			    {image : 'CFD-BM-225.jpg'}			
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White Americans', //Will appear in the data.
			title : {
				media : {word : 'White Americans'}, //Name of the category presented in the task.
				css : {color:'#000000','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
  		        {image : 'CFD-WF-001.jpg'}, 
    			{image : 'CFD-WF-014.jpg'}, 
    			{image : 'CFD-WF-038.jpg'}, 
   			    {image : 'CFD-WM-040.jpg'}, 
   			    {image : 'CFD-WM-214.jpg'}, 
   			    {image : 'CFD-WM-230.jpg'}					
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
			attribute1 :
			{
				name : 'Good',
				title : {
					media : {word : 'Good'},
					css : {color:'#000000','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Good'},
					{word: 'Positive'},
					{word: 'Pleasant'},
					{word: 'Great'},
					{word: 'Wonderful'},
					{word: 'Excellent'}
				],
				//Stimulus css
				stimulusCss : {color:'#048832','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Bad',
				title : {
					media : {word : 'Bad'},
					css : {color:'#000000','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Bad'},
					{word: 'Negative'},
					{word: 'Unpleasant'},
					{word: 'Awful'},
					{word: 'Horrible'},
					{word: 'Terrible'}
				],
				//Stimulus css
				stimulusCss : {color:'#048832','font-size':'2.3em'}
			},	
 			instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the category <b>leftAttribute.</b>' +
				'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <b>rightAttribute</b>.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',			
			instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the category <b>leftCategory</b>. ' +
				'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <b>rightCategory</b>.<br/>' +
				'Items will appear one at a time.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',	
			instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Use the <b>E</b> key for <b>leftCategory</b> and for <b>leftAttribute</b>.<br/>' +
				'Use the <b>I</b> key for <b>rightCategory</b> and for <b>rightAttribute</b>.<br/>' +
				'Each item belongs to only one category.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' + 
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
			instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'This is the same as the previous part.<br/>' +
				'Use the <b>E</b> key for <b>leftCategory</b> and for <b>leftAttribute</b>.<br/>' +
				'Use the <b>I</b> key for <b>rightCategory</b> and for <b>rightAttribute</b>.<br/>' +
				'Each item belongs to only one category.<br/><br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
			instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Watch out, the labels have changed position!</b><br/>' +
				'Put the left finger on the <b>E</b> key for <b>leftCategory</b>.<br/>' +
				'Put the right finger on the <b>I</b> key for <b>rightCategory</b>.<br/><br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',						
			base_url : {//Where are your images at?
				image : 'https://almog-zilberberg.github.io/Qualtrics-Scripts/images/'
			} 			
	});
});

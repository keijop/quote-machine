import React from "react"

class Quote extends React.Component{

	render(){

		return( 
			data[1].quote
		)	 
	}
}; 

const data = [

	{quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
   	author : "Nelson Mandela"},

  	{quote : "The way to get started is to quit talking and begin doing.",
	author : "Walt Disney"},

   	{quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma –               which is living with the results of other people's thinking.",
	 author : "Steve Jobs"}
];

const number = Math.floor(Math.random()*3)


export default Quote
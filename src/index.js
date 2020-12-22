import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [

  {quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
    author : "Nelson Mandela"},

    {quote : "The way to get started is to quit talking and begin doing.",
  author : "Walt Disney"},

    {quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma –  which is living with the results of other people's thinking.",
   author : "Steve Jobs"},

   {quote : "A squat cannot be performed on a Smith machine any more than it can be performed in a small closet with a hamster.",
	author : "Mark Rippetoe"},

	{quote : "If you don’t find the time, if you don’t do the work, you don’t get the results.",
	author : "Arnold Schwarzenegger"},

	{quote : "I think when a surfer becomes a surfer, it's almost like an obligation to be an environmentalist at the same time.",
	author : "Kelly Slater"},

	{quote : "The kettlebell is an ancient Russian weapon against weakness.",
	author : "Pavel Tsatsouline"},

	{quote : "Most men need their wives to need them, and I've seen that lead to their downfall.",
	author : "Laird Hamilton"},

	{quote : "Elämä on ihmisen parasta aikaa. (Life is man's best time.)",
	author : "Matti Nykänen"}
];


ReactDOM.render(<App data={DATA} />, document.getElementById('root'));



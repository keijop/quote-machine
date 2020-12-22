import React from "react"
import Quote from "./Components/Quote"
import Author from "./Components/Author"
import logo from "./twitter_logo.png" 


class App extends React.Component{
    constructor(props) {
    super(props);

    this.state = {
      number : 0
    };

    this.clickHandle = this.clickHandle.bind(this);

  };
  
  clickHandle = () =>{
    this.setState(state => ({number : Math.floor(Math.random()*this.props.data.length) })); //data.length => quote from data object w index
  };

   
  
  render(){
     
    console.log(this.props.data.length) 

    return( 
      <div id="quote-box">
        <div id="text">
          <Quote quote={this.props.data[this.state.number].quote }/>
        </div>
        <div id="author">
          <Author auth={this.props.data[this.state.number].author}/>
        </div>
        <div id="tweet_next">
          <a  target="_blank" href="https://twitter.com/intent/tweet" id="tweet-quote">
          <img src={logo} alt="twitter logo"/>
          </a>
          <button onClick={this.clickHandle} id="new-quote">Next quote</button>
        </div>
      </div>
      )
  }
  
};






export default App;
import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading : false,
    products : []
  };


  getProdList = async () => {
    const { metadata } = await axios.get('https://api.bestbuy.com/beta/products/openBox(categoryId=abcat0400000)?apiKey=DQQ92FvXaeYdTJI9wPTUl0Lo');

    console.log(metadata);
  }

  componentDidMount(){
    this.getProdList();
  }

  render(){
    const {isLoading} = this.state;

    return (
      <div>
        Hi! {isLoading}
      </div>
    )
  }
};

export default App;
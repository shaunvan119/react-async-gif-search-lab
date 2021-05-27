import React, { Component } from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

constructor(props) {
    super(props)
    this.state = {
        gifData: []

    }
}

saveGifs(data) {

        this.setState({gifData: data.data})

}

searchEntered = (term) => {
    console.log(term)
    let url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=Nqufe8uhifKhstyHZscKz8CnefewJxep&rating=g&limit=5`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.saveGifs(data)
      })
  }



  render() {
  return (
    <div>
        <GifSearch callback={this.searchEntered} />
        <GifList gifData={this.state.gifData}  />

    </div>
  )
}
}

export default GifListContainer


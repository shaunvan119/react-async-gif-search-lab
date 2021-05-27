import React, { Component } from 'react';


class GifSearch extends Component {

constructor(props) {
    super(props)
    this.state = {
        searchTerm: "dolpin"

    }
}


handleChange = (e) => {
    this.setState({
        searchTerm: e.target.value
    })

}

handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    this.props.callback(this.state.searchTerm)
    this.setState({searchTerm: ""})
}


  render() {
  return (
    <form onSubmit={this.handleSubmit}>
        Enter a Search Term: 
    <input type="text" name="searchTerm" onChange={this.handleChange}  value={this.state.searchTerm} />
    <input type="submit" value="Find a Gif"/>


  </form>
  )
}


}

export default GifSearch
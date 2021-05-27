import React, { Component } from 'react';


class GifList extends Component {



postGifs() {
 return this.props.gifData.map((gif) => <li><img alt={gif.slug} src={gif.images.original.url}></img></li>)


}

  render() {
  return (
    <ul>
        {this.postGifs()}
    </ul>
  )
}
}

export default GifList
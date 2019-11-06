import React from 'react';
import './New.css';

import api from '../services/api'

export default class New extends React.Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  }

  handleSubmit = async e => {
    e.preventDefault();
    //esse metodo de enviar ao banco é usado quando se tem uma imagem
    const data = new FormData();
    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data);

    this.props.history.push('/')

  }

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <form id="new-post" onSubmit={this.handleSubmit}>
          <input
            type="file"
            onChange={this.handleImageChange}
          />
          <input
            type="text"
            name="author"
            placeholder="autor da postagem"
            onChange={this.handleChange}
            value={this.state.author}
          />
          <input
            type="text"
            name="place"
            placeholder="Local da foto"
            onChange={this.handleChange}
            value={this.state.place}
          />
          <input
            type="text"
            name="description"
            placeholder="Descrição do post"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <input
            type="text"
            name="hashtags"
            placeholder="hashtags do post"
            onChange={this.handleChange}
            value={this.state.hashtags}
          />

          <button type="submit"> Enviar</button>
        </form>
      </div>
    );
  }
}
import axios from "axios";
import React, { Component } from "react";

class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      album: "",
      genre: "",
      release_date: "",
    };
  }

  async createASong() {
    try {
      await axios
        .post("http://127.0.0.1:8000/music/", this.state)
        console.log(this.state)
    } catch (ex) {
      console.log("Error in API call!");
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.createASong();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Title:</label>
          <input
            required
            placeholder="Shrooms n Clouds"
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label>Artist:</label>
          <input
            required
            placeholder="Marco's Funky Bunch"
            type="text"
            name="artist"
            onChange={this.handleChange}
            value={this.state.artist}
          />
          <label>Album:</label>
          <input
            required
            placeholder="Funky tunes of 93"
            type="text"
            name="album"
            onChange={this.handleChange}
            value={this.state.album}
          />
          <label>Genre:</label>
          <input
            required
            placeholder="Funky Pop"
            type="text"
            name="genre"
            onChange={this.handleChange}
            value={this.state.genre}
          />
          <label>Release Date:</label>
          <input
            required
            type="date"
            name="release_date"
            onChange={this.handleChange}
            value={this.state.release_date}
          />
          <button type="submit">Create A Song</button>
        </form>
      </div>
    );
  }
}

export default CreateSong;

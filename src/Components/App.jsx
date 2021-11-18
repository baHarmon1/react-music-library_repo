import axios from "axios";
import React, { Component } from "react";
import CreateSong from "./CreateSong/CreateSong";
import MusicLibraryTable from "./MusicLibraryTable/MusicLibraryTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
    };
  }

  componentDidMount() {
    this.getTable();
  }

  async getTable() {
    try {
      let responseTable = await axios.get("http://127.0.0.1:8000/music/");
      this.setState({
        table: responseTable.data,
      });
      console.log(responseTable);
    } catch (ex) {
      console.log("Error in API call!");
    }
  }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  // deleteRow(indexOfTR) {
  //   try {
  //     await axios.delete();
  //   } catch (ex) {
  //     console.log("Error in API call!");
  //   }
  // }

  test = (someIndex) => {
    alert(`This is a test on ${someIndex}!`)
  }

  render() {
    return (
      <div>
        <MusicLibraryTable table={this.state.table} test={this.test} />
        <CreateSong />
        <h1>Test from App</h1>
      </div>
    );
  }
}

export default App;

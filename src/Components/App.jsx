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

   async deleteRow(PKey) {
    try {
      await axios.delete('http://127.0.0.1:8000/music/' + PKey + "/");
    } catch (ex) {
      console.log("Error in API call!");
    }
  }

  render() {
    return (
      <div>
        <MusicLibraryTable table={this.state.table} deleteRow={this.deleteRow} />
        <CreateSong />
      </div>
    );
  }
}

export default App;
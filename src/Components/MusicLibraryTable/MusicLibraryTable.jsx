import React, { Component } from "react";
class MusicLibraryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Test1</th>
            <th>Test2</th>
          </tr>
          <tr>
            <th>Test1</th>
            <th>Test2</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default MusicLibraryTable;

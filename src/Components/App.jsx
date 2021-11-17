import axios from "axios";
import React, { Component } from 'react'
import MusicLibraryTable from "./MusicLibraryTable/MusicLibraryTable";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div>
                <MusicLibraryTable />
                <h1>Test from App</h1>
            </div>
         );
    }
}
 
export default App;

// Get request = http://127.0.0.1:8000/music/
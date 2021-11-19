import React from "react";
import axios from "axios";

const MusicLibraryTable = (props) => {
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <td>Title</td>
            <td>Artist</td>
            <td>Album</td>
            <td>Genre</td>
            <td>Release Date</td>
            <td> </td>
          </tr>
        </thead>
        <tbody>
          {props.table.map((e) => (
            <tr>
              <td>{e.title}</td>
              <td>{e.artist}</td>
              <td>{e.album}</td>
              <td>{e.genre}</td>
              <td>{e.release_date}</td>
              <td>
                <button
                  onClick={() => {
                    props.deleteRow(e.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicLibraryTable;

import React from "react";

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
          {props.table.map((e, i) => (
            <tr key={i}>
              <td>{e.title}</td>
              <td>{e.artist}</td>
              <td>{e.album}</td>
              <td>{e.genre}</td>
              <td>{e.release_date}</td>
              <td>
                <button // Consider moving functionality to an alert to confirm the deletion of a song.
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

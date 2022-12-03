import React, { useState } from "react";

const Authors = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        className="overlay"
        style={!openModal ? { display: "none" } : { display: "flex" }}
      ></div>
      <button
        className="dashboard-btn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add Author
      </button>
      <form
        className="addForm"
        action=""
        style={!openModal ? { display: "none" } : { display: "flex" }}
      >
        <i
          className="fa fa-times exit"
          onClick={() => {
            setOpenModal(false);
          }}
          aria-hidden="true"
        ></i>
        <h2>Add Author</h2>
        <input
          type="text"
          className="addForm-input"
          placeholder="Author Name"
        />
        <input
          type="text"
          className="addForm-input"
          placeholder="Author Book Number"
        />

        <button type="submit" className="dashboard-btn">
          Submit
        </button>
      </form>
      <table className="dashboard-active dashboard-table dash-authors">
        <thead>
          <tr>
            <th>Book</th>
            <th>Contact</th>
            <th>Contact</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-offline">submit</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-online">submit</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-online">submit</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-offline">submit</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-offline">submit</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-offline">submit</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-offline">submit</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-online">submit</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-offline">submit</button>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>zzzz</td>
            <td>
              <button className="btn btn-online">submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Authors;

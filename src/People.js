import React from "react";

class People extends React.Component {
  render() {
    const { people, onDelete } = this.props;
    return (
      <div>
        <h2>Total People {people.length}</h2>
        <ul>
          {people.map((person, idx) => (
            <li key={idx}>
              {person.name}
              <button onClick={() => onDelete(idx)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default People;

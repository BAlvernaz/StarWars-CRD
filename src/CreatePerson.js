import React from "react";

class CreatePerson extends React.Component {
  constructor() {
    super();
    this.state = {
      newPerson: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(ev) {
    this.setState({ newPerson: ev.target.value });
  }

  handleSubmit(ev) {
    const { people } = this.props
    ev.preventDefault();
    people.push({ name: this.state.newPerson })
    window.location.hash = '/people'
  }


  render() {
    const { newPerson } = this.state;
    const { onChange, handleSubmit } = this;
    return (
      <div>
        <h2>Create A Person</h2>
        <form>
          <label htmlFor="newPerson">
            New Person:
            <input
              type="text"
              name="newPerson"
              value={newPerson}
              onChange={onChange}
            />
          </label>
          <div>
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePerson;

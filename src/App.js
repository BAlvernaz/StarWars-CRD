import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import People from "./People";
import CreatePerson from "./CreatePerson";
import axios from "axios";

const Home = () => {
  return <h2>Home</h2>;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
    this.onDelete = this.onDelete.bind(this);
    this.grabPeople = this.grabPeople.bind(this)
  }

  onDelete(idx) {
    // Good use of _ to indicate something that is not used outside the callback!
    const people = this.state.people.filter((person, _idx) => _idx !== idx);
    this.setState({ people });
  }
  // Like the name for this method!
  async grabPeople() {
    const repson = await axios.get(
      "https://profs-star-wars.herokuapp.com/people"
    );
    const people = repson.data;
    this.setState({ people });
  }

  async componentDidMount() {
    // Great work the way you're updating state.
    const repson = await axios.get(
      "https://profs-star-wars.herokuapp.com/people"
    );
    const people = repson.data;
    this.setState({ people });
  }


  render() {
    const { people } = this.state;
    const { onDelete, grabPeople } = this;
    return (
      <HashRouter>
        <div>
          {/* Nice work breaking out your navbar into another component */}
          <Navbar people={people}/>
          <div className='routes'>
            <Route exact path="/" component={Home} />
            {/* Good passing down the methods */}
            <Route
              path="/people"
              render={() => <People people={people} onDelete={onDelete} />}
            />
            <Route
              path="/create"
              render={() => <CreatePerson people={people} grabPeople={grabPeople} />}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

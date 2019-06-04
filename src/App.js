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
    const people = this.state.people.filter((person, _idx) => _idx !== idx);
    this.setState({ people });
  }

  async grabPeople() {
    const repson = await axios.get(
      "https://profs-star-wars.herokuapp.com/people"
    );
    const people = repson.data;
    this.setState({ people });
  }

  async componentDidMount() {
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
          <Navbar people={people}/>
          <div className='routes'>
            <Route exact path="/" component={Home} />
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

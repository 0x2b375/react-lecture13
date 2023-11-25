import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => this.setState({ persons: response.data }));
  }
  render() {
    const { persons } = this.state;
    return (
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PersonList />);

export default PersonList;

import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
class DeleteRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }
  componentDidMount() {
    axios
      .delete("https://reqres.in/api/posts/1")
      .then(() => this.setState({ status: "Delete successful" }));
  }
  render() {
    const { status } = this.state;
    return <div>Status: {status}</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DeleteRequest />);

export default DeleteRequest;

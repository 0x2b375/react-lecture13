import React from "react";
import ReactDOM from "react-dom/client";
class DeleteRequestFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    }).then(() => this.setState({ status: "Delete successful" }));
  }
  render() {
    const { status } = this.state;
    return <div>Status: {status}</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DeleteRequestFetch />);
export default DeleteRequestFetch;

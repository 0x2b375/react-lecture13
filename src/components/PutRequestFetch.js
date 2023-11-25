import React from "react";
import ReactDOM from "react-dom/client";
class PutRequestFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: null,
    };
  }
  componentDidMount() {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React PUT Request Example" }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  }
  render() {
    const { postId } = this.state;
    return <div>Returned Id: {postId}</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PutRequestFetch />);
export default PutRequestFetch;

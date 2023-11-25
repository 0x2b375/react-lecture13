import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
class PutRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedAt: [],
    };
  }
  componentDidMount() {
    const article = { title: "React PUT Request Example" };
    axios
      .put("https://reqres.in/api/articles/1", article)
      .then((response) =>
        this.setState({ updatedAt: response.data.updatedAt })
      );
  }
  render() {
    const { updatedAt } = this.state;
    return <div>Returned Update Date: {updatedAt}</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PutRequest />);

export default PutRequest;
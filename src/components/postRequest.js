import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
class PostRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: [],
    };
  }
  componentDidMount() {
    const article = { title: "React POST Request Example" };
    axios
      .post("https://reqres.in/api/articles", article)
      .then((response) => this.setState({ articleId: response.data.id }));
  }
  render() {
    const { articleId } = this.state;
    return <div> Returned Id: {articleId}</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PostRequest />);

export default PostRequest;
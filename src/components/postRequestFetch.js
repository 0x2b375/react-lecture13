import React from "react";

class PostRequestFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: null,
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };

    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }))
      .catch((error) => {
        console.error("Error:", error);
        this.setState({ postId: null });
      });
  }

  render() {
    const { postId } = this.state;
    return <div>Returned Id: {postId}</div>;
  }
}

export default PostRequestFetch;

import React from "react";
import ReactDOM from "react-dom/client";
class GetRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReactPackages: null,
    };
  }
  componentDidMount() {
    fetch("https://api.npms.io/v2/search?q=react")
      .then((response) => response.json())
      .then((data) => this.setState({ totalReactPackages: data.total }));
  }
  render() {
    const { totalReactPackages } = this.state;
    return <div>Total react packages: {totalReactPackages}</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GetRequest />);
export default GetRequest;
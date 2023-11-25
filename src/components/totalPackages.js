import React from "react";
import axios from "axios";

class GetRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReactPackages: 0, 
    };
  }

  componentDidMount() {
    axios
      .get("https://api.npms.io/v2/search?q=react")
      .then((response) =>
        this.setState({
          totalReactPackages: response.data.total || 0, 
        })
      )
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ totalReactPackages: 0 }); 
      });
  }

  render() {
    const { totalReactPackages } = this.state;
    return <div>Total react packages: {totalReactPackages}</div>;
  }
}

export default GetRequest;

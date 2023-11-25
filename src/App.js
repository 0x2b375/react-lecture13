import GetRequest from "./components/totalPackages";
import PersonList from "./components/personList";
import PostRequest from "./components/postRequest";
import PutRequest from "./components/putRequest";
import DeleteRequest from "./components/deleteRequest";
import GetRequestFetch from "./components/getRequestFetch";
import PostRequestFetch from "./components/postRequestFetch";
import PutRequestFetch from "./components/PutRequestFetch";
import DeleteRequestFetch from "./components/DeleteRequestFetch";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Axios</h1>
        <h2>GetRequest</h2>
        <GetRequest />
        <h2>PersonList</h2>
        <PersonList />
        <h2>PostRequest</h2>
        <PostRequest />
        <h2>PutRequest</h2>
        <PutRequest />
        <h2>DeleteRequest</h2>
        <DeleteRequest />
      </div>
      <div style={{ textAlign: "right" }}>
        <h1>Fetch</h1>
        <h2>GetRequest</h2>
        <GetRequestFetch />
        <h2>PostRequest</h2>
        <PostRequestFetch/>
        <h2>PutRequest</h2>
        <PutRequestFetch/>
        <h2>DeleteRequest</h2>
        <DeleteRequestFetch/>
      </div>
    </div>
  );
}

export default App;

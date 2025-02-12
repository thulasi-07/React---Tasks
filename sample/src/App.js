import { useEffect, useState } from "react";
import { getPosts } from "./api/Index";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
import "./App.css";
      
function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);  

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));

  }

  return (
     <div className="App">
      {userData && <UserCard data={userData}/>}
      <button onClick={refresh}>Refresh User</button>
      {data ? (
        data.map((e) => <PostCard title={e.title} body = {e.body}/>)
      ) : (
        <p>No Data</p>
      )}
     </div>
  );
}
export default App;

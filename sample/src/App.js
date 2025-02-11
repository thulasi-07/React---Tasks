import { useEffect, useState } from "react";
import { getPosts } from "./api";
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

  console.log(userData);

  return (
     <div className="App">
      <UserCard data={userData}/>
      {data ? (
        data.map((e) => <PostCard title={e.title} body = {e.body}/>)
      ) : (
        <p>No Data</p>
      )}
     </div>
  );
}
export default App;

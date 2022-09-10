import React, {useState} from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

const App = props => {
  const [usersList, setUsersList] = useState([]);
  const onAddUsersHandler = (uName, uAge) => {
    setUsersList((prevUsersList)=> {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  }
  return (
    <div>
      <AddUser onAddUsers={onAddUsersHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;

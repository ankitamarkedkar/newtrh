import React, { useState } from "react";
import Audio from "./Audio";
import Adduser from "./Adduser";
const User = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const editUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD User with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <Adduser addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>Edit user</h2>
          <Audio users={users} editUser={editUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <Audio users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default User;

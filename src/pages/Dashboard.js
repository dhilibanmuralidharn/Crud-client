import React, { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "../api/userApi";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const loadUsers = async () => {
    const usersData = await fetchUsers();
    setUsers(usersData);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserForm
        fetchUsers={loadUsers}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <div className="mt-6">
        <UserList
          users={users}
          setCurrentUser={setCurrentUser}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
};

export default Dashboard;

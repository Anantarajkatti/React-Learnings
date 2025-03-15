import React, { useState } from "react";

function CrudHome() {
  const array = [
    {
      name: "name1",
      email: "namw1@email.com",
    },
  ];
  const [users , setUsers]=useState(array)
  const [user, setUser] = useState({ name: "", email: "" });
  return (
    <div>
      <div className="Crud container">
        <input
          type="text"
          placeholder="name"
          value={user.name}  // added to show what is current value of user.name  // to empty after addition of user
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <button
          onClick={() => {
           if(user.name) // to prevent empty entries to update in table
            setUsers([...users,user])
            console.log(users)
            setUser({ name: "", email: "" }); // to empty after addition of user
          }}
        >
          {" "}
          Add User
        </button>
        <div className="table">
          <table>
            <tr>
              <th>Sr.No</th>
              <th> name</th>
              <th>Email</th>
            </tr>
            {users.map((user, index) => (
              <tr>
                <td> {index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default CrudHome;

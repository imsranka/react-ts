import React, { useState } from "react";
import { User } from "../interfaces";
// type annotation

const UserDetails = () => {
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = () =>
    setUser({
      name: "Mike",
      age: 23,
      country: "Forever Land",
      admin: false,
      address: {
        street: "XYZ",
        zip: 4000,
      },
    });
  return (
    <>
      <button onClick={fetchUser}> Fetch User</button>
      {user && <p>{`Welcome ${user.name}`}</p>}
    </>
  );
};

export default UserDetails;

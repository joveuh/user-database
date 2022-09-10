import React, { useReducer } from "react";
import Card from "../ui/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
    <ul className={styles.users["ul"]}>
      {props.users.map((user) => (
        <li className={styles.users["li"]}  key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UserList;

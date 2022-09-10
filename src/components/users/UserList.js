import React from "react";
import Card from "../ui/Card";
import styles from "./UserList.module.css";
import ErrorModal from "../ui/ErrorModal";

const UserList = (props) => {
  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong"/>
      <Card className={styles.users}>
        <ul className={styles.users["ul"]}>
          {props.users.map((user) => (
            <li className={styles.users["li"]} key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserList;

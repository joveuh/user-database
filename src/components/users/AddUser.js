import React from "react";
import Card from "../ui/Card";
import styles from './AddUser.module.css';
import Button from "../ui/Button";

const AddUser = props => {
    const onSubmitHandler = event => {
        event.preventDefault();
  
    }
    return (
        <Card className={styles.input}>
            <form onSubmit = {onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input htmlFor="username" type="text"></input>
                <label htmlFor="age">Age</label>
                <input htmlFor="age" type="text"></input>
                <Button type="submit"><Button>test<Button>Another test</Button></Button>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;
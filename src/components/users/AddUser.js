import React, {useState} from "react";
import Card from "../ui/Card";
import styles from './AddUser.module.css';
import Button from "../ui/Button";



const AddUser = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameHandler = event => {
        setName(event.target.value);
    };

    const ageHandler = event => {
        setAge(event.target.value);
    };

    const onSubmitHandler = event => {
        event.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0 || age < 1 ){
            return;
        }
        props.onAddUsers(name,age);
        console.log(name, age);
        setName('');setAge('');
  
    }
    return (
        <Card className={styles.input}>
            <form onSubmit = {onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input htmlFor="username" type="text" onChange={nameHandler} value={name}></input>
                <label htmlFor="age">Age</label>
                <input htmlFor="age" type="text" onChange={ageHandler} value={age}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;
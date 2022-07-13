import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/userList";
import {IUser} from "./types/types";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <Card width='200px' height='200px' variant={CardVariant.outlined} >
                <button>
                    Кнопка
                </button>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;
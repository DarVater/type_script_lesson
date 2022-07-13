import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import {useNavigate} from "react-router-dom";

const UserPage:FC= () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers()
    }, [])

    async function  fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <List
            items={users}
            renderItem={(user:IUser) =>
                <UserItem
                    user={user}
                    key={user.id}
                    onClick={(user) => navigate(''+user.id)}
                />}
        />
    );
};

export default UserPage;
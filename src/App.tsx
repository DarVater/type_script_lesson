import React, {useEffect, useState} from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItem from "./components/TodoItem";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/users">Пользователи</NavLink>
                <NavLink to="/todos">Список Дел</NavLink>
            </div>
            <Routes>
                <Route path={'/users'} element={<UserPage/>} />
                <Route path={'/todos'} element={<TodosPage/>} />
                <Route path={'/users/:id'} element={<UserItemPage/>} />
                <Route path={'/todo/:id'} element={<TodoItemPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
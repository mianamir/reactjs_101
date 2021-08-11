import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const UserView = () => {

    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async e => {
        const result = await axios.get(`http://localhost:3005/users/${id}`);
        setUser(result.data);
        
    }; 

    return(
        <>
        <div className="container">
            <Link className="btn btn-primary mt-5 mb-5" to="/">back to Home</Link>

            <h1 className="display-4">User Details: {id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">username: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">website: {user.website}</li>

            </ul>

        </div>
        </>
    );
};

export default UserView;
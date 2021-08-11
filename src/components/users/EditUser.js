import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();

    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    // use JS object distruction
    const { name, username, email, phone, website } = user;

    const onInpChange = e => {
       setUser({...user, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3005/users/${id}`, user);
        history.push('/');
    }; 

    const loadUser = async e => {
        const result = await axios.get("http://localhost:3005/users/" + id);
        setUser(result.data);
        
    }; 

    return(
        <>
        <div className="container">
        <h1 className="mt-5 mb-5">Edit User</h1>
        <form onSubmit={e => onSubmit(e)}>
  <div class="form-group">
    <label for="">Name</label>
    <input 
        type="txt" 
        name="name" 
        class="form-control" 
        placeholder="Enter name"
        value={name} 
        onChange={e => onInpChange(e)}
        />
  </div>
  <div class="form-group">
    <label for="">User Name</label>
    <input 
        type="txt" 
        name="username" 
        class="form-control" 
        placeholder="Enter user name"
        value={username}
        onChange={e => onInpChange(e)}
        />
  </div>
  <div class="form-group">
    <label for="">Email</label>
    <input 
        type="email" 
        name="email" 
        class="form-control" 
        placeholder="Enter email"
        value={email}
        onChange={e => onInpChange(e)}
        />
  </div>
  <div class="form-group">
    <label for="">Phone Number</label>
    <input 
        type="txt" 
        name="phone" 
        class="form-control" 
        placeholder="Enter phone number"
        value={phone} 
        onChange={e => onInpChange(e)}
        />
  </div>

  <div class="form-group">
    <label for="">Website</label>
    <input 
        type="txt" 
        name="website" 
        class="form-control" 
        placeholder="Enter website"
        value={website}
        onChange={e => onInpChange(e)}
        />
  </div>
  
  <button type="submit" class="btn btn-info mt-3">Update</button>
</form>
        </div>
        </>
    );

};


export default EditUser;
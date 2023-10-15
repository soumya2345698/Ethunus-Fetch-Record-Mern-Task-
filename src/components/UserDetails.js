import Axios from "axios";
import { React, useEffect, useState } from "react";

import "./UserDetails.css";

function UserDetails(){
    const [tableContent, setTableContent] = useState([])
    const url = "https://dummyjson.com/users/";

    // const fetchRecords = () => {
    //     const numbers = ["1", "2", "3"]
    //     return numbers.map((id) => {
    //         Axios.get(url + id).then((response) => {
    //             setTableContent(tableContent => [...tableContent, response.data.])
    //         } )
    //     })
    // }

    useEffect(() => {
        // fetchRecords();
        Axios.get(url)
        .then((res) => {
            if(res.status === 200){
                // console.log(res.data.users);
                setTableContent(res.data.users)
            }
            else{
                Promise.reject();
            }
        })
        .catch((err) => alert(err))
    }, [])

    const renderTable = (tableContent) => {
        return tableContent.map(user => {
            return(
                <tr key = {user.id}>
                    <td>{user.id}</td>
                    <td><img src = {user.image} style={{"height": "40px", "width":"40px"}} alt = {user.id}/></td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.domain}</td>
                    <td>{user.ip}</td>
                    <td>{user.university}</td>
                </tr>
            )
        })
    }
    
    console.log(tableContent);
    return (
        
        <div>
           <h1 style={{"textAlign":"center", "color":"white"}}>Dummy data</h1>
           
           <table className="user-details">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th className="profile">Profile Pic</th>
                    <th className="first-name">First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </tr>
            </thead>
            <tbody>{renderTable(tableContent)}</tbody>
            </table> 
        </div>
    )
}
export default UserDetails;
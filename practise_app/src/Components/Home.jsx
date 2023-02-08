import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
import Detail from "./Detail";

function Home() {
    const [apiData, setApiData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    console.log(process.env);
    useEffect(() => {
        axios.get("http://localhost:3001/employees_data").then((res) => {
            // console.log(res.data);
            setApiData(res.data);
        }).catch((err) => {
            console.log("Error", err);
        });
    }, [])
    
    // console.log(apiData);
    console.log(selectedUser);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center data-list">
                    <div className="col-lg-8 datas">
                        {/* <h4>Here are the details of the employee</h4> */}
                        <ul className="display-screen">
                            {
                                apiData?.map((data, index) => (
                                    <li
                                        className='emp_detail'  
                                        key={index}
                                        onClick={(() => { setSelectedUser(selectedUser === index ? null : index) })}>
                                        {data.first_name}
                                        {/* Inorder to show the details of corresponding clicked user under below ,here we create a new state and then if data present in that state we are rendering a detail component containing those details   */}
                                        {/* But the prblm we face is that when the state (selectedUser) gets upadted then the details component gets rendered on all the names below that should be avoided  */}
                                        {/* for tht purpose on the below line we check the ids of the selectedUser state and the data(iterator of the apiData) of the map function are same then we are rendering the details component so hence here we can get the desired output  */}
                                        {index === selectedUser ?<Detail selectedUser={data}/>:null}
                                    </li>
                                    
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;


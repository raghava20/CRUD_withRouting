import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css"

function Content({ data, setData }) {

    let navigate = useNavigate();

    let handleDelete = (e) => {
        data.splice(data.indexOf(e), 1)
        setData([...data])
    }
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Profile</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">No Of Product</th>
                        <th scope="col">Due</th>
                        <th scope="col">Status</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e, i) => {
                            return <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td><div className='profile-box' onClick={() => navigate("/edit-profile/" + i)}><img className='shorter-logo' src={e.profile} alt="profile" /></div></td>
                                <td>{e.user}</td>
                                <td>{e.productName}</td>
                                <td>{e.noOfProduct}</td>
                                <td>{e.Due}</td>
                                <td>{e.status}</td>
                                <td><button onClick={() => navigate("/edit-user/" + i)} className="btn btn-primary">Edit</button> &nbsp;&nbsp;
                                    <button onClick={() => handleDelete(e)} className="btn btn-danger">Delete</button></td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Content

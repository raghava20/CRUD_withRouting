import React, { useState } from 'react'

function Content({ data, setData }) {

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
                                <td>{e.user}</td>
                                <td>{e.productName}</td>
                                <td>{e.noOfProduct}</td>
                                <td>{e.Due}</td>
                                <td>{e.status}</td>
                                <td><button className="btn btn-primary">Edit</button> &nbsp;&nbsp;
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

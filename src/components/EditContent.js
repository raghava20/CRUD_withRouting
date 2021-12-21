import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function EditContent({ data, setData }) {

    useEffect(() => {
        getData();
    }, [])// getData will load all the data of the user before it will render 

    let navigate = useNavigate();
    let { id } = useParams();

    let [profile, setProfile] = useState("");
    let [user, setUser] = useState("");
    let [productName, setProductName] = useState("");
    let [noOfProduct, setNoOfProduct] = useState("");
    let [Due, setDue] = useState("");
    let [status, setStatus] = useState("");

    let handleSave = () => {
        data[id] = (
            {
                profile,
                user,
                productName,
                noOfProduct,
                Due,
                status,
            }
        )
        setData([...data])
        console.log(data)
        navigate('/ProductAndUsers')
    }

    let getData = () => {
        let value = data[id]
        setUser(value.user)
        setProductName(value.productName)
        setNoOfProduct(value.noOfProduct)
        setDue(value.Due)
        setStatus(value.status)
        setProfile(value.profile)

        handleCheckedForStatus(value.status) //for changing the radio button value
        handleCheckedForDue(value.Due) //for changing the radio button value
    }
    let handleCheckedForStatus = (status) => {
        if (status === "Pending") {
            document.querySelector("#btnradio1").setAttribute('checked', true)
        } else if (status === "In-Progress") {
            document.querySelector("#btnradio2").setAttribute('checked', true)
        } else if (status === "Completed") {
            document.querySelector("#btnradio3").setAttribute('checked', true)
        }
    }
    let handleCheckedForDue = (due) => {
        if (due === "Paid") {
            document.querySelector("#btnpaid").setAttribute('checked', true)
        } else if (due === "Not Paid") {
            document.querySelector("#btnnotpaid").setAttribute('checked', true)
        }
    }

    return (
        <div>
            <h1>Edit User</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputPassword1">Profile Pic</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <input type="text" class="form-control" value={profile} onChange={(e) => setProfile(e.target.value)} placeholder="Enter Pic url" /><br /> */}
                    <img className='user-logo' src={profile} alt="profile" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">User Name</label>
                    <input type="text" class="form-control" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Product Name</label>
                    <input type="text" class="form-control" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter Product" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">No Of Product</label>
                    <input type="number" class="form-control" value={noOfProduct} onChange={(e) => setNoOfProduct(e.target.value)} placeholder="Enter No of Product" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Due</label><br />
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio1" value={Due} onClick={() => { setDue("Paid"); console.log(setStatus) }} id="btnpaid" autocomplete="off" />
                        <label class="btn btn-outline-success" for="btnpaid">Paid</label>

                        <input type="radio" class="btn-check" name="btnradio1" value={Due} onClick={() => setDue("Not Paid")} id="btnnotpaid" autocomplete="off" />
                        <label class="btn btn-outline-danger" for="btnnotpaid">Not Paid</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Status</label><br />
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" value={status} onClick={() => setStatus("Pending")} id="btnradio1" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio1">Pending</label>

                        <input type="radio" class="btn-check" name="btnradio" value={status} onClick={() => setStatus("In-Progress")} id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-secondary" for="btnradio2">In-Progress</label>

                        <input type="radio" class="btn-check" name="btnradio" value={status} onClick={() => setStatus("Completed")} id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-success" for="btnradio3">Completed</label>

                    </div>
                </div>

                <button onClick={handleSave} class="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default EditContent

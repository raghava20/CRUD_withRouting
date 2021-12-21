import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditProfilePic({ data, setData }) {

    useEffect(() => {
        getData();
    }, [])// getData will load all the data of the user before it will render 


    const { id } = useParams();
    let value = data[id]
    let navigate = useNavigate();
    let [pic, setPic] = useState("")
    let [user, setUser] = useState("");
    let [productName, setProductName] = useState("");
    let [noOfProduct, setNoOfProduct] = useState("");
    let [Due, setDue] = useState("");
    let [status, setStatus] = useState("");

    let getData = () => {
        setPic(value.profile)
        setUser(value.user)
        setProductName(value.productName)
        setNoOfProduct(value.noOfProduct)
        setDue(value.Due)
        setStatus(value.status)
    }
    let handleSave = () => {
        data[id] = (
            {
                profile: pic,
                user,
                productName,
                noOfProduct,
                Due,
                status,
            }
        )
        setData([...data])
        navigate('/ProductAndUsers')
    }
    return (
        <div>
            <form>
                <div class="form-group"><br />
                    <label for="exampleInputPassword1">Profile Pic</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" class="form-control" value={pic} onChange={(e) => setPic(e.target.value)} placeholder="Enter Pic url" /><br />
                    <img className='user-logo' src={pic} alt="profile" />
                </div>
                <button onClick={handleSave} class="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default EditProfilePic

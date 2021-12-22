import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../App';

function EditProfilePic() {

    useEffect(() => {
        getData();
    }, [])// getData will load all the data of the user before it will render 


    let context = useContext(UserContext);
    let navigate = useNavigate();
    const { id } = useParams();
    let value = context.data[id]

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
        context.data[id] = (
            {
                profile: pic,
                user,
                productName,
                noOfProduct,
                Due,
                status,
            }
        )
        context.setData([...context.data])
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

import { Card, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import ClockIcon from "../../assets/image/UpdateAtIcon.png";
import Category from "../../assets/image/CategoryIcon.png";
import DeleteIcon from "../../assets/image/deleteIcon.png";
import EditIcon from "../../assets/image/editIcon.png";
import { useState } from 'react';
import DeleteConfirm from './DeleteConfirm';
// import axios from 'axios';
// import { remove } from "../../redux/ListCar/slice";
// import { useDispatch, useSelector } from 'react-redux';


function CarItem({  id, name, price, category, image, updatedAt }) {
    const navigate = useNavigate();
    const [showConfirm, setShowConfirm] = useState();
    // const dispatch = useDispatch();
    // const login = useSelector((state) => state.login);

   

    // const deletedCar = async (e) =>{
    //     e.preventDefault();
    //     // return console.log(login.user.access_token)
    //     try{
    //         const response = await axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, 
    //         {
    //             headers: {
    //                 access_token: login.user.access_token,
    //             }
    //         }
    //         );
    //         dispatch(remove(response.data))
    //     }catch(error){
    //         console.log("error >", error)
    //     }
        
    // }
  



    return (       
        <>
        
        <DeleteConfirm show={showConfirm} onHide={() => setShowConfirm(false)} id={id}/>
            <Card className='p-3' >
                <div style={{ width: '100%', height: '18rem' }}>
                    <img
                        src={image}
                        alt="mobil"
                        style={{ width: '100%', height: '100%', objectFit:'contain' }}
                        />
                </div>
                <Card.Body>
                    <Card.Title>
                        <p>{name}</p>
                    </Card.Title>
                    <Card.Title>{price} </Card.Title>
                    <Card.Text className="carCategory">
                        <Image src={Category} className="me-2"></Image>{category}
                    </Card.Text>
                    <Card.Text>
                        <Image src={ClockIcon} className="me-2"/>
                        {updatedAt}
                    </Card.Text>
                    <Button
                        variant="outline-danger"
                        style={{ width: "45%" }}
                        className="me-3 rounded-0"
                        // onClick={deletedCar}
                        onClick={()  => setShowConfirm(true)}
                        >
                        <Image src={DeleteIcon} className="me-2"
                        
                        />
                        Delete
                    </Button>
                    <Button
                        variant="success"
                        style={{ width: "45%" }}
                        className="rounded-0"
                        onClick={() => navigate(`/editcar/${id}`)}
                    >
                        <Image src={EditIcon} className="me-2"></Image>
                        Edit
                    </Button>
                </Card.Body>
            </Card>
        </>
    );

}

export default CarItem;
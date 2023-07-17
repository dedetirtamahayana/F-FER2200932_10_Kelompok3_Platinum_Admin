import { Button, Card, Modal } from "react-bootstrap";
import DeleteConfirmCar from "../../assets/image/DeleteConfirmIcon.png";
import { useDispatch } from "react-redux";
// import deletedId from './CarItem';
import { remove } from "../../redux/ListCar/slice";
import axios from "axios";

function DeleteConfirm(props) {
  const { show, onHide, id } = props;
  const dispatch = useDispatch();


  const deletedCar = async (e) =>{
    e.preventDefault();
    try{
        const response = await axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, 
        {
            headers: {
                access_token: 
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
            }
        }
        );
        dispatch(remove(response.data));
        onHide();

    }catch(error){
        console.log("error >", error)
    }
    
}

  return (
    <Modal show={show} onHide={onHide} >
    <Modal.Header className="border-0" closeButton />
      <Modal.Body>
        <div>
          <Card className="text-center border-0">
            <Card.Img
              variant="top"
              src={DeleteConfirmCar}
              style={{ width: "100%" }}
            />
            <Card.Body>
              <Card.Title>Menghapus Data Mobil</Card.Title>
              <Card.Text>
                Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
                menghapus?
              </Card.Text>
              <Button variant="outline-primary" onClick={deletedCar}>Ya</Button>
              <Button variant="outline-primary" onClick={() => onHide()}>Tidak</Button>
            </Card.Body>
          </Card>
        </div>
      </Modal.Body>
    </Modal>
    
  );
}

export default DeleteConfirm;

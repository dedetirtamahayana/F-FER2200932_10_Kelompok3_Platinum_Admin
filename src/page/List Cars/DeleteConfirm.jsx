import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import DeleteConfirmCar from "../../assets/image/DeleteConfirmIcon.png";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/ListCar/slice";
import axios from "axios";
import { Toast, ToastContainer, ToastHeader, ToastBody } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";

function DeleteConfirm(props) {
  const { show, onHide, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isToastShow, setIsToastShow] = useState(false);
  const [bgToast, setBgToast] = useState();
  const [showmsg, setShowMsg] = useState();

  const deletedCar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://api-car-rental.binaracademy.org/admin/car/${id}`,
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
          },
        }
      );
      dispatch(remove(response.data));
      onHide();
      // window.location.reload();
      setBgToast("success");
      setShowMsg("Data Berhasil Disimpan");
      setIsToastShow(true);
      setTimeout(() => {
        navigate("/listcars");
      }, 2000);
    } catch (error) {
      setBgToast("danger");
      setShowMsg("Gagal Update ");
      setIsToastShow(true);
      console.log("error >", error);
    }
  };

  const showToast = (e) => {};

  return (
    <Container fluid>
      <Modal show={show} onHide={onHide}>
        <Modal.Header className="border-0" closeButton />
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-center">
            <Card className="text-center border-0">
              <Card.Img
                variant="top"
                src={DeleteConfirmCar}
                style={{ width: "100%" }}
              />
              <Card.Body>
                <Card.Title>Menghapus Data Mobil</Card.Title>
                <Card.Text>
                  Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                  ingin menghapus?
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={deletedCar}
                  className="me-4 w-25">
                  Ya
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => onHide()}
                  className="w-25">
                  Tidak
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default DeleteConfirm;

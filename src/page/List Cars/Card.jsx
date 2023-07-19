import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import DeleteIcon from "../../assets/image/deleteIcon.png";
import EditIcon from "../../assets/image/editIcon.png";
import KeyIcon from "../../assets/image/StartRentIcon.png";
import UpdatedAtIcon from "../../assets/image/UpdateAtIcon.png";
import CategoryIcon from "../../assets/image/CategoryIcon.png";
import { useNavigate } from "react-router";
import "./Card.css";
import dayjs from "dayjs";

function CardCar({ name, price, category, image, updatedAt }) {
  const formatIdr = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const CATEGORY = {
    small: "2 - 4 orang",
    medium: "4 - 6 orang",
    large: "6 - 8 orang",
  };

  const navigate = useNavigate();
  return (
    <Card className="card">
      <Card.Img className="cardImage" variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <p>{name}</p>
        </Card.Title>
        <Card.Title>{formatIdr.format([price])} / hari</Card.Title>
        <Card.Text className="carCategory">
          <Image src={CategoryIcon} className="me-2" />
          {CATEGORY[category]}
        </Card.Text>
        <Card.Text>
          <Image src={UpdatedAtIcon} className="me-2" />
          Updated at ({dayjs(updatedAt).format("DD MMMM YYYY, HH:MM")})
        </Card.Text>
        <Button
          variant="outline-danger"
          style={{ width: "45%" }}
          className="me-3 rounded-0">
          <Image src={DeleteIcon} className="me-2"></Image>
          Delete
        </Button>
        <Button
          variant="success"
          style={{ width: "45%" }}
          className="rounded-0"
          onClick={() => navigate("/editcar")}>
          <Image src={EditIcon} className="me-2"></Image>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardCar;

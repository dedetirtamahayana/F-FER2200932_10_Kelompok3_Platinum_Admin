import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import CardImage from "../../assets/image/CardImage.png";
import DeleteIcon from "../../assets/image/deleteIcon.png";
import EditIcon from "../../assets/image/editIcon.png";
import KeyIcon from "../../assets/image/StartRentIcon.png";
import ClockIcon from "../../assets/image/UpdateAtIcon.png";
import Category from "../../assets/image/CategoryIcon.png";

function CardCar() {
  //   const category = [{}];

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={CardImage} />
      <Card.Body>
        <Card.Title>
          <p>Nama/Tipe Mobil</p>
        </Card.Title>
        <Card.Title>Rp 430.000 / hari </Card.Title>
        <Card.Text className="carCategory">
          <Image src={Category} className="me-2"></Image>6 - 8 people
        </Card.Text>
        <Card.Text>
          <Image src={ClockIcon} className="me-2"></Image>
          Updated at 4 Apr 2022, 09.00
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
          className="rounded-0">
          <Image src={EditIcon} className="me-2"></Image>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardCar;

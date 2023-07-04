import React from "react";
import { Button, Card } from "react-bootstrap";
import DeleteConfirmCar from "../../assets/image/DeleteConfirmIcon.png";

function DeleteConfirm() {
  return (
    <div>
      <Card className="text-center">
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
          <Button variant="outline-primary">Ya</Button>
          <Button variant="outline-primary">Tidak</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DeleteConfirm;

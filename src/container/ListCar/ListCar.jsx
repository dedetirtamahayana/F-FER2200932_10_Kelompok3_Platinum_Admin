import { Col, Container, Row } from 'react-bootstrap';
import CarItem from './CarItem';

import axios from 'axios';
import { useEffect, useState } from 'react';

function CardCar() {
    const [cars, setCars] = useState([]);
    const fetchCars = async () => {
        try {
            const response = await axios.get(
                'https://api-car-rental.binaracademy.org/admin/v2/car',
                {
                    headers: {
                      access_token: 
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
                    }
                  }
            );
            setCars(response.data.cars);
            } catch (error) {
                console.log('error > ', error);
            }
        };

        useEffect(() => {
            fetchCars();
        }, []);

       
        
        return (
            <Container>
                <Row className="g-3">
                    {cars && cars.length > 0 && cars.map((item) => (
                    <Col lg={4}>
                        <CarItem
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        category={item.category}
                        updatedAt={item.updatedAt}
                    />
                    </Col>
                    
                ))}
                </Row>
            </Container>
            
        );
        }
        
        export default CardCar;
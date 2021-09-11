import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { data } from "../db";
import css from '../App.css'
const ShowCard = () => {
    const [listCard, setListCard] = useState(data);
    // const deleteItem = (id) => {
    //     const newItem = listCard.filter((item) => item.id !== id);
    //     console.log(id)
    //     setListCard(newItem);
    // }
    return (
        <React.Fragment>
            {
                listCard.map((item) => {
                    const {id, name, pic, price} = item;
                    return (                 
                        <div key="id" className="listItem">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={`./img/item/${pic}`} id="img-item" />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        {price}₫
                                    </Card.Text>
                                    <Button variant="primary">Thêm vào giỏ hàng</Button><br></br>
                                    {/* <Button variant="primary" onClick={() => deleteItem([])}>xóa </Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default ShowCard;

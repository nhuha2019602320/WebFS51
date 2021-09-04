
import React, { Component } from 'react'
import PostData from '../Data/db.json'

import { Card, CardGroup, Button } from 'react-bootstrap';
export default class ProductContainer extends Component {
    constructor (props) {
        super(props);
        this.state = [];
    }
    render() {
        return (
            <div class="bx">
                {PostData.map((pro, index) => {
                    return <div class="item-product">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={`./img/item/${pro.pic}`} id="img-item" />
                            <Card.Body>
                                <Card.Title>{pro.name}</Card.Title>
                                <Card.Text>
                                    {pro.price}₫
                                </Card.Text>
                                <Button variant="primary" onClick>Thêm vào giỏ hàng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </div>
        )
    }
}

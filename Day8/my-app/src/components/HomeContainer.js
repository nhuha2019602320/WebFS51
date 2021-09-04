import React, { Component } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown'
import ProductContainer from './ProductContainer.js'

export default class HomeContainer extends Component {
  render() {
    return (
      <>
        <ProductContainer />
      </>
    )
  }

}

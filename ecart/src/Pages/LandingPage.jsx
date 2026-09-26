import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// state up the "products" state from "app.jsx"
function LandingPage({Products}) {
     
  return (
    // Products section design
    <div className='mt-5'>
        <div className='d-flex'>
                <p className=' fs-1 fw-bold text-center p-2 flex-grow-1'>Products</p>
               <Link to ='/addproduct'> <Button className=' p-3' variant="primary">Add Products +</Button></Link>  
        </div>
       
        <div className='container-fluid'>
          {/* Reads data in "products state" and map the array */}
            <Row>
                {
                    Products.length>0?

                    Products.map((item)=>(
                        <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                            <Link to ={`/productdetails/${item.id}`}>
                         <Card className='h-100'>
      <Card.Img style={{ height: "250px", objectFit: "contain" }} variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price} $
        </Card.Text>
        <Button  style={{ height: "50px", objectFit: "contain" }} variant="primary">View Product Details</Button>
      </Card.Body>
    </Card>
    </Link>
                        </Col>
                    ))
                    :"Error Not Found"
                }
            </Row>
            
        </div>
    
    </div>
  )
}

export default LandingPage

import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function ProductDetails({Products,setProducts}) {
  // usenavigate for page redirection
  const navigate = useNavigate()
  // to store edited data
   const [Formdata,setFormData]= useState({
          title:'',
          price:'',
          description:'',
          category:'',
          image: ''
      })
//  value to be set when modal is shown
  const [show, setShow] = useState(false);
  
    const handleClose = () =>  setShow(false);
    // stores the data from "product" to formdata so it can show the product details when we press edit button
    const handleShow = () =>{
      
      setFormData({
        title: Product.title,
    price: Product.price,
    description: Product.description,
    category: Product.category,
    image: Product.image
      })
      setShow(true);
      console.log(Formdata);
      
    } 
    // function executed when we press the save changes button
    const handleSave = ()=>{
      // gets the product id and check is it correct one then it will store updated data to "updatedProducts"
      const updatedProducts = Products.map(item =>
    item.id.toString() === id
      ? {
          ...item,
          ...Formdata
        }
      : item
  )
// store the updated data to "products state"
  setProducts(updatedProducts)


       setShow(false);
      alert("product has been updated...")
      console.log(Products);
      
    
    }
    //  destructing the id to get id from url
    const {id}= useParams()
    console.log(id);
  const Product = Products.find(
    item => item.id.toString() === id
  )
  if (!Product) {
  return (
    <div className="text-center mt-5">
      <h2>Product not found</h2>
      <Button onClick={() => navigate('/')}>
        Back to Products
      </Button>
    </div>
  )
}
  console.log(Product)
      // Delete product 
     const handleDelete = () => {
  const updatedProducts = Products.filter(
    item => item.id.toString() !== id
  )

  setProducts(updatedProducts)
  alert("product Removed...")
  navigate('/')
}
  return (
    <div>
      <p className='fs-1 text-center fw-bold'>Product Details</p>
      {/* Product details */}
      <div className='container-fluid'>
        <Row>
            <Col className='p-5'>
            <img src={Product.image} alt=""
             style={{ height: '400px', objectFit: 'contain' }}
            />
            <div className=' d-flex mx-5 gap-3  mt-4'>
           {/* edit modal */}
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product Details</Modal.Title>
        </Modal.Header>
        {/* modal body and its fields */}
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name </Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={Formdata?.title}
                onChange={(e)=>setFormData({...Formdata,title:e.target.value})}
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={Formdata?.description}
              onChange={(e)=>setFormData({...Formdata,description:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price </Form.Label>
              <Form.Control
                type="number"
                autoFocus
                value={Formdata?.price}
                onChange={(e)=>setFormData({...Formdata,price:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>category </Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={Formdata?.category}
                onChange={(e)=>setFormData({...Formdata,category:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image Url </Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={Formdata?.image}
                onChange={(e)=>setFormData({...Formdata,image:e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
            <Button onClick={handleDelete} className=' px-4 py-2 bg-danger'>Delete</Button>
            </div>
            </Col>
            <Col className='p-5'>
                <p className='fs-4'>Product Name:{Product.title}</p>
                <p className='fs-4'>Description:{Product.description}</p>
                <p className='fs-4'>Price: {Product.price}$</p>
                <p className='fs-4'>Price: {Product.category}</p>
                <p className='fs-4'>Rating: {Product.rating?.rate} /5 ⭐</p>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductDetails

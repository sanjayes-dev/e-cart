import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddProduct({Products,setProducts}) {
  // navigate from react dom for redirecting the page 
    const navigate = useNavigate()
    // form data tp store the details of new product
    const [Formdata,setFormData]= useState({
        id: Products.length+1,
        title:'',
        price:'',
        description:'',
        category:'',
        image: ''
    })
    // function executed when press submit button
    const Handlesubmit =() =>{
        if(Formdata.title && Formdata.price && Formdata.description && Formdata.category && Formdata.image){
                 console.log(Formdata);
                 setProducts([...Products,Formdata])
                 alert("New Product Has Been Added...")
                 navigate('/')
        }
       else{
        alert("Please fill the form")
       }
    }
    
  return (
    <div>
      <p className='fs-1 fw-bold text-center'>Add a Product </p>
      {/* form */}
      <div className='p-5'>
         <Form>
      <Form.Group className="mb-3">
        <Form.Label>Tittle</Form.Label>
        <Form.Control type="text" placeholder="tittle" onChange={(e)=>setFormData({...Formdata,title:e.target.value})}/>
              </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="eg: 69$"  onChange={(e)=>setFormData({...Formdata,price:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="enter description here"  onChange={(e)=>setFormData({...Formdata,description:e.target.value})}/>
              </Form.Group>
              <Form.Group className="mb-3">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder="eg: men's shirt"  onChange={(e)=>setFormData({...Formdata,category:e.target.value})} />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>image url</Form.Label>

                <Form.Control type="text" placeholder="enter  here"  onChange={(e)=>setFormData({...Formdata,image:e.target.value})}/>

      </Form.Group>
      <Button onClick={Handlesubmit} variant="primary" type="button">
        Submit
      </Button>
    </Form>
      </div>
    </div>
  )
}

export default AddProduct

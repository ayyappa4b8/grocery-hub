import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Footer = () => {

    const footerStyle={
        height:'30vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#d0d8d0'
    }
  return (
    <div>   
      {/* <div className='text-center text-lg-start text-muted'>
      <section className=''>
        <div className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <div icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <div icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <div icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <div icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <div icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </div>
      </section> */}
    {/* </div> */}


    <footer className="page-footer font-small blue pt-4" style={{backgroundColor:"#3c3d3c",color:'white'}}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">SHOPMART</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">PRODUCTS</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Fruits</a></li>
                    <li><a href="#!">Vegetables</a></li>
                    <li><a href="#!">Snacks</a></li>
                    <li><a href="#!">Dairy</a></li>
                    <li><a href="#!">Drinks</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">CONTACT</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">ABC Street,HYD INDIA</a></li>
                    <li><a href="#!">abc@gmail.com</a></li>
                    <li><a href="#!">+91-975321628</a></li>
                    <li><a href="#!">040-714825194</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer

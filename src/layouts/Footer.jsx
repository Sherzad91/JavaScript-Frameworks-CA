import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
{/* facebook icon fa*/}
import { FaFacebookF } from 'react-icons/fa';
{/* twitter icon fa*/}
import { FaTwitter } from 'react-icons/fa';
{/* instagram icon fa*/}
import { FaInstagram } from 'react-icons/fa';




function Footer() {
  return (
    <footer className="bg-light py-3" style={{
        // top border
        borderTop: '1px solid #eaeaea',
        fontSize: '12px',
    }} >
      <Container>
        <Row>
          <Col md={2} className="mb-3 mb-md-0">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <Link style={{ textDecoration: 'none' }} className="text-secondary" to="/">Products</Link>
              </li>
              <li>
                <Link style={{ textDecoration: 'none' }} className="text-secondary" to="/about">Home</Link>
              </li>
              <li>
                <Link style={{ textDecoration: 'none' }} className="text-secondary" to="/contact">Contact Us</Link>
              </li>
          
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a style={{ textDecoration: 'none' }} href="https://www.facebook.com/">
                    <FaFacebookF />
                </a>
                

              </li>
              <li>
                <a style={{ textDecoration: 'none' }} href="https://www.twitter.com/">
                    <FaTwitter />
                </a>
              </li>
              <li>
                <a style={{ textDecoration: 'none' }} href="https://www.instagram.com/">
                    <FaInstagram /> 
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <address>
              123 Main St<br />
              Anytown, Norway 12345<br />
              <a href="mailto:info@example.com">info@example.com</a><br />
              (+47) 000 00 000
            </address>
          </Col>
          <Col md={3}>
            <h5>About Us</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesentet.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

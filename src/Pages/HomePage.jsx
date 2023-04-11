import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Products from './Products';

function HomePage() {
  return (
    <>
      <Carousel fade >
        <Carousel.Item >
          <img
            className="d-block w-100" height="500px"
            src="https://cdn-files.cloud/wp-content/blogs.dir/93/files/2017/07/Strand-bildetips.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Cammera</h3>
            <p>a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" height="500px"
            src="https://www.cutrin.no/Files/Produkter/Cutrin/Special-1/Samlebilde%20Special%201.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>hair wax</h3>
            <p>consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" height="500px"
            src="https://bonefish.no/templates/yootheme/cache/08/gratis_bilder_til_nettside-0843c803.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Photo camera</h3>
            <p>
              scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Products />
    </>
  );
}

export default HomePage;
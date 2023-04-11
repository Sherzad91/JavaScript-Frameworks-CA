import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from 'axios';

const Products = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.noroff.dev/api/v1/online-shop');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    
    useEffect(() => {
      fetchData();
    }, []);

    // filter data in search input name and if empty show all data 
    const filterData = (e) => {
        const value = e.target.value;
        if (value.length > 0) {
            const filteredData = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
            setData(filteredData);
        } else {
            fetchData();
        }
    }
   
    return (
        <div className='container'>
            <h1>Products Page</h1>
            <div className='m-5'>
                {/* search input  */}
                <input type="text" onChange={filterData} className='form-control' placeholder="Search in name" />
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {data.map((item) => (
                    <Product data={item} key={item?.id} />
                ))}
            </div>


        </div>
    );
};

export default Products;
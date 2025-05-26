import React from 'react';
import { data } from '../Data/Items';
import ProductCard from '../ProducCard';

const Products = () => {
  return (
    <div className="flex flex-wrap w-96 justify-center md:flex md:felx-row md:w-5xl md:items-center md:py-20 md:justify-between xl:w-12/12  xl:justify-start xl:px-10">
      {
        data.map((item, index) => (
          <ProductCard
            key={index} 
            imgurl={item.imgurl}
            name={item.name}
            rating={item.rating}
            price={item.price}
            off={item.off}
            old={item.oldPrice}
          />
        ))
      }
    </div>
  );
};

export default Products;

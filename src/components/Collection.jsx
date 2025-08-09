import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { ProductList } from "../data/Product";
function Collection(){
    const navigate = useNavigate();
    return(
        <div className="mb-[600px]  " >
            <div className="h-[532px]  flex flex-wrap justify-evenly gap-10 !px-[100px]">
                {ProductList.map((product, index) => (
    <div key={index} onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer">
      <img className="h-[416.19px] rounded-xl w-[359.19px]" src={product.image[0]} alt={product.name} />
      <div className="h-[101.48px] w-[322.1px]">
        <p className="text-center">{product.name}</p>
        <p className="flex-row text-center justify-center flex gap-2">₹ {product.price} {product.volume}</p>
        <div className="text-yellow-300 flex gap-2 justify-center mt-1">
          <span>
            {Array(Math.round(product.rating)).fill().map((_, i) => (
              <StarIcon key={i} />
            ))}
          </span>
          <div className="text-black">
            <AddIcon />
          </div>
        </div>
      </div>
    </div>
  ))}
        </div>
      </div>
    );
}
export default Collection;
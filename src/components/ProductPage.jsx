import React from "react";
import Header from "./header";
import { ProductList } from "../data/Product";
import { IngredientList } from "../data/Ingredient";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import Footer from "./Footer";
import PlayStore from "./PlayStore";
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function ProductPage(){
    const { id } = useParams();
    const navigate = useNavigate();
  const product = ProductList.find((p) => p.id === id);
  const fullIngredients = product.ingredients.map((ingredientId) =>
    IngredientList.find((ingredient) => ingredient.id === ingredientId)
  );
    return(
        <div className="bg-[#FFF7E2]">
            <Header/>
            <div className="flex flex-row justify-between">
                <div className="w-[600px]">

                
            
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    {product.image.map((_, index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
        aria-label={`Slide ${index + 1}`}
      ></button>
    ))}
  </div>

  <div className="carousel-inner">
    {product.image.map((img, index) => (
      <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
        <img src={img} className="d-block w-100 h-[500px] object-contain" alt={`product-slide-${index}`} />
      </div>
    ))}
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

<div className="">
    <div className="w-[606px] h-[124px]">
        <h1>{product.name}</h1>
        <span className="flex flex-row justify-between"><span><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>
        <p>{product.rating}</p> </span>
        <p>₹ {product.price}</p>
    </div>
    <div>
        <h4>{product.volume}</h4>
    </div>
    <div className="flex flex-row justify-between">
        <div className="flex border-[2px] rounded-xl gap-4 items-center flex-row justify-between">
            <button><RemoveIcon/></button>
            <p>1</p>
            <button><AddIcon/></button>
        </div>
        
            <button className="bg-[#3A643B] !border-[2px] !rounded-xl  w-[306px] h-[58px]">Add to cart</button>
        
    </div>
    <p className="w-[606px] h-[270px]">
        {product.description}
    </p>
    <div className="flex flex-row gap-2"><img className="w-[42px] h-[32px] object-cover" src="/images/highlight.gif" alt="" />
    <h3>Product Highlights</h3> </div>
    <div className="flex flex-row items-center  justify-between">
        <div className="w-[149px] h-[204px] bg-[#FDEAD2]">
            <p className="pt-[100%]" >{product.benefits[0]}</p>

        </div>
        <div className="w-[149px] h-[204px] bg-[#FDEAD2]">
            <p className="pt-[100%]">{product.benefits[1]}</p>

        </div>
        <div className="w-[149px] h-[204px] bg-[#FDEAD2]">
            <p className="pt-[100%]">{product.benefits[2]}</p>

        </div>
        <div className="w-[149px] h-[204px] bg-[#FDEAD2]">
            <p className="pt-[100%]">{product.benefits[3]}</p>

        </div>
    </div>
    <div className="flex flex-row items-center justify-between mt-4">
        <span className="flex flex-row gap-2"><img className="w-[42px] h-[32px] object-cover" src="/images/highlight.gif" alt="" />
    <h3>Key Ingredients</h3> </span>
    <div><h5>View all ingredients</h5></div>
    </div>
    <div className="flex flex-wrap justify-evenly max-w-[638px]">
        {fullIngredients.map((ingredient, index) => (
          <div
            key={index}
            className="cursor-pointer justify-between  flex flex-row items-center"
            onClick={() => navigate(`/ingredient/${ingredient.id}`)}
          >
            <img className="w-[54px]" src={ingredient.img} alt={ingredient.name} />
            <div className="flex flex-col justify-between">
                <h5>{ingredient.name}</h5>
            <p className="text-xs mt-1">{ingredient.description}</p></div>
          </div>
        ))}
      </div>
    <div className="w-[633px] h-[166px]">
    <h3>How to use</h3>
    <p className="bg-[#FDEAD2]">{product.use}</p></div>
    <div className="w-[633px] h-[166px]">
    <h3>General Instruction</h3>
    <p className="bg-[#FDEAD2]">{product.instruction}</p></div>
    <div>
        <h3>Commonly asked questions</h3>
        <div className="flex-col w-[630px] bg-[#FDEAD2] flex-wrap">
            <h5>{product.question[0]}</h5>
            <p>{product.cans[0]}</p>
        </div>
        <div className="flex-col w-[630px] bg-[#FDEAD2] flex-wrap">
            <h5>{product.question[1]}</h5>
            <p>{product.cans[1]}</p>

        </div>
    </div>
    <h5>Trust the voice</h5>
    <img className="w-[640px] h-[320px]" src="/images/voice.png" alt="" />
</div>

        </div>
        <PlayStore/>
        <Footer/>
    </div>
    );
}
export default ProductPage;
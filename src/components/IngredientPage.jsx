import React from "react";
import Header from "./header";
import { IngredientList } from "../data/Ingredient";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/Product";
function IngredientPage(){
    const { id } = useParams();
    const ingredient = IngredientList.find((i) => i.id === id);
    const relatedProducts = ProductList.filter((product) =>
    product.ingredients.includes(id)
  );
    return(
        <div>
            <Header/>
            <div className="flex flex-row justify-center gap-6">
                <div className=" w-[555px] h-[246px]">
                    <img className="!w-[375px] !h-[375px]" src={ingredient.img} alt="" />
                    <h2>{ingredient.name}</h2>
                    <p>{ingredient.description}</p>
                </div>
                <div>
                    <p>Product with "{ingredient.name}" as primary ingredient</p>
                    <div className="flex flex-row justify-between !gap-1">
                        <div className="flex flex-col gap-1">
                            {relatedProducts.map((product) => (
                                
                            <div key={product.id} className="flex w-[555px] h-[246px] flex-row items-center gap-4"><img className="w-[40%]" src="/images/p3.png" alt="" />
                        
                        
                            <p>Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural...</p>
                            </div>
                            ))}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default IngredientPage;
import React from "react";
import productList from "./data";
const Home = () => {
  const handleAddtoCart =(id)=>{

    alert('product selected',id)
    console.log(id)

  }
  return (
    <>
      <div className="container-fluid px-5">
        <div className="row gap-1 justify-content-between">
          {productList?.map((product,index) => {
            return (
              <div className="col-2 border rounded" key={product?.id}>
                <div className="d-flex justify-content-center">
                  <img src={product?.image} alt="#" className="product-size" />
                </div>
                <div className="d-flex justify-content-between px-1">
                  <p className="m-0 font-bold font">{product?.brandName}</p>
                  <p className="m-0 font-bold font">{product?.modelName}</p>
                </div>
                <div>
                  <p className="m-0 font-bold font-size"> ৳{product?.price}</p>
                  <p className="m-0 font-bold font-size">{product?.specificaton}</p>
                </div>
                <div className="btn btn-primary p-1 w-100" onClick={handleAddtoCart}>Add To Chart</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;

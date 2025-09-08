import React from "react";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log("cartAllProduct", cartAllProduct);
  // setCartAllProduct((prevCart)=>
  //   prevCart.map((item)=>item?.id === id ?{...item,count:item?.coun+1}:item)
  )
  const handleDecrement = () => {};
  const handleIncrement = () => {};
  const handleDeleteItem = () => {};

  return (
    <>
      <div className="container-fluid">
        <div className="row px-2">
          {cartAllProduct?.map((product,index) => {
            return (
              <div className="col-8 border rounded d-flex">
                <div className="p-1">
                  <img
                    src={product?.image}
                    alt={product?.model}
                    className="cart-product-size"
                  />
                </div>

                <div>
                  <div className="p-1 d-flex gap-3 ">
                    <div>
                      <h3 className="text-hiding">
                        {product?.brandName?.toUpperCase()}
                      </h3>
                      {/* <p className="m-0 font-bold font-size"> ৳{product?.price}</p> */}
                      <p className="m-0 fs-5">
                        <span className="font-bold"></span>৳{product?.price}
                      </p>
                      {/* <p className="m-0 fs-5">
                <span className="font-bold"></span>{product?.price}
              </p> */}
                      <p className="m-0 fs-5">{product?.specificaton}</p>
                      <p className="m-0 fs-5">{product?.camera}</p>
                      <div className="d-flex gap-3 mt-1">
                        <p
                          className="m-0 border p-0 px-2 py-1 rounded pointer"
                          onClick={handleDecrement()}
                        >
                          -
                        </p>
                        <p className="m-0">{product?.count}</p>
                        <p
                          className="m-0 border p-0 px-2 py-1 rounded pointer"
                          onClick={handleIncrement()}
                        >
                          +
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <p> {product?.description}</p>
                      <p onClick={handleDeleteItem}>
                        <i className="fa-solid fa-trash text-danger"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Cart;

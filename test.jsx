  <div className="col-8 border rounded d-flex">
            <div className="p-1">
              <img
                src={data?.image}
                alt={data?.model}
                className="cart-product-size"
              />
            </div>

            <div>
              <div className="p-1 d-flex gap-3 ">
                <div>
                  <h3 className="text-hiding">
                    {data?.brandName?.toUpperCase()}
                  </h3>
                  {/* <p className="m-0 font-bold font-size"> ৳{data?.price}</p> */}
                  <p className="m-0 fs-5">
                    <span className="font-bold"></span>৳{data?.price}
                  </p>
                  {/* <p className="m-0 fs-5">
                <span className="font-bold"></span>{data?.price}
              </p> */}
                  <p className="m-0 fs-5">{data?.specificaton}</p>
                  <p className="m-0 fs-5">{data?.camera}</p>
                  <div className="d-flex gap-3 mt-1">
                    <p
                      className="m-0 border p-0 px-2 py-1 rounded pointer"
                      onClick={handleDecrement()}
                    >
                      -
                    </p>
                    <p className="m-0">{data?.count}</p>
                    <p
                      className="m-0 border p-0 px-2 py-1 rounded pointer"
                      onClick={handleIncrement()}
                    >
                      +
                    </p>
                  </div>
                   </div>
                  <div className="d-flex">
                    <p> {data?.description}</p>
                    <p onClick={handleDeleteItem}><i className="fa-solid fa-trash text-danger"></i></p>
                  </div>
               
              </div>
            </div>
          </div>

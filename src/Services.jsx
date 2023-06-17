import React from "react";
import Data from "./Data"
import Card from "./Card";
import Footer from "./Footer";
const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {
                Data.map((item,index)=>{
                  return <Card key={index} imgsrc={item.imgsrc} title={item.title}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Services;

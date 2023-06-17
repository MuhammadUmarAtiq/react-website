// import React from "react";
// const Footer=()=>{
//     return<>
// <footer className="w-100 bg-light text-center">
// <p>2024 Umar Atiq. All Rights Reserved | Terms and Conditions</p>
// </footer>
//     </>
// }
// export default Footer;



import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  const footerStyle = {
    // position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    // backgroundColor: "#f5f5f5",
    textAlign: "center",
    padding: "10px 0",
  };

  const textStye = {
    fontSize: "14px",
  };

  return (
    <>

      <div style={footerStyle}>
        <p style={textStye}>© {date}  Umar Atiq. All Rights Reserved | Terms and Conditions</p>
      </div>
    </>
  );
};

export default Footer;

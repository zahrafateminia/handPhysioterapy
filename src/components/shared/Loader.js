import React from "react";
import { Blocks } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{marginTop:"180px", width:"100%", height:"100px",
    display:"flex", justifyContent:"center"}}>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export default Loader;

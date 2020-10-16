import React from "react";

const Testimonial = (props) => {
  const { companyname, name, description, _id } = props.review;
  return (
    //     <div className="card shadow-sm">
    //         <div className="card-body">
    //             <p className="card-text text-center">{quote}</p>
    //         </div>
    //         <div className="card-footer d-flex  align-items-center">
    //             <img className="mx-3" src={img} alt="" width="60"/>
    //             <div>
    //                 <h6 className="text-primary">{name}</h6>
    //                 <p className="m-0">{from}</p>
    //             </div>
    //         </div>
    //    </div>
    <div className="card shadow-sm">
      <div className="card-footer d-flex  align-items-center">
        <img className="mx-3" src="" alt="" width="60" />
        <div>
          <h6 className="text-primary">{name}</h6>
          <p className="m-0">{companyname}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-center">{description}</p>
      </div>
    </div>
  );
};

export default Testimonial;

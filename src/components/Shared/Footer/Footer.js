import React from "react";
import "./Footer.css";



const Footer = () => {
  
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        
        <section className="features-service pb-0 pb-md-5 my-5">
          <div className="container mb-5">
            <div className="row mb-5">
              <div className="col-md-5 mb-4 m-md-0">
                
                <h3>Let us handle your <br/> project, professionally</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!</p>
              </div>
              <div className="col-md-7 align-self-center">
                
                <div className="section-header text-center text-white mb-5">
                  
                </div>
                <div className="col-md-9 mx-auto">
                  <form action="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject *"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        className="form-control"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message *"
                      ></textarea>
                    </div>
                    <div className="form-group text-center">
                      <button type="button" className="btn btn-primary">
                        {" "}
                        Submit{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <Slider /> */}
            </div>
          </div>
        </section>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

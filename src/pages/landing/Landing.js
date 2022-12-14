import React, { useContext, useState } from "react";
// import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";
import Login from "../component/Login";
import Register from "../component/Register";
import Navbar from "../navbar/Navbar";
import NavbarLogin from "../navbar/NavbarLogin";

export default function Landing() {
  // let api = API();
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [state] = useContext(UserContext);
  // console.log(state);

  const handleShowSignup = () => setShowSignup(true);
  const handleShowSignin = () => setShowSignin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleCloseSignin = () => setShowSignin(false);

  const toggleToSignin = () => {
    setShowSignup(false);
    setShowSignin(true);
  };

  const toggleToSignup = () => {
    setShowSignin(false);
    setShowSignup(true);
  };

  return (
    <div className="">
      {state.isLogin ? <NavbarLogin /> : <Navbar showup={handleShowSignup} handleShow={handleShowSignin} />}

      <div className="px-24 pb-10 grid grid-cols-2 lg:grid-cols-4 gap-10 md:grid-cols-4 sd:grid-cols-2 sm:grid-cols-3">
        <div className="col-span-full m-auto">
          <img src="./assets/jumbotron.png" alt="" className="m-auto mt-10" />
        </div>
        {/* {products?.map((item, index) => (
          <CardProduct item={item} index={index} />
        ))} */}
      </div>

      {showSignin ? (
        <Login show={showSignin} handleShow={handleShowSignin} handleClose={handleCloseSignin} toggle={toggleToSignup} />
      ) : showSignup ? (
        <Register handleShow={handleShowSignin} handleClose={handleCloseSignup} toggle={toggleToSignin} />
      ) : null}
    </div>
  );
}

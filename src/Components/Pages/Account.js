import React from "react";
import "../Pages/Account.css";
import profile from "../../Images/accountHover.svg";
function Account() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Account</h1>
            <div className="sign-in-button">
              <button className="button">Sign-in</button>
            </div>
            <div className="log-in-button">
              <button className="button">Log-in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Landing() {

    return (
        <div>
        <h1>Stop Cyber Bullying</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <button>
          <Link to="/chat-bubble-detail">Start</Link>
        </button>
      </div>
    );
}


export default Landing;
import React, { useEffect } from "react";
import PlaidLink from "react-plaid-link";
import axios from "axios";

const Link = () => {
  const handleClick = () => {};

  return (
    <div>
      <PlaidLink
        clientName="Repledge"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey=""
        className="test"
      >
        Link Account
      </PlaidLink>
      <div>
        <button onClick={handleClick}>Get Transactions</button>
      </div>
    </div>
  );
};

export default Link;

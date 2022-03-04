import React from "react";

import AddTransaction from "./addTransaction/addTransaction";
import StocksTable from "./stockTable/stockTable";

const StocksPage = () => {
  return (
    <div>
      <AddTransaction />
      <StocksTable />
    </div>
  );
};

export default StocksPage;

import React from "react";
import FilterCardSm from "./FilterCardSm/FilterCardSm";

import "./FilterGamePage.css";

function FilterGamePage(props) {
  const filteData = props.location.FilterData.FilterGame;
  console.log(filteData);

  return (
    <div className="FilterGameDiv">
      <div className="FilterContainer">
        {filteData.map((el) => (
          <FilterCardSm data={el} key={el.name} />
        ))}
      </div>
    </div>
  );
}

export default FilterGamePage;

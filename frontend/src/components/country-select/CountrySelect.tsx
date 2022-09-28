import React from "react";
import countries from "./countries.json";

/**
 * Country selection dropdown
 */
const CountrySelect = React.forwardRef<HTMLSelectElement,any>(
  (
    props,
    ref
  ) => {
    return (
      <select
        name="coun"
        id="countries"
        ref={ref}
        className="form-control"
        {...props}
      >
        <option>Select Country</option>
        {countries.map((country) => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
    );
  }
);

export default React.memo(CountrySelect);

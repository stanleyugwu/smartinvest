import React from "react";
import TableDropDown from "../Dropdowns/TableDropdown";
import { UnApprovedUserTableProps } from "./UnApprovedUserTable";
import moment from 'moment';

export interface UnApprovedUserProps {
  color?: UnApprovedUserTableProps["color"];
  fullname: string;
  email: string;
  country: string;
  phone: string;
  currency: string;
  id:number;
  regDate:string;
}

const UnApprovedUser = ({
  color = "light",
  country,
  currency,
  email,
  fullname,
  phone,
  id,
  regDate = Date.now().toString()
}: UnApprovedUserProps) => {
  return (
    <tr>
        <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
        <TableDropDown userId={id} />
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
        <span
          className={
            "font-bold " +
            +(color === "light" ? "text-blueGray-600" : "text-white")
          }
        >
          {fullname}
        </span>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {email}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {country} - 
        ({currency})
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {phone}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
       {/* @ts-ignore */}
       {moment(regDate).fromNow()}
      </td>
    </tr>
  );
};

export default UnApprovedUser;

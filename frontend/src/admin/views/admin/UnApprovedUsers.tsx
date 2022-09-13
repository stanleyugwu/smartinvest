import React from "react";

// components
import UnApprovedUserTable from "../../components/Cards/UnApprovedUserTable";

export default function UnApprovedUsers() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="p-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-4">
          <h6 className="text-blueGray-700 text-xl font-bold uppercase">Recent UnApproved Users</h6>
          <UnApprovedUserTable />
        </div>
      </div>
    </>
  );
}

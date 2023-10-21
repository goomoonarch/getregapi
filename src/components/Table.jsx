import React from "react";

function Table({PersonData, ERAsegData}) {
  
  return (
    <div
      className="items-center hidden justify-center rounded-[8px] shadow-md border mx-5 translate-y-[40px] font-SFpro p-4 w-[450px] sm:w-[700px]" 
    >
      <table className="table-auto">
        <thead>
          <tr className="text-left">
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

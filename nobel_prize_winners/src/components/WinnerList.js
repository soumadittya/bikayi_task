import React from 'react';
import LaureateList from './LaureateList';

const WinnerList = (props) => {
  return (
    <div className="WinnerList">
        <div className = "p-3 mb-2 bg-light text-dark">
      <h2>Winner List....</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Category</th>
            <th scope="col">Laureates</th>
          </tr>
        </thead>

        <tbody>
            { props.prizeDetails.prizes.map((prizeDetail) => (
          <tr>
            <th scope="row">
                {prizeDetail.year}
            </th>
            <td>
                {prizeDetail.category}
            </td>
            <td>
                <LaureateList prizeDetail = {prizeDetail}/>
            </td>
          </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default WinnerList;

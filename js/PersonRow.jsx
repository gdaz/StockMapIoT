import React from "react";
import { shape, string } from "prop-types";

const PersonRow = props => {
  console.log("PersonRow: ", props.element);
  return (
    <tr>
      <td>
        {/* {this.props.show.stockPrice} */}
        {props.element.stockPrice}
      </td>
      <td>
        {/* {this.props.show.stockName} */}
        {props.element.stockName}
      </td>
      <td>
        {/* {this.props.show.buyPrice} */}
        {props.element.buyPrice}
      </td>
      <td>
        {/* {this.props.show.stockAmount} */}
        {props.element.stockAmount}
      </td>
      <td>
        {/* {this.props.show.dateSelected} */}
        {props.element.dateSelected}
      </td>
    </tr>
  );
};
PersonRow.propTypes = {
  element: shape({
    stockPrice: string.isRequired,
    stockName: string.isRequired,
    stockAmount: string.isRequired,
    buyPrice: string.isRequired,
    dateSelected: string.isRequired
  }).isRequired
};
export default PersonRow;

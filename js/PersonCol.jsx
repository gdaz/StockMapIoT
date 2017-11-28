import React from "react";
import styled from "styled-components";

const TH = styled.th`
  text-align: center
`;
const PersonCol = () => (
  <tr>
    <TH>Stock Price</TH>
    <TH>Stock Name</TH>
    <TH>Buy Price</TH>
    <TH>Stock Amount</TH>
    <TH>Date Selected</TH>
  </tr>
);
export default PersonCol;

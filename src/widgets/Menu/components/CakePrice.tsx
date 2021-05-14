import React from "react";
import styled from "styled-components";
// import snowgelogo from "./snowgelogo.png";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink href="https://charts.bogged.finance/?token=0x5E9280d53F28281Ce098C8F64e49F5f5DC9Ea185" target="_blank">
      <img src="https://snowge.s3.amazonaws.com/SnowgeLogo.png" width="24px" height="24px" />
      <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(5)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);

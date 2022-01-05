import styled from "styled-components";

export const StyledProductDetails = styled.section`
  margin-top: ${({ theme }) => theme.layout.small.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.layout.small.pageTopMargin};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  position: relative;

  section {
    padding-left: ${({ theme }) => theme.layout.small.pageLeftPadding};
    padding-right: ${({ theme }) => theme.layout.small.pageRightPadding};
  }

  h1,
  h4,
  h3 {
    text-transform: uppercase;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledProductTitle = styled.div`
  h4 {
    font-weight: 400;
    font-size: 1.5rem;
  }

  h1 {
    font-weight: 500;
    font-size: 10rem;
    line-height: 0.8em;
    font-family: "TTrailer";
    letter-spacing: -5px;
  }
`;

export const SytledProductPriceInfo = styled.div`
  text-align: end;
  text-transform: uppercase;

  p {
    text-decoration: line-through;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const StyledProductOtherInfo = styled.section`
  margin-top: 10em;
  margin-bottom: 5em;
  position: relative;

  img {
    margin-top: 3em;
  }
`;

export const StyledProductOtherInfoTitle = styled.h1`
  font-family: "Favorit";
  font-size: 5.5rem;
  font-weight: 400;
  letter-spacing: -10px;
  line-height: 0.8em;
  position: absolute;
  top: -50px;
`;

export const StyledProductImage = styled.div`
  img {
    border: 2px solid ${({ theme }) => theme.color.primaryText};
  }
  p {
    text-transform: uppercase;
    width: 100%;
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledProductDescription = styled.p`
  margin: 1em 0;
  font-size: 1.5rem;
  line-height: 1.2em;
`;

export const StyledProductShippingInfo = styled.div`
  margin: 2em 0;
  font-size: 1.5rem;
  line-height: 1.2em;
`;

export const StyledDropDown = styled.div`
  .dropbtn {
    background-color: #3498db;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropbtn:hover,
  .dropbtn:focus {
    background-color: #2980b9;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown a:hover {
    background-color: #ddd;
  }

  .show {
    display: block;
  }
`;

export const StyledAddToCartModal = styled.div`
  position: sticky;
  bottom: 0.6em;
  padding: 1.5em;
  margin: 1em;
  background-color: ${({ theme }) => theme.color.primaryText};

  a {
    color: ${({ theme }) => theme.color.background};
    text-transform: uppercase;
    text-align: center;
    display: block;
    font-size: 1.3rem;
  }
`;

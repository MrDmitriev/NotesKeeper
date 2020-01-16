import styled from 'styled-components';

export const Button = styled.button`
  color: rgb(110, 110, 110);
  margin-right: 15px;
  max-height: ${(props) => props.sm ? `30px` : `58px`};
  ${(props) => buttonThemes[props.theme]}
  &:hover {
    background-color: #9b7d7d !important;
    border-color: #9b7d7d !important;
    color: #e6e6e6;
  }
`;

const buttonThemes = {
  default: `
    background-color: #e6e6e6;
    border-color: #e6e6e6;
    color: black;
    border-radius: 0 5px 5px 0;
  `,

  warning: `
    background-color: #923131;
    border-color: #923131;
    color: white;
    border-radius: 5px 5px 5px 5px;
  `,

  info: `
    background-color: green;
    border-color: green;
    color: white;
    border-radius: 5px 5px 5px 5px;
  `,

  edit: `
    background-color: orange;
    border-color: orange;
    color: white;
    border-radius: 5px 5px 5px 5px;
  `
};

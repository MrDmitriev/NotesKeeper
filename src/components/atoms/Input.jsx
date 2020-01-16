import styled from 'styled-components';

export const Input = styled.input`
  font-weight: 300 !important;
  display: inline-block;
  max-width: 400px;
  max-height: ${(props) => props.sm ? `30px` : `58px`};
  width: -webkit-fill-available;
`;

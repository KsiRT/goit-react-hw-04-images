import { styled } from 'styled-components';
import { CgSearch } from 'react-icons/cg';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #a8d8cd;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  position: relative;
`;

export const Search = styled.input`
  height: 2rem;
  font-size: 16px;
  background-color: #f0e6d7;
  color: #213058;
  border: 2px solid #28696a;
  border-radius: 6px;
  min-width: 300px;
  padding-left: 35px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    padding-top: 3px;
    font-family: inherit;
    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  background-color: #28696a;
  color: #fff;
  border-radius: 6px;
  font-size: 18px;

  display: inline-block;
  border: 1px solid #1e4f50;
  opacity: 0.6;
  cursor: pointer;
  outline: none;
  transition: 200ms ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    /* background-color: #1e4f50; */
    opacity: 1;
  }
`;

export const Icon = styled(CgSearch)`
  background-color: #80808039;
  color: #1e4f50;
  position: absolute;
  padding: 7px 4px 4px 3px;
  width: 25px;
  border-radius: 8px;
`;

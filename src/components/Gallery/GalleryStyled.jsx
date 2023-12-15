import { styled } from 'styled-components';

export const Container = styled.div`
  /* padding-top: 20px;
  background-color: #eee7dd;
  width: 100vw;
  height: 100vh;
  margin: 0 auto; */
`;

export const Cards = styled.ul`
  list-style: none;
  display: flex;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin: 0 auto;
  padding: 30px 0 30px 0;
  gap: 40px;
  max-width: 90%;
`;

export const Card = styled.li``;
export const Image = styled.img`
  width: 100%;
  /* min-width: 420px; */
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const LoadBtn = styled.button`
  display: block;
  margin: 50px auto 30px;
  background-color: #28696a;
  color: #fff;
  border-radius: 6px;
  font-size: 20px;
  height: 35px;
  min-width: 130px;

  &:hover,
  &:focus {
    transform: scale(1.05);
    /* background-color: #1e4f50; */
    opacity: 1;
  }
`;

export const NoResults = styled.p`
  font-family: inherit;
  font-size: 30px;
  font-weight: 700;
  display: block;
  margin: 50px 40vw;
`;

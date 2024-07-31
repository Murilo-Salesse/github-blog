import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardIssues = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  column-gap: 3.5rem;
  row-gap: 1.5rem;

  width: 54rem;

  margin: 1rem auto 5rem auto;

  @media (max-width: 890px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;

    width: 40rem;
  }

  @media (max-width: 650px) {
    width: 25rem;
  }
`;

export const CardInformations = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;

  width: 25rem;
  border-radius: 10px;

  list-style: none;

  padding: 1.5rem;

  background-color: ${(props) => props.theme['base-post']};

  .card-header {
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    justify-content: space-between;

    h3 {
      text-decoration: none;
      width: 20ch;
      color: ${(props) => props.theme.white};
    }

    span {
      text-decoration: none;
      font-size: 0.8rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  .wrapper-text {
    text-decoration: none;
    p {
      text-decoration: none;
      color: ${(props) => props.theme['base-span']};

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      font-size: 0.9rem;
    }
  }
`;

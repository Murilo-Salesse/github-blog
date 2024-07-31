import styled from 'styled-components';

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 54rem;
  height: 5rem;

  margin: 13rem auto 4rem auto;

  .group-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search {
    width: 100%;

    input {
      width: 100%;

      padding: 0.75rem;
      border-radius: 6px;
      outline: 0;

      background-color: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme['base-border']};

      color: ${(props) => props.theme['base-text']};
      font-weight: bold;
    }
  }

  @media (max-width: 890px) {
    width: 40rem;
  }

  @media (max-width: 650px) {
    width: 25rem;
  }
`;

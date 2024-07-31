import styled from 'styled-components';

export const ContainerHeader = styled.header`
  .wrapper-bg {
    display: flex;
    flex: 1;
    width: 100%;

    img {
      z-index: -1;
      width: 100%;
      display: block;
    }
  }
`;

export const ProfileInformations = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  z-index: 2;

  width: 54rem;
  height: 14rem;

  padding: 2rem;

  border-radius: 10px;

  margin: -8rem auto;

  @media (max-width: 890px) {
    width: 40rem;
  }

  @media (max-width: 650px) {
    width: 25rem;
  }
`;

export const Informations = styled.div`
  display: flex;
  gap: 2rem;

  .image-profile {
    img {
      height: 9.25rem;
      width: 9.25rem;
      border-radius: 8px;
      display: block;
    }
  }

  .about-profile {
    display: flex;
    flex: 1;
    flex-direction: column;

    .about-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      .go-to {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        a {
          text-decoration: none;
          color: ${(props) => props.theme['blue']};
          display: inline-block;
          font-weight: bold;
          text-transform: uppercase;
        }

        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }

    .about-body {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      .infos-profile {
        display: flex;
        align-items: center;
        gap: 1rem;

        .infos-github {
          display: flex;
          align-items: center;
          gap: 0.3rem;

          img {
            height: 1.2rem;
            width: 1.2rem;
          }
        }
      }
    }
  }
`;

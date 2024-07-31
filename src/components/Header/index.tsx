import { ContainerHeader, Informations, ProfileInformations } from './styles';

import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';

import backgroundImg from '../../assets/bg.svg';

import brandLogo from '../../assets/icons/Type=github-brands.png';
import brandUsers from '../../assets/icons/Type=user-group-solid.png';
import brandArrow from '../../assets/icons/arrow.svg';

interface ProfilesInfo {
  avatar_url: string;
  html_url: string;
  bio: string;
  name: string;
  followers: number;
}

export function Header() {
  const [infosProfile, setInfosProfile] = useState<ProfilesInfo>({
    avatar_url: '',
    html_url: '',
    bio: '',
    name: '',
    followers: 0,
  });

  async function loadInfosProfile() {
    try {
      const response = await api.get('Murilo-Salesse');
      const { avatar_url, html_url, bio, followers, name } = response.data;

      setInfosProfile({ avatar_url, html_url, bio, followers, name });
    } catch (error) {
      console.error('Erro ao pergar informações do perfil', error);
    }
  }

  useEffect(() => {
    loadInfosProfile();
  }, []);

  return (
    <ContainerHeader>
      <div className="wrapper-bg">
        <img src={backgroundImg} alt="" />
      </div>

      <ProfileInformations>
        <Informations>
          <div className="image-profile">
            <img src={infosProfile?.avatar_url} alt="" />
          </div>

          <div className="about-profile">
            <div className="about-header">
              <h2>{infosProfile?.name}</h2>

              <div className="go-to">
                <a href={infosProfile?.html_url} target="_blank">
                  github
                </a>
                <img src={brandArrow} alt="" />
              </div>
            </div>

            <div className="about-body">
              <p>{infosProfile?.bio}</p>

              <div className="infos-profile">
                <div className="infos-github">
                  <img src={brandLogo} alt="Imagem da Logo github" />
                  <span>{infosProfile?.name}</span>
                </div>

                <div className="infos-github">
                  <img src={brandUsers} alt="Imagem da Logo github" />
                  <span>{infosProfile?.followers} seguidores</span>
                </div>
              </div>
            </div>
          </div>
        </Informations>
      </ProfileInformations>
    </ContainerHeader>
  );
}

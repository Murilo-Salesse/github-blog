import backgroundImg from '../../assets/bg.svg';
import {
  ContainerHeader,
  Informations,
  PostContentContainer,
  ProfileInformations,
} from './styles';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import brandArrow from '../../assets/icons/arrow.svg';
import brandLogo from '../../assets/icons/Type=github-brands.png';
import brandBallon from '../../assets/icons/ballon.svg';
import brandData from '../../assets/icons/data.svg';
import { relativeDateFormatter } from '../../ultils/formatter';

interface PostIssue {
  title: string;
  body: string;
  created_at: string;
  id: number;
  repository_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Post() {
  const [postIssue, setPostIssue] = useState<PostIssue>({} as PostIssue);

  const { id } = useParams();

  async function getDetails() {
    try {
      const getResponse = await axios.get(
        `https://api.github.com/repos/Murilo-Salesse/github-blog/issues/${id}`
      );

      setPostIssue(getResponse.data);
    } catch (err) {
      console.error('Erro ao buscar detalhes do post.');
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <ContainerHeader>
        <div className="wrapper-bg">
          <img src={backgroundImg} alt="" />
        </div>

        <ProfileInformations>
          <Informations>
            <div className="about-profile">
              <div className="about-header">
                <Link to="/" className="back-blog">
                  voltar
                </Link>

                <div className="go-to">
                  <a
                    href="https://github.com/Murilo-Salesse/github-blog/issues/"
                    target="_blank"
                  >
                    github
                  </a>
                  <img src={brandArrow} alt="" />
                </div>
              </div>

              <div className="about-body">
                <h3 className="title-post">{postIssue.title}</h3>

                <div className="infos-profile">
                  <div className="infos-github">
                    <img src={brandLogo} alt="Imagem da Logo github" />
                    <span>{postIssue?.user?.login}</span>
                  </div>

                  <div className="infos-github">
                    <img src={brandData} alt="" />
                    <span>{relativeDateFormatter(postIssue?.created_at)}</span>
                  </div>

                  <div className="infos-github">
                    <img src={brandBallon} alt="" />
                    <span>{postIssue?.comments} comentários</span>
                  </div>
                </div>
              </div>
            </div>
          </Informations>
        </ProfileInformations>
      </ContainerHeader>

      <PostContentContainer>
        <ReactMarkdown children={postIssue?.body} />
      </PostContentContainer>
    </>
  );
}

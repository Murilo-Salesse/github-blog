import { InputContainer } from './styles';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useEffect, useState } from 'react';
import * as z from 'zod';
import axios from 'axios';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

interface CardIssues {
  title: string;
  body: string;
  created_at: string;
  number: number;
}

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>;

export function Blog() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  });

  const [issues, setIssues] = useState<CardIssues[]>([]);
  const [total, setTotal] = useState<number>(0);

  async function searchAllIssues(query: string = '') {
    try {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${query}%20repo:Murilo-Salesse/github-blog/issues`
      );
      setIssues(response.data.items);
      setTotal(response.data.total_count);
    } catch (error) {
      console.error('Erro ao buscar ISSUES:', error);
    }
  }

  useEffect(() => {
    searchAllIssues();
  }, []);

  async function handleSearchPosts(data: SearchFormInputs) {
    await searchAllIssues(data.query);
  }

  return (
    <>
      <Header />

      <InputContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <div className="group-title">
          <h2>Publicações</h2>
          <span>{total} publicações</span>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </div>
      </InputContainer>

      <Card issues={issues} />
    </>
  );
}

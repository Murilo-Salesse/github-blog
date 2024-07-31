import { relativeDateFormatter } from '../../ultils/formatter';
import { CardInformations, CardIssues } from './styles';

interface CardProps {
  issues: {
    title: string;
    body: string;
    created_at: string;
    number: number;
  }[];
}

export function Card({ issues }: CardProps) {
  return (
    <CardIssues>
      {issues.map((issue) => (
        <CardInformations key={issue.number} to={`/post/${issue.number}`}>
          <div className="card-header">
            <h3>{issue.title}</h3>
            <span>{relativeDateFormatter(issue.created_at)}</span>
          </div>
          <div className="wrapper-text">
            <p>{issue.body}</p>
          </div>
        </CardInformations>
      ))}
    </CardIssues>
  );
}

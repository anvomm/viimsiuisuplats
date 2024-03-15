import { News } from "../@types/news-model";

interface Props {
  post: News;
}

export const NewsCard = ({ post }: Props): JSX.Element => {
  return (
    <>
      <p>{post.date}</p>
      <p>{post.post}</p>
    </>
  );
};

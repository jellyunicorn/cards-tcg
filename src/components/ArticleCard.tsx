import { Link } from "react-router";
import type { Article } from "../types/article";
import { formatDate } from "../utils/formatter";

interface CardProps {
  article: Article;
}

export default function ArticleCard(props: CardProps) {
  const publishDate: string = formatDate(props.article.publishDate);
  return (
    <div className="flex flex-col p-4 shadow-xl rounded-xl justify-between">
      <div>
        <img
          src={`${props.article.thumbnail}`}
          alt="Blog thumbnail"
          className="mt-4 w-full h-60 object-cover"
          loading="lazy"
        />
        <h2 className="text-2xl font-semibold mt-4">
          {props.article.title}
        </h2>
        <div className="flex flex-row gap-1 items-center-safe mt-2">
          <p className="text-[14px] font-semibold">
            {props.article.author}
          </p>
          <p>·</p>
          <p className="text-[14px]">{publishDate}</p>
        </div>
        <p className="italic text-gray-600 mt-2">{props.article.description}</p>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to={`/articles/${props.article.slug}`}
          className="bg-[#5540dd] hover:bg-[#6377fc] px-3 py-2 rounded-md font-semibold text-white"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

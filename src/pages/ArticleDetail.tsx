import { Link, useNavigate, useParams } from "react-router";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import type { Article } from "../types/article";
import { useEffect, useState } from "react";
import { axiosApi } from "../lib/axios";
import { formatDate } from "../utils/formatter";
import { FaArrowLeft } from "react-icons/fa6";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ArticleDetail() {
  const [article, setArticle] = useState<Article>();
  const [publishDate, setPublishDate] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);
  const params = useParams();
  const navigate = useNavigate();

  const getBlog = async () => {
    setIsPending(true);
    try {
      const response = await axiosApi.get<Article[]>(
        `/data/Blogs?where=%60slug%60%20%3D%20'${params.slug}'`,
      );
      console.log(response.data);
      if (response.data.length === 0) {
        navigate("/not-found");
      }
      const date: number = response.data[0].publishDate;
      setArticle(response.data[0]);
      setPublishDate(formatDate(date));
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="font-pjs">
      <Navbar />
      <div className="flex mt-4 mx-8 lg:mx-12">
        <Link to="/articles">
          <div className="flex flex-row gap-1 items-center-safe border-b-2 border-gray-300 p-1 border-dashed hover:border-solid hover:border-black">
            <FaArrowLeft />
            <p className="font-semibold">Return</p>
          </div>
        </Link>
      </div>
      {!!isPending ? (
        <div className="lg:mx-12 mx-8 mb-8 mt-4">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <div className="mt-2 mx-8 lg:mx-12">
            <h1 className="text-2xl font-extrabold tracking-wide">
              {article?.title}
            </h1>
          </div>
          <div className="lg:mx-12 mx-8 mt-4">
            <h2 className="text-[18px] italic text-gray-600">
              {article?.description}
            </h2>
          </div>
          <div className="flex flex-row gap-2 lg:mx-12 mx-8 mt-4 items-center">
            <p className="font-semibold">{article?.author}</p>
            <p>·</p>
            <p>{publishDate}</p>
          </div>
          {!!article?.thumbnail && (
            <div className="mt-4 mx-8 lg:mx-12">
              <img src={`${article.thumbnail}`} alt="Article thumbnail" />
            </div>
          )}
          <div className="mt-4 mb-8 mx-8 lg:mx-12">
            <p className="whitespace-pre-wrap leading-loose">
              {article?.content}
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

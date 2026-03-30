import { useEffect, useState } from "react";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import { axiosApi } from "../lib/axios";
import type { Article } from "../types/article";
import { Link } from "react-router";
import useAuth from "../stores/useAuth";
import ArticleCard from "../components/ArticleCard";
import { TiPlus } from "react-icons/ti";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export default function Articles() {
  const { user } = useAuth();
  const [content, setContent] = useState<Article[]>([]);
  const [filteredContent, setFilteredContent] = useState<Article[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);

  const { currentPage, currentData, totalPages, nextPage, prevPage } =
    usePagination({ data: filteredContent, itemsPerPage: 4 });

  const getBlogs = async () => {
    setIsPending(true);
    try {
      const response = await axiosApi.get<Article[]>("/data/Blogs");
      setContent(response.data);
      setFilteredContent(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleSearch = (search: string) => {
    const result: Article[] = content.filter((article) => {
      return article.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredContent(result);
  };

  return (
    <div className="font-pjs">
      <Navbar />
      <div className="flex justify-end mt-4 mr-8 lg:mr-24">
        {!!user && (
          <Link
            to="/create-article"
            className="bg-[#5540dd] hover:bg-[#6377fc] px-3 py-2 rounded-md font-semibold text-white"
          >
            <div className="flex flex-row items-center-safe gap-1">
              <TiPlus className="text-xl" />
              <p>Create Article</p>
            </div>
          </Link>
        )}
      </div>
      <div className="flex flex-col items-center mt-4 mb-8 gap-8">
        <h1 className="text-5xl font-extrabold tracking-wide">Articles</h1>
        <SearchBar
          handleSearch={handleSearch}
          placeholder="Look for articles..."
        />
        {isPending ? (
          <LoadingSpinner />
        ) : (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-8 lg:mx-24 mb-8 gap-4">
        {currentData.map((article) => {
          return <ArticleCard key={article.objectId} article={article} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

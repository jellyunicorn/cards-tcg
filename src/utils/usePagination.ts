import { useState } from 'react';

interface UsePaginationProps<T> {
  data: T[];
  itemsPerPage: number;
}

const usePagination = <T>({ data, itemsPerPage }: UsePaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = data.slice(start, end);

  const nextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  return { currentPage, currentData, totalPages, nextPage, prevPage };
};

export default usePagination;
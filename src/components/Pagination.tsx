import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}

export default function Pagination(props: PaginationProps) {
  return (
    <div className="flex flex-row font-pjs gap-5 items-center">
      <button
        onClick={props.prevPage}
        className="bg-[#5540dd] hover:bg-[#6377fc] px-3 py-2 rounded-md font-semibold text-white cursor-pointer"
      >
        <FaArrowLeft />
      </button>
      <div className="flex flex-row gap-1.5">
        <p className="font-semibold">{props.currentPage}</p>
        <p>of</p>
        <p className="font-semibold">{props.totalPages}</p>
      </div>
      <button
        onClick={props.nextPage}
        className="bg-[#5540dd] hover:bg-[#6377fc] px-3 py-2 rounded-md font-semibold text-white cursor-pointer"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

import { useState, type SubmitEvent } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  handleSearch: (e: string) => void;
  placeholder?: string;
}

export default function SearchBar(props: SearchBarProps) {
  const [search, setSearch] = useState("");

  const getInput = (e: string) => {
    setSearch(e);
  };

  const handleSearch = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handleSearch(search);
  };

  return (
    <div className="flex py-2 px-3 border border-black shadow-2xl rounded-xl gap-2 w-120 mx-8">
      <CiSearch className="text-2xl" />
      <form onSubmit={(e) => handleSearch(e)} className="w-full">
        <input
          type="text"
          placeholder={props.placeholder ? props.placeholder : "Search here..."}
          onChange={(e) => getInput(e.target.value)}
          value={search}
          className="focus:outline-none w-full"
        />
      </form>
    </div>
  );
}

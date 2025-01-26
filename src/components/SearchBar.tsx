import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="relative max-w-2xl w-full mx-auto">
      <Input
        type="text"
        value={searchValue}
        placeholder="Search videos..."
        className="pl-10 pr-4 h-12 w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
        onChange={handleSearch}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
};
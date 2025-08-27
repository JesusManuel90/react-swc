import {Search} from "lucide-react";

export const SearchBar = ({ searchTerm, onSearchChange, placeholder }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg p-4 animate-in slide-in-from-left duration-500 delay-200 hover:bg-white/15 transition-all duration-300">
      <div className="relative group">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 transition-all duration-300 group-focus-within:text-purple-400 group-focus-within:scale-110" />
        <input
          type="text"
          placeholder={placeholder || "Buscar..."}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 focus:bg-white/20 focus:shadow-lg focus:shadow-purple-500/10"
        />
      </div>
    </div>
  );
};
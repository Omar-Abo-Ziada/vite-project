function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div
        className="
        flex items-center gap-3
        rounded-2xl px-4 py-3
        bg-[#061843]/70 backdrop-blur-md
        border border-white/20
        shadow-2xl
        transition
        hover:bg-[#113994]/70
        focus-within:ring-2
        focus-within:ring-purple-500
        focus-within:ring-offset-0
      "
      >
        <img
          src="/src/assets/Search Icon.png"
          alt="Search"
          className="h-5 w-5 opacity-80"
        />

        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full bg-transparent
            text-amber-100
            placeholder:text-amber-100/50
            outline-none
            text-sm
          "
        />
      </div>
    </div>
  );
}

export default Search;

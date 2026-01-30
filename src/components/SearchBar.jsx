const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Bangalore" />
      <input
        type="text"
        placeholder="Search doctors, clinics, hospitals, etc."
      />
    </div>
  );
};

export default SearchBar;

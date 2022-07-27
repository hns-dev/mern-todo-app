function FilterList({ filterOption, onFilterOptionChange }) {
  return (
    <div className="filter-list flex surface-color padding-y">
      <button
        className={`btn ${filterOption === "All" ? "active-btn" : ""}`}
        onClick={() => onFilterOptionChange("All")}
      >
        All
      </button>
      <button
        className={`btn ${filterOption === "Active" ? "active-btn" : ""}`}
        onClick={() => onFilterOptionChange("Active")}
      >
        Active
      </button>
      <button
        className={`btn ${filterOption === "Completed" ? "active-btn" : ""}`}
        onClick={() => onFilterOptionChange("Completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterList;

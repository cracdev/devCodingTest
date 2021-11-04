import React from "react";

export default function FilterDropdown(props) {
  return (
    <div className="is-flex is-align-items-center">
      <div className="mr-2">Sort by: </div>
      <div className="select">
        <select onChange={props.onChange} value={props.value}>
          <option value="rank:asc">Ranking</option>
          <option value="imDbRating:desc">IMDb Rating</option>
          <option value="year:desc">Release Date</option>
        </select>
      </div>
    </div>
  );
}

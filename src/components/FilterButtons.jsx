// FilterButtons.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Все</option>
        <option value="COMPLETED">Завершенные</option>
        <option value="INCOMPLETE">Не завершенные</option>
      </select>

      <button
        className="text-sm px-2 py-1 bg-gray-300 hover:bg-gray-400 text-white rounded ml-2"
        onClick={() => dispatch(markAllCompleted())}
      >
        Отметить все завершенным
      </button>
    </div>
  );
};

export default FilterButtons;

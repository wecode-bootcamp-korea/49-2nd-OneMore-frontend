import React, { useState } from 'react';
import styled from 'styled-components';

const exerciseOptions = ['전체', '무산소', '유산소'];
const placeOption = ['전체', '상체', '하체'];
const filterOptions = ['전체', 'filter01', 'filter02', 'filter03', 'filter04'];

function Filter() {
  const initialFilters = {
    exercise: exerciseOptions.reduce((options, option) => {
      options[option] = option === '전체'; // '전체' 필터만 처음에 true로 설정
      return options;
    }, {}),
    place: placeOption.reduce((options, option) => {
      options[option] = option === '전체';
      return options;
    }, {}),
    filters: filterOptions.reduce((options, option) => {
      options[option] = option === '전체';
      return options;
    }, {}),
  };

  const [checkedFilters, setCheckedFilters] = useState(initialFilters);

  const handleFilterChange = (filterType, category) => {
    setCheckedFilters(prevFilters => {
      const updatedCategory = {
        ...prevFilters[category],
        [filterType]: !prevFilters[category][filterType],
      };

      if (filterType === '전체') {
        // '전체' 필터를 선택한 경우 해당 카테고리의 모든 필터를 선택 또는 해제
        Object.keys(updatedCategory).forEach(key => {
          if (key !== '전체') {
            updatedCategory[key] = !prevFilters[category]['전체'];
          }
        });
      } else {
        // 다른 필터를 선택한 경우 '전체' 필터를 선택 해제
        updatedCategory['전체'] = false;
      }

      // 만약 모든 필터가 false인 경우 '전체' 필터도 선택 해제
      if (
        !Object.keys(updatedCategory).some(
          key => key !== '전체' && updatedCategory[key],
        )
      ) {
        updatedCategory['전체'] = false;
      }

      return {
        ...prevFilters,
        [category]: updatedCategory,
      };
    });
  };

  return (
    <>
      <FilterCategory
        category="exercise"
        options={exerciseOptions}
        handleFilterChange={handleFilterChange}
        checkedFilters={checkedFilters}
      />
      <FilterCategory
        category="place"
        options={placeOption}
        handleFilterChange={handleFilterChange}
        checkedFilters={checkedFilters}
      />
      <FilterCategory
        category="filters"
        options={filterOptions}
        handleFilterChange={handleFilterChange}
        checkedFilters={checkedFilters}
      />
    </>
  );
}

const FilterCategory = ({
  category,
  options,
  handleFilterChange,
  checkedFilters,
}) => {
  return (
    <FilterWrap>
      {options.map(filterType => (
        <FilterItem key={filterType}>
          <FilterInput
            type="checkbox"
            checked={checkedFilters[category][filterType]}
            readOnly
          />
          <FilterLabel
            checked={checkedFilters[category][filterType]}
            onClick={() => handleFilterChange(filterType, category)}
          >
            {filterType}
          </FilterLabel>
        </FilterItem>
      ))}
    </FilterWrap>
  );
};

const FilterWrap = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 10px;
`;

const FilterItem = styled.li`
  display: inline-block;
  margin-right: 10px;
`;

const FilterLabel = styled.label`
  background-color: #fff;
  border-radius: 10px;
  //padding: 20px;
  border: 1px solid #fff;
  padding: 3px 7px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  ${props =>
    props.checked &&
    `
    border: 1px solid #8bc34a;
    background-color: #8bc34a;
    color: #fff;
  `};
`;

const FilterInput = styled.input`
  display: none;
`;

export default Filter;

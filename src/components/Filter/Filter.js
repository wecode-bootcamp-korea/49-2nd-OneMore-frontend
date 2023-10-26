import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function Filter(props) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(location.search);

  const machineClick = id => {
    if (id === null) {
      searchParams.delete('equip-required');
    } else {
      searchParams.set('equip-required', id);
    }
    setSearchParams(searchParams);
  };

  const partClick = id => {
    if (id === null) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', id);
    }
    setSearchParams(searchParams);
  };

  const routineClick = id => {
    if (id === null) {
      searchParams.delete('routine');
    } else {
      searchParams.set('routine', id);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      {props.category === 'equipRequired' ? (
        <FilterBox>
          {EQUIPREQUIRED_LIST.map(({ id, text, equipRequired }) => (
            <Option
              key={id}
              $text={text}
              onClick={() => machineClick(equipRequired)}
              $isActive={queryParams.get('equip-required') == equipRequired}
            >
              {text}
            </Option>
          ))}
        </FilterBox>
      ) : null}

      {props.category === 'category' ? (
        <FilterBox>
          {CATEGORY_LIST.map(({ id, text, category }) => (
            <Option
              key={id}
              $text={text}
              onClick={() => partClick(category)}
              $isActive={queryParams.get('category') == category}
            >
              {text}
            </Option>
          ))}
        </FilterBox>
      ) : null}

      {props.category === 'routine' ? (
        <FilterBox>
          {ROUTINE_LIST.map(({ id, text, routine }) => (
            <Option
              key={id}
              $text={text}
              onClick={() => routineClick(routine)}
              $isActive={queryParams.get('routine') == routine}
            >
              {text}
            </Option>
          ))}
        </FilterBox>
      ) : null}
    </>
  );
}

const FilterBox = styled.div``;
const Option = styled.button`
  padding: 8px 15px;
  margin-right: 10px;
  border-radius: 15px;
  background-color: ${props => (props.$isActive ? '#8bc34a' : '#fff')};
  color: ${props => (props.$isActive ? '#fff' : '#8bc34a')};

  &:hover {
    background-color: #8bc34a;
    color: #fff;
  }
`;

const EQUIPREQUIRED_LIST = [
  { id: 1, text: '전체', equipRequired: null },
  { id: 2, text: '기구', equipRequired: 1 },
  { id: 3, text: '맨몸', equipRequired: 2 },
];

const CATEGORY_LIST = [
  { id: 1, text: '전체', category: null },
  { id: 2, text: '전신', category: 1 },
  { id: 3, text: '상체', category: 2 },
  { id: 4, text: '하체', category: 3 },
];

const ROUTINE_LIST = [
  { id: 1, text: '전체', routine: null },
  { id: 2, text: '오늘의 루틴', routine: 1 },
  { id: 3, text: '내 루틴', routine: 2 },
];
export default Filter;

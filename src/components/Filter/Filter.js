import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function Filter(props) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(location.search);

  const machineClick = id => {
    if (id === null) {
      searchParams.delete('machine');
    } else {
      searchParams.set('machine', id);
    }
    setSearchParams(searchParams);
  };

  const partClick = id => {
    if (id === null) {
      searchParams.delete('part');
    } else {
      searchParams.set('part', id);
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
      {props.category === 'machine' ? (
        <FilterBox>
          {MACHINE_LIST.map(({ id, text, machine }) => (
            <Option
              key={id}
              text={text}
              onClick={() => machineClick(machine)}
              isActive={queryParams.get('machine') == machine}
            >
              {text}
            </Option>
          ))}
        </FilterBox>
      ) : null}

      {props.category === 'part' ? (
        <FilterBox>
          {PART_LIST.map(({ id, text, part }) => (
            <Option
              key={id}
              text={text}
              onClick={() => partClick(part)}
              isActive={queryParams.get('part') == part}
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
              text={text}
              onClick={() => routineClick(routine)}
              isActive={queryParams.get('routine') == routine}
            >
              {text}
            </Option>
          ))}
        </FilterBox>
      ) : null}
    </>
  );
}

const FilterBox = styled.div`
  padding: 10px 0;
`;
const Option = styled.button`
  padding: 8px 15px;
  margin-right: 10px;
  border-radius: 15px;
  background-color: ${props => (props.isActive ? '#8bc34a' : '#fff')};
  color: ${props => (props.isActive ? '#fff' : '#8bc34a')};

  &:hover {
    background-color: #8bc34a;
    color: #fff;
  }
`;

const MACHINE_LIST = [
  { id: 1, text: '전체', machine: null },
  { id: 2, text: '기구', machine: 1 },
  { id: 3, text: '맨몸', machine: 2 },
];

const PART_LIST = [
  { id: 1, text: '전체', part: null },
  { id: 2, text: '전신', part: 1 },
  { id: 3, text: '상체', part: 2 },
  { id: 4, text: '하체', part: 3 },
];

const ROUTINE_LIST = [
  { id: 1, text: '전체', routine: null },
  { id: 2, text: '오늘의 루틴', routine: 1 },
  { id: 3, text: '내 루틴', routine: 2 },
];
export default Filter;

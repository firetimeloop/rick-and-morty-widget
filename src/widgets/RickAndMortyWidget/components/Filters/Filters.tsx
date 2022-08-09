import React from 'react';
import Select from 'react-select';
import { debounce } from 'lodash';

import { addFilter } from '../../reducers/widgetSlice';
import { useAppDispatch } from '../../../../app/hooks';

import { GENDER_OPTIONS, STATUS_OPTIONS } from './consts';
import {
  FiltersLabel,
  FiltersRow,
  FiltersTitle,
  FiltersWrapper,
  Selects
} from './elements'

const Filters = () => {
  const dispatch = useAppDispatch();

  const handleAddingFilter = (name: string, value?: string) => {
    dispatch(addFilter({name, value}))
  } 

  return (
    <FiltersWrapper>
      <FiltersTitle>Filters:</FiltersTitle>
      
      <FiltersRow>
        <FiltersLabel>
          Name:&nbsp;
          <input onChange={debounce((evt) => handleAddingFilter('name', evt.target.value), 500)}/>
        </FiltersLabel>
        <FiltersLabel>
          Species:&nbsp;
          <input onChange={debounce((evt) => handleAddingFilter('species', evt.target.value), 500)}/>
        </FiltersLabel>
        <FiltersLabel>
          Type:&nbsp;
          <input onChange={debounce((evt) => handleAddingFilter('type', evt.target.value), 500)}/>
        </FiltersLabel>
        <Selects>
          <Select
              onChange={(val) => dispatch(addFilter({name: 'status', value: val?.value}))}
              options={STATUS_OPTIONS}
              placeholder="Status"
              isClearable
          />
          <Select
              onChange={(val) => dispatch(addFilter({name: 'gender', value: val?.value}))}
              options={GENDER_OPTIONS}
              placeholder="Gender"
              isClearable
          />

        </Selects>
      </FiltersRow>
    </FiltersWrapper>
  );
};

export default Filters;

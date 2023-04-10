import React from 'react';
import Input from '@atoms/Input';

import SearchIcon from '@icons/SearchIcon';

const SearchInput = props => {
  return (
    <div className="relative">
      <Input placeholder="Search" className="pl-9" onChange={props.onChange} />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;

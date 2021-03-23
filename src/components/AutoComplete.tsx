import React from 'react';

type AutoCompleteProps = {
  placeholder: string
}

const AutoComplete = ({ placeholder }: AutoCompleteProps) => {
  return (
    <input type="text"
           placeholder={placeholder}
           className="form-input bg-teal-300 border border-blue-600 rounded w-full py-2 px-4 text-grey-800 leading-tight"/>
  );
};

export default AutoComplete;
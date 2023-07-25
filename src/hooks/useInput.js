import React, { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.targe.value);
  };

  return [value, handler];
};

export default useInput;

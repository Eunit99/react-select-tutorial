import React, { useState } from 'react';
import Select from 'react-select';



const MySelect = () => {
const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log(`Option selected:`, option);
  };

  const options = [
    { value: 'helene', label: 'Helene' },
    { value: 'berline', label: 'Berline' },
    { value: 'selene', label: 'Selene' }
  ];

  return (
   <>
      <Select
        options={options}
        onChange={handleChange}
        isSearchable={true}
        placeholder="Favourite artists"
      />

   </>
  );
}

export default MySelect;
import React, { useState } from 'react';
const OpinionButton = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className=' flex justify-center items-center h-screen w-screen bg-pink-300'>
    <div className=' bg-[#f2f2f2] p-10 '>
      <form onSubmit={handleSubmit}>

        <div>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black font-serif mb-10 opacity-50'>
        OPINION
</h1></div>
<div className='grid grid-cols-1'>
<div>
         <label htmlFor="Name:" className="text-lg">Name :</label>
          <input
            type="Name"
            id="Name"
            name="Name"
            value={formData.name}
            onChange={handleChange}
            className='ml-20 bg-gray-300 mb-10 text-lg'
          />
        </div>
            <div>
              <label htmlFor="Register No" className="text-lg">Register No :</label>
              <input
                type="Register No"
                id="Register No"
                name="Register No"
                value={formData.id}
                onChange={handleChange}
                className='ml-9 bg-gray-300 mb-10 text-lg'
              />
            </div>
            <div>
              <label htmlFor="Comments" className="text-lg">Comments :</label>
              <input
                type="Comments"
                id="Comments"
                name="Comments"
                value={formData.id}
                onChange={handleChange}
                className='ml-11 bg-gray-300 w-96 h-20 mb-10 text-lg'
              />
            </div>
        </div>
        
<div className=' flex gap-80'>
    <button type="button" className="text-white bg-blue-400 dark:bg-blue-500  font-medium rounded-lg text-sm px-10 py-4 pt-3 pb-3  text-center">Submit</button>
    <button type="button" className="text-white bg-blue-400 dark:bg-blue-500  font-medium rounded-lg text-sm px-10 pt-3 py-4 pb-3 text-center">Clear Form</button>
</div>
</form>
    </div>
    </div>
  );
};

export default OpinionButton;

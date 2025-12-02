import React, { useEffect, useState, useContext } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';
import Aos from 'aos';
import { AuthContext } from '../../Context/AuthContext';
import Loder from '../Loder';
import Title from '../Title';

const Service = () => {
  const { loading } = useContext(AuthContext);
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
  const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
  return () => clearTimeout(timer);
}, [searchTerm]);


  useEffect(() => {
    let result =[...data];
    

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Filter by search term
    if (debouncedSearch) {
      result = result.filter((item) =>
        item.serviceName.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    // Sort items
    if (sortOption === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
  else if (sortOption === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
  else if (sortOption === 'rating-desc') result = [...result].sort((a, b) => b.rating - a.rating);


  

    setFilteredData(result);
  }, [debouncedSearch, selectedCategory, sortOption, data]);

  
  const categories = ['All', 'Clothing', 'Grooming', 'Comfort', 'Health', 'Housing'];
  const sortOptions = [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Rating: High to Low', value: 'rating-desc' },
  ];

  return (
    <div data-aos='slide-right' className='w-11/12 mx-auto my-12'>
      <div><title>WarmPaws Services</title></div>
      <Title
        title='Our Services'
        description='Explore a wide range of winter pet care services, tailored for your furry friends.'
      />

      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Sidebar */}
        <aside className='lg:w-1/4 bg-primary shadow-md rounded-xl p-6 space-y-6'>
          {/* Search */}
          <div>
            <label className='font-semibold text-gray-700'>Search</label>
            <input
              type='text'
              placeholder='Search services...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]'
            />
          </div>

          {/* Categories as buttons */}
          <div>
            <p className='font-semibold text-gray-700 mb-2'>Category</p>
            <div className='flex flex-wrap gap-2'>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition 
                    ${selectedCategory === cat ? 'bg-success text-white' : 'bg-[#BAD8B6] text-gray-700 hover:bg-secondary'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort options as buttons */}
          <div>
            <p className='font-semibold text-gray-700 mb-2'>Sort By</p>
            <div className='flex flex-col gap-2'>
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortOption(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition 
                    ${sortOption === option.value ? 'bg-success text-white' : 'bg-[#BAD8B6] text-gray-700 hover:bg-secondary'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Service Cards */}
        <div className='flex-1'>
          {loading ? (
            <Loder />
          ) : filteredData.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredData.map((service) => (
                <ServiceCard key={service.serviceId} service={service} />
              ))}
            </div>
          ) : (
            <p className='text-center text-gray-500 mt-10'>No services found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;

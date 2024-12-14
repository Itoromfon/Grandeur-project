// components/SearchToggle.js

import { useState } from 'react';
import Image from 'next/image';
import style from './SearchBar.module.css'

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', query);
    // Reset query if needed
    setQuery('');
  };

  return (
    <div style={styles.container}>
      <button className='button' onClick={toggleSearchBar} style={styles.icon}>
        <Image 
          src="/icon.png"
          alt="search-icon"
          className={style.search}
          width={21.35}
          height={19.17}
        />
      </button>
      {/* {isOpen && (
        <form onSubmit={handleSearch} style={styles.form}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Search
          </button>
        </form>
      )} */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '5px',
  },
  button: {
    padding: '10px',
    border: '1px solid #0070f3',
    borderRadius: '4px',
    backgroundColor: '#0070f3',
    color: 'white',
    cursor: 'pointer',
  },
};

export default SearchBar;

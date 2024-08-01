import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import AppLayout from '../components/Layout';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setResults([
            { username: 'user1', fullName: 'User One', avatar: '/path-to-avatar1.jpg', profileUrl: '/user1' },
            { username: 'user2', fullName: 'User Two', avatar: '/path-to-avatar2.jpg', profileUrl: '/user2' }
        ]);
    };

    return (
        <AppLayout>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <SearchBar onSearch={handleSearch} />
                {query && <SearchResults results={results} />}
            </div>
        </AppLayout>
    );
};

export default SearchPage;

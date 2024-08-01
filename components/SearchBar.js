import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#efefef', padding: '5px 10px', borderRadius: '8px', width: '100%' }}>
            <SearchOutlined style={{ fontSize: '20px', color: '#8e8e8e', marginRight: '10px' }} />
            <Input 
                placeholder="Tìm kiếm" 
                style={{ backgroundColor: 'transparent', color: '#262626' }} 
            />
        </div>
    );
};

export default SearchBar;

import React, { useState } from 'react';
import { List, Avatar } from 'antd';

const SearchResults = ({ results }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={results}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.profileUrl}>{item.username}</a>}
                        description={item.fullName}
                    />
                </List.Item>
            )}
            style={{
                backgroundColor: '#fff',
                border: '1px solid #dbdbdb',
                borderRadius: '8px',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                marginTop: '10px',
                padding: '10px'
            }}
        />
    );
};

export default SearchResults;

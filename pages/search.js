import { useState } from 'react';
import SearchComponent from '../components/SearchComponent';
import { List, Avatar, Spin, Typography } from 'antd';
import styles from '../styles/search.module.css';
import AppLayout from '../components/Layout';
const { Title } = Typography;

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (value) => {
        if (!value) return;

        setQuery(value);
        setLoading(true);

        try {
            const response = await fetch(`/api/search?query=${encodeURIComponent(value)}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();

            const users = data.results.data.users || [];
            setResults(users);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppLayout>
            <div className={styles.searchContainer}>
                <SearchComponent onSearch={handleSearch} />
                {loading ? (
                    <Spin tip="Đang tìm kiếm..." />
                ) : (
                    <>
                        {results.length > 0 ? (
                            <List
                                itemLayout="horizontal"
                                dataSource={results}
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.profile_pic_url} />}
                                            title={<a href={`/profile/${item.username}`}>{item.full_name}</a>}
                                            description={`@${item.username}`}
                                        />
                                    </List.Item>
                                )}
                            />
                        ) : (
                            <Title level={4}>Không tìm thấy kết quả</Title>
                        )}
                    </>
                )}
            </div>
        </AppLayout>
    );
};

export default SearchPage;

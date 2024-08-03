import { useState, useEffect } from 'react';
import { List, Avatar, Typography, Spin } from 'antd';
import AppLayout from '../components/Layout';
import styles from '../styles/search.module.css';

const { Title } = Typography;

const SearchPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setResults(data.data.users || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <AppLayout>
            <div className={styles.searchContainer}>
                <img src='https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/449724899_920072209887311_7724917238397384747_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=oQozPtG0VgQQ7kNvgGpN4-1&gid=390aad14a9aa4c1983f0772e94e26a1d&edm=AHFUoAoBAAAA&ccb=7-5&oh=00_AYDgbasU7OY8ifBoBCAiyvkEM-bo3kdvQe-TUx2YsRQvZQ&oe=66B3ADF5&_nc_sid=c39c95'></img>
                <h1>Danh sách người dùng</h1>
                {loading ? (
                    <Spin tip="Đang tải dữ liệu..." />
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
                            <Title level={4}>Không có người dùng</Title>
                        )}
                    </>
                )}
            </div>
        </AppLayout>
    );
};

export default SearchPage;

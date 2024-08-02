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
                <img src='https://instagram.fdub3-2.fna.fbcdn.net/v/t51.2885-19/340312633_531296959165743_1080518946684306407_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=instagram.fdub3-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=XyIFigegUxUQ7kNvgHM7Qm3&gid=1168263612784d38b0114516729df907&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AYAQJ1yH1gUgG1M3OiDZEsjetx0jAOIRnCf8x5SfxaCYrw&oe=66B263E6&_nc_sid=c9086e'></img>
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

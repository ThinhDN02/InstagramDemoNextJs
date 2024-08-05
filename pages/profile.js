import { Avatar, Card, Col, Row, Statistic, Typography } from 'antd';
import AppLayout from '../components/Layout';

const { Meta } = Card;
const { Title, Text } = Typography;

const Profile = ({ user, posts, error }) => {
    if (error) {
        return (
            <AppLayout>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <Title level={4}>{error}</Title>
                </div>
            </AppLayout>
        );
    }

    if (!user) {
        return (
            <AppLayout>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <Title level={4}>Profile not found</Title>
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout>
            <div style={{ padding: '20px' }}>
                {/* Profile Header */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <Avatar size={128} src={user.profile_pic_url || '/default-avatar.png'} />
                    <div style={{ marginLeft: '20px' }}>
                        <Title level={2}>{user.full_name || 'Unknown User'}</Title>
                        <Text>@{user.username || 'username'}</Text>
                        <div style={{ marginTop: '10px', display: 'flex', gap: '20px' }}>
                            <Statistic title="Posts" value={user.post_count || 0} />
                            <Statistic title="Followers" value={user.follower_count || 0} />
                            <Statistic title="Following" value={user.following_count || 0} />
                        </div>
                    </div>
                </div>

                {/* Posts */}
                <Title level={4}>Posts</Title>
                <Row gutter={16}>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Col span={8} key={post.id}>
                                <Card
                                    cover={<img alt="example" src={post.thumbnail_url || '/default-thumbnail.png'} />}
                                    actions={[
                                        <span key="likes">Likes: {post.like_count || 0}</span>,
                                        <span key="comments">Comments: {post.comment_count || 0}</span>,
                                    ]}
                                />
                            </Col>
                        ))
                    ) : (
                        <Col span={24}>
                            <Title level={4}>No posts available</Title>
                        </Col>
                    )}
                </Row>
            </div>
        </AppLayout>
    );
};

export async function getServerSideProps(context) {
    const { username } = context.query;
    const finalUsername = username || 'thinhdn02';

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    if (!apiUrl) {
        return {
            props: {
                user: null,
                posts: [],
                error: 'API URL is not set in environment variables.',
            }
        };
    }

    try {
        const response = await fetch(`${apiUrl}/api/profile?username=${encodeURIComponent(finalUsername)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        return {
            props: {
                user: data.user || null,
                posts: Array.isArray(data.posts) ? data.posts : [],
                error: null,
            }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                user: null,
                posts: [],
                error: 'Unable to load profile data',
            }
        };
    }
}


export default Profile;

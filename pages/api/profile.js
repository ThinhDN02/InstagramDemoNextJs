export default async function handler(req, res) {
    const { username } = req.query;

    if (!username) {
        return res.status(400).json({ error: 'Missing username parameter' });
    }

    try {
        const response = await fetch(`https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${encodeURIComponent(username)}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '3f332e76a0mshe48e1da1d4a6688p119c02jsna411a44bec48',
                'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const user = data.data.user || {};
        const posts = data.data.items || [];
        console.log('API Data:', posts);
        res.status(200).json({ user, posts });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: error.message });
    }
}

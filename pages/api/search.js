export default async function handler(req, res) {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Missing query parameter' });
    }

    try {
        const response = await fetch(`https://instagram-scraper-api2.p.rapidapi.com/v1/search?search_query=${encodeURIComponent(query)}`, {
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
        res.status(200).json({ results: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
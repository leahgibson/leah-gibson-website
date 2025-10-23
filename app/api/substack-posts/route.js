import Parser from 'rss-parser';

export async function GET() {
  const parser = new Parser();
  
  try {
    const feed = await parser.parseURL('https://polarvertex.substack.com/feed');
    
    // Extract just the data we need
    const posts = feed.items.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet || item.description,
      author: item.creator || item.author,
    }));

    return Response.json({ posts });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return Response.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}
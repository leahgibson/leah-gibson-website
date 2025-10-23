'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Writing() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/substack-posts');
        const data = await response.json();
        
        if (data.error) {
          setError(data.error);
        } else {
          setPosts(data.posts);
        }
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Writing</h1>
          
          <p className="text-lg text-gray-700 mb-8">
            I write about mathematics, atmospheric science, and any other projects or topics I&apos;m interested in on my Substack,{' '}
            <a 
              href="https://polarvertex.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Polar Vertex
            </a>
            .
          </p>

          {loading && (
            <p className="text-gray-600 text-center py-8">Loading posts...</p>
          )}

          {error && (
            <p className="text-red-600 text-center py-8">{error}</p>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-gray-600 text-center py-8">No posts found.</p>
          )}

          <div className="space-y-6">
            {posts.map((post, index) => (
                <a
                    key={index}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-blue-700">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(post.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-gray-700 line-clamp-3">
                  {post.contentSnippet}
                </p>
                <span className="inline-block mt-3 text-blue-600 hover:text-blue-800">
                  Read more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
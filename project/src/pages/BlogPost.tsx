import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/dummy';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 py-8">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-red-600 font-medium transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full font-medium">
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <button className="flex items-center space-x-2 text-orange-600 hover:text-red-600 transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-orange-500 pl-6 bg-orange-50 p-4 rounded-r-lg">
              {post.summary}
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('-')) {
                  // Handle bullet points
                  const items = paragraph.split('\n').filter(line => line.trim().startsWith('-'));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">
                          {item.replace(/^-\s*/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.includes(':') && paragraph.split('\n').length === 1) {
                  // Handle headings (lines with colons)
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      {paragraph}
                    </h2>
                  );
                } else {
                  // Regular paragraphs
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Want Personalized Guidance?
              </h3>
              <p className="text-gray-600 mb-6">
                Get detailed insights specific to your birth chart and life circumstances through a personal consultation with Pandit Ji.
              </p>
              <Link
                to="/book"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold inline-block"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.summary}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
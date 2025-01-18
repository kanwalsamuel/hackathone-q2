

import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const DocsPage = () => {
  const filePath = path.join(process.cwd(), 'public', 'docs', 'BuildMasterDocument.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">BuildMaster Document</h1>
      </header>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
        {/* Optional Image */}
        <div className="text-center mb-6 animate-fade">
          <Image 
            src="/images/document.jpg" 
            alt="BuildMaster Diagram" 
            width={800}  
            height={450} 
            className="w-full h-auto object-cover rounded-lg shadow-md" 
          />
        </div>

        {/* Markdown Content */}
        <div className="prose prose-lg text-left">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;

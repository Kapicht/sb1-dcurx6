import React from 'react';
import { Book, MessageCircle, Phone, Mail } from 'lucide-react';

const Help: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Help & Support</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <Book className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Documentation</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Access our comprehensive documentation to learn more about Greenify's features and how to use them effectively.
          </p>
          <a href="#" className="text-green-600 hover:text-green-700 font-medium">
            View Documentation →
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">FAQ</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Find answers to commonly asked questions about energy management and using the Greenify platform.
          </p>
          <a href="#" className="text-green-600 hover:text-green-700 font-medium">
            View FAQ →
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Contact Support</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Need personalized assistance? Our support team is ready to help you with any questions or issues.
          </p>
          <p className="text-gray-800 font-medium">Phone: +1 (800) 123-4567</p>
          <p className="text-gray-800 font-medium">Hours: Mon-Fri, 9am-5pm EST</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
          </div>
          <p className="text-gray-600 mb-4">
            For non-urgent inquiries or detailed questions, feel free to reach out to our support email.
          </p>
          <a href="mailto:support@greenify.com" className="text-green-600 hover:text-green-700 font-medium">
            support@greenify.com
          </a>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Tutorials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Getting Started with Greenify</h4>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              ></iframe>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Advanced Energy Saving Techniques</h4>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
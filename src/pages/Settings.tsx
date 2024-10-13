import React, { useState } from 'react';
import { Save } from 'lucide-react';

const Settings: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: 'Acme Corp',
    industry: 'Technology',
    buildingSize: '50000',
    location: 'New York, NY',
    energyProvider: 'Green Energy Co.',
    notificationEmail: 'admin@acmecorp.com',
    alertThreshold: '15',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Show a success message to the user
    alert('Settings updated successfully!');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Settings</h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                Company Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="industry" className="block text-sm font-medium leading-6 text-gray-900">
                Industry
              </label>
              <div className="mt-2">
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Technology</option>
                  <option>Manufacturing</option>
                  <option>Healthcare</option>
                  <option>Retail</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="buildingSize" className="block text-sm font-medium leading-6 text-gray-900">
                Building Size (sq ft)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="buildingSize"
                  id="buildingSize"
                  value={formData.buildingSize}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="energyProvider" className="block text-sm font-medium leading-6 text-gray-900">
                Energy Provider
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="energyProvider"
                  id="energyProvider"
                  value={formData.energyProvider}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="notificationEmail" className="block text-sm font-medium leading-6 text-gray-900">
                Notification Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="notificationEmail"
                  id="notificationEmail"
                  value={formData.notificationEmail}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="alertThreshold" className="block text-sm font-medium leading-6 text-gray-900">
                Alert Threshold (% above average)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="alertThreshold"
                  id="alertThreshold"
                  value={formData.alertThreshold}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
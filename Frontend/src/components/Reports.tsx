import React, { useState } from 'react';
import { ChevronDown, Search, Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from './Calendar';
export function Reports() {
  const [selectedReport, setSelectedReport] = useState('Service Complaints');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const reportOptions = [
  'Service Complaints',
  'Bill Complaints',
  'New Service',
  'Service Relocation',
  'Service Modification'];

  const filterFields = [
  ['CR', 'Company', 'Category'],
  ['Service Id', 'Account No', 'Account Manager'],
  ['Username']];

  return (
    <div className="bg-white rounded-xl border border-blue-200 p-4 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-800">Reports</h3>
        <button
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <CalendarIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="relative">
        <div>
          <div className="relative mb-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white">
              
              {selectedReport}
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {isDropdownOpen &&
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {reportOptions.map((option, idx) =>
              <button
                key={idx}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50"
                onClick={() => {
                  setSelectedReport(option);
                  setIsDropdownOpen(false);
                }}>
                
                    {option}
                  </button>
              )}
              </div>
            }
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm"
              placeholder="" />
            
            <button className="absolute right-1 top-1 bottom-1 bg-blue-500 text-white rounded p-1.5 flex items-center justify-center hover:bg-blue-600">
              <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="mb-2 text-xs font-semibold text-gray-600">Fields</div>

          <div className="flex-1 flex gap-8">
            {filterFields.map((column, colIdx) =>
            <div key={colIdx} className="flex flex-col gap-2">
                {column.map((field, fieldIdx) =>
              <label
                key={fieldIdx}
                className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                
                    <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                
                    {field}
                  </label>
              )}
              </div>
            )}
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white text-xs font-bold py-1.5 px-6 rounded-full hover:bg-blue-600 transition-colors">
              Submit
            </button>
          </div>
        </div>

        {isCalendarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={() => setIsCalendarOpen(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10">
                ✕
              </button>
              <Calendar />
            </div>
          </div>
        )}
      </div>
    </div>);

}
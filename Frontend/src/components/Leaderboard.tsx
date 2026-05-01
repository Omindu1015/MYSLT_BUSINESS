import React from 'react';
export function Leaderboard() {
  const data = [
  {
    company: 'LECO',
    user: 'user@leco.lk',
    category: 'GB',
    am: 'Kasun Sameera'
  },
  {
    company: 'NWS&DB',
    user: 'admin@nwsdb.lk',
    category: 'GB',
    am: 'Nadun Thiwanka'
  },
  {
    company: 'Pizza Hut',
    user: 'billing@pizzahut.lk',
    category: 'LB',
    am: 'Amal Perera'
  },
  {
    company: 'KY Biz',
    user: 'itmanager@kyb.com',
    category: 'SME',
    am: 'Dilan Imesh'
  }];

  return (
    <div className="bg-white rounded-xl border border-blue-200 p-4 shadow-sm h-full">
      <h3 className="text-sm font-bold text-gray-800 mb-4">Leaderboard</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 font-bold text-gray-800">Company</th>
              <th className="pb-3 font-bold text-gray-800">User</th>
              <th className="pb-3 font-bold text-gray-800">Category</th>
              <th className="pb-3 font-bold text-gray-800">AM</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) =>
            <tr key={index} className="border-b border-gray-50 last:border-0">
                <td className="py-3 text-gray-600">{row.company}</td>
                <td className="py-3 text-gray-600">{row.user}</td>
                <td className="py-3 text-gray-600">{row.category}</td>
                <td className="py-3 text-gray-600">{row.am}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}
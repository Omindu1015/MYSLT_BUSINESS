import React from 'react';
import { Building2, Users, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function StatCards() {
  const location = useLocation();
  const path = location.pathname;
  const cards = [
  {
    id: 'companies',
    title: 'Registered Companies',
    value: '3005',
    icon: Building2,
    link: '/view-more/companies',
    activeColor: 'bg-teal-300',
    inactiveColor: 'bg-white',
    iconColor: 'text-blue-500'
  },
  {
    id: 'external',
    title: 'External Users',
    value: '1500',
    icon: Users,
    link: '/view-more/external-users',
    activeColor: 'bg-teal-300',
    inactiveColor: 'bg-white',
    iconColor: 'text-teal-400'
  },
  {
    id: 'internal',
    title: 'Internal Users',
    value: '300',
    icon: User,
    link: '/view-more/internal-users',
    activeColor: 'bg-teal-300',
    inactiveColor: 'bg-white',
    iconColor: 'text-blue-400'
  }];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {cards.map((card) => {
        const isActive = path === card.link;
        return (
          <div
            key={card.id}
            className={`rounded-2xl border border-blue-200 p-5 flex flex-col justify-between ${isActive ? card.activeColor : card.inactiveColor} transition-colors shadow-sm`}>
            
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg bg-blue-50 ${card.iconColor}`}>
                <card.icon className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {card.value}
                </div>
                <div className="text-xs font-semibold text-gray-600">
                  {card.title}
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <Link
                to={card.link}
                className="text-[10px] text-blue-500 hover:text-blue-700 font-bold uppercase tracking-wider">
                
                View More
              </Link>
            </div>
          </div>);

      })}
    </div>);

}
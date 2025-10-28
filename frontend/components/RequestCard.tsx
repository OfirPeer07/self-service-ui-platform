'use client';

import React from 'react';

type RequestCardProps = {
  title: string;
  status: 'pending' | 'approved' | 'rejected';
  description?: string;
};

export default function RequestCard({ title, status, description }: RequestCardProps) {
  const statusColor = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`text-sm px-2 py-1 rounded ${statusColor[status]}`}>
          {status.toUpperCase()}
        </span>
      </div>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
}

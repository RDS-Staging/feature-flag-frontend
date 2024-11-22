import React from 'react';
import { useParams } from 'react-router-dom';

const FeatureFlagDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Feature Flag Details</h1>
      <p>Feature Flag ID: {id}</p>
    </div>
  );
};

export default FeatureFlagDetails; 
import React, { useState } from 'react';

const TrackMyBus: React.FC = () => {

  const [trackingStatus, setTrackingStatus] = useState(false);

  const handleTrackBus = () => {
  setTrackingStatus(true); 
  };

  return (
    <div>
   
    </div>
  );
}

export default TrackMyBus;

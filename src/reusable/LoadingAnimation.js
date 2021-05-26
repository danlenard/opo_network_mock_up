import React from 'react';
import { NewLoaderIcon } from 'utils/Icons';

function LoadingAnimation(props) {
  const { width = 80 } = props;
  return (
  <div className="loading_wrapper">
    <NewLoaderIcon width={width} />
    {/* <div className="loading_message">Loading</div */}
  </div>
  );
}

export default LoadingAnimation;

import React from "react";

function PreloaderAnimation() {
  return (
    <div className="preloader no-default d-none">
      <div className="text-zoom">
        <div className="text-item">
          <div className="text-small">MEGA</div>
          <div className="text-large">MEGA</div>
        </div>
        <div className="text-item">
          <div className="text-small">EXPERT</div>
          <div className="text-large">EXPERT</div>
        </div>
        <div className="text-item">
          <div className="text-small">HUB</div>
          <div className="text-large">HUB</div>
        </div>
      </div>
    </div>
  );
}

export default PreloaderAnimation;

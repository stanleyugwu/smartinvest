import React from "react";

function PreloaderAnimation() {
  return (
    <div className="preloader no-default d-none">
      <div className="text-zoom">
        <div className="text-item">
          <div className="text-small">SMART</div>
          <div className="text-large">SMART</div>
        </div>
        <div className="text-item">
          <div className="text-small">PRO</div>
          <div className="text-large">PRO</div>
        </div>
        <div className="text-item">
          <div className="text-small">INVEST</div>
          <div className="text-large">INVEST</div>
        </div>
      </div>
    </div>
  );
}

export default PreloaderAnimation;

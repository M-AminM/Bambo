import React from "react";
import "../../index.css";

const Work = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray1 flex justify-between">
        <div className="flex justify-center items-center px-4 w-1/2 md:w-full">
          <div>
            <h2 className="text-3xl pb-4 md:text-xl">مشاوره آنلاین</h2>
            <p className="text-xl md:text-sm">
              ... مشاوران ما برای حل مشکلات شما آماده اند
            </p>
          </div>
        </div>
        <div className="gradient_counseling" />
      </div>

      <div className="license_bg flex justify-between">
        <div className="w-2/6 md:w-1/2">
          <img src="/assets/license.svg" />
        </div>

        <div className="flex justify-center items-center w-1/2">
          <div>
            <h2 className="text-3xl pb-4 md:text-lg">ارائه مدرک معتبر</h2>
            <p className="text-xl md:text-xs">
              ... بهترین راه برای ساختن رزومه حرفه ای
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

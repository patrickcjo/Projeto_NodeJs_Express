import React, { useState, useEffect } from "react";

interface FooterProps {
  className: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div className="mt-20">
      <div
        className={`fixed w-screen bottom-0 py-4 text-yellow-500 font-bold px-12 ${className}`}>
        {formattedTime} - {formattedDate}
      </div>
    </div>
  );
};

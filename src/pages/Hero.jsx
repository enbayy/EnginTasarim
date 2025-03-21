import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RevealLinks from "../components/RevealLinks";
import PhoneCard from "../components/Phone";

const stats = [
  { value: 300, label: "Bitmiş Proje" },
  { value: 20, label: "Yıllık Deneyim" },
  { value: 500, label: "Mutlu Müşteri" },
];

const Hero = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hizmetlerimiz");
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const intervalTime = duration / steps;
    const intervals = stats.map((stat, index) => {
      let count = 0;
      const increment = stat.value / steps;
      return setInterval(() => {
        count += increment;
        if (count >= stat.value) {
          count = stat.value;
          clearInterval(intervals[index]);
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.floor(count);
          return newCounts;
        });
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="hero" className="relative bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1B1F3B] dark:text-white py-20">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-14 lg:gap-24">
        <div data-aos="fade-right" className="lg:w-1/2 text-center lg:text-left">
          <RevealLinks />
          <button
            onClick={handleClick}
            data-aos-delay="500"
            className="text-white bg-[#E76F51] dark:bg-[#E9C46A] hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] transition-all duration-300 px-9 py-4 rounded-tl-3xl rounded-br-3xl text-xl shadow-lg font-poppins uppercase font-semibold mt-5 flex justify-start"
          >
            Hemen Başla
          </button>
        </div>
        <div data-aos="fade-left">
          <PhoneCard />
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="px-8 py-6 rounded-3xl w-40 sm:w-48 md:w-52"
            >
              <h1 className="text-5xl font-bold text-[#E76F51] dark:text-[#E9C46A]">
                {counts[index]}+
              </h1>
              <p className="text-gray-700 dark:text-gray-400 text-lg font-bold mt-2 font-poppins">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
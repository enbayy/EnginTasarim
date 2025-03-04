import React, { useState } from "react";
import { services } from "../../data/ServicesData";
import { useNavigate } from "react-router-dom";

const AllServices = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(null);

    const handleDetailClick = (id) => {
        navigate(`/hizmetler/${id}`);
    };

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <section id="services" className="bg-gray-100 dark:bg-black dark:text-white py-16">
            <div className="container mx-auto px-6">
                <div className="pb-12 text-center space-y-4">
                    <h1 data-aos="fade-up" className="text-4xl font-bold text-black dark:text-primary tracking-wide">
                        Hizmetlerimiz
                    </h1>
                    <p data-aos="fade-up" className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Profesyonel hizmetlerimizle işinizi bir üst seviyeye taşıyın.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map(({ id, title, description, imageSrc, aosDelay }) => (
                        <div
                            key={id}
                            data-aos="fade-up"
                            data-aos-delay={aosDelay}
                            className="relative flex flex-col justify-between text-center bg-white dark:bg-gray-900 shadow-lg rounded-3xl overflow-hidden border border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 p-8 h-full group"
                        >
                            <div>
                                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 shadow-md mx-auto">
                                    <img src={imageSrc} alt={title} className="object-contain w-14 h-14" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-5">{title}</h2>
                            </div>
                            <p
                                className={`text-gray-600 dark:text-gray-400 mt-3 text-base leading-relaxed transition-all duration-300 overflow-hidden ${expanded === id ? "max-h-96" : "max-h-20"
                                    }`}
                            >
                                {description}
                            </p>
                            <div className="flex flex-col items-center gap-3 mt-3">
                                <button
                                    onClick={() => toggleExpand(id)}
                                    className="text-primary dark:text-orange-600 font-semibold text-sm hover:underline"
                                >
                                    {expanded === id ? "Daha Az Göster" : "Daha Fazla Oku"}
                                </button>

                                <button
                                    onClick={() => handleDetailClick(id)}
                                    className="w-[120px] h-[40px] bg-primary text-white rounded-lg hover:bg-opacity-80 transition mt-2"
                                >
                                    İncele
                                </button>
                            </div>
                            <span className="absolute inset-x-0 bottom-0 w-0 h-[4px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllServices;
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form başarıyla gönderildi!");
    };

    return (
        <div data-aos="zoom-in" data-aos-once="true" className="bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                    <div className="bg-transparent p-8 space-y-6 rounded-lg">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1E293B] dark:text-white font-poppins">Bize Ulaşın</h2>
                        <p className="text-[#475569] dark:text-[#CBD5E1] font-poppins">
                            Sorularınız için bizimle iletişime geçin.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="text-[#1E293B] dark:text-white block mb-2 font-bold">
                                    Adınız
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-md text-[#1E293B] dark:text-white bg-[#F8FAFC] dark:bg-[#334155] focus:outline-none focus:ring-2 focus:ring-[#E9C46A] transition-all border border-[#E76F51] dark:border-[#E9C46A]"
                                    required
                                    placeholder="Adınızı girin"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-[#1E293B] dark:text-white block mb-2 font-bold">
                                    E-posta
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-md text-[#1E293B] dark:text-white bg-[#F8FAFC] dark:bg-[#334155] border border-[#E76F51] dark:border-[#E9C46A] focus:outline-none focus:ring-2 focus:ring-[#E9C46A] transition-all"
                                    required
                                    placeholder="E-posta adresinizi girin"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-[#1E293B] dark:text-white block mb-2 font-bold">
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-4 h-40 rounded-md text-[#1E293B] dark:text-white bg-[#F8FAFC] dark:bg-[#334155] border border-[#E76F51] dark:border-[#E9C46A] focus:outline-none focus:ring-2 focus:ring-[#E9C46A] transition-all"
                                    required
                                    placeholder="Mesajınızı buraya yazın"
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="inline-block font-semibold px-9 py-4 bg-[#E76F51] dark:bg-[#E9C46A] text-white hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] duration-200 tracking-widest uppercase rounded-tl-3xl rounded-br-3xl"
                                >
                                    Mesajı Gönder
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-transparent p-8 space-y-6 rounded-lg">
                        <div className="mt-8 sm:mt-28 border-2 border-[#E76F51] dark:border-[#E9C46A] rounded-tl-3xl rounded-br-3xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.356060725158!2d28.797169999999994!3d40.9736835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba55f856610b%3A0x99aaacdd37715e26!2sEngin%20Tasar%C4%B1m!5e0!3m2!1str!2str!4v1740753164408!5m2!1str!2str"
                                width="100%"
                                height="350"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                className="rounded-tl-3xl rounded-br-3xl"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
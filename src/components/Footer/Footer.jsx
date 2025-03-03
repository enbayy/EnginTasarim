import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-white py-16 dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-start">
                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h2 className="text-3xl font-semibold text-black leading-tight dark:text-[#F9FAFB]">Engin Tasarım</h2>
                        <div className="flex justify-center sm:justify-start space-x-6 mt-4">
                            <a href="https://www.facebook.com/engintasarim.com.tr/" target="_blank" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://x.com/engintasarim" target="_blank" className="text-black hover:text-[#FF8C00]transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/engintasarim/posts/?feedView=all" target="_blank" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://www.instagram.com/engin_tasarim/" target='_blank' className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h4 className="text-lg font-bold text-black mb-4 dark:text-[#F9FAFB]">Hizmetlerimiz</h4>
                        <a href="/services/1" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">B2B E-ticaret</a>
                        <a href="/services/2" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">Online Reklamcılık</a>
                        <a href="/services/3" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">Web Sitesi İçerik Hizmetleri</a>
                        <a href="/services/4" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">CRM - Müşteri İlişkileri Yönetimi</a>
                        <a href="/services/5" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">Dijital Ajans Hizmetleri</a>
                        <a href="/services/5" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">Kuyumcu E-ticaret Sitesi</a>
                    </div>

                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h4 className="text-lg font-bold text-black mb-4 dark:text-[#F9FAFB]">Tanıtım Sayfaları</h4>
                        <a href="/about" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">Hakkımızda</a>
                        <a href="/AllServices" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">Hizmetler</a>
                        <a href="/AllReferences" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">Referanslar</a>
                        <a href="/AllProducts" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">Ürünler</a>
                        <a href="/contact" className="text-black hover:text-[#FF8C00] transition-all duration-300 dark:text-[#F9FAFB] dark:hover:text-[#FF6347]">İletişim</a>
                    </div>

                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <h4 className="text-lg font-bold text-black mb-4 dark:text-[#F9FAFB]">İletişim</h4>
                        <p className="text-black transition-all duration-300 dark:text-[#F9FAFB]">info@engintasarim.com</p>
                        <p className="text-black transition-all duration-300 dark:text-[#F9FAFB]">+90 212 482 97 57</p>
                    </div>

                    <div className="text-center sm:text-right">
                        <h3 className="text-xl font-semibold text-black mb-4 dark:text-[#F9FAFB]">Konum Bilgileri</h3>
                        <p className="text-black text-base sm:text-lg leading-relaxed dark:text-[#F9FAFB]">
                            Şenlikköy Mah. Germeyan Sok. No:21/3<br />
                            Florya / Bakırköy - İstanbul
                        </p>
                    </div>
                </div>

                <hr className="border-black my-8 dark:border-[#F9FAFB]" />
                <div className="text-center -mb-8">
                    <p className="text-black text-lg font-semibold opacity-80 dark:text-[#F9FAFB]">Engin Tasarım ve Elektronik San. Tic. Ltd. Şti. © 2025</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
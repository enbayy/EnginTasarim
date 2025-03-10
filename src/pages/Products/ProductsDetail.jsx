import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/ProductData";
import { FaArrowLeft, FaStar, FaCheckCircle } from "react-icons/fa";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const navigate = useNavigate();

    if (!product) {
        return <p className="text-center text-red-500 text-xl font-semibold mt-10">Ürün bulunamadı!</p>;
    }

    return (
        <section className="bg-gray-50 dark:bg-black dark:text-white py-12">
            <div className="relative bg-gray-900 text-white py-16 px-8 text-center">
                <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <h1 className="text-5xl font-bold drop-shadow-lg relative">{product.title}</h1>
                <p className="mt-4 text-xl opacity-80 relative">{product.shortDescription}</p>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10 items-center">
                <img src={product.imageUrl} alt={product.title} />
                <div>
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">Ürün Açıklaması</h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">Teknik Özellikler</h2>
                <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    {product.technicalSpecs.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <FaCheckCircle className="text-primary" /> {spec}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4">Kullanıcı Yorumları</h2>
                <div className="mt-6 space-y-6">
                    {product.userReviews.map((review, idx) => (
                        <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <p className="text-lg font-semibold text-primary">{review.reviewer}</p>
                            <p className="flex items-center text-yellow-500">
                                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                                {[...Array(5 - review.rating)].map((_, i) => <FaStar key={i} className="text-gray-400" />)}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary pl-4 mb-6">İlgili Ürünler</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {products.filter((s) => s.id !== product.id).slice(0, 3).map((relatedProduct) => (
                        <div key={relatedProduct.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition" onClick={() => navigate(`/urunler/${relatedProduct.id}`)}>
                            <img src={relatedProduct.imageUrl} alt={relatedProduct.title} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{relatedProduct.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{relatedProduct.description.slice(0, 80)}...</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12 flex justify-center">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-md transition hover:bg-orange-600 font-semibold">
                    <FaArrowLeft /> Geri Dön
                </button>
            </div>
        </section>
    );
};

export default ProductDetail;
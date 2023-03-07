import React from 'react';
import { FaBook, FaPencilAlt, FaGraduationCap, FaPenFancy } from 'react-icons/fa';
import bgImage from '../assets/bg4.jpg';

const Service = () => {
    return (
        <div
            className="bg-cover bg-center overflow-hidden pt-20 pb-12"
            style={{
                backgroundColor: '#f1f1f1',
                backgroundImage: `url(${bgImage})`,
                backgroundBlendMode: 'multiply',
                backdropFilter: 'blur(10px)',
                boxShadow: 'inset 0 0 0 2000px rgba(255, 255, 255, 0.5)',
                opacity: 1
            }}
        >
            <div className="container mx-auto">
                <h2 className="text-6xl font-bold mb-6 text-center text-gray-900">Our Services</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/3 p-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                            <FaBook className="text-[#00d8ff] mb-4 text-5xl mx-auto" />
                            <h3 className="text-xl font-bold mb-2 text-center">Research Papers</h3>
                            <p className="text-gray-900 mb-4 text-center">We offer high-quality research paper writing services to help you get the grades you deserve.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                            <FaPencilAlt className="text-[#00d8ff] mb-4 text-5xl mx-auto" />
                            <h3 className="text-xl font-bold mb-2 text-center">Essays</h3>
                            <p className="text-gray-900 mb-4 text-center">Our professional writers are experts in essay writing, and can help you get the grades you need.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                            <FaPencilAlt className="text-[#00d8ff] mb-4 text-5xl mx-auto" />
                            <h3 className="text-xl font-bold mb-2 text-center">Essays</h3>
                            <p className="text-gray-900 mb-4 text-center">Our professional writers are experts in essay writing, and can help you get the grades you need.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                            <FaPencilAlt className="text-[#00d8ff] mb-4 text-5xl mx-auto" />
                            <h3 className="text-xl font-bold mb-2 text-center">Essays</h3>
                            <p className="text-gray-600 mb-4 text-center">Our professional writers are experts in essay writing, and can help you get the grades you need.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                            <FaPencilAlt className="text-[#00d8ff] mb-4 text-5xl mx-auto" />
                            <h3 className="text-xl font-bold mb-2 text-center">Essays</h3>
                            <p className="text-gray-900 mb-4 text-center">Our professional writers are experts in essay writing, and can help you get the grades you need.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                            <FaGraduationCap className="text-[#00d8ff] mb-4 text-5xl mx-auto" />
                            <h3 className="text-xl font-bold mb-2 text-center">Dissertations</h3>
                            <p className="text-gray-900 mb-4 text-center">We offer top-notch dissertation writing services to help you achieve your academic goals.</p>
                        </div>
                    </div>
                </div>
            </div>
            /</div>
        
    )
}
export default Service
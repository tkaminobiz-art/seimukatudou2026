import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white py-12 text-center text-sm opacity-90">
            <div className="container mx-auto px-4">
                <p className="mb-3 font-bold tracking-widest uppercase text-xs md:text-sm leading-relaxed">
                    Reboot Camp 政務活動。DX
                    <span className="hidden md:inline"> | </span>
                    <span className="block md:inline mt-1 md:mt-0">Accountability Design Lab</span>
                </p>
                <p className="text-gray-400 text-xs">© 2026 株式会社 Bloom Road. All Rights Reserved.</p>
                <p className="text-gray-500 text-[10px] md:text-xs mt-2 leading-relaxed">説明責任設計室 - 透明性と成果物で、政務活動費を住民価値へ</p>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        '価値', '診断内容', '成果物', 'サービス領域', '比較', '導入の流れ', 'FAQ'
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="font-bold text-xl tracking-wider text-brand-dark">
                    政務活動DX <span className="text-xs font-normal opacity-70 block md:inline md:ml-2">| 説明責任設計室</span>
                </div>

                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a key={item} href={`#${item}`} className="text-sm font-medium hover:text-brand-accent transition-colors">
                            {item}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="bg-brand-accent text-white px-5 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg hover:shadow-brand-accent/30 whitespace-nowrap"
                >
                    無料｜使い道設計
                </a>
            </div>
        </header>
    );
};

export default Header;

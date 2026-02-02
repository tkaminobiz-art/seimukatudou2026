import React from 'react';

const Impact = () => {
    return (
        <section className="impact-section h-screen flex items-center justify-center relative overflow-hidden">
            {/* Premium Marble Fusion Background - Layer 1: Deep Navy Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1419]"></div>

            {/* Layer 2: Teal Flow (Brand) */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2A9D8F]/40 via-transparent to-[#2A9D8F]/20"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-bl from-[#2A9D8F]/50 via-[#1d7a6f]/30 to-transparent rounded-full blur-[120px] animate-marble-float"></div>
                <div className="absolute bottom-[-15%] left-[-15%] w-[80%] h-[80%] bg-gradient-to-tr from-[#2A9D8F]/40 via-[#1d7a6f]/20 to-transparent rounded-full blur-[100px] animate-marble-float-reverse"></div>
            </div>

            {/* Layer 3: Electric Purple Flow */}
            <div className="absolute inset-0 opacity-25">
                <div className="absolute top-[20%] right-[10%] w-[60%] h-[60%] bg-gradient-to-bl from-[#6C63FF]/50 via-[#5a52d5]/30 to-transparent rounded-full blur-[140px] animate-marble-pulse"></div>
                <div className="absolute bottom-[25%] left-[15%] w-[55%] h-[55%] bg-gradient-to-tr from-[#6C63FF]/40 via-[#5a52d5]/20 to-transparent rounded-full blur-[130px] animate-marble-pulse-reverse"></div>
            </div>

            {/* Layer 4: Warm Gold Highlights */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-gradient-to-r from-[#F4A261]/60 via-[#e59556]/30 to-transparent rounded-full blur-[90px] animate-marble-glow"></div>
                <div className="absolute bottom-[35%] right-[25%] w-[35%] h-[35%] bg-gradient-to-l from-[#F4A261]/50 via-[#e59556]/25 to-transparent rounded-full blur-[80px] animate-marble-glow-reverse"></div>
            </div>

            {/* Organic Grain Overlay (和紙texture) */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay"></div>

            {/* グリッドオーバーレイ（控えめ） */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                {/* メイン見出し */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 md:mb-8 leading-tight animate-fadeInUp drop-shadow-2xl">
                    「政務活動費を返還する」前に、<br />
                    住民へ<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9D8F] via-[#6C63FF] to-[#F4A261] relative inline-block">
                        "成果"
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#2A9D8F" />
                                    <stop offset="50%" stopColor="#6C63FF" />
                                    <stop offset="100%" stopColor="#F4A261" />
                                </linearGradient>
                            </defs>
                            <path d="M0 5 Q 50 10 100 5" stroke="url(#underline-gradient)" strokeWidth="8" fill="none" />
                        </svg>
                    </span>として<br className="md:hidden" />返しませんか。
                </h1>

                {/* サブメッセージ */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 md:mb-16 animate-fadeIn animation-delay-300 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                    予算を眠らせることは、<br className="md:hidden" />
                    公約実現のチャンスを逃すこと。
                </p>

                {/* スクロールCTA */}
                <div className="animate-bounce animation-delay-600 mt-12 md:mt-16">
                    <div className="text-[#2A9D8F] text-4xl md:text-5xl mb-2 drop-shadow-glow filter drop-shadow-[0_0_20px_rgba(42,157,143,0.8)]">↓</div>
                    <p className="text-sm md:text-base text-blue-200 font-medium drop-shadow-md">
                        30秒で活動最大化診断
                    </p>
                </div>
            </div>

            {/* 下部グラデーションフェード */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-base via-brand-base/80 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Impact;

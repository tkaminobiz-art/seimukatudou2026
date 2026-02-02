import React from 'react';

const Impact = () => {
    return (
        <section className="impact-section h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* メッシュグラデーション背景 */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-cyan-400/30 via-blue-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            </div>

            {/* パーティクルエフェクト */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute rounded-full bg-white/20"
                        style={{
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* グリッドオーバーレイ */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                {/* メイン見出し */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 md:mb-8 leading-tight animate-fadeInUp drop-shadow-2xl">
                    「政務活動費を返還する」前に、<br />
                    住民へ<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 relative inline-block">
                        "成果"
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="url(#gradient)" strokeWidth="8" fill="none" />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#22d3ee" />
                                    <stop offset="50%" stopColor="#60a5fa" />
                                    <stop offset="100%" stopColor="#a78bfa" />
                                </linearGradient>
                            </defs>
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
                    <div className="text-cyan-400 text-4xl md:text-5xl mb-2 drop-shadow-glow">↓</div>
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

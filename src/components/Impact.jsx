import React from 'react';

const Impact = () => {
    return (
        <section className="impact-section h-screen flex items-center justify-center bg-gradient-to-b from-brand-base via-white to-brand-base/30 relative overflow-hidden">
            {/* 背景装飾 */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                {/* メイン見出し */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-dark mb-6 md:mb-8 leading-tight animate-fadeInUp">
                    「政務活動費を返還する」前に、<br />
                    住民へ<span className="text-brand-accent relative inline-block">
                        "成果"
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-brand-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>として<br className="md:hidden" />返しませんか。
                </h1>

                {/* サブメッセージ */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 md:mb-16 animate-fadeIn animation-delay-300 max-w-3xl mx-auto font-medium leading-relaxed">
                    予算を眠らせることは、<br className="md:hidden" />
                    公約実現のチャンスを逃すこと。
                </p>

                {/* スクロールCTA */}
                <div className="animate-bounce animation-delay-600 mt-12 md:mt-16">
                    <div className="text-brand-accent text-4xl md:text-5xl mb-2">↓</div>
                    <p className="text-sm md:text-base text-gray-600 font-medium">
                        30秒で活動最大化診断
                    </p>
                </div>
            </div>

            {/* スクロールヒント用のグラデーション */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-base/50 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Impact;

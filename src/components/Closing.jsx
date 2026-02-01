import React from 'react';

const Closing = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-brand-base to-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-brand-accent rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 leading-tight">
                    余剰予算を、<br />
                    <span className="text-brand-accent">住民に説明できる成果物</span>へ。
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    返却は簡単です。でも<br />
                    <span className="font-bold text-red-600">「なぜ使わなかった？」という疑問</span>も残ります。<br />
                    <span className="font-bold text-green-600">成果物に変えれば、それは「戦略的な説明責任」</span>になります。<br />
                    <span className="font-bold text-brand-dark mt-4 block">まずは30分、無料で使い道を整理しましょう。</span>
                </p>

                <a
                    href="https://lin.ee/a6beTNB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-accent text-white text-xl md:text-2xl font-bold py-6 px-12 rounded-full shadow-2xl hover:scale-105 transition-transform hover:shadow-brand-accent/50 mb-12 ring-4 ring-brand-accent/20"
                >
                    無料｜余剰を価値に変える相談
                    <span className="block text-sm font-normal mt-2 opacity-90">（30分）自治体名と困りごとだけでOK</span>
                </a>

                <div className="bg-white/60 backdrop-blur-md inline-block p-6 rounded-xl border border-white shadow-sm max-w-2xl">
                    <p className="font-bold text-brand-dark mb-2">💡 追伸</p>
                    <p className="text-gray-600 text-sm">
                        目的は"契約"ではなく、"整理"です。<br />
                        必要な範囲だけ選べるように、こちらで構造化します。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Closing;

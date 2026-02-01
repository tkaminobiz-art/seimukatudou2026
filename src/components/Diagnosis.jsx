import React from 'react';
import { useScrollAnimation } from '../utils/AnimationUtils';

const Diagnosis = () => {
    const titleRef = useScrollAnimation();
    const cardRef = useScrollAnimation();

    return (
        <section id="diagnosis" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-base to-white z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div ref={titleRef} className="text-center mb-16 scroll-animate">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark leading-tight mb-6">
                        30分で<span className="text-brand-accent">「どれを、どこまで」</span><br />
                        整えるかが決まります。
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        余剰予算を、住民に説明できる成果物へ変換するために、<br />
                        自治体運用に照らして「必要な範囲」だけを整理します。
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Glassmorphism Card with Deliverables */}
                    <div ref={cardRef} className="relative group scroll-animate">
                        <div className="absolute inset-0 bg-brand-accent/20 rounded-3xl blur-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                        <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-3xl shadow-xl">
                            <div className="absolute -top-4 -right-4 bg-brand-warning text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xs shadow-lg rotate-12 z-20">
                                持ち帰り<br />OK!
                            </div>

                            <h3 className="text-center font-bold text-gray-400 text-sm tracking-widest mb-8 uppercase">
                                ここで"確約"する持ち帰り
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-3xl">📋</span>
                                        <h4 className="font-bold text-brand-dark text-lg">依頼メニューの選定</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">4つのうち、どれが適切か</p>
                                </div>

                                <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-3xl">📦</span>
                                        <h4 className="font-bold text-brand-dark text-lg">必要な成果物一覧</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">納品物の明確化</p>
                                </div>

                                <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-3xl">💡</span>
                                        <h4 className="font-bold text-brand-dark text-lg">支援範囲3案</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">最小／標準／推奨</p>
                                </div>

                                <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-3xl">✅</span>
                                        <h4 className="font-bold text-brand-dark text-lg">次の30日チェックリスト</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">最短ルート</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <button className="bg-brand-accent text-white text-xl font-bold py-5 px-12 rounded-full shadow-xl hover:scale-105 transition-transform hover:shadow-brand-accent/40 shadow-brand-accent/20">
                        無料｜使い道設計を依頼する（30分）
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Diagnosis;

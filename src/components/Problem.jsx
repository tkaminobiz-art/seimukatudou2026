import React from 'react';
import { useScrollAnimation } from '../utils/AnimationUtils';

const Problem = () => {
    const titleRef = useScrollAnimation();
    const painPointsRef = useScrollAnimation();
    const insightRef = useScrollAnimation();

    return (
        <section className="py-20 md:py-24 bg-gradient-to-b from-white to-brand-base/20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    {/* 見出し */}
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 md:mb-12 text-center leading-tight">
                        「これって議員の仕事？」と<br className="md:hidden" />
                        一度は思ったことはありませんか？
                    </h2>

                    {/* 痛みポイント */}
                    <div ref={painPointsRef} className="grid md:grid-cols-3 gap-6 mb-12 scroll-animate">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3 text-center">📄</div>
                            <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">
                                煩雑な収支報告、<br />
                                データ入力、<br />
                                大量の書類整理
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3 text-center">📚</div>
                            <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">
                                研鑽を積みたいが、<br />
                                日々の雑務で<br />
                                時間が足りない
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3 text-center">💬</div>
                            <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">
                                有権者への発信が<br />
                                大切だと分かっているが、<br />
                                手が回らない
                            </p>
                        </div>
                    </div>

                    {/* インサイト */}
                    <div className="bg-gradient-to-br from-white to-brand-base/30 p-6 md:p-8 rounded-xl border-l-4 border-brand-accent shadow-md mb-8 md:mb-12 max-w-4xl mx-auto">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 font-medium">
                            予算を眠らせる（返還する）ことは、<br className="hidden md:block" />
                            公約実現へのチャンスを逃しているのと同じです。
                        </p>
                        <p className="text-base md:text-lg text-brand-dark leading-relaxed font-bold">
                            「正しく使い、成果を出す」。<br />
                            それが、選んでくれた住民への本当の誠実さです。
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Problem;

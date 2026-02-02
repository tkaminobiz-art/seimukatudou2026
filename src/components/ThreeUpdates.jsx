import React from 'react';
import { useScrollAnimation } from '../utils/AnimationUtils';

const ThreeUpdates = () => {
    const titleRef = useScrollAnimation();
    const card1Ref = useScrollAnimation();
    const card2Ref = useScrollAnimation();
    const card3Ref = useScrollAnimation();

    return (
        <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    {/* 見出し */}
                    <div ref={titleRef} className="text-center mb-16 scroll-animate">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 md:mb-6 text-center leading-tight">
                            私たちが提供する<br className="md:hidden" />「3つのアップデート」
                        </h2>
                        <p className="text-base md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
                            議員活動の「質」を最大化し、住民への価値還元を実現します
                        </p>
                    </div>

                    {/* 3つのカード */}
                    <div className="space-y-8">

                        {/* ① 集中 */}
                        <div ref={card1Ref} className="scroll-animate">
                            <div className="bg-gradient-to-br from-brand-base to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-4xl">📋</span>
                                        <h3 className="text-xl md:text-2xl font-bold text-brand-dark">
                                            【集中】秘書業務の外注による「公務時間の創出」
                                        </h3>
                                    </div>
                                    <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
                                        煩雑な事務報告やデータ入力をプロが代行。
                                    </p>
                                </div>
                                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-brand-accent/20">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <strong className="text-brand-accent">適正運用の視点:</strong>
                                        事務代行（秘書業務）は、規程に基づいた正当な支出です。
                                        外部の専門性に委託することで、記載漏れなどの事務的ミスを防ぎ、
                                        透明性の高い収支報告を支援します。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ② 進化 */}
                        <div ref={card2Ref} className="scroll-animate">
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                                    <div className="text-5xl">📚</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
                                            【進化】100%充当可能な「研修・資質向上」
                                        </h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            AI活用、政策立案、最新の調査研究。
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-300/20">
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <strong className="text-blue-900">📘 適正運用の視点</strong><br />
                                        視察や新聞購入以外の「研修費」枠を有効活用。議員自身のレベルアップこそが、住民サービスの向上に直結します。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ③ 対話 */}
                        <div ref={card3Ref} className="scroll-animate">
                            <div className="bg-gradient-to-br from-green-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                                    <div className="text-5xl">💬</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
                                            【対話】双方向の「デジタルコミュニケーション」
                                        </h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            防災情報を軸にした公式LINE運用、Webサイトの整備。
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-300/20">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <strong className="text-brand-accent">適正運用の視点:</strong>
                                        「住民の声を聞く調査」としての側面を強化。
                                        一方的な発信ではない、信頼される政治家像を可視化します。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ThreeUpdates;

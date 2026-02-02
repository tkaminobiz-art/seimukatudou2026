import React from 'react';
import BudgetSimulator from './BudgetSimulator';

const Hero = () => {
    return (
        <section className="relative min-h-screen py-20 md:py-32 bg-gradient-to-b from-brand-base via-white to-brand-base/30 overflow-hidden">
            {/* メッシュグラデーション背景 */}
            <div className="absolute inset-0 opacity-[0.07]">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-400 via-purple-300 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-400 via-pink-300 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full blur-2xl"></div>
            </div>

            {/* グリッドパターン */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* 2カラムレイアウト */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* 左カラム: メッセージ */}
                    <div className="text-center lg:text-left">
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed max-w-2xl font-medium">
                            書類作成やデータ入力に追われる日々を終わらせ、<br className="hidden md:block" />
                            本来の公務と有権者との対話に、その情熱と時間を使う。
                        </p>

                        <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                            元議員・議員秘書監修の<span className="font-bold text-brand-dark">「活動支援スキーム」</span>で、<br className="hidden md:block" />
                            貴方の政治活動をアップデートします。
                        </p>

                        {/* 3つのアップデート概要 */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto lg:mx-0 mb-8">
                            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                                <div className="text-3xl mb-2">📋</div>
                                <div className="font-bold text-brand-dark text-sm md:text-base mb-1">集中</div>
                                <div className="text-xs text-gray-600">事務代行</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                                <div className="text-3xl mb-2">📚</div>
                                <div className="font-bold text-brand-dark text-sm md:text-base mb-1">進化</div>
                                <div className="text-xs text-gray-600">研修支援</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                                <div className="text-3xl mb-2">💬</div>
                                <div className="font-bold text-brand-dark text-sm md:text-base mb-1">対話</div>
                                <div className="text-xs text-gray-600">デジタル発信</div>
                            </div>
                        </div>

                        {/* モバイル用CTAボタン - シミュレーターの下に表示される */}
                        <div className="lg:hidden">
                            <a
                                href="https://lin.ee/a6beTNB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-brand-accent text-white text-base font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity shadow-xl"
                            >
                                無料｜余剰を価値に変える相談
                            </a>
                        </div>
                    </div>

                    {/* 右カラム: シミュレーター */}
                    <div className="lg:sticky lg:top-32">
                        <BudgetSimulator />
                    </div>

                </div>
            </div>

            {/* 透明性ノート */}
            <div className="mt-16 max-w-4xl mx-auto">
                <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg p-4 text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                    ※本サービスは、情報公開・監査・第三者検証を前提に、支出の根拠と成果物を整える支援です。<br className="hidden md:block" />
                    ※自治体ルールから外れる運用や、根拠が弱い提案は行いません。
                </div>
            </div>
        </section>
    );
};

export default Hero;

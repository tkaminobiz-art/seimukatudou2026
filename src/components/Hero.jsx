import React from 'react';
import { useParallax } from '../utils/PremiumAnimations';

const Hero = () => {
    const parallaxOffset = useParallax(0.3);

    const miniCards = [
        {
            num: '1',
            title: '研修（資質向上）',
            result: '修了証・受講報告書ひな形が残る'
        },
        {
            num: '2',
            title: '公式LINE（住民連絡基盤）',
            result: '導線・テンプレ・月次レポートを整備'
        },
        {
            num: '3',
            title: '事務支援（月次整理）',
            result: '整理・記録・報告の型を外注'
        },
        {
            num: '4',
            title: 'Web/名刺（導線再設計）',
            result: '相談が届く構成へ丸ごと改善'
        }
    ];

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-16 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-brand-dark tracking-tight">
                        政務活動費、<br className="md:hidden" />返す前に。<br />
                        住民への<span className="text-brand-accent relative inline-block">
                            「見える成果」
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>に<br className="md:hidden" />変えませんか。
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 mb-2 leading-relaxed max-w-3xl mx-auto font-medium">
                        予算を余らせたのは、本業に集中した証です。<br />
                        問題は<span className="font-bold text-brand-dark">「返却＝未活用」と見られるリスク</span>。<br className="md:hidden" />
                        成果物に変えれば、<span className="font-bold text-brand-accent">「戦略的な説明責任」</span>として胸を張れます。
                    </p>

                    <p className="text-base text-gray-500 mb-4 leading-relaxed max-w-2xl mx-auto">
                        自治体の要綱・手引き・運用に沿って、<br className="hidden md:block" />
                        <span className="font-bold text-brand-dark">目的 → 実施 → 記録 → 成果 → 公開</span> まで一気通貫で整備します。
                    </p>

                    <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg p-3 mb-10 text-xs text-gray-500 max-w-2xl mx-auto">
                        ※本サービスは 情報公開・監査・第三者検証を前提に、支出の根拠と成果物を整える支援です。<br />
                        ※自治体ルールから外れる運用や、根拠が弱い提案は行いません。
                    </div>

                    {/* Urgency Banner */}
                    <div className="bg-brand-warning/10 border-2 border-brand-warning/30 rounded-xl px-6 py-3 mb-10 max-w-md mx-auto">
                        <p className="text-sm font-bold text-brand-warning text-center">
                            ⚡ 年度末駆け込み対応中／残り対応枠:<span className="text-xl mx-1">5件</span>（2月度）
                        </p>
                    </div>

                    {/* 4 Mini Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
                        {miniCards.map((card) => (
                            <div key={card.num} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-left">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center text-xs font-bold">
                                        {card.num}
                                    </div>
                                    <h3 className="font-bold text-brand-dark text-sm">{card.title}</h3>
                                </div>
                                <p className="text-xs text-gray-600 leading-snug">{card.result}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <a
                            href="#contact"
                            className="bg-brand-accent btn-gradient-animate text-white text-base md:text-xl font-bold py-4 md:py-5 px-8 md:px-10 rounded-full shadow-xl hover:scale-105 transition-transform hover:shadow-brand-accent/40 w-full max-w-md"
                        >
                            無料｜余剰を価値に変える相談
                            <span className="block text-[10px] md:text-xs font-normal mt-1 opacity-90">（30分）自治体名と困りごとだけでOK</span>
                        </a>

                        <p className="text-xs text-gray-500 max-w-md">
                            自治体名と困りごとだけでOK／資料がなくても可<br />
                            目的は"契約"ではなく"整理"です。必要な範囲だけ選べます。
                        </p>

                        <a href="#samples" className="text-brand-accent font-medium text-sm underline hover:text-brand-dark transition-colors">
                            成果物サンプルを受け取る（修了証／報告書ひな形／月次レポ例）
                        </a>
                    </div>
                </div>
            </div>

            {/* Background Decor with Parallax */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-3xl"
                    style={{ transform: `translateY(${parallaxOffset}px)` }}
                ></div>
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl"
                    style={{ transform: `translateY(${-parallaxOffset * 0.8}px)` }}
                ></div>
            </div>
        </section>
    );
};

export default Hero;

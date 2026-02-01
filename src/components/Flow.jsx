import React from 'react';

const Flow = () => {
    const steps = [
        { num: 1, title: '無料｜適正活用診断', meta: '30分', desc: '現状をヒアリングし、ロードマップを作成。' },
        { num: 2, title: '支援範囲の提案', meta: '3案', desc: '予算と状況に合わせて「松・竹・梅」で提示。' },
        { num: 3, title: '成果物(納品物)を確定', meta: '見積提示', desc: '「何が含まれるか」を明確にした上で契約。' },
        { num: 4, title: '制作・整備', meta: '必要領域だけ', desc: '研修、DX構築、事務整理などを実施。' },
        { num: 5, title: '月次運用', meta: 'レポート・改善', desc: '毎月の記録とその公開・監査対応までサポート。' }
    ];

    return (
        <section id="flow" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-2 block">Process</span>
                    <h2 className="text-3xl font-bold text-brand-dark mb-4">
                        診断 → 3案提示 → 必要な範囲だけ実装。
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="md:flex md:items-start md:justify-between relative">
                        {/* Horizontal Line for Desktop */}
                        <div className="hidden md:block absolute top-[28px] left-0 w-full h-1 bg-gray-200 -z-10"></div>

                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/5 relative group">
                                {/* Mobile Vertical Line */}
                                {index !== steps.length - 1 && (
                                    <div className="md:hidden absolute top-14 left-1/2 w-1 h-20 bg-gray-200 -translate-x-1/2 -z-10"></div>
                                )}

                                <div className="w-14 h-14 rounded-full bg-brand-base border-2 border-brand-accent text-brand-accent flex items-center justify-center font-bold text-xl mb-4 shadow-sm z-10 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                                    {step.num}
                                </div>

                                <h3 className="font-bold text-lg text-brand-dark mb-1 w-full px-2">{step.title}</h3>
                                <span className="inline-block bg-brand-dark text-white text-xs px-2 py-0.5 rounded mb-3">{step.meta}</span>
                                <p className="text-sm text-gray-500 px-2 leading-tight">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flow;

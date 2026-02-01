import React from 'react';

const Concept = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 leading-tight">
                            費用は、自治体ルールと支援範囲で変わります。<br />
                            だから<span className="text-brand-accent">最初に診断</span>します。
                        </h2>
                        <p className="text-gray-600 leading-relaxed md:text-lg">
                            議員支援は、自治体の運用と事務所の体制によって必要な作業が変わります。<br />
                            私たちは、後出しオプションで迷わせるのではなく、
                        </p>
                    </div>

                    <div className="bg-brand-base rounded-2xl p-8 md:p-12 mb-12 shadow-inner">
                        <div className="grid md:grid-cols-3 gap-6 text-center font-bold text-brand-dark text-lg md:text-xl">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-accent/20">
                                どこまでを<br />支援するか
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-accent/20">
                                何を成果物として<br />残すか
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-accent/20">
                                どの運用ルールで<br />記録するか
                            </div>
                        </div>
                        <p className="text-center mt-8 text-gray-600 font-medium">
                            を先に確定し、見積の根拠が説明できる状態にします。
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-center font-bold text-gray-400 text-sm tracking-widest mb-6">ここがポイント</h3>
                        <ul className="space-y-4">
                            {[
                                '見積は「成果物（納品物）」ベースで明確化',
                                '自治体運用に準拠して設計',
                                '不要な支援は削り、必要な支援だけに絞る'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center text-xs font-bold mt-0.5">
                                        ✓
                                    </div>
                                    <span className="font-bold text-brand-dark">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concept;

import React from 'react';

const Promise = () => {
    return (
        <section className="py-20 bg-brand-dark text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start gap-8 md:items-center">

                        <div className="flex-1">
                            <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block">Our Promise</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                透明性を下げる提案は、<br />しません。
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                私たちは、単なる制作代行ではありません。<br />
                                制度の趣旨を遵守し、説明責任を果たせる状態を作ることを約束します。
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    '根拠が弱い提案は行いません',
                                    '公開・監査・第三者検証を前提に設計',
                                    '自治体運用から外れる支援は行いません',
                                    '記録・成果物の整備を必須にします'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(42,157,143,0.8)]"></div>
                                        <span className="font-bold text-sm tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual element representing transparency/shield */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative w-48 h-48">
                                <div className="absolute inset-0 border-4 border-brand-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-4 border-4 border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl">🛡️</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promise;

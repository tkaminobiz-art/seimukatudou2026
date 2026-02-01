import React from 'react';

const Pricing = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-dark mb-6">
                        料金は<span className="text-brand-accent">「成果物と支援範囲」</span>で決まります。<br />
                        先に"中身"を確定します。
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        自治体運用や事務所体制によって、必要な作業と成果物が変わります。<br />
                        私たちは、成果物（納品物）を先に確定し、<span className="font-bold text-brand-dark">「何にいくらか」</span>が分かる形で見積を提示します。<br />
                        <span className="text-sm text-gray-500">※後出しで膨らむ提案はしません。</span>
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Pricing Factors */}
                    <div className="bg-brand-base/30 p-8 md:p-12 rounded-3xl mb-12">
                        <h3 className="font-bold text-brand-dark text-xl mb-6 border-b border-gray-300 pb-3 text-center">
                            料金が変わる要因
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                '自治体の提出様式・運用の違い',
                                '既存資産（Web／LINE／資料）の有無',
                                '月次運用の頻度（更新・レポート回数）',
                                '事務所体制（スタッフ有無／引き継ぎ状況）',
                                '必要な成果物の範囲（テンプレ整備の深さ）'
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 text-brand-dark bg-white p-4 rounded-xl border border-gray-200">
                                    <span className="text-brand-accent font-bold shrink-0">•</span>
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <button className="bg-brand-accent text-white text-xl font-bold py-5 px-12 rounded-full shadow-xl hover:scale-105 transition-transform hover:shadow-brand-accent/40">
                            無料｜使い道設計を依頼する（30分）
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

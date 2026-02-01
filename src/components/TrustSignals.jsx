import React from 'react';

const TrustSignals = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-center font-bold text-brand-dark text-2xl mb-12">
                        <span className="bg-brand-base px-2">透明性と品質を担保する仕組み</span>
                    </h3>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                            <div className="text-4xl mb-3">📋</div>
                            <h4 className="font-bold text-brand-dark mb-2 text-sm">事前確認の徹底</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                自治体要綱・運用ルールを事前に確認し、適合性を担保します
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                            <div className="text-4xl mb-3">📄</div>
                            <h4 className="font-bold text-brand-dark mb-2 text-sm">成果物の明示</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                納品物を事前に確定し、「何が含まれるか」を明確化します
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                            <div className="text-4xl mb-3">🔍</div>
                            <h4 className="font-bold text-brand-dark mb-2 text-sm">第三者検証前提</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                情報公開・監査を前提とした記録と根拠の整備を行います
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                            <div className="text-4xl mb-3">🛡️</div>
                            <h4 className="font-bold text-brand-dark mb-2 text-sm">グレー提案ゼロ</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                根拠が弱い提案や、自治体運用から外れる支援は行いません
                            </p>
                        </div>
                    </div>

                    {/* Process Transparency */}
                    <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-200">
                        <h4 className="font-bold text-brand-dark text-center mb-6">
                            プロセスの透明化
                        </h4>
                        <div className="grid md:grid-cols-3 gap-6 text-sm">
                            <div>
                                <div className="font-bold text-brand-accent mb-2">① 診断時</div>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    自治体要綱を確認し、適用可能性を判断。グレーな場合は即座にお断りします。
                                </p>
                            </div>
                            <div>
                                <div className="font-bold text-brand-accent mb-2">② 提案時</div>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    成果物リストと根拠を明示。後出しで費用が膨らむことはありません。
                                </p>
                            </div>
                            <div>
                                <div className="font-bold text-brand-accent mb-2">③ 納品時</div>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    報告書ひな形・記録資料を整備。情報公開請求にも即座に対応できる形式です。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;

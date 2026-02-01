import React from 'react';

const Deliverables = () => {
    return (
        <section id="deliverables" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-2 block">Deliverables</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                        必要なのは、説明できる<br className="md:hidden" />
                        <span className="bg-brand-base px-2">「証拠」と「型」</span>です。
                    </h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Large Card: Training */}
                    <div className="md:col-span-2 bg-gradient-to-br from-brand-base to-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="text-xs font-bold text-brand-accent bg-white inline-block px-3 py-1 rounded-full mb-4 shadow-sm">研修・教育</div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-3">修了証／受講報告書ひな形</h3>
                            <p className="text-gray-600 mb-6">受講を証明するだけでなく、議会報告にそのまま使える形式で整備。アーカイブ動画でいつでも復習可能。</p>
                            <div className="flex gap-2 text-sm font-bold text-brand-dark">
                                <span className="bg-white px-3 py-1 rounded border">修了証</span>
                                <span className="bg-white px-3 py-1 rounded border">受講報告書</span>
                                <span className="bg-white px-3 py-1 rounded border">アーカイブ</span>
                            </div>
                        </div>
                        {/* Abstract visual decor */}
                        <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-brand-accent/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                    </div>

                    {/* Tall Card: DX */}
                    <div className="md:row-span-2 bg-brand-dark text-white rounded-3xl p-8 border border-gray-700 shadow-xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="text-xs font-bold text-brand-dark bg-brand-secondary inline-block px-3 py-1 rounded-full mb-4">DXサポート</div>
                            <h3 className="text-2xl font-bold mb-4">活動報告・返信<br />テンプレセット</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                住民対応の属人化を防ぐ「想定問答」と、即座に返信できる「テンプレート」を完備。<br /><br />
                                公式LINEの構築から運用ルールまで、迷わず運用できる型を提供します。
                            </p>
                            <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-700 pt-6">
                                <li className="flex items-center gap-2">✓ 活動報告テンプレ</li>
                                <li className="flex items-center gap-2">✓ 想定問答集</li>
                                <li className="flex items-center gap-2">✓ 返信テンプレート</li>
                                <li className="flex items-center gap-2">✓ 配信設定マニュアル</li>
                            </ul>
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
                    </div>

                    {/* Medium Card: Disaster DX */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-xs font-bold text-white bg-brand-warning inline-block px-3 py-1 rounded-full mb-4">防災DX</div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">運用ルール・月次レポート</h3>
                        <p className="text-gray-600 text-sm">発災時の配信ルールと、平時の防災啓発活動を記録する月次レポート。</p>
                    </div>

                    {/* Medium Card: Admin Support */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-xs font-bold text-white bg-blue-500 inline-block px-3 py-1 rounded-full mb-4">事務代行</div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">整理・入力・月次整備の型</h3>
                        <p className="text-gray-600 text-sm">領収書の整理から会計ソフト入力、監査対応を見据えたファイリング。</p>
                    </div>

                    {/* Wide Card: Creative */}
                    <div className="md:col-span-3 bg-brand-base/50 rounded-3xl p-8 border border-brand-base shadow-sm flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="text-xs font-bold text-brand-dark bg-white border border-gray-200 inline-block px-3 py-1 rounded-full mb-4">制作・広報</div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-2">Web構成案・原稿作成</h3>
                            <p className="text-gray-600">「誰に・何を・どう頼むか」を明確にする構成案と、インタビューによる原稿作成代行。</p>
                        </div>
                        <div className="flex gap-3 flex-wrap justify-center">
                            <span className="bg-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm text-brand-dark">Web構成案</span>
                            <span className="bg-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm text-brand-dark">インタビュー原稿</span>
                            <span className="bg-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm text-brand-dark">制作ディレクション</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Deliverables;

import React from 'react';

const Comparison = () => {
    const rows = [
        { label: '自治体運用を前提に設計', general: '△', tool: '△', ours: '◎' },
        { label: '記録・報告の型まで整備', general: '×', tool: '△', ours: '◎' },
        { label: '修了証＋受講報告書ひな形', general: '×', tool: '×', ours: '◎' },
        { label: '丸投げ導入（工数最小）', general: '△', tool: '△', ours: '◎' },
        { label: '透明性ポリシー明記', general: '△', tool: '△', ours: '◎' },
    ];

    return (
        <section id="comparison" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-dark">
                        "作るだけ"と、<br className="md:hidden" />"説明まで完成させる"は別物です。
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto overflow-x-auto pb-4">
                    <div className="min-w-[600px]">
                        <div className="grid grid-cols-4 gap-4 mb-4 text-center font-bold text-sm md:text-base sticky top-0 bg-white z-10 py-2">
                            <div className="text-left pl-4 text-gray-500 flex items-end pb-2">比較項目</div>
                            <div className="bg-gray-100 rounded-t-lg py-3 text-gray-600">一般制作</div>
                            <div className="bg-gray-100 rounded-t-lg py-3 text-gray-600">ITツール</div>
                            <div className="bg-brand-accent text-white rounded-t-lg py-3 shadow-lg transform -translate-y-2 relative">
                                弊社
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-secondary text-brand-dark text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                                    成果コミット
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            {rows.map((row, index) => (
                                <div key={index} className="grid grid-cols-4 gap-4 items-center text-center py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <div className="text-left pl-4 font-bold text-brand-dark">{row.label}</div>
                                    <div className="text-gray-400">{row.general}</div>
                                    <div className="text-gray-400">{row.tool}</div>
                                    <div className={`text-2xl font-bold text-brand-accent ${row.ours === '◎' ? 'text-3xl' : ''}`}>
                                        {row.ours}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;

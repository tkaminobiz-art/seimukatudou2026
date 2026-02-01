import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            location: '北海道 札幌市議会',
            name: 'A議員様',
            service: 'AI研修',
            comment: '研修を受講し、住民説明会で活用。質疑への回答力が格段に向上しました。修了証と報告書ひな形があるので、議会報告も簡単でした。',
            result: '住民説明会での質疑対応時間が30%短縮'
        },
        {
            location: '福岡県 久留米市議会',
            name: 'B議員様',
            service: '公式LINE構築',
            comment: '住民からの相談が届くようになり、現場の声を政策に反映できるようになりました。月次レポートで活動実績も可視化できています。',
            result: '住民からの相談件数が月15件→45件に'
        },
        {
            location: '静岡県 富士市議会',
            name: 'C議員様',
            service: '事務代行',
            comment: '領収書整理と報告書作成に時間を取られていましたが、月次で整備してもらえるので政策活動に集中できるようになりました。',
            result: '事務作業時間が週8時間→2時間に削減'
        }
    ];

    return (
        <section className="py-20 bg-brand-base/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-2 block">Voice</span>
                    <h2 className="text-3xl font-bold text-brand-dark mb-4">
                        導入いただいた議員の声
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="mb-4">
                                <div className="text-xs font-bold text-brand-accent mb-1">{item.service}</div>
                                <div className="font-bold text-brand-dark">{item.location}</div>
                                <div className="text-sm text-gray-500">{item.name}</div>
                            </div>

                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                {item.comment}
                            </p>

                            <div className="bg-brand-accent/10 p-3 rounded-lg border-l-4 border-brand-accent">
                                <p className="text-xs font-bold text-brand-dark">
                                    📊 {item.result}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

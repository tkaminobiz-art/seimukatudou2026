import React from 'react';
import { useScrollAnimation } from '../utils/AnimationUtils';

const PainPoints = () => {
    const cardRef = useScrollAnimation();

    const points = [
        '「適切な運用」に自信が持てず、判断が止まる',
        '記録・整理・報告の負担が重く、政策に時間が回らない',
        'WebやLINEが“あるだけ”で、住民導線になっていない',
        'スタッフ教育が属人化して、引き継げない',
        '活動の成果が言語化・可視化できていない'
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div ref={cardRef} className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 scroll-animate hover-lift">
                    <div className="bg-brand-dark py-10 px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            こんな状況の方へ
                        </h2>
                        <p className="text-brand-accent font-medium">
                            1つでも当てはまれば、診断だけでも価値があります。
                        </p>
                    </div>

                    <div className="p-8 md:p-12">
                        <ul className="space-y-6">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-start gap-4 p-4 hover:bg-brand-base/30 rounded-lg transition-colors duration-300">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-brand-warning text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-sm">
                                        !
                                    </div>
                                    <span className="text-lg md:text-xl font-bold text-gray-700 leading-snug">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPoints;

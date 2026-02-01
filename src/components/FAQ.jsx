import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full text-left py-6 flex justify-between items-center group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-brand-dark text-lg pr-4 group-hover:text-brand-accent transition-colors">
                    Q. {question}
                </span>
                <span className={`text-2xl text-brand-accent transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 pl-4 border-l-2 border-brand-accent/30 leading-relaxed">
                    <span className="font-bold text-brand-accent mr-2">A.</span>
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            q: '自治体によって運用が違いますが対応できますか？',
            a: 'はい。要綱・手引き・運用に準拠して、設計を変えます。'
        },
        {
            q: '"グレー"な提案はありませんか？',
            a: 'ありません。情報公開・監査・第三者検証を前提に、根拠と成果物を整える支援のみ行います。'
        },
        {
            q: 'まずは一部だけ頼めますか？',
            a: '可能です。4つの依頼メニューから必要な範囲だけ選べます。'
        },
        {
            q: '無料相談の目的は何ですか？',
            a: '契約ではなく"整理"です。自治体運用に照らし、成果物と支援範囲（3案）を確定します。'
        },
        {
            q: '忙しくて時間が取れません。',
            a: '大丈夫です。制作はインタビュー形式で短時間、事務は月次でまとめて運用できます。'
        }
    ];

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-dark">FAQ</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

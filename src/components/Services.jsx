import React from 'react';
import { useScrollAnimation } from '../utils/AnimationUtils';

const Services = () => {
    const titleRef = useScrollAnimation();

    const menus = [
        {
            id: '1',
            title: '【研修】資質向上を"証拠化"する研修発注',
            icon: '🎓',
            bg: 'bg-blue-50',
            price: '35,000円/回',
            priceNote: '（1回2時間・修了証込み）',
            requests: [
                'AIの安全運用（情報漏洩・誤情報・著作権・運用ルール）',
                '情報収集・要点整理の効率化（ニュース／SNS／資料）',
                '活動報告・住民対応を"型"にする（テンプレ整備）'
            ],
            deliverables: [
                '研修修了証',
                '研修受講報告書ひな形（目的／内容／成果／今後の活用）',
                '研修資料（PDF）／受講アーカイブ（事務所資産化）'
            ],
            value: '発信と説明の質が上がり、混乱や誤解が起きにくくなる。'
        },
        {
            id: '2',
            title: '【公式LINE】住民の声が届く"連絡基盤"の整備・運用委託',
            icon: '📱',
            bg: 'bg-green-50',
            price: '8万円〜',
            priceNote: '（初期構築・運用は別途月額）',
            requests: [
                '公式LINE構築・運用代行（導線／テンプレ／リッチメニュー）',
                '住民の声を分類・記録し、活動へ反映できる形に整える',
                '災害時も含めた連絡体制（平時からつながる設計）'
            ],
            deliverables: [
                '友だち追加導線設計（Web／名刺／掲示物）',
                '配信テンプレ（定例・緊急・回答）／リッチメニュー',
                '月次レポート（住民の声：分類・傾向・次の打ち手）',
                '（必要に応じて）情報整理の運用ルール／管理画面'
            ],
            value: '相談のハードルが下がり、「届く政治」になる。'
        },
        {
            id: '3',
            title: '【事務支援】領収書・整理・報告の"月次運用"を外注',
            icon: '📊',
            bg: 'bg-yellow-50',
            price: '月額18,000円〜',
            priceNote: '（月次整理パック）',
            requests: [
                '領収書・資料の整理、月次整形',
                '活動報告の下書き・提出形式への整備',
                '記録ルールの統一（属人化の解消）'
            ],
            deliverables: [
                '月次整理パック（整理ルール／チェックリスト／整形データ）',
                '活動報告下書き（テンプレ適用）',
                '引き継ぎ手順（事務所内で回る仕組み）'
            ],
            value: '透明性が上がり、議員が政策・現場に時間を戻せる。'
        },
        {
            id: '4',
            title: '【制作】公式Web・名刺を「説明できる導線」に再設計',
            icon: '🎨',
            bg: 'bg-purple-50',
            price: '15万円〜',
            priceNote: '（構成案・原稿・制作込み）',
            requests: [
                '公式Web（活動報告／政策／相談導線）の再設計・制作',
                '名刺を"次の接点"へ（LINE／Web／相談フォームへ接続）',
                '忙しい方向け：インタビューだけで原稿化まで丸投げ'
            ],
            deliverables: [
                '構成案（誰に／何を／どう頼めるかが1秒で分かる）',
                '原稿（インタビュー→文章化）',
                'Web一式／名刺データ（導線込み）'
            ],
            value: '活動が見える化され、相談しやすい政治になる。'
        }
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div ref={titleRef} className="text-center mb-16 scroll-animate">
                    <h2 className="text-2xl md:text-4xl font-bold text-brand-dark mb-4 leading-snug">
                        余った政務活動費を<br className="md:hidden" />
                        <span className="bg-brand-base px-2">「成果物」</span>に変える<br className="md:hidden" />
                        4つの依頼メニュー
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        政務活動費は「使う／使わない」ではなく、<br className="hidden md:block" />
                        住民に説明できる成果物として残すことで価値になります。必要なところだけ選べます。
                    </p>
                </div>

                <div className="space-y-8 max-w-6xl mx-auto">
                    {menus.map((menu, index) => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const cardRef = useScrollAnimation();
                        return (
                            <div
                                key={menu.id}
                                ref={cardRef}
                                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover-lift scroll-animate"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl ${menu.bg} shrink-0`}>
                                        {menu.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-2xl font-bold text-brand-dark mb-2 leading-snug">{menu.title}</h3>
                                        {menu.price && (
                                            <div className="bg-brand-accent text-white inline-block px-4 py-1 rounded-full text-sm font-bold">
                                                {menu.price}
                                                {menu.priceNote && <span className="text-xs ml-1 opacity-90">{menu.priceNote}</span>}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* 依頼すること */}
                                    <div>
                                        <h4 className="font-bold text-brand-accent mb-3 text-xs md:text-sm uppercase tracking-wider border-b border-brand-accent/30 pb-2">依頼すること</h4>
                                        <ul className="space-y-2">
                                            {menu.requests.map((req, i) => (
                                                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                    <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 納品される成果物 */}
                                    <div>
                                        <h4 className="font-bold text-brand-dark mb-3 text-xs md:text-sm uppercase tracking-wider border-b border-gray-300 pb-2">納品される成果物</h4>
                                        <ul className="space-y-2">
                                            {menu.deliverables.map((del, i) => (
                                                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                    <span className="text-gray-400 mt-0.5 shrink-0">✓</span>
                                                    <span>{del}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 住民に返る価値 */}
                                    <div className={`${menu.bg} p-4 rounded-xl`}>
                                        <h4 className="font-bold text-gray-600 mb-3 text-xs md:text-sm uppercase tracking-wider">住民に返る価値</h4>
                                        <p className="text-brand-dark font-bold text-sm leading-relaxed">
                                            {menu.value}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Section CTA */}
                <div className="text-center mt-16 bg-brand-base/30 rounded-3xl p-12 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">
                        30分で「どれを、どこまで」やるかが決まります。
                    </h3>
                    <p className="text-gray-600 mb-8">
                        自治体運用に照らし、必要な成果物と支援範囲を整理します。
                    </p>
                    <button className="bg-brand-accent btn-gradient-animate text-white text-xl font-bold py-5 px-12 rounded-full shadow-xl hover:scale-105 transition-transform">
                        無料｜使い道設計を依頼する（30分）
                    </button>
                    <p className="text-xs text-gray-500 mt-4">
                        目的は"契約"ではなく"整理"です。必要な範囲だけ選べます。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;

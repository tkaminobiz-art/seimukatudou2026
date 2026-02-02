import React, { useState, useEffect } from 'react';

const BudgetSimulator = () => {
    const [budget, setBudget] = useState('');
    const [includeTraining, setIncludeTraining] = useState(false);
    const [plan, setPlan] = useState(null);

    const calculatePlan = (budgetAmount, withTraining) => {
        let remaining = budgetAmount;
        const result = {
            admin: 0,
            adminMonths: 0,
            lineSetup: 0,
            lineOperation: 0,
            operationMonths: 0,
            training: 0,
            trainingCount: 0,
            web: 0,
            webShortfall: 0
        };

        // 優先度1: 事務代行（月6.5万円、1ヶ月から）
        const adminMonthly = 6.5;
        const maxAdminMonths = 12;
        const adminMonths = Math.min(Math.floor(remaining / adminMonthly), maxAdminMonths);
        result.admin = adminMonthly * adminMonths;
        result.adminMonths = adminMonths;
        remaining -= result.admin;

        // 優先度2: LINE構築（10万円固定）
        if (remaining >= 10) {
            result.lineSetup = 10;
            remaining -= 10;
        }

        // 優先度3: LINE運用代行（月2万円、最大12ヶ月）
        const operationMonthly = 2;
        const maxOperationMonths = 12;
        const operationMonths = Math.min(Math.floor(remaining / operationMonthly), maxOperationMonths);
        result.lineOperation = operationMonthly * operationMonths;
        result.operationMonths = operationMonths;
        remaining -= result.lineOperation;

        // 優先度4: 研修（オプション、3万円/回）
        if (withTraining && remaining >= 3) {
            const trainingCount = Math.floor(remaining / 3);
            result.training = 3 * trainingCount;
            result.trainingCount = trainingCount;
            remaining -= result.training;
        }

        // 優先度5: Web（残り全額）
        result.web = Math.round(remaining * 10) / 10; // 小数点1桁

        // Webが15万円に届くまでの不足額
        if (result.web < 15) {
            result.webShortfall = Math.round((15 - result.web) * 10) / 10;
        }

        return result;
    };

    useEffect(() => {
        if (budget && !isNaN(budget) && budget > 0) {
            const numBudget = parseFloat(budget);
            setPlan(calculatePlan(numBudget, includeTraining));
        } else {
            setPlan(null);
        }
    }, [budget, includeTraining]);

    return (
        <div className="simulator-card bg-white p-6 md:p-8 rounded-2xl shadow-xl border-2 border-brand-accent/20">
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">
                活動最大化シミュレーション
            </h3>

            <label className="block mb-2 font-medium text-gray-700 text-sm md:text-base">
                今年の余剰予算
            </label>
            <div className="relative">
                <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="例: 50"
                    className="w-full px-4 py-3 text-lg md:text-xl border-2 border-gray-300 rounded-lg focus:border-brand-accent focus:outline-none transition-colors"
                />
                <span className="absolute right-4 top-3 text-lg md:text-xl text-gray-500 font-medium">万円</span>
            </div>

            {plan && (
                <div className="mt-6 space-y-4 animate-fadeIn">
                    <h4 className="font-bold text-brand-accent mb-3 text-base md:text-lg">
                        あなたの活動最大化プラン
                    </h4>

                    {/* 必須基盤 */}
                    {(plan.admin > 0 || plan.lineSetup > 0) && (
                        <div className="space-y-2">
                            <div className="text-xs font-bold text-red-600 mb-2">🔴 必須基盤</div>

                            {plan.admin > 0 && (
                                <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-400">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">📋</span>
                                        <div className="flex-1">
                                            <div className="font-bold text-brand-dark text-sm md:text-base mb-1">事務代行</div>
                                            <div className="text-xs text-gray-600 mb-2">月6.5万円 × {plan.adminMonths}ヶ月 <span className="text-gray-400">（1ヶ月から依頼可能）</span></div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${Math.min((plan.admin / parseFloat(budget)) * 100, 100)}%` }}></div>
                                                </div>
                                                <span className="text-sm font-bold text-red-600 whitespace-nowrap">{plan.admin}万円</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {plan.lineSetup > 0 && (
                                <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-400">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">💬</span>
                                        <div className="flex-1">
                                            <div className="font-bold text-brand-dark text-sm md:text-base mb-1">公式LINE構築</div>
                                            <div className="text-xs text-gray-600 mb-2">初期設定 + テンプレート</div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${Math.min((plan.lineSetup / parseFloat(budget)) * 100, 100)}%` }}></div>
                                                </div>
                                                <span className="text-sm font-bold text-red-600 whitespace-nowrap">{plan.lineSetup}万円</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* 推奨運用 */}
                    {plan.lineOperation > 0 && (
                        <div className="space-y-2">
                            <div className="text-xs font-bold text-yellow-600 mb-2">🟡 推奨運用</div>
                            <div className="bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border-l-4 border-yellow-400">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">💬</span>
                                    <div className="flex-1">
                                        <div className="font-bold text-brand-dark text-sm md:text-base mb-1">LINE運用代行</div>
                                        <div className="text-xs text-gray-600 mb-2">月2万円 × {plan.operationMonths}ヶ月</div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${Math.min((plan.lineOperation / parseFloat(budget)) * 100, 100)}%` }}></div>
                                            </div>
                                            <span className="text-sm font-bold text-yellow-600 whitespace-nowrap">{plan.lineOperation}万円</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 選択可能 */}
                    <div className="space-y-2">
                        <div className="text-xs font-bold text-green-600 mb-2">🟢 選択可能</div>

                        {/* 研修 */}
                        <div className={`bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border-l-4 ${includeTraining ? 'border-green-400' : 'border-gray-300'}`}>
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    checked={includeTraining}
                                    onChange={(e) => setIncludeTraining(e.target.checked)}
                                    className="mt-1"
                                />
                                <span className="text-2xl">📚</span>
                                <div className="flex-1">
                                    <div className="font-bold text-brand-dark text-sm md:text-base mb-1">研修参加</div>
                                    <div className="text-xs text-gray-600 mb-2">3万円/回 <span className="text-gray-400">（毎月2回開催）</span></div>
                                    {includeTraining && plan.training > 0 && (
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.min((plan.training / parseFloat(budget)) * 100, 100)}%` }}></div>
                                            </div>
                                            <span className="text-sm font-bold text-green-600 whitespace-nowrap">{plan.training}万円 ({plan.trainingCount}回)</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Web */}
                        <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border-l-4 border-green-400">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🌐</span>
                                <div className="flex-1">
                                    <div className="font-bold text-brand-dark text-sm md:text-base mb-1">Webサイト</div>
                                    {plan.webShortfall > 0 ? (
                                        <div className="text-xs text-orange-600 mb-2">
                                            💡 あと{plan.webShortfall}万円で本格制作可能（15万円〜）
                                        </div>
                                    ) : (
                                        <div className="text-xs text-green-600 mb-2">
                                            ✅ 本格Webサイト制作が可能です
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.min((plan.web / parseFloat(budget)) * 100, 100)}%` }}></div>
                                        </div>
                                        <span className="text-sm font-bold text-green-600 whitespace-nowrap">{plan.web}万円</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 italic mt-4">
                        ※ 詳細は無料診断で最適化します
                    </p>

                    <a
                        href="https://lin.ee/a6beTNB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-brand-accent text-white text-center font-bold py-3 md:py-4 rounded-full hover:opacity-90 transition-opacity mt-4 text-sm md:text-base"
                    >
                        LINE相談する
                    </a>
                </div>
            )}

            {!plan && (
                <div className="mt-6 text-center text-gray-400 text-sm">
                    余剰予算額を入力すると、最適な活用プランを表示します
                </div>
            )}
        </div>
    );
};

export default BudgetSimulator;

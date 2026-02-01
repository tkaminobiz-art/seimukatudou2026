import React, { useState, useEffect } from 'react';

const OpeningSplash = ({ onComplete }) => {
    const [stage, setStage] = useState(0); // 0: producer, 1: service, 2: company, 3: fade out
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStage(1), 800),  // Show service name
            setTimeout(() => setStage(2), 1800), // Show company name
            setTimeout(() => setStage(3), 3000), // Start fade out
            setTimeout(() => {
                setIsVisible(false);
                onComplete && onComplete();
            }, 4000) // Complete
        ];

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-brand-dark via-brand-dark to-gray-900 transition-opacity duration-1000 ${stage === 3 ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Animated Background Circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-3xl">
                {/* Producer Credit */}
                <div
                    className={`mb-8 transition-all duration-700 ${stage >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <p className="text-brand-accent font-medium text-sm md:text-base tracking-widest mb-2 animate-fade-in">
                        PRODUCED BY
                    </p>
                    <p className="text-white text-lg md:text-2xl font-bold tracking-wide">
                        元奈良市市議会議員　山岡稔季
                    </p>
                </div>

                {/* Divider Line */}
                <div
                    className={`h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mb-8 transition-all duration-700 ${stage >= 1 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                        }`}
                ></div>

                {/* Service Name */}
                <div
                    className={`mb-6 transition-all duration-700 delay-100 ${stage >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                        }`}
                >
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
                        Reboot Camp
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-brand-accent tracking-wide">
                        政務活動。DX
                    </h2>
                </div>

                {/* Company Name */}
                <div
                    className={`transition-all duration-700 delay-200 ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <div className="inline-block px-6 py-2 border border-brand-accent/30 rounded-full backdrop-blur-sm bg-white/5">
                        <p className="text-white font-medium text-base md:text-lg tracking-wider">
                            株式会社 Bloom Road
                        </p>
                    </div>
                </div>

                {/* Shimmer Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer"></div>
            </div>
        </div>
    );
};

export default OpeningSplash;

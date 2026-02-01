import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {number} threshold - Intersection threshold (0-1)
 * @returns {ref} - Ref to attach to element
 */
export const useScrollAnimation = (threshold = 0.1) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return ref;
};

/**
 * Number count-up animation hook
 * @param {number} end - Target number
 * @param {number} duration - Animation duration in ms
 * @param {Function} onUpdate - Callback with current value
 */
export const useCountUp = (end, duration = 2000, onUpdate) => {
    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * end);

            if (onUpdate) {
                onUpdate(current);
            }

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [end, duration, onUpdate]);
};

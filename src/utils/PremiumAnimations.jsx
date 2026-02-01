import { useState, useEffect } from 'react';

/**
 * Typing animation hook for text
 * @param {string} text - Full text to display
 * @param {number} speed - Typing speed in ms
 * @returns {string} - Currently displayed text
 */
export const useTypingEffect = (text, speed = 100) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return displayedText;
};

/**
 * Parallax scroll hook
 * @param {number} speed - Parallax intensity
 * @returns {number} - Transform Y value
 */
export const useParallax = (speed = 0.5) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset * speed);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return offset;
};

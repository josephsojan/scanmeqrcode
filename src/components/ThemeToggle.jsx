import React from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ theme, onToggle }) {
    return (
        <button
            className="theme-toggle"
            onClick={onToggle}
            aria-label="Toggle light / dark mode"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
            {theme === 'light' ? (
                <Sun size={20} className="theme-icon-sun" />
            ) : (
                <Moon size={20} className="theme-icon-moon" />
            )}
        </button>
    );
}

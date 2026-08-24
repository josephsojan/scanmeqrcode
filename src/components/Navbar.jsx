import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar({ theme, onToggleTheme }) {
    return (
        <header className="nav">
            <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="brand-mark">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="brand-text">
                    <div className="brand-name">ScanMe</div>
                    <div className="brand-tag">qr code generator</div>
                </div>
            </div>

            <div className="nav-actions">
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
        </header>
    );
}

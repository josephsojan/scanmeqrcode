import React from 'react';

export function AboutSection() {
    const metrics = [
        { number: '100%', label: 'Client-Side Engine' },
        { number: '0', label: 'Tracking / Server Logs' },
        { number: '30%', label: 'Max Error Recovery' },
        { number: '∞', label: 'Unlimited Downloads' }
    ];

    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <p class="eyebrow">03 — About ScanMe</p>
                    <h2>Built for Privacy, Speed & Precision</h2>
                    <p>
                        ScanMe is an ultra-fast, zero-telemetry QR generation tool designed for creators, developers, and businesses. Unlike standard QR services that route links through intermediary redirect trackers, ScanMe generates 100% of your matrix locally in your browser.
                    </p>
                    
                </div>

                <div className="about-metrics">
                    {metrics.map((m, idx) => (
                        <div key={idx} className="metric-card">
                            <span className="metric-number">{m.number}</span>
                            <span className="metric-label">{m.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { Monitor, Package, Utensils, Award } from 'lucide-react';

export function InfoSection() {
    const cards = [
        {
            icon: <Monitor size={22} />,
            title: 'Digital & Screen Sharing',
            description: 'Embed in keynote slides, stream overlays, email signatures, Zoom backgrounds, Linktree, or portfolio websites for fast audience interaction.'
        },
        {
            icon: <Package size={22} />,
            title: 'Print Media & Packaging',
            description: 'Print on business cards, stickers, product packaging, flyers, and merchandise with sharp, high-contrast vector clarity.'
        },
        {
            icon: <Utensils size={22} />,
            title: 'Hospitality & Retail',
            description: 'Place on restaurant table tents for digital menus, storefront windows for opening hours, or checkout counters for instant Wi-Fi connect.'
        },
        {
            icon: <Award size={22} />,
            title: 'Events & Conferences',
            description: 'Add to attendee badges, roll-up banners, stage screens, and booth materials to seamlessly route visitors to your landing page.'
        }
    ];

    return (
        <section className="info-section">
            <div className="section-header">
                <p className="eyebrow">02 — Where to share & display</p>
                <h2>Deploy your QR codes across any medium</h2>
                <p className="section-subtitle">
                    From physical prints to digital screens, your generated codes scan effortlessly across iOS Camera, Google Lens, and all barcode readers.
                </p>
            </div>

            <div className="cards-grid">
                {cards.map((card, idx) => (
                    <div key={idx} className="info-card">
                        <div className="card-icon">{card.icon}</div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

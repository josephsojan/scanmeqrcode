import React, { useState, useEffect } from 'react';
import { Link2, Wifi, User, AlignLeft, Image as ImageIcon } from 'lucide-react';

export function QrGenerator({
    value,
    onChangeValue,
    errorCorrection,
    onChangeErrorCorrection,
    fgColor,
    onChangeFgColor,
    bgColor,
    onChangeBgColor,
    size,
    onChangeSize
}) {
    const [preset, setPreset] = useState('url');

    // Preset sub-states
    const [urlInput, setUrlInput] = useState('https://example.com');
    const [wifiSsid, setWifiSsid] = useState('');
    const [wifiPass, setWifiPass] = useState('');
    const [wifiType, setWifiType] = useState('WPA');
    const [contactName, setContactName] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [plainText, setPlainText] = useState('');
    const [imageData, setImageData] = useState('');
    const [imageName, setImageName] = useState('');
    const [imageError, setImageError] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            setImageData('');
            setImageName('');
            setImageError('');
            onChangeValue('');
            return;
        }

        if (!file.type.startsWith('image/')) {
            setImageError('Please choose a valid image file.');
            setImageData('');
            setImageName('');
            onChangeValue('');
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            const dataUrl = reader.result;
            setImageData(dataUrl);
            setImageName(file.name);
            setImageError('');
            onChangeValue(dataUrl);
        };

        reader.onerror = () => {
            setImageError('Unable to read the selected image.');
            setImageData('');
            setImageName('');
            onChangeValue('');
        };

        reader.readAsDataURL(file);
    };

    const clearImage = () => {
        setImageData('');
        setImageName('');
        setImageError('');
        onChangeValue('');
    };

    // Update parent QR value when inputs or preset change
    useEffect(() => {
        if (preset === 'url') {
            onChangeValue(urlInput.trim());
        } else if (preset === 'wifi') {
            if (!wifiSsid) {
                onChangeValue('');
            } else {
                // Standard WiFi QR format: WIFI:T:WPA;S:MySSID;P:MyPassword;;
                const escapeStr = (s) => s.replace(/([\\;,:"])/g, '\\$1');
                const t = wifiType === 'nopass' ? 'nopass' : wifiType;
                const p = wifiType === 'nopass' ? '' : wifiPass;
                onChangeValue(`WIFI:T:${t};S:${escapeStr(wifiSsid)};P:${escapeStr(p)};;`);
            }
        } else if (preset === 'contact') {
            if (!contactName && !contactPhone && !contactEmail) {
                onChangeValue('');
            } else {
                // Standard vCard 3.0 format
                const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL:${contactPhone}\nEMAIL:${contactEmail}\nEND:VCARD`;
                onChangeValue(vcard);
            }
        } else if (preset === 'text') {
            onChangeValue(plainText);
        } else if (preset === 'image') {
            if (!imageData) {
                onChangeValue('');
            } else {
                onChangeValue(imageData);
            }
        }
    }, [preset, urlInput, wifiSsid, wifiPass, wifiType, contactName, contactPhone, contactEmail, plainText, imageData]);

    return (
        <div className="panel">
            {/* Preset Selector Tabs */}
            <div className="preset-tabs">
                <button
                    type="button"
                    className={`preset-tab ${preset === 'url' ? 'active' : ''}`}
                    onClick={() => setPreset('url')}
                >
                    <Link2 size={14} /> URL
                </button>
                <button
                    type="button"
                    className={`preset-tab ${preset === 'wifi' ? 'active' : ''}`}
                    onClick={() => setPreset('wifi')}
                >
                    <Wifi size={14} /> Wi-Fi
                </button>
                <button
                    type="button"
                    className={`preset-tab ${preset === 'contact' ? 'active' : ''}`}
                    onClick={() => setPreset('contact')}
                >
                    <User size={14} /> Contact
                </button>
                <button
                    type="button"
                    className={`preset-tab ${preset === 'text' ? 'active' : ''}`}
                    onClick={() => setPreset('text')}
                >
                    <AlignLeft size={14} /> Text
                </button>
                <button
                    type="button"
                    className={`preset-tab ${preset === 'image' ? 'active' : ''}`}
                    onClick={() => setPreset('image')}
                >
                    <ImageIcon size={14} /> Image
                </button>
            </div>

            {/* Input fields based on active preset */}
            {preset === 'url' && (
                <div>
                    <label className="field-label" htmlFor="url-input">Destination link</label>
                    <div className="input-row">
                        <input
                            type="text"
                            id="url-input"
                            value={urlInput}
                            onChange={(e) => setUrlInput(e.target.value)}
                            placeholder="https://example.com/your-page"
                            autoComplete="off"
                            spellCheck="false"
                        />
                    </div>
                    <p className="hint">Supports websites, landing pages, social profiles, and deep links.</p>
                </div>
            )}

            {preset === 'wifi' && (
                <div className="form-grid">
                    <div>
                        <label className="field-label" htmlFor="wifi-ssid">Network Name (SSID)</label>
                        <input
                            type="text"
                            id="wifi-ssid"
                            value={wifiSsid}
                            onChange={(e) => setWifiSsid(e.target.value)}
                            placeholder="e.g. Office_Guest_WiFi"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="field-label" htmlFor="wifi-pass">Password</label>
                        <input
                            type="text"
                            id="wifi-pass"
                            value={wifiPass}
                            onChange={(e) => setWifiPass(e.target.value)}
                            placeholder="Leave blank if open network"
                            autoComplete="off"
                        />
                    </div>
                    <p className="hint">Guests can scan with their phone camera to connect instantly without typing passwords.</p>
                </div>
            )}

            {preset === 'contact' && (
                <div className="form-grid">
                    <div>
                        <label className="field-label" htmlFor="contact-name">Full Name</label>
                        <input
                            type="text"
                            id="contact-name"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="e.g. Jane Doe"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="field-label" htmlFor="contact-phone">Phone Number</label>
                        <input
                            type="text"
                            id="contact-phone"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            placeholder="+1 555 123 4567"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="field-label" htmlFor="contact-email">Email Address</label>
                        <input
                            type="text"
                            id="contact-email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder="jane@example.com"
                            autoComplete="off"
                        />
                    </div>
                </div>
            )}

            {preset === 'text' && (
                <div>
                    <label className="field-label" htmlFor="plain-text">Plain Text / Notes</label>
                    <textarea
                        id="plain-text"
                        value={plainText}
                        onChange={(e) => setPlainText(e.target.value)}
                        placeholder="Type any message, notes, crypto address, or serialized data..."
                        autoComplete="off"
                    />
                </div>
            )}

            {preset === 'image' && (
                <div>
                    <label className="field-label" htmlFor="image-upload">Upload an image</label>
                    <div className="image-upload-box">
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="file-input-hidden"
                        />
                        <label htmlFor="image-upload" className="btn-ghost upload-trigger">
                            Choose image
                        </label>
                        <span className={`image-name ${!imageName ? 'muted' : ''}`}>
                            {imageName || 'No image selected'}
                        </span>
                        {imageData && (
                            <button type="button" className="btn-ghost remove-image-btn" onClick={clearImage}>
                                Clear
                            </button>
                        )}
                    </div>

                    {imageData && (
                        <div className="image-preview-wrap">
                            <img src={imageData} alt="Selected QR source preview" className="image-preview" />
                        </div>
                    )}

                    {imageError && <p className="hint error-text">{imageError}</p>}
                    <p className="hint">Best results come from smaller images: large photos may exceed QR data limits.</p>
                </div>
            )}

            {/* Customization Controls */}
            <div className="controls">
                <div className="control-row">
                    <span className="field-label" style={{ marginBottom: 0 }}>Error correction</span>
                    <div className="ec-group">
                        <button
                            type="button"
                            className={`ec-btn ${errorCorrection === 'L' ? 'active' : ''}`}
                            onClick={() => onChangeErrorCorrection('L')}
                            title="Recovers ~7% — Smallest code"
                        >
                            L
                        </button>
                        <button
                            type="button"
                            className={`ec-btn ${errorCorrection === 'M' ? 'active' : ''}`}
                            onClick={() => onChangeErrorCorrection('M')}
                            title="Recovers ~15% — Balanced default"
                        >
                            M
                        </button>
                        <button
                            type="button"
                            className={`ec-btn ${errorCorrection === 'Q' ? 'active' : ''}`}
                            onClick={() => onChangeErrorCorrection('Q')}
                            title="Recovers ~25% — Sturdier"
                        >
                            Q
                        </button>
                        <button
                            type="button"
                            className={`ec-btn ${errorCorrection === 'H' ? 'active' : ''}`}
                            onClick={() => onChangeErrorCorrection('H')}
                            title="Recovers ~30% — Best for print & wear resistance"
                        >
                            H
                        </button>
                    </div>
                </div>

                <div className="control-row">
                    <span className="field-label" style={{ marginBottom: 0 }}>Colors</span>
                    <div className="color-swatches">
                        <input
                            type="color"
                            id="fg-color"
                            value={fgColor}
                            onChange={(e) => onChangeFgColor(e.target.value)}
                            title="QR Module color"
                        />
                        <input
                            type="color"
                            id="bg-color"
                            value={bgColor}
                            onChange={(e) => onChangeBgColor(e.target.value)}
                            title="Background color"
                        />
                    </div>
                </div>

                <div className="control-row">
                    <span className="field-label" style={{ marginBottom: 0 }}>Size</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <input
                            type="range"
                            id="size-slider"
                            min="160"
                            max="440"
                            step="20"
                            value={size}
                            onChange={(e) => onChangeSize(parseInt(e.target.value, 10))}
                        />
                        <span className="size-value">{size}px</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

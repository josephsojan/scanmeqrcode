import React, { useRef, useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Download, Copy, Check, FileCode } from 'lucide-react';

export function QrPreview({ value, errorCorrection, fgColor, bgColor, size }) {
    const canvasRef = useRef(null);
    const [status, setStatus] = useState('Waiting for input');
    const [copied, setCopied] = useState(false);

    const ecLabels = {
        L: 'L — 7%',
        M: 'M — 15%',
        Q: 'Q — 25%',
        H: 'H — 30%'
    };

    // Render QR Code onto the Canvas
    useEffect(() => {
        if (!canvasRef.current) return;

        if (!value) {
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            setStatus('Waiting for input');
            return;
        }

        QRCode.toCanvas(
            canvasRef.current,
            value,
            {
                width: size,
                margin: 2,
                color: {
                    dark: fgColor,
                    light: bgColor
                },
                errorCorrectionLevel: errorCorrection
            },
            (error) => {
                if (error) {
                    console.error('QR rendering error:', error);
                    setStatus('Encoding error');
                } else {
                    setStatus('Ready to export');
                }
            }
        );
    }, [value, errorCorrection, fgColor, bgColor, size]);

    // Download PNG export
    const handleDownloadPng = () => {
        if (!canvasRef.current || !value) return;
        const dataUrl = canvasRef.current.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `scanme-qr-${size}px.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    // Download SVG export
    const handleDownloadSvg = async () => {
        if (!value) return;
        try {
            const svgString = await QRCode.toString(value, {
                type: 'svg',
                margin: 2,
                color: {
                    dark: fgColor,
                    light: bgColor
                },
                errorCorrectionLevel: errorCorrection
            });
            const blob = new Blob([svgString], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'scanme-qr-vector.svg';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error('SVG generation error:', err);
        }
    };

    // Copy PNG image to clipboard
    const handleCopyImage = async () => {
        if (!canvasRef.current || !value) return;
        try {
            canvasRef.current.toBlob(async (blob) => {
                if (blob && navigator.clipboard && window.ClipboardItem) {
                    await navigator.clipboard.write([
                        new ClipboardItem({ 'image/png': blob })
                    ]);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                }
            });
        } catch (err) {
            console.error('Clipboard copy error:', err);
        }
    };

    return (
        <div className="panel preview-panel">
            <div className="preview-layout">
                {/* QR Code Viewfinder */}
                <div className="viewfinder">
                    <span className="vf-tl"></span>
                    <span className="vf-tr"></span>
                    <div className="qr-canvas-container">
                        <canvas ref={canvasRef} />
                    </div>
                </div>

                {/* Metadata details on the right side */}
                <div className="preview-details">
                    <dl className="readout">
                        <div className="readout-item">
                            <dt>Input length</dt>
                            <dd>{value ? `${value.length} chars` : '0 chars'}</dd>
                        </div>
                        <div className="readout-item">
                            <dt>Error correction</dt>
                            <dd>{ecLabels[errorCorrection] || 'M — 15%'}</dd>
                        </div>
                        <div className="readout-item">
                            <dt>Output size</dt>
                            <dd>{size} × {size}</dd>
                        </div>
                        <div className="readout-item">
                            <dt>Status</dt>
                            <dd>{status}</dd>
                        </div>
                    </dl>

                    {/* Export Actions */}
                    <div className="download-actions">
                        <button
                            type="button"
                            className="btn-primary"
                            onClick={handleDownloadPng}
                            disabled={!value}
                        >
                            <Download size={15} /> Download PNG
                        </button>

                        <div className="download-btn-group">
                            <button
                                type="button"
                                className="btn-ghost"
                                onClick={handleDownloadSvg}
                                disabled={!value}
                                title="Download lossless scalable vector"
                            >
                                <FileCode size={14} /> SVG Vector
                            </button>

                            <button
                                type="button"
                                className="btn-ghost"
                                onClick={handleCopyImage}
                                disabled={!value}
                                title="Copy QR image directly to clipboard"
                            >
                                {copied ? <Check size={14} style={{ color: 'var(--accent)' }} /> : <Copy size={14} />}
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>

                        {copied && <div className="toast-message">QR image copied to clipboard!</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

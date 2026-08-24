import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QrGenerator } from './components/QrGenerator';
import { QrPreview } from './components/QrPreview';
import { InfoSection } from './components/InfoSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
// Git test
export function App() {
    const { theme, toggleTheme } = useTheme();

    const [value, setValue] = useState('https://example.com');
    const [errorCorrection, setErrorCorrection] = useState('M');
    const [fgColor, setFgColor] = useState('#12161B');
    const [bgColor, setBgColor] = useState('#FFFFFF');
    const [size, setSize] = useState(260);

    return (
        <div className="frame">
            <Navbar theme={theme} onToggleTheme={toggleTheme} />
            <Hero />

            <div className="tool">
                <QrGenerator
                    value={value}
                    onChangeValue={setValue}
                    errorCorrection={errorCorrection}
                    onChangeErrorCorrection={setErrorCorrection}
                    fgColor={fgColor}
                    onChangeFgColor={setFgColor}
                    bgColor={bgColor}
                    onChangeBgColor={setBgColor}
                    size={size}
                    onChangeSize={setSize}
                />

                <QrPreview
                    value={value}
                    errorCorrection={errorCorrection}
                    fgColor={fgColor}
                    bgColor={bgColor}
                    size={size}
                />
            </div>

            <InfoSection />
            <AboutSection />
            <Footer />
        </div>
    );
}

export default App;

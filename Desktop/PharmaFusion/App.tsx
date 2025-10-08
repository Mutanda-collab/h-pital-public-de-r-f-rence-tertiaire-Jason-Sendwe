import React, { useState, useMemo, useEffect, createContext, useContext, useRef } from 'react';
import { drugData } from './data/drugs';
import { abbreviationsData } from './data/abbreviations';
import { interactionsData } from './data/interactions';
import { urgenciesData } from './data/urgencies';
import { Drug, PharmacologicalClass, DrugCategory, Abbreviation, View, Interaction, UrgencyProtocol, TextSize, PrescribedDrug } from './types';
import { 
    SunIcon, MoonIcon, SearchIcon, CloseIcon, ChevronDownIcon, PillIcon, StarIcon, 
    MenuIcon, BookOpenIcon, CalculatorIcon, ClipboardIcon, ChatBubbleLeftRightIcon,
    InformationCircleIcon, ArrowLeftIcon, CopyIcon, TrashIcon, ScaleIcon, BeakerIcon,
    PharmaFusionLogo, UserOnScaleIcon, ShieldExclamationIcon, SirenIcon, ClockIcon,
    ShieldCheckIcon, ArrowPathIcon, ArrowDownTrayIcon, SparklesIcon, PaperAirplaneIcon,
    ShareIcon, PrintIcon, PlusCircleIcon
} from './components/icons';

// --- Theme Management ---
type Theme = 'light' | 'dark';
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void; }>({ theme: 'light', toggleTheme: () => {} });

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme') as Theme;
      return storedTheme || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const {theme, toggleTheme} = useTheme();
    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
};

const AppHeader: React.FC<{ title: string; onBack?: () => void; onMenuClick?: () => void; showTitleLogo?: boolean; }> = ({ title, onBack, onMenuClick, showTitleLogo = true }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className="bg-brand-secondary dark:bg-gray-900 text-white shadow-lg no-print">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {onBack ? (
                     <button onClick={onBack} className="flex items-center space-x-2 text-gray-200 hover:text-white">
                        <ArrowLeftIcon className="w-6 h-6" />
                        <span className="hidden sm:block font-semibold">Retour</span>
                    </button>
                ) : (
                    onMenuClick ? (
                        <button onClick={onMenuClick} className="p-2" aria-label="Menu">
                            <MenuIcon className="w-6 h-6" />
                        </button>
                    ) : <div className="w-10"></div> // Placeholder
                )}
                <div className="flex items-center space-x-2">
                    {showTitleLogo && <PharmaFusionLogo className="w-7 h-7 text-brand-primary" />}
                    <h1 className="text-xl md:text-2xl font-bold font-display text-center">
                        Pharma<span className="text-brand-primary">Fusion</span>
                    </h1>
                </div>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                </button>
            </div>
        </header>
    );
};


// --- Home Screen Components ---
const HomeScreen: React.FC<{
    onNavigate: (view: View, search?: string) => void;
    onMenuClick: () => void;
}> = ({ onNavigate, onMenuClick }) => {
    const [homeSearch, setHomeSearch] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (homeSearch.trim()) {
            onNavigate('drugList', homeSearch.trim());
        }
    };

    const MenuButton: React.FC<{icon: React.ReactNode; text: string; onClick?: () => void;}> = ({icon, text, onClick}) => (
        <button
            onClick={onClick}
            className={`w-full p-4 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center space-y-2 text-center transform hover:-translate-y-1 cursor-pointer`}
        >
            <div className="text-brand-primary">{icon}</div>
            <span className="font-semibold text-sm text-gray-700 dark:text-gray-200">{text}</span>
        </button>
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="PharmaFusion" showTitleLogo onMenuClick={onMenuClick} />
            
            <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <form onSubmit={handleSearch} className="relative mb-8">
                    <input
                        type="search"
                        placeholder="Rechercher un médicament..."
                        value={homeSearch}
                        onChange={(e) => setHomeSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 shadow-sm"
                    />
                    <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2" aria-label="Rechercher">
                        <SearchIcon className="w-6 h-6 text-gray-400" />
                    </button>
                </form>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <MenuButton icon={<BookOpenIcon className="w-10 h-10"/>} text="Classes de Médicaments" onClick={() => onNavigate('drugList')} />
                    <MenuButton icon={<CalculatorIcon className="w-10 h-10"/>} text="Calculateurs pharmaco" onClick={() => onNavigate('calculatorMenu')} />
                    <MenuButton icon={<SirenIcon className="w-10 h-10"/>} text="Urgences" onClick={() => onNavigate('urgencies')} />
                    <MenuButton icon={<ShieldExclamationIcon className="w-10 h-10"/>} text="Interactions" onClick={() => onNavigate('interactionChecker')} />
                    <MenuButton icon={<ClipboardIcon className="w-10 h-10"/>} text="Ordonnance Médicale" onClick={() => onNavigate('prescription')} />
                    <MenuButton icon={<ChatBubbleLeftRightIcon className="w-10 h-10"/>} text="Abréviations" onClick={() => onNavigate('abbreviations')} />
                    <MenuButton icon={<StarIcon className="w-10 h-10"/>} text="Favoris" onClick={() => onNavigate('favorites')} />
                    <MenuButton icon={<ClockIcon className="w-10 h-10"/>} text="Historique" onClick={() => onNavigate('history')} />
                </div>
            </main>
            
            <footer className="py-4 px-4 sm:px-6 lg:px-8 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <InformationCircleIcon className="w-4 h-4" />
                        <button type="button" onClick={() => onNavigate('about')} className="hover:underline">À propos et confidentialité</button>
                    </div>
                    <p>© 2025 PharmaFusion</p>
                    <p>Build by Dr. Mutanda DB.</p>
                </div>
            </footer>
        </div>
    );
};

// --- Calculator Screens ---
const CalculatorMenuScreen: React.FC<{ onBack: () => void; onNavigate: (view: View) => void; }> = ({ onBack, onNavigate }) => {
    const CalculatorItem: React.FC<{ icon: React.ReactNode; title: string; description: string; onClick: () => void; }> = ({ icon, title, description, onClick }) => (
        <button onClick={onClick} className="w-full text-left p-4 bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transition-all flex items-center space-x-4">
            <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">{icon}</div>
            <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
        </button>
    );
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Calculateurs Pharmaco" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="space-y-4 max-w-2xl mx-auto">
                    <CalculatorItem icon={<PillIcon className="w-6 h-6"/>} title="Calculateur de Dose" description="Calculez le volume à administrer à partir d'une concentration." onClick={() => onNavigate('doseCalculator')} />
                    <CalculatorItem icon={<CalculatorIcon className="w-6 h-6"/>} title="Débit de Perfusion" description="Calculez le débit en mL/h ou en gouttes/min." onClick={() => onNavigate('dripRateCalculator')} />
                    <CalculatorItem icon={<ScaleIcon className="w-6 h-6"/>} title="Surface Corporelle (BSA)" description="Estimez la surface corporelle (formule de Mosteller)." onClick={() => onNavigate('bsaCalculator')} />
                    <CalculatorItem icon={<BeakerIcon className="w-6 h-6"/>} title="Clairance Créatinine" description="Estimez la fonction rénale (formule de Cockcroft-Gault)." onClick={() => onNavigate('crclCalculator')} />
                    <CalculatorItem icon={<UserOnScaleIcon className="w-6 h-6"/>} title="Indice de Masse Corporelle (IMC)" description="Calculez votre IMC et évaluez votre corpulence." onClick={() => onNavigate('bmiCalculator')} />
                </div>
            </main>
        </div>
    );
};

const DoseCalculatorScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [drugMg, setDrugMg] = useState('');
    const [drugMl, setDrugMl] = useState('');
    const [doseMg, setDoseMg] = useState('');

    const { concentration, volumeToAdministerMl } = useMemo(() => {
        const dMg = parseFloat(drugMg);
        const dMl = parseFloat(drugMl);
        const desiredDose = parseFloat(doseMg);

        if (dMg > 0 && dMl > 0) {
            const concentrationVal = dMg / dMl;
            if (desiredDose > 0) {
                const volume = desiredDose / concentrationVal;
                return { concentration: concentrationVal, volumeToAdministerMl: volume };
            }
            return { concentration: concentrationVal, volumeToAdministerMl: null };
        }
        return { concentration: null, volumeToAdministerMl: null };
    }, [drugMg, drugMl, doseMg]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Calculateur de Dose" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md max-w-lg mx-auto">
                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Calculez le volume à administrer à partir de la concentration d'une ampoule/solution et de la dose souhaitée.</p>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Quantité de principe actif (mg)</label>
                            <input type="number" placeholder="ex: 10" value={drugMg} onChange={e => setDrugMg(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Volume de la solution (mL)</label>
                            <input type="number" placeholder="ex: 2" value={drugMl} onChange={e => setDrugMl(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Dose souhaitée (mg)</label>
                            <input type="number" placeholder="ex: 2.5" value={doseMg} onChange={e => setDoseMg(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"/>
                        </div>
                    </div>
                    {concentration !== null && (
                         <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                            <p className="font-semibold">Concentration de la solution :</p>
                            <p className="text-2xl font-bold text-brand-primary">{concentration.toFixed(2)} mg/mL</p>
                        </div>
                    )}
                    {volumeToAdministerMl !== null && (
                        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/50 rounded-lg">
                            <p className="font-semibold">Volume à administrer pour une dose de {doseMg} mg :</p>
                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{volumeToAdministerMl.toFixed(2)} mL</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

const DripRateCalculatorScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [volume, setVolume] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [dropFactor, setDropFactor] = useState('20');

    const { rateMlHr, rateGttMin } = useMemo(() => {
        const vol = parseFloat(volume);
        const h = parseFloat(hours) || 0;
        const min = parseFloat(minutes) || 0;
        const df = parseFloat(dropFactor);
        const totalMinutes = h * 60 + min;

        let res: { rateMlHr: number | null; rateGttMin: number | null; } = { rateMlHr: null, rateGttMin: null };

        if (vol > 0 && totalMinutes > 0) {
            res.rateMlHr = vol / (totalMinutes / 60);
            if (df > 0) {
                res.rateGttMin = (vol * df) / totalMinutes;
            }
        }
        return res;
    }, [volume, hours, minutes, dropFactor]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Débit de Perfusion" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Volume total (mL)</label>
                            <input type="number" placeholder="ex: 1000" value={volume} onChange={e => setVolume(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium">Durée (heures)</label>
                                <input type="number" placeholder="ex: 8" value={hours} onChange={e => setHours(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium">(minutes)</label>
                                <input type="number" placeholder="ex: 0" value={minutes} onChange={e => setMinutes(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Facteur de gouttes (gtt/mL)</label>
                            <select value={dropFactor} onChange={e => setDropFactor(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                                <option value="10">10 gtt/mL (Macro)</option>
                                <option value="15">15 gtt/mL (Macro)</option>
                                <option value="20">20 gtt/mL (Macro)</option>
                                <option value="60">60 gtt/mL (Micro)</option>
                            </select>
                        </div>
                    </div>
                    {rateMlHr !== null && (
                        <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                            <p className="font-semibold">Débit :</p>
                            <p className="text-2xl font-bold text-brand-primary">{rateMlHr.toFixed(1)} mL/h</p>
                        </div>
                    )}
                    {rateGttMin !== null && (
                        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/50 rounded-lg">
                            <p className="font-semibold">Débit :</p>
                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{rateGttMin.toFixed(0)} gouttes/min</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

const BsaCalculatorScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const bsa = useMemo(() => {
        const h = parseFloat(height);
        const w = parseFloat(weight);
        if (h > 0 && w > 0) {
            return Math.sqrt((h * w) / 3600);
        }
        return null;
    }, [height, weight]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Surface Corporelle (BSA)" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Formule de Mosteller :</p>
                    <p className="text-sm italic text-center bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-6">BSA (m²) = √ ( [Taille(cm) x Poids(kg)] / 3600 )</p>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Taille (cm)</label>
                            <input type="number" placeholder="ex: 170" value={height} onChange={e => setHeight(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Poids (kg)</label>
                            <input type="number" placeholder="ex: 70" value={weight} onChange={e => setWeight(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                    </div>
                     {bsa !== null && (
                        <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-center">
                            <p className="font-semibold">Surface Corporelle Estimée :</p>
                            <p className="text-3xl font-bold text-brand-primary">{bsa.toFixed(2)} m²</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

const CrClCalculatorScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [creatinine, setCreatinine] = useState('');
    const [gender, setGender] = useState<'male' | 'female'>('male');

    const crcl = useMemo(() => {
        const a = parseFloat(age);
        const w = parseFloat(weight);
        const cr = parseFloat(creatinine);
        if (a > 0 && w > 0 && cr > 0) {
            let result = ((140 - a) * w) / (72 * cr);
            if (gender === 'female') {
                result *= 0.85;
            }
            return result;
        }
        return null;
    }, [age, weight, creatinine, gender]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Clairance Créatinine" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Formule de Cockcroft-Gault</p>
                    <div className="space-y-4">
                         <div>
                            <label className="block text-sm font-medium">Âge (années)</label>
                            <input type="number" placeholder="ex: 65" value={age} onChange={e => setAge(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Poids (kg)</label>
                            <input type="number" placeholder="ex: 70" value={weight} onChange={e => setWeight(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Créatinine sérique (mg/dL)</label>
                            <input type="number" placeholder="ex: 1.2" value={creatinine} onChange={e => setCreatinine(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Sexe</label>
                            <select value={gender} onChange={e => setGender(e.target.value as 'male' | 'female')} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                                <option value="male">Homme</option>
                                <option value="female">Femme</option>
                            </select>
                        </div>
                    </div>
                    {crcl !== null && (
                        <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-center">
                            <p className="font-semibold">Clairance de la Créatinine Estimée :</p>
                            <p className="text-3xl font-bold text-brand-primary">{crcl.toFixed(1)} mL/min</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

const BmiCalculatorScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const bmiResult = useMemo(() => {
        const h = parseFloat(height);
        const w = parseFloat(weight);
        if (h > 0 && w > 0) {
            const heightInMeters = h / 100;
            const bmi = w / (heightInMeters * heightInMeters);
            let status: string;
            let colorClass: string;

            if (bmi < 18.5) {
                status = "Vous êtes en situation de maigreur.";
                colorClass = "text-yellow-500 dark:text-yellow-400";
            } else if (bmi >= 18.5 && bmi < 25) {
                status = "Vous avez un poids normal.";
                colorClass = "text-green-600 dark:text-green-400";
            } else if (bmi >= 25 && bmi < 30) {
                status = "Vous êtes en surpoids.";
                colorClass = "text-orange-500 dark:text-orange-400";
            } else { // bmi >= 30
                status = "Vous êtes en situation d'obésité.";
                colorClass = "text-red-600 dark:text-red-400";
            }
            
            return {
                value: bmi.toFixed(1),
                status,
                colorClass
            };
        }
        return null;
    }, [height, weight]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Indice de Masse Corporelle" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Formule de calcul :</p>
                    <p className="text-sm italic text-center bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-6">IMC = Poids (kg) / [Taille (m)]²</p>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Taille (cm)</label>
                            <input type="number" placeholder="ex: 170" value={height} onChange={e => setHeight(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Poids (kg)</label>
                            <input type="number" placeholder="ex: 70" value={weight} onChange={e => setWeight(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                    </div>
                    {bmiResult && (
                        <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-center">
                            <p className="font-semibold">Votre Indice de Masse Corporelle :</p>
                            <p className={`text-4xl font-bold ${bmiResult.colorClass}`}>{bmiResult.value}</p>
                            <p className={`mt-2 font-semibold ${bmiResult.colorClass}`}>{bmiResult.status}</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};


// --- Other Screens ---

const AbbreviationsScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredAbbreviations = useMemo(() => {
        if (!searchTerm) return abbreviationsData;
        const lowercasedTerm = searchTerm.toLowerCase();
        return abbreviationsData.filter(
            (abbr) =>
                abbr.term.toLowerCase().includes(lowercasedTerm) ||
                abbr.definition.toLowerCase().includes(lowercasedTerm)
        );
    }, [searchTerm]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Abréviations" onBack={onBack} showTitleLogo={false}/>
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="Rechercher une abréviation..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-2">
                    {filteredAbbreviations.map((abbr) => (
                        <div key={abbr.term} className="p-4 bg-white dark:bg-dark-card rounded-md shadow-sm">
                            <p className="font-bold text-brand-secondary dark:text-brand-primary">{abbr.term}</p>
                            <p className="text-gray-600 dark:text-gray-300">{abbr.definition}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

const PrescriptionScreen: React.FC<{ onBack: () => void; allDrugs: Drug[] }> = ({ onBack, allDrugs }) => {
    const [doctorInfo, setDoctorInfo] = useLocalStorage('pharmafusion-doctor-info', { name: '', speciality: '', address: '', phone: '' });
    const [patientInfo, setPatientInfo] = useState({ name: '', age: '' });
    const [prescribedDrugs, setPrescribedDrugs] = useState<PrescribedDrug[]>([]);
    const [drugSearchTerm, setDrugSearchTerm] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const drugSearchResults = useMemo(() => {
        if (!drugSearchTerm) return [];
        const lowercasedTerm = drugSearchTerm.toLowerCase();
        const prescribedDcis = prescribedDrugs.map(pd => pd.drug.dci);
        return allDrugs
            .filter(drug => !prescribedDcis.includes(drug.dci) && (drug.dci.toLowerCase().includes(lowercasedTerm) || drug.commercialNames.some(cn => cn.toLowerCase().includes(lowercasedTerm))))
            .slice(0, 5);
    }, [drugSearchTerm, allDrugs, prescribedDrugs]);

    const handleDoctorInfoChange = (field: string, value: string) => {
        setDoctorInfo(prev => ({ ...prev, [field]: value }));
    };

    const handlePatientInfoChange = (field: string, value: string) => {
        setPatientInfo(prev => ({ ...prev, [field]: value }));
    };

    const addDrugToPrescription = (drug: Drug) => {
        setPrescribedDrugs(prev => [...prev, { drug, dosage: '', posology: '' }]);
        setDrugSearchTerm('');
        setIsSearchFocused(false);
    };

    const updatePrescribedDrug = (index: number, field: 'dosage' | 'posology', value: string) => {
        setPrescribedDrugs(prev => {
            const newDrugs = [...prev];
            newDrugs[index][field] = value;
            return newDrugs;
        });
    };
    
    const removePrescribedDrug = (index: number) => {
        setPrescribedDrugs(prev => prev.filter((_, i) => i !== index));
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Constructeur d'Ordonnance" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* --- CONTROLS (NO-PRINT) --- */}
                    <div className="no-print space-y-6">
                        <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold mb-3 border-b pb-2 dark:border-gray-600">Informations du Médecin (sauvegardées)</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                                <input type="text" placeholder="Dr. [Votre Nom]" value={doctorInfo.name} onChange={e => handleDoctorInfoChange('name', e.target.value)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                                <input type="text" placeholder="Spécialité" value={doctorInfo.speciality} onChange={e => handleDoctorInfoChange('speciality', e.target.value)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                                <input type="text" placeholder="Adresse" value={doctorInfo.address} onChange={e => handleDoctorInfoChange('address', e.target.value)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                                <input type="text" placeholder="Téléphone" value={doctorInfo.phone} onChange={e => handleDoctorInfoChange('phone', e.target.value)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md">
                             <h3 className="font-semibold mb-3 border-b pb-2 dark:border-gray-600">Informations du Patient</h3>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                                <input type="text" placeholder="Nom du patient" value={patientInfo.name} onChange={e => handlePatientInfoChange('name', e.target.value)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                                <input type="text" placeholder="Âge" value={patientInfo.age} onChange={e => handlePatientInfoChange('age', e.target.value)} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold mb-3">Ajouter un médicament</h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Rechercher un médicament..."
                                    value={drugSearchTerm}
                                    onChange={e => setDrugSearchTerm(e.target.value)}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                                />
                                {isSearchFocused && drugSearchResults.length > 0 && (
                                    <ul className="absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 border rounded-md shadow-lg max-h-48 overflow-y-auto">
                                        {drugSearchResults.map(drug => (
                                            <li key={drug.dci} onMouseDown={() => addDrugToPrescription(drug)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                                                {drug.dci}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <button onClick={handlePrint} className="flex items-center justify-center w-full max-w-xs mx-auto px-4 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primary/90 transition-colors">
                                <PrintIcon className="w-6 h-6 mr-2" />
                                Imprimer l'Ordonnance
                            </button>
                        </div>

                    </div>
                    
                    {/* --- PRINTABLE AREA --- */}
                    <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-2xl mt-8 printable-area">
                         <div className="text-center border-b-2 pb-4 border-gray-300 dark:border-gray-600">
                            <h2 className="text-xl font-bold">{doctorInfo.name || "Dr. [Votre Nom]"}</h2>
                            <p className="text-sm">{doctorInfo.speciality || "[Spécialité]"}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{doctorInfo.address || "[Adresse]"}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Tel: {doctorInfo.phone || "[Numéro]"}</p>
                        </div>
                        <div className="flex justify-between items-end mt-4 pb-4">
                            <div>
                                <p><strong>Nom du patient:</strong> {patientInfo.name || "........................"}</p>
                                <p><strong>Âge:</strong> {patientInfo.age || "........................"}</p>
                            </div>
                            <p>Le {new Date().toLocaleDateString('fr-FR')}</p>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-center my-6 font-display tracking-wider">ORDONNANCE</h2>
                        
                        <div className="space-y-4">
                            {prescribedDrugs.map((pd, index) => (
                                <div key={index} className="flex items-start space-x-4 border-b pb-3 dark:border-gray-700">
                                    <span className="font-bold text-lg">{index + 1}.</span>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <p className="font-bold text-brand-secondary dark:text-brand-primary">{pd.drug.dci}</p>
                                            <button onClick={() => removePrescribedDrug(index)} className="no-print text-red-500 hover:text-red-700 p-1">
                                                <TrashIcon className="w-5 h-5"/>
                                            </button>
                                        </div>
                                        <div className="mt-2 space-y-2">
                                            <input type="text" placeholder="Dosage (ex: 500 mg)" value={pd.dosage} onChange={e => updatePrescribedDrug(index, 'dosage', e.target.value)} className="w-full text-sm p-1 border-b-2 border-dotted dark:bg-transparent dark:border-gray-600 focus:outline-none focus:border-solid focus:border-brand-primary" />
                                            <textarea placeholder="Posologie (ex: 1 comprimé matin et soir pendant 7 jours)" value={pd.posology} onChange={e => updatePrescribedDrug(index, 'posology', e.target.value)} rows={2} className="w-full text-sm p-1 border-b-2 border-dotted dark:bg-transparent dark:border-gray-600 focus:outline-none focus:border-solid focus:border-brand-primary" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => addDrugToPrescription({ dci: 'Nouveau Médicament', commercialNames: [], definition: '', modeOfAction: '', indications: [], contraindications: [], adverseEffects: [], drugInteractions: '', antidotes: '', posologyAdult: '', posologyPediatric: '' })} className="no-print mt-4 flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                            <PlusCircleIcon className="w-5 h-5" />
                            <span>Ajouter une ligne (pour impression)</span>
                        </button>

                        <div className="mt-24 text-right">
                            <p className="font-semibold">Signature:</p>
                            <div className="h-16"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};


const UrgenciesScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleProtocol = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Urgences Médicales" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="max-w-4xl mx-auto space-y-4">
                    {urgenciesData.map((protocol, index) => (
                        <div key={protocol.title} className="bg-white dark:bg-dark-card rounded-lg shadow-md overflow-hidden">
                            <button
                                onClick={() => toggleProtocol(index)}
                                className="w-full flex justify-between items-center p-4 text-left font-bold text-lg text-brand-secondary dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                            >
                                <span>{protocol.title}</span>
                                <ChevronDownIcon className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                                    <div className="space-y-4">
                                        {protocol.steps.map(step => (
                                            <div key={step.title}>
                                                <h4 className="font-semibold text-brand-primary">{step.title}</h4>
                                                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{step.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

// --- History Screen ---
const HistoryScreen: React.FC<{
    onBack: () => void;
    history: string[];
    allDrugs: Drug[];
    onSelectDrug: (drug: Drug) => void;
    onClearHistory: () => void;
}> = ({ onBack, history, allDrugs, onSelectDrug, onClearHistory }) => {
    const historyDrugs = useMemo(() => 
        history.map(dci => allDrugs.find(drug => drug.dci === dci)).filter((d): d is Drug => d !== undefined), 
        [history, allDrugs]
    );

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Mon Historique" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                {historyDrugs.length > 0 ? (
                    <>
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={onClearHistory}
                                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                            >
                                <TrashIcon className="w-4 h-4" />
                                <span>Vider l'historique</span>
                            </button>
                        </div>
                        <ul className="space-y-3">
                            {historyDrugs.map(drug => (
                                <li key={drug.dci}>
                                    <button
                                        onClick={() => onSelectDrug(drug)}
                                        className="w-full text-left p-4 bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transition-all flex items-center space-x-4"
                                    >
                                        <PillIcon className="w-6 h-6 text-brand-primary" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800 dark:text-gray-200">{drug.dci}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{drug.commercialNames.join(', ')}</p>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <div className="text-center py-16 px-4 flex flex-col items-center justify-center h-full">
                        <ClockIcon className="mx-auto w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                            Historique vide
                        </h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md">
                            Les médicaments que vous consultez apparaissent ici pour un accès rapide.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};


// --- Favorites Screen ---
const FavoritesScreen: React.FC<{
    onBack: () => void;
    favorites: string[];
    allDrugs: Drug[];
    onSelectDrug: (drug: Drug) => void;
    onToggleFavorite: (dci: string) => void;
}> = ({ onBack, favorites, allDrugs, onSelectDrug, onToggleFavorite }) => {
    const favoriteDrugs = useMemo(() => allDrugs.filter(drug => favorites.includes(drug.dci)), [allDrugs, favorites]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFavorites = useMemo(() => {
        if (!searchTerm) return favoriteDrugs;
        const lowercasedTerm = searchTerm.toLowerCase();
        return favoriteDrugs.filter(drug =>
            drug.dci.toLowerCase().includes(lowercasedTerm) ||
            drug.commercialNames.some(name => name.toLowerCase().includes(lowercasedTerm))
        );
    }, [searchTerm, favoriteDrugs]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Mes Favoris" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                 <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="Rechercher dans les favoris..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                {filteredFavorites.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredFavorites.map(drug => (
                            <DrugCard
                                key={drug.dci}
                                drug={drug}
                                onClick={() => onSelectDrug(drug)}
                                isFavorite={true}
                                onToggleFavorite={onToggleFavorite}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 px-4 flex flex-col items-center justify-center h-full">
                        <StarIcon className="mx-auto w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                            {favoriteDrugs.length > 0 ? 'Aucun favori ne correspond à votre recherche' : 'Aucun favori ajouté'}
                        </h2>
                        {favoriteDrugs.length === 0 && (
                            <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md">
                                Cliquez sur l'étoile à côté d'un médicament pour l'ajouter ici.
                            </p>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

// --- Interaction Checker Screen ---
const InteractionCheckerScreen: React.FC<{ onBack: () => void; allDrugs: Drug[] }> = ({ onBack, allDrugs }) => {
    const [selectedDrugs, setSelectedDrugs] = useState<Drug[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const searchResults = useMemo(() => {
        if (!searchTerm) return [];
        const lowercasedTerm = searchTerm.toLowerCase();
        const selectedDcis = selectedDrugs.map(d => d.dci);
        return allDrugs.filter(drug =>
            (drug.dci.toLowerCase().includes(lowercasedTerm) ||
             drug.commercialNames.some(name => name.toLowerCase().includes(lowercasedTerm))) &&
            !selectedDcis.includes(drug.dci)
        ).slice(0, 5); // Limit to 5 results for performance
    }, [searchTerm, allDrugs, selectedDrugs]);

    const addDrug = (drug: Drug) => {
        setSelectedDrugs(prev => [...prev, drug]);
        setSearchTerm('');
        setIsSearchFocused(false);
    };

    const removeDrug = (dci: string) => {
        setSelectedDrugs(prev => prev.filter(drug => drug.dci !== dci));
    };

    const foundInteractions = useMemo(() => {
        if (selectedDrugs.length < 2) return [];
        
        const checkedPairs = new Set<string>();
        const interactions: (Interaction & { pair: [string, string] })[] = [];
        
        for (let i = 0; i < selectedDrugs.length; i++) {
            for (let j = i + 1; j < selectedDrugs.length; j++) {
                const drugA_dci = selectedDrugs[i].dci;
                const drugB_dci = selectedDrugs[j].dci;
                
                const pairKey1 = `${drugA_dci}|${drugB_dci}`;
                const pairKey2 = `${drugB_dci}|${drugA_dci}`;

                if (checkedPairs.has(pairKey1) || checkedPairs.has(pairKey2)) continue;
                
                const interaction = interactionsData.find(inter => 
                    (inter.drugs[0] === drugA_dci && inter.drugs[1] === drugB_dci) ||
                    (inter.drugs[0] === drugB_dci && inter.drugs[1] === drugA_dci)
                );
                
                if (interaction) {
                    interactions.push({ ...interaction, pair: [drugA_dci, drugB_dci] });
                }
                
                checkedPairs.add(pairKey1);
            }
        }
        return interactions;
    }, [selectedDrugs]);

    const severityStyles = {
        high: 'border-red-500 bg-red-50 dark:bg-red-900/20',
        moderate: 'border-orange-500 bg-orange-50 dark:bg-orange-900/20',
        low: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
    };
    const severityText = {
        high: 'text-red-600 dark:text-red-400',
        moderate: 'text-orange-600 dark:text-orange-400',
        low: 'text-yellow-600 dark:text-yellow-400',
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
            <AppHeader title="Vérificateur d'Interactions" onBack={onBack} showTitleLogo={false} />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Rechercher un médicament à ajouter..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 150)}
                            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        {isSearchFocused && searchResults.length > 0 && (
                            <ul className="absolute z-10 w-full mt-1 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                {searchResults.map(drug => (
                                    <li key={drug.dci} onClick={() => addDrug(drug)} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                                        {drug.dci} <span className="text-sm text-gray-500">({drug.commercialNames[0]})</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    
                    <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md min-h-[100px]">
                        <h3 className="font-semibold mb-3">Médicaments sélectionnés :</h3>
                        {selectedDrugs.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {selectedDrugs.map(drug => (
                                    <span key={drug.dci} className="flex items-center bg-brand-primary/10 text-brand-secondary dark:text-brand-primary font-medium px-3 py-1 rounded-full text-sm">
                                        {drug.dci}
                                        <button onClick={() => removeDrug(drug.dci)} className="ml-2 -mr-1 p-0.5 hover:bg-brand-primary/20 rounded-full">
                                            <CloseIcon className="w-3 h-3"/>
                                        </button>
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500 dark:text-gray-400">Ajoutez au moins deux médicaments pour vérifier les interactions.</p>
                        )}
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Résultats :</h3>
                        {selectedDrugs.length < 2 ? (
                             <p className="text-center text-gray-500 dark:text-gray-400 py-8">Veuillez sélectionner au moins deux médicaments.</p>
                        ) : foundInteractions.length > 0 ? (
                            <div className="space-y-4">
                                {foundInteractions.map((interaction, index) => (
                                    <div key={index} className={`border-l-4 p-4 rounded-r-lg shadow-sm ${severityStyles[interaction.severity]}`}>
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100">{interaction.pair[0]} + {interaction.pair[1]}</h4>
                                            <span className={`font-bold text-sm uppercase ${severityText[interaction.severity]}`}>{interaction.severity === 'high' ? 'Élevé' : interaction.severity}</span>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{interaction.description}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-8">Aucune interaction connue trouvée dans notre base de données pour cette sélection.</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

// --- Drug List Screen Components ---
const DrugListHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className="sticky top-0 z-30 bg-brand-secondary dark:bg-dark-bg/80 backdrop-blur-md text-white shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary">
                        <ArrowLeftIcon className="w-6 h-6. text-white" />
                        <span className="hidden sm:block font-semibold">Accueil</span>
                    </button>
                    <div className="flex items-center space-x-2">
                     <PharmaFusionLogo className="w-7 h-7 text-brand-primary" />
                        <h1 className="text-xl md:text-2xl font-bold font-display text-white dark:text-gray-100">
                            Pharma<span className="text-brand-primary">Fusion</span>
                        </h1>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-card transition-colors duration-200"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <MoonIcon className="w-6 h-6 text-white" /> : <SunIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

interface RecursiveNavProps {
    categories: DrugCategory[];
    onSelectCategory: (category: DrugCategory) => void;
    selectedCategoryName: string | null;
    level: number;
}
const RecursiveNav: React.FC<RecursiveNavProps> = ({ categories, onSelectCategory, selectedCategoryName, level }) => {
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
    const toggleCategory = (categoryName: string) => setOpenCategories(prev => ({ ...prev, [categoryName]: !prev[categoryName] }));
    return (
        <div className={`space-y-1 ${level > 0 ? 'ml-4 pl-3 border-l-2 border-brand-primary/30' : ''}`}>
            {categories.map(category => (
                <div key={category.name}>
                    <button onClick={() => category.subCategories && toggleCategory(category.name)} onFocus={() => onSelectCategory(category)} className="w-full flex items-center justify-between px-3 py-2 text-left rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-card focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors duration-200">
                        <span onClick={(e) => { e.stopPropagation(); onSelectCategory(category); }} className={selectedCategoryName === category.name ? 'font-bold text-brand-primary' : ''}>
                            {category.name}
                        </span>
                        {category.subCategories && <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openCategories[category.name] ? 'rotate-180' : ''}`} />}
                    </button>
                    {category.subCategories && openCategories[category.name] && (
                        <div className="mt-1 animate-fadeIn">
                            <RecursiveNav categories={category.subCategories} onSelectCategory={onSelectCategory} selectedCategoryName={selectedCategoryName} level={level + 1} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

interface SidebarProps {
    pharmacologicalClasses: PharmacologicalClass[];
    onSelectCategory: (category: DrugCategory | null) => void;
    activeFilter: 'all' | DrugCategory;
}
const Sidebar: React.FC<SidebarProps> = ({ pharmacologicalClasses, onSelectCategory, activeFilter }) => {
    const selectedCategoryName = typeof activeFilter === 'object' ? activeFilter.name : null;
    return (
        <aside className="w-full lg:w-72 xl:w-80 lg:flex-shrink-0 p-4 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
            <nav className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 px-2">Exploration</h2>
                 <button onClick={() => onSelectCategory(null)} className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeFilter === 'all' ? 'bg-brand-primary/20 text-brand-primary' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-card'}`}>
                    Toutes les classes
                </button>
                <RecursiveNav categories={pharmacologicalClasses} onSelectCategory={onSelectCategory} selectedCategoryName={selectedCategoryName} level={0} />
            </nav>
        </aside>
    );
};

const DrugCard: React.FC<{ drug: Drug; onClick: () => void; isFavorite: boolean; onToggleFavorite: (dci: string) => void; }> = ({ drug, onClick, isFavorite, onToggleFavorite }) => (
    <div onClick={onClick} className="relative bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 overflow-hidden border border-transparent dark:hover:border-brand-primary group animate-fadeIn">
        <button onClick={(e) => { e.stopPropagation(); onToggleFavorite(drug.dci); }} className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm transition-colors" aria-label="Ajouter aux favoris">
            <StarIcon filled={isFavorite} className={`w-6 h-6 ${isFavorite ? 'text-yellow-500 dark:text-yellow-400' : ''}`} />
        </button>
        <div className="p-5">
            <h3 className="text-lg font-bold text-brand-secondary dark:text-gray-100 pr-8">{drug.dci}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">{drug.commercialNames.join(', ')}</p>
        </div>
        <div className="bg-brand-primary h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
);

const DrugDetail: React.FC<{ drug: Drug; onClose: () => void; isFavorite: boolean; onToggleFavorite: (dci: string) => void; }> = ({ drug, onClose, isFavorite, onToggleFavorite }) => {
    const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
        <div className="py-4 border-b border-gray-200 dark:border-gray-700">
            <h4 className="text-md font-semibold text-brand-primary mb-2">{title}</h4>
            <div className="text-gray-700 dark:text-gray-300 text-sm space-y-1">{children}</div>
        </div>
    );
    return (
        <div className="fixed inset-0 bg-black/50 z-40 animate-fadeIn" onClick={onClose}>
            <div className="fixed top-0 right-0 h-full w-full max-w-2xl bg-gray-50 dark:bg-dark-bg shadow-2xl overflow-y-auto animate-slideIn" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 sticky top-0 bg-gray-50/80 dark:bg-dark-bg/80 backdrop-blur-md z-10 flex justify-between items-center border-b dark:border-gray-700">
                    <div>
                        <h2 className="text-2xl font-bold font-display text-brand-secondary dark:text-white">{drug.dci}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{drug.commercialNames.join(', ')}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                         <button onClick={() => onToggleFavorite(drug.dci)} className="p-2 rounded-full text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors" aria-label="Ajouter aux favoris">
                            <StarIcon filled={isFavorite} className={`w-7 h-7 ${isFavorite ? 'text-yellow-500 dark:text-yellow-400' : ''}`} />
                        </button>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-card transition-colors duration-200">
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="p-6">
                    <DetailSection title="Définition">{drug.definition}</DetailSection>
                    <DetailSection title="Mode d’action">{drug.modeOfAction}</DetailSection>
                    <DetailSection title="Indications thérapeutiques"><ul className="list-disc list-inside">{drug.indications.map(ind => <li key={ind}>{ind}</li>)}</ul></DetailSection>
                    <DetailSection title="Contre-indications"><ul className="list-disc list-inside text-red-600 dark:text-red-400">{drug.contraindications.map(ci => <li key={ci}>{ci}</li>)}</ul></DetailSection>
                    <DetailSection title="Effets indésirables"><ul className="list-disc list-inside">{drug.adverseEffects.map(ae => <li key={ae}>{ae}</li>)}</ul></DetailSection>
                    <DetailSection title="Interactions médicamenteuses">{drug.drugInteractions}</DetailSection>
                    <DetailSection title="Antidotes / Conduite à tenir en cas de surdosage">{drug.antidotes}</DetailSection>
                    <DetailSection title="Posologie Adulte">{drug.posologyAdult}</DetailSection>
                    <DetailSection title="Posologie Pédiatrique">{drug.posologyPediatric}</DetailSection>
                    {drug.references && <DetailSection title="Références"><ul className="list-disc list-inside space-y-1">{drug.references.map((ref, i) => <li key={i}>{ref}</li>)}</ul></DetailSection>}
                </div>
            </div>
        </div>
    );
};

// --- About Screen ---
const AboutScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
        <AppHeader title="À propos et Politiques" onBack={onBack} showTitleLogo={false} />
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md max-w-3xl mx-auto space-y-8">
                <section>
                    <h2 className="text-2xl font-bold font-display text-brand-secondary dark:text-gray-100 mb-4">À propos de PharmaFusion</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        PharmaFusion est une Progressive Web App (PWA) conçue pour fournir une encyclopédie pharmacologique détaillée, rapide et accessible hors ligne. Elle est destinée aux professionnels de la santé, aux étudiants en médecine et en pharmacie, pour un accès rapide à l'information clinique.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold font-display text-brand-secondary dark:text-gray-100 mb-4">Nos Politiques</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-brand-primary">Politique de Confidentialité</h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                PharmaFusion respecte votre vie privée. Aucune donnée personnelle n'est collectée, envoyée ou partagée. Toutes vos données, y compris vos favoris et votre historique de consultation, sont stockées exclusivement sur votre propre appareil (via le `localStorage` de votre navigateur) et ne quittent jamais votre téléphone ou ordinateur.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-brand-primary">Clause de non-responsabilité</h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                Les informations contenues dans cette application sont fournies à titre indicatif et ne remplacent en aucun cas un avis médical professionnel, un diagnostic ou un traitement. L'utilisateur assume l'entière responsabilité de l'utilisation de ces informations. Les auteurs déclinent toute responsabilité pour les erreurs ou omissions, ou pour les résultats obtenus à partir de l'utilisation de ces informations.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-brand-primary">Conditions d'utilisation</h3>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                En utilisant PharmaFusion, vous acceptez d'utiliser les informations fournies de manière responsable et à vos propres risques. Cette application est un outil d'aide à la décision et ne doit pas être la seule source d'information pour la pratique clinique.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-display text-brand-secondary dark:text-gray-100 mb-4">Auteur</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Cette application a été conçue et développée par le <span className="font-bold">Dr. Mutanda DB</span>.
                    </p>
                </section>
            </div>
        </main>
    </div>
);

// --- Changelog Modal ---
const ChangelogModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="changelog-title">
        <div className="absolute inset-0" onClick={onClose} aria-hidden="true"></div>
        <div className="relative bg-white dark:bg-dark-card rounded-lg shadow-xl max-w-lg w-full p-6 text-left">
            <div className="flex items-start justify-between">
                <h3 id="changelog-title" className="text-lg font-semibold text-gray-900 dark:text-white">Quoi de neuf ?</h3>
                <button onClick={onClose} className="-mt-2 -mr-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                    <CloseIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-4 max-h-80 overflow-y-auto pr-2">
                <div>
                    <h4 className="font-bold text-base">Version 1.4.0 <span className="text-xs font-normal text-gray-500">(Actuelle)</span></h4>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Ajout d'un journal des modifications ("Quoi de neuf ?").</li>
                        <li>Ajout d'une option pour envoyer des commentaires.</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold text-base">Version 1.3.0</h4>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Ajout de la gestion des données : vider le cache et exporter les favoris.</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold text-base">Version 1.2.1</h4>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Ajout de l'ajustement de la taille du texte pour l'accessibilité.</li>
                        <li>Intégration d'un avis de non-responsabilité.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-base">Version 1.2.0</h4>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Ajout de l'historique de consultation des médicaments.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-base">Version 1.1.0</h4>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Intégration d'un vérificateur d'interactions médicamenteuses.</li>
                        <li>Ajout d'une section Urgences avec protocoles.</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold text-base">Version 1.0.0</h4>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Lancement initial avec base de données complète et mode hors ligne.</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 text-right">
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
                >
                    Fermer
                </button>
            </div>
        </div>
    </div>
);

// --- Disclaimer Modal ---
const DisclaimerModal: React.FC<{ onAccept: () => void }> = ({ onAccept }) => (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
        <div className="relative bg-white dark:bg-dark-card rounded-lg shadow-xl max-w-lg w-full p-6 text-left">
            <div className="text-center">
                <ShieldExclamationIcon className="w-16 h-16 mx-auto text-orange-400 mb-4" />
                <h3 id="disclaimer-title" className="text-xl font-bold font-display text-gray-900 dark:text-white">Clause de Non-responsabilité Médicale</h3>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-3">
                <p>
                    Les informations contenues dans cette application sont fournies à titre indicatif et éducatif uniquement.
                </p>
                <p>
                    Elles ne sont <strong>PAS</strong> destinées à remplacer un avis médical professionnel, un diagnostic ou un traitement. Consultez toujours un médecin ou un autre professionnel de la santé qualifié pour toute question concernant une condition médicale.
                </p>
                <p>
                    L'utilisateur assume l'entière responsabilité de l'utilisation des informations de cette application. Les auteurs déclinent toute responsabilité pour les erreurs ou omissions.
                </p>
            </div>
            <div className="mt-6 text-center">
                <button
                    onClick={onAccept}
                    className="w-full px-4 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
                >
                    J'ai compris et j'accepte
                </button>
            </div>
        </div>
    </div>
);


// --- Side Menu Component ---
const SideMenu: React.FC<{ 
    onClose: () => void; 
    onNavigate: (view: View) => void;
    onChangelogClick: () => void;
    textSize: TextSize;
    onTextSizeChange: (size: TextSize) => void;
    onClearCache: () => void;
    onExportFavorites: () => void;
    onShareApp: () => void;
}> = ({ onClose, onNavigate, onChangelogClick, textSize, onTextSizeChange, onClearCache, onExportFavorites, onShareApp }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black/60 z-50 animate-fadeIn" role="dialog" aria-modal="true">
            <div className="absolute inset-0" onClick={onClose} aria-hidden="true"></div>
            <div className="relative h-full w-full max-w-sm bg-white dark:bg-dark-card shadow-xl flex flex-col animate-slideInFromLeft">
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold font-display text-brand-secondary dark:text-white">Menu</h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                   

                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Gestion des Données</h3>
                        <div className="space-y-2">
                            <button onClick={onClearCache} className="w-full flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                <ArrowPathIcon className="w-6 h-6 text-blue-500" />
                                <span className="text-sm font-medium">Mettre à jour l'application</span>
                            </button>
                            <button onClick={onExportFavorites} className="w-full flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                <ArrowDownTrayIcon className="w-6 h-6 text-blue-500" />
                                <span className="text-sm font-medium">Exporter les favoris</span>
                            </button>
                        </div>
                    </div>
                    
                    <div>
                         <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Paramètres et Informations</h3>
                         <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                <span className="text-sm font-medium">Thème sombre</span>
                                <button onClick={toggleTheme} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${theme === 'dark' ? 'bg-brand-primary' : 'bg-gray-300'}`}>
                                    <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`}/>
                                </button>
                            </div>
                            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                <span className="text-sm font-medium block mb-2">Taille du Texte</span>
                                <div className="flex justify-between items-center space-x-2">
                                    <button onClick={() => onTextSizeChange('sm')} className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${textSize === 'sm' ? 'bg-brand-primary text-white' : 'bg-gray-200 dark:bg-gray-600'}`}>Petit</button>
                                    <button onClick={() => onTextSizeChange('base')} className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${textSize === 'base' ? 'bg-brand-primary text-white' : 'bg-gray-200 dark:bg-gray-600'}`}>Moyen</button>
                                    <button onClick={() => onTextSizeChange('lg')} className={`px-3 py-1 rounded-md text-base font-semibold transition-colors ${textSize === 'lg' ? 'bg-brand-primary text-white' : 'bg-gray-200 dark:bg-gray-600'}`}>Grand</button>
                                </div>
                            </div>
                            <button onClick={() => { onNavigate('about'); onClose(); }} className="w-full flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                <ShieldCheckIcon className="w-6 h-6 text-brand-secondary dark:text-gray-300" />
                                <span className="text-sm font-medium">À propos et Politiques</span>
                            </button>
                            <a href="mailto:contact@pharmafusion.app?subject=Commentaire sur PharmaFusion" className="w-full flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                <PaperAirplaneIcon className="w-6 h-6 text-green-500" />
                                <span className="text-sm font-medium">Envoyer un commentaire</span>
                            </a>
                            <button onClick={onChangelogClick} className="w-full flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                <SparklesIcon className="w-6 h-6 text-purple-500" />
                                <span className="text-sm font-medium">Quoi de neuf ?</span>
                            </button>
                            <button onClick={onShareApp} className="w-full flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                <ShareIcon className="w-6 h-6 text-teal-500" />
                                <span className="text-sm font-medium">Partager l'application</span>
                            </button>
                         </div>
                    </div>
                </div>
                <div className="p-4 text-xs text-center text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
                    Version 1.4.0
                </div>
            </div>
        </div>
    );
};

// --- Main App Component ---

const App: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [showDisclaimer, setShowDisclaimer] = useState(false);

    useEffect(() => {
        const disclaimerAccepted = localStorage.getItem('pharmafusion-disclaimer-accepted');
        if (disclaimerAccepted !== 'true') {
            setShowDisclaimer(true);
        }

        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('Service worker registered.', reg))
                    .catch(err => console.error('Service worker registration failed:', err));
            });
        }
    }, []);

    const [currentView, setCurrentView] = useState<View>('home');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
    const [activeFilter, setActiveFilter] = useState<'all' | DrugCategory>('all');
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isChangelogOpen, setIsChangelogOpen] = useState(false);

    const [favorites, setFavorites] = useState<string[]>(() => {
        try {
            const saved = localStorage.getItem('pharmafusion-favorites');
            return saved ? JSON.parse(saved) : [];
        } catch (error) { return []; }
    });

    const [history, setHistory] = useState<string[]>(() => {
        try {
            const saved = localStorage.getItem('pharmafusion-history');
            return saved ? JSON.parse(saved) : [];
        } catch (error) { return []; }
    });

    const [textSize, setTextSize] = useState<TextSize>(() => {
        try {
            const saved = localStorage.getItem('pharmafusion-textsize') as TextSize | null;
            return saved || 'base';
        } catch (error) { return 'base'; }
    });

    useEffect(() => {
        localStorage.setItem('pharmafusion-textsize', textSize);
        const root = document.documentElement;
        root.classList.remove('text-size-sm', 'text-size-base', 'text-size-lg');
        root.classList.add(`text-size-${textSize}`);
    }, [textSize]);

    useEffect(() => {
        localStorage.setItem('pharmafusion-favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('pharmafusion-history', JSON.stringify(history));
    }, [history]);

    const toggleFavorite = (dci: string) => {
        setFavorites(prev => prev.includes(dci) ? prev.filter(favDci => favDci !== dci) : [...prev, dci]);
    };
    
    const handleAcceptDisclaimer = () => {
        localStorage.setItem('pharmafusion-disclaimer-accepted', 'true');
        setShowDisclaimer(false);
    };

    const handleSelectDrug = (drug: Drug) => {
        setHistory(prevHistory => {
            const newHistory = [drug.dci, ...prevHistory.filter(dci => dci !== drug.dci)];
            return newHistory.slice(0, 15); // Keep only the last 15 items
        });
        setSelectedDrug(drug);
    };
    
    const getDrugsFromCategory = (category: DrugCategory): Drug[] => {
        let drugs: Drug[] = category.drugs ? [...category.drugs] : [];
        if (category.subCategories) {
            drugs = drugs.concat(...category.subCategories.map(getDrugsFromCategory));
        }
        return drugs;
    };
    
    const allDrugs = useMemo(() => drugData.flatMap(getDrugsFromCategory), []);

    const filteredDrugs = useMemo(() => {
        // If there's no search term and no category is selected, return an empty array.
        // This is the state where we want to show the initial welcome/instruction message.
        if (searchTerm.trim() === '' && activeFilter === 'all') {
            return [];
        }

        // Determine the pool of drugs to search from. If a category is active, use its drugs.
        // Otherwise, (if searching in 'all'), use all drugs.
        const sourceDrugs = activeFilter === 'all'
            ? allDrugs
            : getDrugsFromCategory(activeFilter);
        
        // If there is a search term, filter the source drugs.
        if (searchTerm.trim() !== '') {
            const lowercasedTerm = searchTerm.trim().toLowerCase();
            return sourceDrugs.filter(drug =>
                drug.dci.toLowerCase().includes(lowercasedTerm) ||
                drug.commercialNames.some(name => name.toLowerCase().includes(lowercasedTerm)) ||
                drug.indications.some(ind => ind.toLowerCase().includes(lowercasedTerm))
            );
        }
        
        // If there is no search term, but a category IS selected, return all drugs from that category.
        return sourceDrugs;
    }, [searchTerm, allDrugs, activeFilter]);
    
    const handleNavigate = (view: View, search: string = '') => {
        setCurrentView(view);
        setSearchTerm(search);
        if (view === 'drugList') {
            setActiveFilter('all');
        }
    };
    
    const handleClearCache = async () => {
        if (!confirm("Voulez-vous vraiment mettre à jour l'application ? Cela rechargera toutes les données et peut entraîner la perte des favoris/historique non sauvegardés.")) return;

        console.log("Clearing cache and data for update...");
        try {
            if ('serviceWorker' in navigator) {
                const registrations = await navigator.serviceWorker.getRegistrations();
                for (const registration of registrations) {
                    await registration.unregister();
                }
            }
            if (window.caches) {
                const keys = await window.caches.keys();
                await Promise.all(keys.map(key => window.caches.delete(key)));
            }
            localStorage.clear();
            console.log("Cache and data cleared. Reloading...");
            window.location.reload();
        } catch (error) {
            console.error("Error clearing cache and data:", error);
            alert("Erreur lors de la mise à jour.");
        }
    };

    const handleExportFavorites = () => {
        if (favorites.length === 0) {
            alert("Vous n'avez aucun favori à exporter.");
            return;
        }
        const dataStr = JSON.stringify({ favorites }, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `pharmafusion_favorites_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleShareApp = async () => {
        const shareData = {
            title: 'PharmaFusion',
            text: 'Découvrez PharmaFusion, l\'encyclopédie pharmacologique pour les professionnels de la santé.',
            url: window.location.href
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.url);
                alert('Lien de l\'application copié dans le presse-papiers !');
            }
        } catch (error) {
            console.error('Erreur lors du partage:', error);
            try {
                await navigator.clipboard.writeText(shareData.url);
                alert('Le partage a échoué. Le lien a été copié dans le presse-papiers.');
            } catch (copyError) {
                console.error('Erreur lors de la copie du lien:', copyError);
                alert('Impossible de partager ou de copier le lien.');
            }
        }
    };

    const isReferenceCategory = typeof activeFilter === 'object' && activeFilter.reference;
    const showInitialMessage = activeFilter === 'all' && searchTerm === '' && !isReferenceCategory;

    const renderContent = () => {
        switch(currentView) {
            case 'home':
                return <HomeScreen onNavigate={handleNavigate} onMenuClick={() => setIsSideMenuOpen(true)} />;
            case 'calculatorMenu':
                return <CalculatorMenuScreen onBack={() => setCurrentView('home')} onNavigate={setCurrentView} />;
            case 'doseCalculator':
                return <DoseCalculatorScreen onBack={() => setCurrentView('calculatorMenu')} />;
            case 'dripRateCalculator':
                return <DripRateCalculatorScreen onBack={() => setCurrentView('calculatorMenu')} />;
            case 'bsaCalculator':
                return <BsaCalculatorScreen onBack={() => setCurrentView('calculatorMenu')} />;
            case 'crclCalculator':
                return <CrClCalculatorScreen onBack={() => setCurrentView('calculatorMenu')} />;
            case 'bmiCalculator':
                return <BmiCalculatorScreen onBack={() => setCurrentView('calculatorMenu')} />;
            case 'prescription':
                return <PrescriptionScreen onBack={() => setCurrentView('home')} allDrugs={allDrugs} />;
            case 'abbreviations':
                return <AbbreviationsScreen onBack={() => setCurrentView('home')} />;
            case 'favorites':
                return <FavoritesScreen onBack={() => setCurrentView('home')} favorites={favorites} allDrugs={allDrugs} onSelectDrug={handleSelectDrug} onToggleFavorite={toggleFavorite} />;
            case 'history':
                return <HistoryScreen onBack={() => setCurrentView('home')} history={history} allDrugs={allDrugs} onSelectDrug={handleSelectDrug} onClearHistory={() => setHistory([])} />;
            case 'interactionChecker':
                return <InteractionCheckerScreen onBack={() => setCurrentView('home')} allDrugs={allDrugs} />;
            case 'urgencies':
                return <UrgenciesScreen onBack={() => setCurrentView('home')} />;
            case 'about':
                return <AboutScreen onBack={() => setCurrentView('home')} />;
            case 'drugList':
                 return (
                    <div className="min-h-screen text-gray-900 dark:text-gray-100">
                        <DrugListHeader onBack={() => setCurrentView('home')} />
                        <div className="flex flex-col lg:flex-row">
                             <Sidebar 
                                pharmacologicalClasses={drugData} 
                                onSelectCategory={(category) => { setActiveFilter(category || 'all'); setSearchTerm(''); }}
                                activeFilter={activeFilter}
                            />
                            <main className="flex-1 p-4 sm:p-6 lg:p-8">
                                <div className="relative mb-6">
                                    <input type="text" placeholder="Rechercher (DCI, nom commercial, indication...)" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300"/>
                                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                                
                                {showInitialMessage ? (
                                    <div className="text-center py-16 px-4 flex flex-col items-center justify-center h-full">
                                        <BookOpenIcon className="mx-auto w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Explorer les classes de médicaments</h2>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md">
                                            Sélectionnez une catégorie dans le menu de gauche ou utilisez la barre de recherche pour commencer.
                                        </p>
                                    </div>
                                ) : isReferenceCategory ? (
                                    <div className="text-center py-16 px-4">
                                        <div className="bg-blue-100 dark:bg-brand-secondary/30 border-l-4 border-brand-primary text-brand-secondary dark:text-blue-200 p-4 rounded-md" role="alert">
                                            <p className="font-bold">{typeof activeFilter === 'object' && activeFilter.name}</p>
                                            <p className="text-sm mt-1">{typeof activeFilter === 'object' && activeFilter.reference}</p>
                                        </div>
                                    </div>
                                ) : filteredDrugs.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {filteredDrugs.map(drug => (
                                            <DrugCard key={drug.dci} drug={drug} onClick={() => handleSelectDrug(drug)} isFavorite={favorites.includes(drug.dci)} onToggleFavorite={toggleFavorite} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-16">
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Aucun médicament trouvé pour "{searchTerm}".
                                        </p>
                                    </div>
                                )}
                            </main>
                        </div>
                    </div>
                );
            default:
                return <HomeScreen onNavigate={handleNavigate} onMenuClick={() => setIsSideMenuOpen(true)} />;
        }
    }

    if (showSplash && !showDisclaimer) {
        return (
            <div className="fixed inset-0 bg-dark-bg flex flex-col items-center justify-center animate-fadeIn z-50">
                <div className="animate-pulse-slow">
                    <PharmaFusionLogo className="w-24 h-24 text-brand-primary" />
                </div>
                <div className="mt-6 text-center animate-fadeIn" style={{ animationDelay: '500ms' }}>
                    <h1 className="text-4xl font-display font-bold text-white tracking-wider">
                        Pharma<span className="text-brand-primary">Fusion</span>
                    </h1>

                    <p className="mt-2 text-lg text-brand-primary">
                        Référence médicale simplifiée
                    </p>
                </div>
            </div>
        );
    }

    return (
        <ThemeProvider>
           {isSideMenuOpen && <SideMenu 
                onClose={() => setIsSideMenuOpen(false)} 
                onNavigate={handleNavigate}
                onChangelogClick={() => { setIsSideMenuOpen(false); setIsChangelogOpen(true); }}
                textSize={textSize}
                onTextSizeChange={setTextSize}
                onClearCache={handleClearCache}
                onExportFavorites={handleExportFavorites}
                onShareApp={handleShareApp}
            />}
           {renderContent()}
           {selectedDrug && <DrugDetail drug={selectedDrug} onClose={() => setSelectedDrug(null)} isFavorite={favorites.includes(selectedDrug.dci)} onToggleFavorite={toggleFavorite} />}
           {isChangelogOpen && <ChangelogModal onClose={() => setIsChangelogOpen(false)} />}
           {showDisclaimer && <DisclaimerModal onAccept={handleAcceptDisclaimer} />}
        </ThemeProvider>
    );
};

export default App;
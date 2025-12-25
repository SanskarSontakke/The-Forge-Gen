import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowLeft, BookOpen, Key, Zap, Clapperboard, UtensilsCrossed, Layers, Image as ImageIcon, Terminal, AlertTriangle, CheckCircle, ChevronRight, ExternalLink, Code, Settings, Rocket, Shield, HelpCircle, Wrench, FileCode, Cpu } from 'lucide-react';

interface NavItem {
    id: string;
    label: string;
    icon: React.ElementType;
}

const navItems: NavItem[] = [
    { id: 'getting-started', label: 'Getting Started', icon: Rocket },
    { id: 'gemini-api', label: 'Gemini API Setup', icon: Key },
    { id: 'configuration', label: 'Configuration', icon: Settings },
    { id: 'obsidian-forge', label: 'Obsidian Forge', icon: Clapperboard },
    { id: 'culinary-forge', label: 'Culinary Forge', icon: UtensilsCrossed },
    { id: 'vectra-forge', label: 'Vectra Forge', icon: Layers },
    { id: 'onyx-forge', label: 'Onyx Forge', icon: Zap },
    { id: 'lumina-forge', label: 'Lumina Forge', icon: ImageIcon },
    { id: 'api-reference', label: 'API Reference', icon: FileCode },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: Wrench },
    { id: 'best-practices', label: 'Best Practices', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
];

const DocsPage: React.FC = () => {
    const [isDark, setIsDark] = useState(true);
    const [activeSection, setActiveSection] = useState('getting-started');

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    const toggleTheme = () => setIsDark(!isDark);

    const bgClass = isDark ? 'bg-slate-950' : 'bg-gray-50';
    const textClass = isDark ? 'text-slate-100' : 'text-slate-900';
    const mutedClass = isDark ? 'text-slate-400' : 'text-slate-600';
    const cardClass = isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-gray-200 shadow-sm';
    const sidebarClass = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-gray-100 border-gray-200';
    const codeBlockClass = isDark ? 'bg-slate-800 text-green-400' : 'bg-gray-800 text-green-400';
    const activeNavClass = isDark ? 'bg-purple-900/40 text-purple-300 border-purple-500' : 'bg-purple-100 text-purple-700 border-purple-500';
    const hoverNavClass = isDark ? 'hover:bg-slate-800/50' : 'hover:bg-gray-200';

    const CodeBlock: React.FC<{ children: string; language?: string }> = ({ children, language = 'bash' }) => (
        <div className={`${codeBlockClass} rounded-lg p-4 font-mono text-sm overflow-x-auto my-4`}>
            <pre><code>{children}</code></pre>
        </div>
    );

    const AlertBox: React.FC<{ type: 'warning' | 'info' | 'success'; children: React.ReactNode }> = ({ type, children }) => {
        const styles = {
            warning: isDark ? 'bg-amber-900/30 border-amber-500/50 text-amber-200' : 'bg-amber-50 border-amber-400 text-amber-800',
            info: isDark ? 'bg-blue-900/30 border-blue-500/50 text-blue-200' : 'bg-blue-50 border-blue-400 text-blue-800',
            success: isDark ? 'bg-emerald-900/30 border-emerald-500/50 text-emerald-200' : 'bg-emerald-50 border-emerald-400 text-emerald-800',
        };
        const icons = {
            warning: AlertTriangle,
            info: BookOpen,
            success: CheckCircle,
        };
        const Icon = icons[type];
        return (
            <div className={`${styles[type]} border rounded-lg p-4 my-4 flex items-start gap-3`}>
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>{children}</div>
            </div>
        );
    };

    return (
        <div className={`min-h-screen ${bgClass} ${textClass} font-sans transition-colors duration-300`}>
            {/* Header */}
            <header className={`sticky top-0 z-50 ${isDark ? 'bg-slate-950/90' : 'bg-white/90'} backdrop-blur-md border-b ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <a href="#" className={`flex items-center gap-2 ${mutedClass} hover:${textClass} transition-colors`}>
                                <ArrowLeft className="w-5 h-5" />
                                <span className="font-medium">Back to Home</span>
                            </a>
                            <span className={`hidden sm:block ${isDark ? 'text-slate-700' : 'text-gray-300'}`}>|</span>
                            <h1 className="hidden sm:flex items-center gap-2 text-lg font-bold">
                                <BookOpen className="w-5 h-5 text-purple-500" />
                                The Forge Gen Docs
                            </h1>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-slate-700'} transition-colors`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className={`lg:w-64 flex-shrink-0`}>
                        <nav className={`sticky top-24 ${sidebarClass} rounded-xl border p-4`}>
                            <h2 className={`text-xs font-bold uppercase tracking-wider ${mutedClass} mb-4`}>Documentation</h2>
                            <ul className="space-y-1">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => setActiveSection(item.id)}
                                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all border-l-2 ${activeSection === item.id
                                                ? activeNavClass
                                                : `border-transparent ${mutedClass} ${hoverNavClass}`
                                                }`}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <article className={`${cardClass} rounded-xl border p-6 sm:p-8`}>

                            {/* Getting Started */}
                            {activeSection === 'getting-started' && (
                                <section>
                                    <h1 className="text-3xl font-bold mb-2">Getting Started with The Forge Gen</h1>
                                    <p className={`${mutedClass} text-lg mb-8`}>Everything you need to know to start building with our generative AI tools.</p>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
                                        <Settings className="w-6 h-6 text-purple-500" />
                                        Prerequisites
                                    </h2>
                                    <p className="mb-4">Before you begin, ensure you have the following installed:</p>
                                    <ul className={`list-disc list-inside space-y-2 ${mutedClass} mb-6`}>
                                        <li><strong className={textClass}>Node.js</strong> (v18 or higher) - <a href="https://nodejs.org" target="_blank" className="text-purple-500 hover:underline">nodejs.org</a></li>
                                        <li><strong className={textClass}>npm</strong> or <strong className={textClass}>pnpm</strong> - Package manager</li>
                                        <li><strong className={textClass}>Git</strong> - Version control</li>
                                        <li><strong className={textClass}>Google AI Studio Account</strong> - For Gemini API access</li>
                                    </ul>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
                                        <Terminal className="w-6 h-6 text-purple-500" />
                                        Quick Start
                                    </h2>
                                    <p className="mb-4">Clone any Forge project and get it running in minutes:</p>
                                    <CodeBlock>{`# Clone the repository
git clone https://github.com/SanskarSontakke/Obsidian-Forge.git

# Navigate to the project
cd Obsidian-Forge

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your Gemini API key to .env
# GEMINI_API_KEY=your_api_key_here

# Start the development server
npm run dev`}</CodeBlock>

                                    <AlertBox type="info">
                                        All Forge projects follow the same structure. Replace <code className="bg-slate-700 px-1 rounded">Obsidian-Forge</code> with any project name.
                                    </AlertBox>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Project Structure</h2>
                                    <CodeBlock>{`forge-project/
├── components/       # React components
├── lib/              # Utility functions & API clients
├── public/           # Static assets
├── index.html        # Entry point
├── App.tsx           # Main application
├── vite.config.ts    # Vite configuration
└── .env              # Environment variables`}</CodeBlock>
                                </section>
                            )}

                            {/* Gemini API Setup */}
                            {activeSection === 'gemini-api' && (
                                <section>
                                    <h1 className="text-3xl font-bold mb-2">Gemini API Setup</h1>
                                    <p className={`${mutedClass} text-lg mb-8`}>Configure Google's Gemini API for your Forge projects.</p>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
                                        <Key className="w-6 h-6 text-purple-500" />
                                        Getting Your API Key
                                    </h2>
                                    <ol className={`list-decimal list-inside space-y-3 ${mutedClass} mb-6`}>
                                        <li>Visit <a href="https://aistudio.google.com/apikey" target="_blank" className="text-purple-500 hover:underline">Google AI Studio</a></li>
                                        <li>Sign in with your Google account</li>
                                        <li>Click <strong className={textClass}>"Create API Key"</strong></li>
                                        <li>Copy the generated key (starts with <code className="bg-slate-700 px-1 rounded">AIza...</code>)</li>
                                        <li>Store it securely - never commit to version control!</li>
                                    </ol>

                                    <AlertBox type="warning">
                                        <strong>Security Warning:</strong> Never expose your API key in client-side code or public repositories. Always use environment variables.
                                    </AlertBox>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Environment Configuration</h2>
                                    <p className="mb-4">Create a <code className="bg-slate-700 px-1 rounded">.env</code> file in your project root:</p>
                                    <CodeBlock>{`# .env
GEMINI_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Specify model version
GEMINI_MODEL=gemini-2.5-flash-preview-05-20`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
                                        <Code className="w-6 h-6 text-purple-500" />
                                        Using the SDK
                                    </h2>
                                    <p className="mb-4">All Forge projects use the <code className="bg-slate-700 px-1 rounded">@google/generative-ai</code> package:</p>
                                    <CodeBlock language="typescript">{`import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Get the model
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.5-flash-preview-05-20" 
});

// Generate content
const result = await model.generateContent("Your prompt here");
const response = await result.response;
const text = response.text();`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Available Models</h2>
                                    <div className={`overflow-x-auto ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} rounded-lg`}>
                                        <table className="w-full text-sm">
                                            <thead className={isDark ? 'bg-slate-800' : 'bg-gray-200'}>
                                                <tr>
                                                    <th className="px-4 py-3 text-left font-semibold">Model</th>
                                                    <th className="px-4 py-3 text-left font-semibold">Best For</th>
                                                    <th className="px-4 py-3 text-left font-semibold">Features</th>
                                                </tr>
                                            </thead>
                                            <tbody className={`divide-y ${isDark ? 'divide-slate-700' : 'divide-gray-200'}`}>
                                                <tr>
                                                    <td className="px-4 py-3 font-mono text-purple-400">gemini-2.5-flash</td>
                                                    <td className="px-4 py-3">Fast responses, image gen</td>
                                                    <td className="px-4 py-3">Speed, multimodal</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-mono text-purple-400">gemini-2.5-pro</td>
                                                    <td className="px-4 py-3">Complex reasoning</td>
                                                    <td className="px-4 py-3">Accuracy, large context</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-mono text-purple-400">gemini-2.0-flash-exp</td>
                                                    <td className="px-4 py-3">Experimental features</td>
                                                    <td className="px-4 py-3">Latest capabilities</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Rate Limits & Quotas</h2>
                                    <AlertBox type="info">
                                        Free tier limits: <strong>60 requests/minute</strong>, <strong>1,500 requests/day</strong>. For production, consider upgrading to a paid plan.
                                    </AlertBox>
                                </section>
                            )}

                            {/* Obsidian Forge */}
                            {activeSection === 'obsidian-forge' && (
                                <section>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-purple-900/30 rounded-lg">
                                            <Clapperboard className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <h1 className="text-3xl font-bold">Obsidian Forge</h1>
                                    </div>
                                    <p className={`${mutedClass} text-lg mb-8`}>Script-to-screen AI video storyboard generator.</p>

                                    <div className="flex gap-2 mb-8">
                                        <a href="https://github.com/SanskarSontakke/Obsidian-Forge" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-colors">
                                            <ExternalLink className="w-4 h-4" /> View on GitHub
                                        </a>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
                                    <p className="mb-4">Obsidian Forge transforms your narrative scripts into visual storyboards automatically. It uses Gemini's multimodal capabilities to:</p>
                                    <ul className={`list-disc list-inside space-y-2 ${mutedClass} mb-6`}>
                                        <li>Parse screenplay/script format text</li>
                                        <li>Generate scene descriptions and shot compositions</li>
                                        <li>Create visual representations of each scene</li>
                                        <li>Export storyboard sequences</li>
                                    </ul>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
                                    <CodeBlock>{`# Clone and setup
git clone https://github.com/SanskarSontakke/Obsidian-Forge.git
cd Obsidian-Forge
npm install

# Add your API key to .env
echo "GEMINI_API_KEY=your_key_here" > .env

# Start the app
npm run dev`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {[
                                            { title: 'Script Parsing', desc: 'Automatic scene detection from text' },
                                            { title: 'Visual Generation', desc: 'AI-powered storyboard frames' },
                                            { title: 'Timeline View', desc: 'Sequential scene visualization' },
                                            { title: 'Export Options', desc: 'Download as PDF or images' },
                                        ].map((feature) => (
                                            <div key={feature.title} className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'}`}>
                                                <h3 className="font-semibold mb-1">{feature.title}</h3>
                                                <p className={`text-sm ${mutedClass}`}>{feature.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Culinary Forge */}
                            {activeSection === 'culinary-forge' && (
                                <section>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-orange-900/30 rounded-lg">
                                            <UtensilsCrossed className="w-6 h-6 text-orange-400" />
                                        </div>
                                        <h1 className="text-3xl font-bold">Culinary Forge</h1>
                                    </div>
                                    <p className={`${mutedClass} text-lg mb-8`}>AI-powered virtual food photography studio.</p>

                                    <div className="flex gap-2 mb-8">
                                        <a href="https://github.com/SanskarSontakke/Culinary-Forge" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-medium transition-colors">
                                            <ExternalLink className="w-4 h-4" /> View on GitHub
                                        </a>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
                                    <p className="mb-4">Culinary Forge generates professional-quality food photography from text descriptions. Perfect for:</p>
                                    <ul className={`list-disc list-inside space-y-2 ${mutedClass} mb-6`}>
                                        <li>Restaurant menu visualization</li>
                                        <li>Food blog content creation</li>
                                        <li>Recipe app imagery</li>
                                        <li>Social media marketing</li>
                                    </ul>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
                                    <CodeBlock>{`# Clone and setup
git clone https://github.com/SanskarSontakke/Culinary-Forge.git
cd Culinary-Forge
npm install

# Configure environment
echo "GEMINI_API_KEY=your_key_here" > .env

# Run the application
npm run dev`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Generating Food Images</h2>
                                    <p className="mb-4">Use the prompt builder to describe your dish:</p>
                                    <CodeBlock language="text">{`Example prompt:
"A gourmet burger with melted cheddar, caramelized onions, 
crispy bacon, on a brioche bun, served on a wooden board 
with sweet potato fries, dramatic lighting, shallow depth 
of field, food magazine style"`}</CodeBlock>

                                    <AlertBox type="success">
                                        <strong>Pro Tip:</strong> Include lighting, angle, and styling details for more professional results.
                                    </AlertBox>
                                </section>
                            )}

                            {/* Vectra Forge */}
                            {activeSection === 'vectra-forge' && (
                                <section>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-blue-900/30 rounded-lg">
                                            <Layers className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <h1 className="text-3xl font-bold">Vectra Forge</h1>
                                    </div>
                                    <p className={`${mutedClass} text-lg mb-8`}>Instant AI-powered product mockup generator.</p>

                                    <div className="flex gap-2 mb-8">
                                        <a href="https://github.com/SanskarSontakke/Vectra-Forge" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
                                            <ExternalLink className="w-4 h-4" /> View on GitHub
                                        </a>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
                                    <p className="mb-4">Vectra Forge transforms your logos and designs into realistic product mockups:</p>
                                    <ul className={`list-disc list-inside space-y-2 ${mutedClass} mb-6`}>
                                        <li>Upload vector logos or brand assets</li>
                                        <li>Select from various product templates</li>
                                        <li>AI applies realistic lighting and textures</li>
                                        <li>Edit results with natural language prompts</li>
                                    </ul>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Supported Products</h2>
                                    <div className="grid gap-2 sm:grid-cols-3 mb-6">
                                        {['T-Shirts', 'Mugs', 'Business Cards', 'Packaging', 'Phone Cases', 'Tote Bags', 'Bottles', 'Signage', 'Stickers'].map((item) => (
                                            <div key={item} className={`px-3 py-2 rounded-lg text-center text-sm ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'}`}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Start</h2>
                                    <CodeBlock>{`git clone https://github.com/SanskarSontakke/Vectra-Forge.git
cd Vectra-Forge && npm install
echo "GEMINI_API_KEY=your_key" > .env
npm run dev`}</CodeBlock>
                                </section>
                            )}

                            {/* Onyx Forge */}
                            {activeSection === 'onyx-forge' && (
                                <section>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-amber-900/30 rounded-lg">
                                            <Zap className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <h1 className="text-3xl font-bold">Onyx Forge</h1>
                                    </div>
                                    <p className={`${mutedClass} text-lg mb-8`}>Professional banner ad generator powered by AI.</p>

                                    <div className="flex gap-2 mb-8">
                                        <a href="https://github.com/SanskarSontakke/Onyx-Forge" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors">
                                            <ExternalLink className="w-4 h-4" /> View on GitHub
                                        </a>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
                                    <p className="mb-4">Onyx Forge creates professional banner advertisements from product descriptions:</p>
                                    <ul className={`list-disc list-inside space-y-2 ${mutedClass} mb-6`}>
                                        <li>Input product URL or description</li>
                                        <li>AI analyzes and generates ad copy</li>
                                        <li>Creates designs in standard ad sizes</li>
                                        <li>Outputs ready-to-use marketing banners</li>
                                    </ul>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Supported Ad Sizes</h2>
                                    <div className={`overflow-x-auto ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} rounded-lg`}>
                                        <table className="w-full text-sm">
                                            <thead className={isDark ? 'bg-slate-800' : 'bg-gray-200'}>
                                                <tr>
                                                    <th className="px-4 py-3 text-left font-semibold">Size</th>
                                                    <th className="px-4 py-3 text-left font-semibold">Name</th>
                                                    <th className="px-4 py-3 text-left font-semibold">Use Case</th>
                                                </tr>
                                            </thead>
                                            <tbody className={`divide-y ${isDark ? 'divide-slate-700' : 'divide-gray-200'}`}>
                                                <tr><td className="px-4 py-3 font-mono">300x250</td><td className="px-4 py-3">Medium Rectangle</td><td className="px-4 py-3">Display ads</td></tr>
                                                <tr><td className="px-4 py-3 font-mono">728x90</td><td className="px-4 py-3">Leaderboard</td><td className="px-4 py-3">Header banners</td></tr>
                                                <tr><td className="px-4 py-3 font-mono">160x600</td><td className="px-4 py-3">Wide Skyscraper</td><td className="px-4 py-3">Sidebar ads</td></tr>
                                                <tr><td className="px-4 py-3 font-mono">1200x628</td><td className="px-4 py-3">Social Banner</td><td className="px-4 py-3">Facebook/LinkedIn</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Start</h2>
                                    <CodeBlock>{`git clone https://github.com/SanskarSontakke/Onyx-Forge.git
cd Onyx-Forge && npm install
echo "GEMINI_API_KEY=your_key" > .env
npm run dev`}</CodeBlock>
                                </section>
                            )}

                            {/* Lumina Forge */}
                            {activeSection === 'lumina-forge' && (
                                <section>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-emerald-900/30 rounded-lg">
                                            <ImageIcon className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <h1 className="text-3xl font-bold">Lumina Forge</h1>
                                    </div>
                                    <p className={`${mutedClass} text-lg mb-8`}>AI-powered product photo editing and enhancement.</p>

                                    <div className="flex gap-2 mb-8">
                                        <a href="https://github.com/SanskarSontakke/Lumina-Forge" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors">
                                            <ExternalLink className="w-4 h-4" /> View on GitHub
                                        </a>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
                                    <p className="mb-4">Lumina Forge specializes in product photo enhancement for e-commerce:</p>
                                    <ul className={`list-disc list-inside space-y-2 ${mutedClass} mb-6`}>
                                        <li><strong className={textClass}>Background Removal</strong> - Clean, transparent backgrounds</li>
                                        <li><strong className={textClass}>Background Replacement</strong> - Studio or lifestyle settings</li>
                                        <li><strong className={textClass}>Enhancement</strong> - Color correction, lighting fixes</li>
                                        <li><strong className={textClass}>Batch Processing</strong> - Handle multiple images</li>
                                    </ul>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Start</h2>
                                    <CodeBlock>{`git clone https://github.com/SanskarSontakke/Lumina-Forge.git
cd Lumina-Forge && npm install
echo "GEMINI_API_KEY=your_key" > .env
npm run dev`}</CodeBlock>

                                    <AlertBox type="info">
                                        Lumina Forge uses Gemini 2.5 Flash's image editing capabilities for high-quality results.
                                    </AlertBox>
                                </section>
                            )}

                            {/* Best Practices */}
                            {activeSection === 'best-practices' && (
                                <section>
                                    <h1 className="text-3xl font-bold mb-2">Best Practices</h1>
                                    <p className={`${mutedClass} text-lg mb-8`}>Guidelines for building production-ready Forge applications.</p>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
                                        <Shield className="w-6 h-6 text-purple-500" />
                                        Security
                                    </h2>
                                    <ul className={`list-disc list-inside space-y-2 ${mutedClass} mb-6`}>
                                        <li><strong className={textClass}>Never expose API keys</strong> - Use environment variables and server-side proxies</li>
                                        <li><strong className={textClass}>Validate inputs</strong> - Sanitize user prompts before sending to API</li>
                                        <li><strong className={textClass}>Rate limiting</strong> - Implement request throttling to prevent abuse</li>
                                        <li><strong className={textClass}>Content filtering</strong> - Use Gemini's built-in safety settings</li>
                                    </ul>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Error Handling</h2>
                                    <CodeBlock language="typescript">{`try {
  const result = await model.generateContent(prompt);
  // Process result
} catch (error) {
  if (error.message.includes('SAFETY')) {
    // Handle content safety block
  } else if (error.message.includes('QUOTA')) {
    // Handle rate limit
  } else {
    // Generic error handling
    console.error('Generation failed:', error);
  }
}`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Performance Optimization</h2>
                                    <div className="space-y-4">
                                        {[
                                            { title: 'Use Streaming', desc: 'For long responses, use streaming to show results progressively' },
                                            { title: 'Cache Results', desc: 'Cache generated content to avoid redundant API calls' },
                                            { title: 'Optimize Prompts', desc: 'Keep prompts concise - shorter prompts are faster and cheaper' },
                                            { title: 'Choose the Right Model', desc: 'Use Flash for speed, Pro for complex reasoning tasks' },
                                        ].map((tip) => (
                                            <div key={tip.title} className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} flex items-start gap-3`}>
                                                <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold">{tip.title}</h3>
                                                    <p className={`text-sm ${mutedClass}`}>{tip.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Prompt Engineering Tips</h2>
                                    <AlertBox type="success">
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Be specific and descriptive</li>
                                            <li>Provide context and examples</li>
                                            <li>Specify output format (JSON, markdown, etc.)</li>
                                            <li>Use system prompts for consistent behavior</li>
                                        </ul>
                                    </AlertBox>
                                </section>
                            )}

                            {/* Configuration */}
                            {activeSection === 'configuration' && (
                                <section>
                                    <h1 className="text-3xl font-bold mb-2">Configuration</h1>
                                    <p className={`${mutedClass} text-lg mb-8`}>Detailed configuration options for Forge projects.</p>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Environment Variables</h2>
                                    <p className="mb-4">All Forge projects support the following environment variables:</p>
                                    <div className={`overflow-x-auto ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} rounded-lg mb-6`}>
                                        <table className="w-full text-sm">
                                            <thead className={isDark ? 'bg-slate-800' : 'bg-gray-200'}>
                                                <tr>
                                                    <th className="px-4 py-3 text-left font-semibold">Variable</th>
                                                    <th className="px-4 py-3 text-left font-semibold">Required</th>
                                                    <th className="px-4 py-3 text-left font-semibold">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className={`divide-y ${isDark ? 'divide-slate-700' : 'divide-gray-200'}`}>
                                                <tr><td className="px-4 py-3 font-mono text-purple-400">GEMINI_API_KEY</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Your Google AI Studio API key</td></tr>
                                                <tr><td className="px-4 py-3 font-mono text-purple-400">VITE_GEMINI_MODEL</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Model version (default: gemini-2.5-flash)</td></tr>
                                                <tr><td className="px-4 py-3 font-mono text-purple-400">VITE_MAX_TOKENS</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Max output tokens (default: 8192)</td></tr>
                                                <tr><td className="px-4 py-3 font-mono text-purple-400">VITE_DEBUG</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Enable debug mode (true/false)</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Vite Configuration</h2>
                                    <p className="mb-4">Customize the build with <code className="bg-slate-700 px-1 rounded">vite.config.ts</code>:</p>
                                    <CodeBlock language="typescript">{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Expose to network
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    // Make env vars available
    'process.env': process.env,
  },
})`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">TypeScript Configuration</h2>
                                    <p className="mb-4">All projects use strict TypeScript settings:</p>
                                    <CodeBlock language="json">{`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true
  },
  "include": ["src", "components"]
}`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Safety Settings</h2>
                                    <p className="mb-4">Configure Gemini content safety levels:</p>
                                    <CodeBlock language="typescript">{`const safetySettings = [
  {
    category: "HARM_CATEGORY_HARASSMENT",
    threshold: "BLOCK_MEDIUM_AND_ABOVE",
  },
  {
    category: "HARM_CATEGORY_HATE_SPEECH",
    threshold: "BLOCK_MEDIUM_AND_ABOVE",
  },
  {
    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    threshold: "BLOCK_MEDIUM_AND_ABOVE",
  },
  {
    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
    threshold: "BLOCK_MEDIUM_AND_ABOVE",
  },
];

const model = genAI.getGenerativeModel({ 
  model: "gemini-2.5-flash",
  safetySettings,
});`}</CodeBlock>
                                </section>
                            )}

                            {/* API Reference */}
                            {activeSection === 'api-reference' && (
                                <section>
                                    <h1 className="text-3xl font-bold mb-2">API Reference</h1>
                                    <p className={`${mutedClass} text-lg mb-8`}>Complete guide to the Gemini API methods used in Forge projects.</p>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Text Generation</h2>
                                    <CodeBlock language="typescript">{`import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Simple text generation
const result = await model.generateContent("Write a poem about coding");
const text = result.response.text();

// With generation config
const result2 = await model.generateContent({
  contents: [{ role: "user", parts: [{ text: "Explain AI" }] }],
  generationConfig: {
    temperature: 0.7,
    topP: 0.9,
    topK: 40,
    maxOutputTokens: 1024,
  },
});`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Image Generation</h2>
                                    <CodeBlock language="typescript">{`// Generate images with Gemini 2.5 Flash
const result = await model.generateContent({
  contents: [{
    role: "user",
    parts: [{ text: "Generate an image of a sunset over mountains" }]
  }],
  generationConfig: {
    responseModalities: ["image", "text"],
  },
});

// Access generated image
const response = result.response;
for (const part of response.candidates[0].content.parts) {
  if (part.inlineData) {
    const imageData = part.inlineData.data; // Base64
    const mimeType = part.inlineData.mimeType;
  }
}`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Image Input (Vision)</h2>
                                    <CodeBlock language="typescript">{`// Analyze an image
const imagePart = {
  inlineData: {
    data: base64ImageData,
    mimeType: "image/jpeg",
  },
};

const result = await model.generateContent([
  "Describe what you see in this image",
  imagePart,
]);`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Streaming Responses</h2>
                                    <CodeBlock language="typescript">{`// Stream for real-time output
const result = await model.generateContentStream("Tell a long story");

for await (const chunk of result.stream) {
  const text = chunk.text();
  console.log(text); // Print as it generates
}`}</CodeBlock>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Chat Sessions</h2>
                                    <CodeBlock language="typescript">{`// Multi-turn conversations
const chat = model.startChat({
  history: [
    { role: "user", parts: [{ text: "Hi, I'm building an app" }] },
    { role: "model", parts: [{ text: "Great! How can I help?" }] },
  ],
});

const result = await chat.sendMessage("What framework should I use?");
console.log(result.response.text());`}</CodeBlock>
                                </section>
                            )}

                            {/* Troubleshooting */}
                            {activeSection === 'troubleshooting' && (
                                <section>
                                    <h1 className="text-3xl font-bold mb-2">Troubleshooting</h1>
                                    <p className={`${mutedClass} text-lg mb-8`}>Common issues and their solutions.</p>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">API Key Issues</h2>
                                    <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} mb-4`}>
                                        <h3 className="font-semibold text-red-400 mb-2">Error: API key not valid</h3>
                                        <p className={mutedClass}>Solutions:</p>
                                        <ul className={`list-disc list-inside mt-2 space-y-1 ${mutedClass}`}>
                                            <li>Verify the key at <a href="https://aistudio.google.com/apikey" className="text-purple-400 hover:underline">AI Studio</a></li>
                                            <li>Check for extra spaces or quotes in .env file</li>
                                            <li>Ensure variable name matches: <code className="bg-slate-700 px-1 rounded">GEMINI_API_KEY</code></li>
                                            <li>Restart the dev server after editing .env</li>
                                        </ul>
                                    </div>

                                    <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} mb-4`}>
                                        <h3 className="font-semibold text-red-400 mb-2">Error: 429 Resource Exhausted</h3>
                                        <p className={mutedClass}>You've hit rate limits. Solutions:</p>
                                        <ul className={`list-disc list-inside mt-2 space-y-1 ${mutedClass}`}>
                                            <li>Wait 1-2 minutes before retrying</li>
                                            <li>Implement exponential backoff</li>
                                            <li>Reduce request frequency (free tier: 60/min)</li>
                                            <li>Consider upgrading to paid tier</li>
                                        </ul>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Build Errors</h2>
                                    <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} mb-4`}>
                                        <h3 className="font-semibold text-red-400 mb-2">Error: Cannot find module</h3>
                                        <CodeBlock>{`# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# If using pnpm
pnpm install --force`}</CodeBlock>
                                    </div>

                                    <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} mb-4`}>
                                        <h3 className="font-semibold text-red-400 mb-2">Error: CORS Policy</h3>
                                        <p className={mutedClass}>Browser blocking API requests. The Gemini SDK handles CORS, but if you see this:</p>
                                        <ul className={`list-disc list-inside mt-2 space-y-1 ${mutedClass}`}>
                                            <li>Ensure you're using the official SDK, not raw fetch</li>
                                            <li>Check that you're on localhost, not file://</li>
                                            <li>Try a different browser or incognito mode</li>
                                        </ul>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Image Generation Issues</h2>
                                    <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} mb-4`}>
                                        <h3 className="font-semibold text-red-400 mb-2">No image in response</h3>
                                        <ul className={`list-disc list-inside mt-2 space-y-1 ${mutedClass}`}>
                                            <li>Use <code className="bg-slate-700 px-1 rounded">gemini-2.5-flash</code> model</li>
                                            <li>Add <code className="bg-slate-700 px-1 rounded">responseModalities: ["image", "text"]</code></li>
                                            <li>Be explicit: "Generate an image of..."</li>
                                            <li>Check safety settings aren't blocking</li>
                                        </ul>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-8 mb-4">Content Safety Blocks</h2>
                                    <AlertBox type="warning">
                                        If your content is blocked by safety filters, try rephrasing your prompt to be more specific and professional. Avoid ambiguous terms that could be misinterpreted.
                                    </AlertBox>
                                </section>
                            )}

                            {/* FAQ */}
                            {activeSection === 'faq' && (
                                <section>
                                    <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
                                    <p className={`${mutedClass} text-lg mb-8`}>Quick answers to common questions.</p>

                                    {[
                                        {
                                            q: "Is Google AI Studio free?",
                                            a: "Yes! AI Studio offers a generous free tier with 60 requests/minute and 1,500 requests/day. No credit card required."
                                        },
                                        {
                                            q: "Do I need a GCP project?",
                                            a: "No. All Forge projects work with just an AI Studio API key. No Google Cloud Platform billing is required."
                                        },
                                        {
                                            q: "Which model should I use?",
                                            a: "For most Forge projects, gemini-2.5-flash is recommended. It's fast, supports image generation, and has excellent quality."
                                        },
                                        {
                                            q: "Can I deploy these projects?",
                                            a: "Yes! All projects can be deployed to Vercel, Netlify, or any static hosting. Just set your API key as an environment variable."
                                        },
                                        {
                                            q: "How do I keep my API key secure?",
                                            a: "Never commit .env files to git. For production, use environment variables in your hosting platform's dashboard."
                                        },
                                        {
                                            q: "Can I use these commercially?",
                                            a: "The code is open-source. Check Gemini's terms of service for commercial use of generated content."
                                        },
                                        {
                                            q: "What's the image size limit?",
                                            a: "Gemini accepts images up to 20MB. For best performance, resize large images before uploading."
                                        },
                                        {
                                            q: "Why is generation slow?",
                                            a: "Image generation takes 5-15 seconds. Text is faster. Use streaming for long text responses to show progress."
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} mb-4`}>
                                            <h3 className="font-semibold text-lg mb-2 flex items-start gap-2">
                                                <HelpCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                                                {item.q}
                                            </h3>
                                            <p className={mutedClass}>{item.a}</p>
                                        </div>
                                    ))}

                                    <AlertBox type="info">
                                        Have more questions? Check out the <a href="https://ai.google.dev/docs" target="_blank" className="text-purple-400 hover:underline">official Gemini documentation</a> or open an issue on GitHub.
                                    </AlertBox>
                                </section>
                            )}

                        </article>
                    </main>
                </div>
            </div>

            {/* Footer */}
            <footer className={`border-t ${isDark ? 'border-slate-800 bg-slate-950' : 'border-gray-200 bg-gray-50'} py-8 mt-12`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className={mutedClass}>© 2024 The Forge Gen. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default DocsPage;

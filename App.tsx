import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Team from './components/Team';
import WhyUs from './components/WhyUs';
import Roadmap from './components/Roadmap';
import TechStack from './components/TechStack';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile = false, onClick }) => (
  <a 
    href={href}
    onClick={onClick}
    className={`${mobile ? 'block py-3 text-lg' : 'text-sm'} font-medium text-slate-300 hover:text-white transition-colors`}
  >
    {children}
  </a>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>BarakaTech</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            <NavLink href="#problem" onClick={closeMenu}>Muammo</NavLink>
            <NavLink href="#team" onClick={closeMenu}>Jamoa</NavLink>
            <NavLink href="#whyus" onClick={closeMenu}>Nega Biz?</NavLink>
            <NavLink href="#roadmap" onClick={closeMenu}>Yo‘l xaritasi</NavLink>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-2 shadow-xl">
            <NavLink href="#problem" mobile onClick={closeMenu}>Muammo</NavLink>
            <NavLink href="#team" mobile onClick={closeMenu}>Jamoa</NavLink>
            <NavLink href="#whyus" mobile onClick={closeMenu}>Nega Biz?</NavLink>
            <NavLink href="#roadmap" mobile onClick={closeMenu}>Yo‘l xaritasi</NavLink>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <ProblemSolution />
        <Team />
        <WhyUs />
        <Roadmap />
        <TechStack />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-slate-500">
            &copy; {new Date().getFullYear()} BarakaTech. AI500! tanlovi uchun maxsus.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white">Foydalanish shartlari</a>
            <a href="#" className="hover:text-white">Aloqa</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
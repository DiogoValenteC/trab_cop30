
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="cop30-container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-cop30-primary font-bold text-2xl">COP30</span>
            <span className="text-cop30-secondary font-semibold">Explorer</span>
          </Link>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden flex items-center"
            onClick={toggleMenu}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="font-medium hover:text-cop30-primary transition-colors">Início</Link>
            <Link to="/sobre" className="font-medium hover:text-cop30-primary transition-colors">Sobre</Link>
            <Link to="/programacao" className="font-medium hover:text-cop30-primary transition-colors">Programação</Link>
            <Link to="/noticias" className="font-medium hover:text-cop30-primary transition-colors">Notícias</Link>
            <Link to="/contato" className="font-medium hover:text-cop30-primary transition-colors">Contato</Link>
            <Button className="bg-cop30-primary hover:bg-cop30-primary/90">Participar</Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300", 
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <div className="flex flex-col gap-4">
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-2 py-2 hover:bg-gray-50 rounded-md font-medium"
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              onClick={() => setIsMenuOpen(false)}
              className="px-2 py-2 hover:bg-gray-50 rounded-md font-medium"
            >
              Sobre
            </Link>
            <Link 
              to="/programacao" 
              onClick={() => setIsMenuOpen(false)}
              className="px-2 py-2 hover:bg-gray-50 rounded-md font-medium"
            >
              Programação
            </Link>
            <Link 
              to="/noticias" 
              onClick={() => setIsMenuOpen(false)}
              className="px-2 py-2 hover:bg-gray-50 rounded-md font-medium"
            >
              Notícias
            </Link>
            <Link 
              to="/contato" 
              onClick={() => setIsMenuOpen(false)}
              className="px-2 py-2 hover:bg-gray-50 rounded-md font-medium"
            >
              Contato
            </Link>
            <Button className="bg-cop30-primary hover:bg-cop30-primary/90 w-full">Participar</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

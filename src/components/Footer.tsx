
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cop30-dark text-white">
      <div className="cop30-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-white font-bold text-2xl">COP30</span>
              <span className="text-cop30-secondary font-semibold">Explorer</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Conferência das Nações Unidas sobre Mudanças Climáticas 2025 - Belém, Brasil
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</Link></li>
              <li><Link to="/programacao" className="text-gray-300 hover:text-white transition-colors">Programação</Link></li>
              <li><Link to="/noticias" className="text-gray-300 hover:text-white transition-colors">Notícias</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contate-nos</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Belém, PA - Brasil</li>
              <li className="text-gray-300">contato@cop30explorer.br</li>
              <li className="text-gray-300">+55 (91) 9xxxx-xxxx</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} COP30 Explorer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

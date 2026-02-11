import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-darker border-t border-slate-900 text-center">
      <p className="text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} Alex.Dev. Tous droits réservés. <br />
        <span className="text-xs opacity-50">Designed with React & Tailwind CSS. Powered by Google Gemini.</span>
      </p>
    </footer>
  );
};

export default Footer;
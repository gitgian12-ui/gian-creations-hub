import { Heart, Github, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">
              Gian Christo Yuhendi
            </div>
            <p className="text-muted-foreground max-w-md">
              Passionate web developer creating modern, smooth, and visually appealing 
              websites. Ready to bring your ideas to life with creativity and technical excellence.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="mailto:gianchrist28@gmail.com"
                className="p-2 rounded-full bg-secondary/30 border border-border hover:bg-secondary/50 transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/6285352345678"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/30 border border-border hover:bg-secondary/50 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://github.com/gianchristo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/30 border border-border hover:bg-secondary/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Business Websites</li>
              <li>Portfolio Sites</li>
              <li>E-commerce Platforms</li>
              <li>Landing Pages</li>
              <li>Web Applications</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Gian Christo Yuhendi. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
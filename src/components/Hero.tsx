import { ChevronDown, Github, Mail, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-portrait.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 hero-gradient rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 animate-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <p className="text-accent text-lg font-medium mb-2">👋 Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-gradient">Gian Christo</span>
                <br />
                <span className="text-foreground">Yuhendi</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Passionate Web Developer & Creative Designer
              </p>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                14-year-old web developer from Tarakan, Indonesia, creating modern, 
                smooth, and visually appealing websites with creativity and passion.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="btn-hero"
              >
                View My Work
              </a>
              <a
                href="mailto:gianchrist28@gmail.com"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold bg-secondary/50 border border-border backdrop-blur-sm hover:bg-secondary/80 transition-all duration-300"
              >
                <Mail className="mr-2" size={16} />
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="mailto:gianchrist28@gmail.com"
                className="p-3 rounded-full bg-secondary/30 border border-border hover:bg-secondary/50 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/6285352345678"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/30 border border-border hover:bg-secondary/50 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://github.com/gianchristo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/30 border border-border hover:bg-secondary/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                <img
                  src={heroImage}
                  alt="Gian Christo Yuhendi - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 hero-gradient rounded-3xl opacity-20 blur-xl animate-glow"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <ChevronDown className="text-primary" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
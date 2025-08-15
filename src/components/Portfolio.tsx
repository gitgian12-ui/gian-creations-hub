import { ExternalLink, Github, Eye } from 'lucide-react';
import bakeryProject from '@/assets/project-bakery.jpg';
import swimmingProject from '@/assets/project-swimming.jpg';
import warehouseProject from '@/assets/project-warehouse.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "Bakery Business Website",
      description: "Modern bakery website with warm color palette, product showcase, and online ordering system. Features smooth animations and mobile-responsive design.",
      image: bakeryProject,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Business Website",
      link: "#",
      github: "#"
    },
    {
      title: "Swimming Lesson Platform",
      description: "Complete swimming lesson website with class schedules, instructor profiles, registration system, and photo gallery. Built with clean aquatic theme.",
      image: swimmingProject,
      technologies: ["React", "PHP", "MySQL", "XAMPP"],
      category: "Service Platform",
      link: "#",
      github: "#"
    },
    {
      title: "Warehouse Management System",
      description: "QR code-based inventory management system for tracking stock updates, managing warehouse operations, and generating reports.",
      image: warehouseProject,
      technologies: ["JavaScript", "PHP", "MySQL", "QR Integration"],
      category: "Management System",
      link: "#",
      github: "#"
    },
    {
      title: "Ice Cream Shop Website",
      description: "Colorful and playful website for ice cream business featuring product catalog, flavor information, and location finder.",
      image: bakeryProject, // Reusing for now
      technologies: ["HTML", "CSS", "JavaScript", "Canva"],
      category: "Business Website",
      link: "#",
      github: "#"
    },
    {
      title: "Modern Landing Pages",
      description: "Collection of modern landing pages with smooth hover effects, colorful UI, and responsive design for various businesses.",
      image: swimmingProject, // Reusing for now
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
      category: "Landing Pages",
      link: "#",
      github: "#"
    },
    {
      title: "E-commerce Prototype",
      description: "Full-featured e-commerce prototype with product management, shopping cart, user authentication, and payment integration.",
      image: warehouseProject, // Reusing for now
      technologies: ["React", "Express.js", "MongoDB", "TypeScript"],
      category: "E-commerce",
      link: "#",
      github: "#"
    }
  ];

  const categories = ["All", "Business Website", "Service Platform", "Management System", "Landing Pages", "E-commerce"];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my journey in web development through creative and functional projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`skill-tag ${index === 0 ? 'bg-primary/20 border-primary/50' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-elegant group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="p-3 rounded-full bg-background/90 text-primary hover:bg-background transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full bg-background/90 text-primary hover:bg-background transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-xs font-medium text-primary">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary/30 border border-border rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-sm font-medium text-primary hover:bg-primary/30 transition-colors"
                  >
                    <Eye size={16} className="mr-2" />
                    View Live
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-secondary/30 border border-border rounded-lg text-sm font-medium hover:bg-secondary/50 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and create amazing web experiences.
            </p>
            <a
              href="#contact"
              className="btn-hero"
            >
              Let's Create Something Amazing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
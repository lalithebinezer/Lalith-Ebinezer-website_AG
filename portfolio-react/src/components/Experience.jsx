import { useState, useEffect, useRef } from 'react';
import { EXPERIENCE } from '../constants';
import FadeIn from './FadeIn';
import { Briefcase, Building2, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [listProgress, setListProgress] = useState(0);
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Section Progress (for left indicator)
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrolled = -rect.top;
      const maxScroll = sectionHeight - windowHeight;
      const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      setScrollProgress(progress);

      // List Progress (for continuous line)
      if (listRef.current) {
        const list = listRef.current;
        const listRect = list.getBoundingClientRect();
        const listHeight = listRect.height;
        // Start filling when list enters viewport (top at 70% viewport), end when passed
        const listTop = listRect.top;
        const startOffset = windowHeight * 0.7; // Start animation when top is 70% down
        const endOffset = windowHeight * 0.3;   // Full when bottom is 30% up? No, relative to top.
        
        // Calculate progress based on how much of the list top has passed a checkpoint
        // Let's make it fill as we scroll down the list itself.
        // Center of viewport triggering?
        const listScrolled = windowHeight / 2 - listTop; // Center trigger
        const listMax = listHeight; 
        
        // Alternative: Fill from top to bottom as element scrolls up
        const viewTrigger = windowHeight * 0.6;
        const p = (viewTrigger - listTop) / listHeight;
        setListProgress(Math.min(Math.max(p, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-16 md:py-24 scroll-mt-28 relative"
    >
      {/* Scroll Progress Timeline */}
      <div 
        className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:block z-10"
        style={{ 
          opacity: scrollProgress > 0 && scrollProgress < 1 ? 1 : 0,
          transition: 'opacity 300ms'
        }}
      >
        <div className="relative">
          {/* Background line */}
          <div 
            className="w-0.5 bg-ocean-200 dark:bg-ocean-800"
            style={{ height: '200px' }}
          />
          {/* Progress line */}
          <div 
            className="absolute top-0 left-0 w-0.5 bg-primary transition-all duration-300"
            style={{ 
              height: `${scrollProgress * 200}px`,
              boxShadow: '0 0 10px rgba(212, 165, 116, 0.5)'
            }}
          />
          {/* Progress indicator */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full transition-all duration-300"
            style={{ 
              top: `${scrollProgress * 200}px`,
              boxShadow: '0 0 15px rgba(212, 165, 116, 0.8)'
            }}
          />
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1 mb-12 md:mb-0">
            <FadeIn>
              <div className="md:sticky md:top-32 space-y-6">
                <div>
                  <div className="w-12 h-12 flex items-center justify-center bg-ocean-100 dark:bg-ocean-800 rounded-2xl text-ocean-900 dark:text-white mb-2">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="display-font text-3xl font-bold text-ocean-900 dark:text-white">
                    Experience
                  </h3>
                </div>
                
                {/* Metrics Stack */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                    
                    {/* Years Experience */}
                    <div className="p-5 bg-ocean-50 dark:bg-ocean-900/50 rounded-2xl border border-ocean-200 dark:border-ocean-800 relative overflow-hidden group hover:border-primary/30 transition-all col-span-2 md:col-span-1">
                      <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <Award className="w-24 h-24 text-ocean-900 dark:text-white" />
                      </div>
                      <span className="block text-3xl md:text-4xl display-font font-bold text-ocean-900 dark:text-white mb-1">
                        10+
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-ocean-500 dark:text-ocean-400">
                        Years <br/>Experience
                      </span>
                    </div>

                    {/* Companies Supported */}
                    <div className="p-5 bg-ocean-50 dark:bg-ocean-900/50 rounded-2xl border border-ocean-200 dark:border-ocean-800 relative overflow-hidden group hover:border-primary/30 transition-all">
                      <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <Building2 className="w-24 h-24 text-ocean-900 dark:text-white" />
                      </div>
                      <span className="block text-3xl md:text-4xl display-font font-bold text-ocean-900 dark:text-white mb-1">
                        100+
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-ocean-500 dark:text-ocean-400">
                        Companies <br/>Supported
                      </span>
                    </div>

                    {/* Professionals Trained */}
                    <div className="p-5 bg-ocean-50 dark:bg-ocean-900/50 rounded-2xl border border-ocean-200 dark:border-ocean-800 relative overflow-hidden group hover:border-primary/30 transition-all">
                      <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <GraduationCap className="w-24 h-24 text-ocean-900 dark:text-white" />
                      </div>
                      <span className="block text-3xl md:text-4xl display-font font-bold text-ocean-900 dark:text-white mb-1">
                        500+
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-ocean-500 dark:text-ocean-400">
                        Professionals <br/>Trained
                      </span>
                    </div>

                </div>

                <p className="text-sm text-ocean-500 dark:text-ocean-400 leading-relaxed hidden md:block">
                   Refining workflows and driving digital adoption across the AEC industry.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-3 space-y-12 md:space-y-20 relative" ref={listRef}>
            {/* Continuous Connecting Line Background */}
            <div className="absolute inset-0 hidden md:block pointer-events-none">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-full">
                 <div className="md:col-span-1"></div> {/* Spacer for Left Col */}
                 <div className="md:col-span-2 relative pl-8 ml-2 md:ml-0 h-full">
                    {/* The Line Track */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-ocean-200 dark:bg-ocean-800"></div>
                    {/* The Active Line */}
                    <div 
                      className="absolute left-0 top-0 w-0.5 bg-primary transition-all duration-100 ease-linear shadow-[0_0_12px_rgba(212,165,116,0.6)]"
                      style={{ height: `${listProgress * 100}%` }}
                    ></div>
                 </div>
              </div>
            </div>

            {EXPERIENCE.map((job, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="group grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  
                  {/* Left: Company & Location */}
                  <div className="md:col-span-1">
                    <div className="md:sticky md:top-40">
                      <h4 className="text-lg font-bold text-ocean-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                        {job.company}
                      </h4>
                      <span className="text-sm font-medium text-ocean-500 dark:text-ocean-400 flex items-center">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Right: Roles Timeline */}
                  <div className="md:col-span-2 space-y-10 relative pl-8 ml-2 md:ml-0">
                    {job.roles.map((role, rIndex) => (
                      <div key={rIndex} className="relative">
                        {/* Timeline Dot with Glow */}
                        <div className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-ocean-50 dark:border-ocean-950 transition-colors duration-500 z-10 
                          ${rIndex === 0 ? 'bg-primary dark:bg-primary shadow-[0_0_15px_rgba(212,165,116,0.5)]' : 'bg-ocean-300 dark:bg-ocean-700 group-hover:bg-primary/50'}
                        `}></div>
                        
                        <h5 className="text-xl display-font font-bold text-ocean-800 dark:text-ocean-100 mb-1 group-hover:text-primary transition-colors duration-300">
                          {role.title}
                        </h5>
                        <div className="text-xs font-mono text-ocean-400 dark:text-ocean-500 mb-4 uppercase tracking-wide">
                          {role.period}
                        </div>
                        
                        <ul className="space-y-2">
                          {role.description.map((point, idx) => {
                            const colIndex = point.indexOf(':');
                            const isLabeled = colIndex > -1 && colIndex < 50;
                            
                            return (
                              <li key={idx} className="text-ocean-600 dark:text-ocean-400 text-sm leading-relaxed relative pl-4">
                                <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-ocean-300 dark:bg-ocean-700 rounded-full"></span>
                                {isLabeled ? (
                                  <span>
                                    <span className="font-bold text-ocean-900 dark:text-ocean-100">{point.substring(0, colIndex + 1)}</span>
                                    {point.substring(colIndex + 1)}
                                  </span>
                                ) : point}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

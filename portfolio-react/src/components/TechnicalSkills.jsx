import { Cpu } from 'lucide-react';
import FadeIn from './FadeIn';

const SKILLS = [
  {
    title: 'BIM & Construction Cloud',
    skills: [
      'Autodesk Construction Cloud (ACC)',
      'Revit & AutoCAD',
      'Navisworks',
      'Autodesk Tandem',
      'BIM Collaborate Pro'
    ]
  },
  {
    title: 'Development & Automation',
    skills: [
      'Autodesk Platform Services (APS)',
      'Dynamo Visual Scripting',
      'Revit Automation',
      'AutoLISP',
      'Microsoft Power BI Integration'
    ]
  },
  {
    title: 'Visualization & Simulation',
    skills: [
      'Unreal Engine 5',
      'Twinmotion',
      'MetaHuman Creation',
      '4D Construction Simulation'
    ]
  },
  {
    title: 'Certifications',
    skills: [
      'Autodesk Certified Professional: Revit',
      'Autodesk Pre-construction: Design & Planning',
      'Project Administration'
    ]
  }
];

const TechnicalSkills = () => {
  return (
    <section id="expertise" className="scroll-mt-28 pb-20">
       <div className="container pt-32">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            
            <div className="md:col-span-1">
               <FadeIn>
                  <div className="sticky top-32 flex flex-col gap-4">
                     <div className="w-12 h-12 flex items-center justify-center bg-sand-100 dark:bg-sand-800 rounded-2xl text-primary mb-2">
                       <Cpu className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl display-font font-bold text-sand-900 dark:text-white">
                        Technical Expertise
                     </h3>
                     <p className="text-sm text-sand-500 dark:text-sand-400 leading-relaxed">
                       A comprehensive toolkit covering BIM implementation, software infrastructure, and digital strategy. I am passionate about staying ahead of industry trends and continuously expanding my technical horizon.
                     </p>
                  </div>
               </FadeIn>
            </div>

            <div className="md:col-span-2 space-y-16">
               {/* Skills Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">
                  {SKILLS.map((category, idx) => (
                    <FadeIn key={idx} delay={idx * 100}>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-sand-900 dark:text-sand-100 mb-6 pb-2 border-b border-sand-200 dark:border-sand-800 flex items-center justify-between">
                          {category.title}
                          <span className="text-xs text-sand-400 font-normal normal-case">0{idx + 1}</span>
                        </h4>
                        <ul className="space-y-3">
                          {category.skills.map((skill, sIdx) => (
                            <li key={sIdx} className="text-sand-600 dark:text-sand-400 text-sm hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-default transform hover:translate-x-1 flex items-center">
                              <span className="w-1 h-1 bg-sand-300 dark:bg-sand-700 rounded-full mr-3"></span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  ))}
               </div>
            </div>
         </div>
       </div>
    </section>
  );
};

export default TechnicalSkills;

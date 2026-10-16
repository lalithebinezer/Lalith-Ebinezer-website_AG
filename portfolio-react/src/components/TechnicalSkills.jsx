import { Cpu } from 'lucide-react';
import FadeIn from './FadeIn';

const SKILLS = [
  {
    title: 'Autodesk Forma & ACC Ecosystem',
    skills: [
      'Forma / ACC Docs (CDE Governance & Admin)',
      'BIM Collaborate Pro & Design Collaboration',
      'Forma / ACC Build (RFIs, Submittals, Forms, Assets)',
      'Revit Cloud Worksharing & Desktop Connector',
      'Insight & Construction IQ Analytics'
    ]
  },
  {
    title: 'Information Governance & ISO 19650',
    skills: [
      'ISO 19650 (Parts 1, 2, 5) Alignment',
      'OIR / PIR / AIR / EIR & BEP Operationalization',
      'Information Delivery Plans (TIDP / MIDP) & LOIN',
      'CDE State Transitions (WIP → Shared → Published → Archived)',
      'Revision & Suitability Codes (S0–S7), RBAC'
    ]
  },
  {
    title: 'Integration, Geospatial & Analytics',
    skills: [
      'Autodesk Platform Services (APS / Forge APIs)',
      'Forma Data Model & ACC Data Connector',
      'Microsoft Power BI Executive Dashboards',
      'openBIM (IFC, BCF) & Navisworks Coordination',
      'Bentley SYNCHRO 4D & QGIS Vector Planning'
    ]
  },
  {
    title: 'Implementation Consulting',
    skills: [
      'Client Discovery Workshops & Process Mapping',
      'Functional & Technical Specifications',
      'Sandbox / UAT Prototyping & Phased Rollout',
      'Stakeholder Enablement & Admin Runbooks',
      'Post-Go-Live Hypercare'
    ]
  },
  {
    title: 'Professional Certifications',
    skills: [
      'Autodesk Certified Professional (ACP) - Revit & AutoCAD',
      'Autodesk APS Champion & Developer Ambassador',
      'Bentley Accredited SYNCHRO 4D Professional',
      'buildingSMART Professional (openBIM / IFC)',
      'Autodesk Industrialized Construction & Coordinated Discovery'
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

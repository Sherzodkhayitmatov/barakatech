import React from 'react';
import { Github, Linkedin, Globe, Figma } from 'lucide-react';
import { TeamMember } from '../types';

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sherzod Khayitmatov",
    role: "Data/AI Engineer",
    skills: ["Python", "AI & ML models", "SQL", "Azure", "Docker"],
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sherzod&backgroundColor=b6e3f4",
    links: { github: "https://github.com/Sherzodkhayitmatov" }
  },
  {
    name: "Suhrob Qadamboyev",
    role: "Project Manager",
    skills: ["System Architecture", "Figma", "UI/UX", "Market Research"],
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suhrob&backgroundColor=c0aede",
    links: { portfolio: "https://www.figma.com/proto/oLQfgB5ezBT1ohTDQOKwPO/Untitled?node-id=66-45&starting-point-node-id=66%3A45" }
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Jamoa a'zolari</h2>
          <p className="text-slate-600">
            Bizning jamoa har bir loyihaga yangicha yondashuv va katta ishtiyoq bilan kirishadi.
            <br />
            <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-2 inline-block">
              Barcha a'zolar AI500! Telegram boti orqali ro‘yxatdan o‘tgan
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform bg-slate-100" 
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-primary-100 ring-offset-2"></div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-4 border-t border-slate-100">
                {member.links.github && (
                  <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-1">
                    <Github className="w-5 h-5" />
                    <span className="text-xs">GitHub</span>
                  </a>
                )}
                {member.links.portfolio && (
                  <a href={member.links.portfolio} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-1">
                    <Figma className="w-5 h-5" />
                    <span className="text-xs">Figma</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
import { useMemo } from 'react';
import { projects } from '../data/projects.js';
import { englishProjects } from './projects.en.js';
import { useLocale } from './LocaleContext.jsx';
export function localizeProject(project, language) {
  if (language !== 'en') return project;
  const en = englishProjects[project.id];
  return {...project,...en,
    gallery: project.gallery?.map((image, index) => ({...image,...en.gallery?.[index]})),
    caseStudy: project.caseStudy && {...project.caseStudy,...en.caseStudy,evidence: project.caseStudy.evidence && {...project.caseStudy.evidence,...en.caseStudy?.evidence}},
  };
}
export function useProjects() {
  const { language } = useLocale();
  return useMemo(() => projects.map(project => localizeProject(project, language)), [language]);
}

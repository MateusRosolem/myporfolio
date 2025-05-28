'use client';
import React from 'react';
import { SECTION_TITLES, SKILL_CATEGORIES } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Skill, TranslatableString } from '../types/types';
import Section from './Section';
import SkillBadge from './SkillBadge';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const { language } = useLanguage();

  const categorizedSkills: { [key: string]: Skill[] } = skills.reduce((acc, skill) => {
    const categoryName = (skill.category as TranslatableString)[language] || (skill.category as TranslatableString)['pt']; // Fallback
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(skill);
    return acc;
  }, {} as { [key: string]: Skill[] });

  // Order of categories in Portuguese (as defined in constants.ts)
  const ptCategoryOrder: string[] = [
    SKILL_CATEGORIES.language.pt,
    SKILL_CATEGORIES.framework.pt,
    SKILL_CATEGORIES.database.pt,
    SKILL_CATEGORIES.tool.pt,
    SKILL_CATEGORIES.idiom.pt,
  ];
  
  // Map to current language order for display
  const currentLanguageCategoryOrder = ptCategoryOrder.map(ptCat => {
      for (const key in SKILL_CATEGORIES) {
          if ((SKILL_CATEGORIES[key as keyof typeof SKILL_CATEGORIES] as TranslatableString).pt === ptCat) {
              return (SKILL_CATEGORIES[key as keyof typeof SKILL_CATEGORIES] as TranslatableString)[language];
          }
      }
      return ptCat; // Fallback if not found (should not happen)
  });


  const sortedCategories = Object.entries(categorizedSkills).sort(([catA], [catB]) => {
    const indexA = currentLanguageCategoryOrder.indexOf(catA);
    const indexB = currentLanguageCategoryOrder.indexOf(catB);
    if (indexA === -1) return 1; // Push unknown categories to the end
    if (indexB === -1) return -1;
    return indexA - indexB;
  });


  return (
    <Section id="skills" title={SECTION_TITLES.skills} className="bg-blue-950">
      {sortedCategories.length > 0 ? (
        <div className="space-y-10 md:space-y-12">
          {sortedCategories.map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-200 mb-5 md:mb-6">{category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4">
                {categorySkills.map((skill) => (
                  <SkillBadge key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">{SKILL_CATEGORIES.noSkills[language]}</p>
      )}
    </Section>
  );
};

export default SkillsSection;

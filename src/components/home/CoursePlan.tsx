import { Target } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions du financement d\'entreprise',
    href: '/introduction',
    iconName: 'rocket',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I - Sources de Financement',
    description: 'Panorama des différentes sources de financement disponibles',
    href: '/section-1',
    iconName: 'trending-up',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II - Critères de Choix',
    description: 'Méthodologie d\'évaluation et critères de sélection',
    href: '/section-2',
    iconName: 'bar-chart-3',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Section III - Optimisation Financière',
    description: 'Stratégies d\'optimisation et mix de financement',
    href: '/section-3',
    iconName: 'target',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'Quiz',
    description: 'Évaluation interactive de vos connaissances',
    href: '/quiz',
    iconName: 'brain',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Cas pratique',
    description: 'Exercices pratiques et cas concrets d\'application',
    href: '/questions-dscg',
    iconName: 'award',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Questions DSCG',
    description: 'Compilation exhaustive des questions et corrections DSCG sur les structures du SI',
    href: '/questions-dscg-complete',
    iconName: 'book-open',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-xl text-gray-600">
          Suivez un parcours structuré pour maîtriser le choix d&apos;un financement
        </p>
      </div>

      {/* Sections List */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            title={section.title}
            description={section.description}
            href={section.href}
            iconName={section.iconName}
            color={section.color}
            bgColor={section.bgColor}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
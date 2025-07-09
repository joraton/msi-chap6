'use client';

import { useState } from 'react';
import Link from 'next/link';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Award, ChevronDown, ChevronRight, Calculator, FileText, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DSCGQuestion {
  id: number;
  title: string;
  context: string;
  question: string;
  solution: string;
  methodology: string[];
  keyPoints: string[];
}

const dscgQuestions: DSCGQuestion[] = [
  {
    id: 1,
    title: "Cas 1 : Choix entre emprunt et augmentation de capital",
    context: "La société FINTECH souhaite financer un investissement de 800 k€. Elle hésite entre un emprunt bancaire à 5% sur 7 ans et une augmentation de capital. Données : CA = 2 M€, Résultat net = 160 k€, Capitaux propres = 600 k€, Dettes = 400 k€, Taux d'IS = 25%.",
    question: "Analysez les deux options de financement en utilisant les critères FRIC et recommandez la solution optimale.",
    solution: "**Analyse comparative :**\n\n**Option 1 - Emprunt bancaire :**\n- Coût après IS : 5% × (1-0,25) = 3,75%\n- Préservation du contrôle\n- Effet de levier si rentabilité > 3,75%\n- Augmentation du risque financier\n\n**Option 2 - Augmentation de capital :**\n- Coût estimé : 160k€/600k€ = 26,7% (rentabilité attendue)\n- Dilution du pouvoir\n- Renforcement des fonds propres\n- Pas de risque de remboursement\n\n**Recommandation :** L'emprunt semble préférable car son coût (3,75%) est largement inférieur au coût des fonds propres, et le ratio d'endettement actuel (40%) reste acceptable.",
    methodology: [
      "Calculer le coût de chaque source de financement",
      "Analyser l'impact sur la structure financière",
      "Évaluer les critères FRIC",
      "Vérifier la capacité d'endettement",
      "Formuler une recommandation argumentée"
    ],
    keyPoints: [
      "Prise en compte de l'économie d'impôt sur les intérêts",
      "Comparaison des coûts réels",
      "Analyse de l'impact sur l'indépendance",
      "Évaluation du risque financier"
    ]
  },
  {
    id: 2,
    title: "Cas 2 : Optimisation de la structure financière",
    context: "La PME INNOVTECH (secteur technologique) présente les données suivantes : Total bilan = 1,5 M€, Capitaux propres = 300 k€, Dettes financières = 900 k€, EBIT = 180 k€, Charges financières = 45 k€. Le dirigeant s'inquiète de la structure financière.",
    question: "Diagnostiquez la situation financière et proposez des mesures d'amélioration de la structure financière.",
    solution: "**Diagnostic :**\n\n**Ratios actuels :**\n- Ratio d'autonomie : 300k€/1500k€ = 20% (faible, < 30%)\n- Ratio d'endettement : 900k€/300k€ = 300% (très élevé)\n- Couverture des charges financières : 180k€/45k€ = 4 (correct)\n\n**Problèmes identifiés :**\n- Structure déséquilibrée (trop d'endettement)\n- Risque de dépendance bancaire\n- Capacité d'endettement limitée\n\n**Mesures correctives :**\n1. Augmentation de capital de 200-300 k€\n2. Remboursement anticipé partiel des dettes\n3. Conversion d'une partie des dettes en quasi-fonds propres\n4. Amélioration de l'autofinancement",
    methodology: [
      "Calculer les ratios de structure financière",
      "Comparer aux normes sectorielles",
      "Identifier les déséquilibres",
      "Proposer des solutions concrètes",
      "Chiffrer l'impact des mesures"
    ],
    keyPoints: [
      "Importance du ratio d'autonomie financière",
      "Risques du sur-endettement",
      "Solutions de rééquilibrage",
      "Anticipation des besoins futurs"
    ]
  },
  {
    id: 3,
    title: "Cas 3 : Financement d'une croissance externe",
    context: "CROISSANCE SA envisage l'acquisition d'un concurrent pour 2 M€. Options disponibles : 1) Emprunt acquisition à 4,5%, 2) Émission obligataire à 4%, 3) Augmentation de capital, 4) Mix de financements. Données actuelles : CP = 3 M€, Dettes = 2 M€, ROE = 15%.",
    question: "Évaluez chaque option et proposez la stratégie de financement optimale pour cette acquisition.",
    solution: "**Évaluation des options :**\n\n**1. Emprunt acquisition (4,5%) :**\n- Coût après IS : 3,375%\n- Préservation du contrôle\n- Augmentation significative de l'endettement\n\n**2. Émission obligataire (4%) :**\n- Coût après IS : 3%\n- Diversification des sources\n- Contraintes du marché obligataire\n\n**3. Augmentation de capital :**\n- Coût : ~15% (ROE actuel)\n- Dilution importante\n- Renforcement des fonds propres\n\n**4. Mix recommandé :**\n- 40% augmentation de capital (800 k€)\n- 60% emprunt/obligations (1,2 M€)\n- Équilibre optimal risque/coût/contrôle",
    methodology: [
      "Analyser chaque source individuellement",
      "Calculer les coûts et impacts",
      "Évaluer les contraintes de chaque option",
      "Concevoir un mix optimal",
      "Justifier la stratégie retenue"
    ],
    keyPoints: [
      "Importance du mix de financements",
      "Gestion du risque d'acquisition",
      "Préservation de la flexibilité future",
      "Optimisation du coût global"
    ]
  }
];

export default function QuestionsDSCGPage() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});

  const toggleQuestion = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const toggleSolution = (id: number) => {
    setShowSolution(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-100 p-3 rounded-full">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cas pratique</h1>
              <p className="text-gray-600">Exercices pratiques et cas concrets d&apos;application</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <div className="flex items-start gap-3">
              <FileText className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Méthodologie DSCG</h3>
                <p className="text-red-800 mb-3">
                  Pour réussir les questions de financement au DSCG, suivez cette approche structurée :
                </p>
                <ol className="text-red-800 space-y-1">
                  <li>1. <strong>Analyser</strong> le contexte et identifier les enjeux</li>
                  <li>2. <strong>Calculer</strong> les ratios et indicateurs pertinents</li>
                  <li>3. <strong>Comparer</strong> les options selon les critères FRIC</li>
                  <li>4. <strong>Recommander</strong> une solution argumentée</li>
                  <li>5. <strong>Justifier</strong> votre choix avec des éléments chiffrés</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {dscgQuestions.map((question) => (
              <div key={question.id} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Question Header */}
                <button
                  onClick={() => toggleQuestion(question.id)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {question.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Cliquez pour voir le cas pratique
                    </p>
                  </div>
                  {expandedQuestion === question.id ? (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                {/* Question Content */}
                <AnimatePresence>
                  {expandedQuestion === question.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 border-t border-gray-200">
                        {/* Context */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-blue-600" />
                            Contexte
                          </h4>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-blue-800">{question.context}</p>
                          </div>
                        </div>

                        {/* Question */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Question</h4>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <p className="text-purple-800 font-medium">{question.question}</p>
                          </div>
                        </div>

                        {/* Methodology */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Calculator className="h-5 w-5 text-green-600" />
                            Méthodologie
                          </h4>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <ol className="text-green-800 space-y-2">
                              {question.methodology.map((step, index) => (
                                <li key={index}>
                                  <strong>{index + 1}.</strong> {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>

                        {/* Key Points */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-yellow-600" />
                            Points clés à retenir
                          </h4>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <ul className="text-yellow-800 space-y-2">
                              {question.keyPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-yellow-600 mt-1">•</span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Solution Toggle */}
                        <div className="text-center">
                          <button
                            onClick={() => toggleSolution(question.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                          >
                            {showSolution[question.id] ? 'Masquer la solution' : 'Voir la solution'}
                          </button>
                        </div>

                        {/* Solution */}
                        <AnimatePresence>
                          {showSolution[question.id] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-6 overflow-hidden"
                            >
                              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Solution détaillée</h4>
                                <div className="prose prose-sm max-w-none text-gray-700">
                                  {question.solution.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-3 whitespace-pre-line">
                                      {paragraph}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Conseils pour l&apos;examen DSCG</h3>
            <ul className="text-indigo-800 space-y-2">
              <li>• <strong>Structurez</strong> toujours votre réponse (diagnostic, analyse, recommandation)</li>
              <li>• <strong>Chiffrez</strong> vos arguments avec des calculs précis</li>
              <li>• <strong>Utilisez</strong> le vocabulaire technique approprié</li>
              <li>• <strong>Justifiez</strong> vos recommandations par des critères objectifs</li>
              <li>• <strong>Pensez</strong> aux implications stratégiques et opérationnelles</li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/quiz"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              ← Quiz
            </Link>
            <Link
              href="/"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Retour au plan du cours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
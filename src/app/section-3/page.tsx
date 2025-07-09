import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Target, TrendingUp, PieChart, Lightbulb, AlertTriangle } from 'lucide-react';

export default function Section3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section III - Optimisation Financière</h1>
              <p className="text-gray-600">Stratégies d&apos;optimisation et mix de financement</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">L&apos;effet de levier financier</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-900">Principe de l&apos;effet de levier</h3>
              </div>
              
              <p className="text-blue-800 mb-4">
                L&apos;effet de levier permet d&apos;amplifier la rentabilité des capitaux propres 
                en utilisant l&apos;endettement, à condition que le taux de rentabilité économique 
                soit supérieur au coût de l&apos;endettement.
              </p>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-800 mb-2">Formule de l&apos;effet de levier</h4>
                <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                  Re = Ra + (Ra - i) × (D/CP)
                </div>
                <div className="text-sm text-blue-700 mt-2 space-y-1">
                  <p>• Re = Rentabilité des capitaux propres</p>
                  <p>• Ra = Rentabilité de l&apos;actif économique</p>
                  <p>• i = Coût de l&apos;endettement</p>
                  <p>• D/CP = Ratio d&apos;endettement</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-900">Moyen mnémotechnique</h3>
              </div>
              <p className="text-yellow-800">
                <strong>LEVIER</strong> pour retenir les conditions d&apos;efficacité :
              </p>
              <ul className="text-yellow-800 mt-2 space-y-1">
                <li>• <strong>L</strong>imitée (endettement raisonnable)</li>
                <li>• <strong>E</strong>fficace (Ra {'>'} i)</li>
                <li>• <strong>V</strong>iable (capacité de remboursement)</li>
                <li>• <strong>I</strong>nvestissement rentable</li>
                <li>• <strong>E</strong>quilibrée (structure financière)</li>
                <li>• <strong>R</strong>isque maîtrisé</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Structure financière optimale</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <PieChart className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-green-900">Théorie du compromis</h3>
              </div>
              
              <p className="text-green-800 mb-4">
                La structure optimale résulte d&apos;un arbitrage entre les avantages fiscaux 
                de l&apos;endettement et les coûts de détresse financière.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Avantages de l&apos;endettement</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Économies d&apos;impôt (bouclier fiscal)</li>
                    <li>• Effet de levier positif</li>
                    <li>• Discipline managériale</li>
                    <li>• Préservation du contrôle</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Inconvénients de l&apos;endettement</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Risque de faillite</li>
                    <li>• Coûts d&apos;agence</li>
                    <li>• Rigidité financière</li>
                    <li>• Contraintes bancaires</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ratios financiers de référence</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Ratios d&apos;endettement recommandés</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border text-center">
                  <h4 className="font-semibold text-purple-800 mb-2">Ratio d&apos;autonomie</h4>
                  <div className="text-2xl font-bold text-purple-600 mb-1">{'>'} 30%</div>
                  <p className="text-sm text-purple-700">Capitaux propres / Total bilan</p>
                </div>
                
                <div className="bg-white p-4 rounded border text-center">
                  <h4 className="font-semibold text-purple-800 mb-2">Ratio d&apos;endettement</h4>
                  <div className="text-2xl font-bold text-purple-600 mb-1">{'<'} 70%</div>
                  <p className="text-sm text-purple-700">Dettes / Capitaux propres</p>
                </div>
                
                <div className="bg-white p-4 rounded border text-center">
                  <h4 className="font-semibold text-purple-800 mb-2">Capacité de remboursement</h4>
                  <div className="text-2xl font-bold text-purple-600 mb-1">{'<'} 4 ans</div>
                  <p className="text-sm text-purple-700">Dettes / CAF</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stratégies d&apos;optimisation</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">1. Diversification des sources</h3>
                <ul className="text-orange-800 space-y-2">
                  <li>• Répartir les risques entre plusieurs financeurs</li>
                  <li>• Combiner court terme et long terme</li>
                  <li>• Mixer taux fixe et taux variable</li>
                  <li>• Équilibrer fonds propres et dettes</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-900 mb-3">2. Optimisation fiscale</h3>
                <ul className="text-teal-800 space-y-2">
                  <li>• Maximiser la déductibilité des charges financières</li>
                  <li>• Utiliser les dispositifs d&apos;aide publique</li>
                  <li>• Optimiser le timing des investissements</li>
                  <li>• Exploiter les niches fiscales</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-900 mb-3">3. Gestion dynamique</h3>
                <ul className="text-pink-800 space-y-2">
                  <li>• Adapter la structure aux cycles d&apos;activité</li>
                  <li>• Renégocier régulièrement les conditions</li>
                  <li>• Anticiper les besoins futurs</li>
                  <li>• Maintenir des lignes de crédit de précaution</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-semibold text-red-900">Points de vigilance</h3>
              </div>
              <ul className="text-red-800 space-y-2">
                <li>• Éviter le sur-endettement qui détruit la valeur</li>
                <li>• Maintenir une capacité d&apos;endettement résiduelle</li>
                <li>• Surveiller l&apos;évolution des taux d&apos;intérêt</li>
                <li>• Préserver la flexibilité financière</li>
                <li>• Anticiper les échéances de remboursement</li>
              </ul>
            </div>

            {/* Cas pratique */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cas pratique : Choix de financement</h3>
              
              <div className="bg-white p-4 rounded border mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Situation</h4>
                <p className="text-gray-700 text-sm">
                  Une PME souhaite financer un investissement de 500 k€. 
                  Elle hésite entre un emprunt bancaire à 4% et une augmentation de capital.
                  Rentabilité économique attendue : 8%. Taux d&apos;IS : 25%.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Option 1 : Emprunt</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Coût après IS : 4% × (1-0,25) = 3%</li>
                    <li>• Effet de levier positif (8% {'>'} 3%)</li>
                    <li>• Préservation du contrôle</li>
                    <li>• Risque financier accru</li>
                  </ul>
                </div>
                
                <div className="bg-green-100 p-4 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Option 2 : Capital</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Coût : dividendes attendus ≈ 6%</li>
                    <li>• Pas d&apos;effet de levier</li>
                    <li>• Dilution du pouvoir</li>
                    <li>• Renforcement des fonds propres</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded mt-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Recommandation</h4>
                <p className="text-sm text-yellow-700">
                  L&apos;emprunt semble préférable si la capacité d&apos;endettement le permet, 
                  grâce à l&apos;effet de levier positif et au coût après IS plus faible.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Synthèse de l&apos;optimisation</h3>
              <p className="text-indigo-800 mb-3">
                L&apos;optimisation financière consiste à trouver le mix de financements qui :
              </p>
              <ul className="text-indigo-800 space-y-1">
                <li>• Minimise le coût moyen pondéré du capital (CMPC)</li>
                <li>• Maximise la valeur de l&apos;entreprise</li>
                <li>• Préserve la flexibilité financière</li>
                <li>• Respecte les contraintes de risque</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
            <a
              href="/section-2"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              ← Section II - Critères
            </a>
            <a
              href="/quiz"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Quiz →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
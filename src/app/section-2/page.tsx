import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, Calculator, Shield, Zap, Scale } from 'lucide-react';

export default function Section2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-full">
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section II - Critères de Choix</h1>
              <p className="text-gray-600">Méthodologie d&apos;évaluation et critères de sélection</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Rappel mnémotechnique</h3>
              <p className="text-purple-800">
                <strong>FRIC</strong> - Les 4 critères fondamentaux :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-800"><strong>F</strong>lexibilité</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-800"><strong>R</strong>isque</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-800"><strong>I</strong>ndépendance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-800"><strong>C</strong>oût</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Le Coût du financement</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-900">Calcul du coût</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-3">Coût de l&apos;emprunt</h4>
                  <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-3">
                    Coût = Taux d&apos;intérêt × (1 - Taux d&apos;IS)
                  </div>
                  <p className="text-sm text-blue-700">
                    Les intérêts d&apos;emprunt sont déductibles fiscalement
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-800 mb-3">Coût des fonds propres</h4>
                  <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-3">
                    Coût = Dividendes / Capitaux propres
                  </div>
                  <p className="text-sm text-blue-700">
                    Les dividendes ne sont pas déductibles
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Le Risque financier</h2>
            
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-red-900">Évaluation du risque</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">Risque de liquidité</h4>
                  <p className="text-red-700 text-sm">
                    Capacité à honorer les échéances de remboursement
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">Risque de solvabilité</h4>
                  <p className="text-red-700 text-sm">
                    Niveau d&apos;endettement et capacité de remboursement à long terme
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-800 mb-2">Risque de taux</h4>
                  <p className="text-red-700 text-sm">
                    Impact des variations de taux d&apos;intérêt sur les charges financières
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. L&apos;Indépendance financière</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-green-900">Préservation de l&apos;autonomie</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Dilution du capital</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Entrée de nouveaux actionnaires</li>
                    <li>• Partage du pouvoir de décision</li>
                    <li>• Réduction des dividendes par action</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Contraintes bancaires</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Covenants financiers</li>
                    <li>• Garanties exigées</li>
                    <li>• Contrôle de la gestion</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. La Flexibilité</h2>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-orange-900">Adaptabilité du financement</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-800 mb-2">Remboursement anticipé</h4>
                  <p className="text-orange-700 text-sm">
                    Possibilité de rembourser par anticipation sans pénalités
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-800 mb-2">Modularité</h4>
                  <p className="text-orange-700 text-sm">
                    Adaptation des échéances selon la trésorerie
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-800 mb-2">Renégociation</h4>
                  <p className="text-orange-700 text-sm">
                    Possibilité de renégocier les conditions en cours de contrat
                  </p>
                </div>
              </div>
            </div>

            {/* Matrice de décision */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Matrice de décision</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-3 text-left">Critère</th>
                      <th className="border border-gray-300 p-3 text-center">Autofinancement</th>
                      <th className="border border-gray-300 p-3 text-center">Emprunt</th>
                      <th className="border border-gray-300 p-3 text-center">Capital</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Coût</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">★★★</td>
                      <td className="border border-gray-300 p-3 text-center text-orange-600">★★</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">★</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Risque</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">★★★</td>
                      <td className="border border-gray-300 p-3 text-center text-orange-600">★★</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">★★★</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Indépendance</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">★★★</td>
                      <td className="border border-gray-300 p-3 text-center text-orange-600">★★</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">★</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Flexibilité</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">★★★</td>
                      <td className="border border-gray-300 p-3 text-center text-orange-600">★★</td>
                      <td className="border border-gray-300 p-3 text-center text-orange-600">★★</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-2">★★★ = Excellent | ★★ = Bon | ★ = Moyen</p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Synthèse méthodologique</h3>
              <ol className="text-indigo-800 space-y-2">
                <li>1. Identifier les besoins de financement (montant, durée)</li>
                <li>2. Évaluer chaque source selon les critères FRIC</li>
                <li>3. Pondérer les critères selon les priorités de l&apos;entreprise</li>
                <li>4. Choisir la solution optimale ou le mix de financements</li>
              </ol>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
            <a
              href="/section-1"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              ← Section I - Sources
            </a>
            <a
              href="/section-3"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Section III - Optimisation →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
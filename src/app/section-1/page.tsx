import BackToPlanButton from '@/components/content/BackToPlanButton';
import { TrendingUp, Building, Users, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function Section1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section I - Sources de Financement</h1>
              <p className="text-gray-600">Panorama des différentes sources de financement disponibles</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Classification des sources de financement</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Financement Interne */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-900">Financement Interne</h3>
                </div>
                <ul className="text-blue-800 space-y-2">
                  <li>• <strong>Autofinancement</strong> : bénéfices non distribués</li>
                  <li>• <strong>Amortissements</strong> : dotations aux amortissements</li>
                  <li>• <strong>Provisions</strong> : provisions pour risques</li>
                  <li>• <strong>Cessions d&apos;actifs</strong> : vente d&apos;immobilisations</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Avantage :</strong> Pas de coût financier direct, préserve l&apos;indépendance
                  </p>
                </div>
              </div>

              {/* Financement Externe */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-purple-900">Financement Externe</h3>
                </div>
                <ul className="text-purple-800 space-y-2">
                  <li>• <strong>Augmentation de capital</strong> : apports nouveaux</li>
                  <li>• <strong>Emprunts bancaires</strong> : crédits à terme</li>
                  <li>• <strong>Obligations</strong> : émission sur le marché</li>
                  <li>• <strong>Crédit-bail</strong> : location-financement</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-100 rounded">
                  <p className="text-sm text-purple-800">
                    <strong>Inconvénient :</strong> Coût financier, dilution ou endettement
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Moyen mnémotechnique</h3>
              <p className="text-yellow-800">
                <strong>CAPE</strong> pour les financements externes :
              </p>
              <ul className="text-yellow-800 mt-2 space-y-1">
                <li>• <strong>C</strong>apital (augmentation)</li>
                <li>• <strong>A</strong>ugmentation de capital</li>
                <li>• <strong>P</strong>rêts bancaires</li>
                <li>• <strong>E</strong>missions obligataires</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Détail des principales sources</h2>

            {/* Emprunts bancaires */}
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-green-900">Emprunts bancaires</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Court terme</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Découvert bancaire</li>
                    <li>• Crédit de campagne</li>
                    <li>• Escompte commercial</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Moyen terme</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Crédit d&apos;équipement</li>
                    <li>• Crédit immobilier</li>
                    <li>• Crédit-bail mobilier</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-800 mb-2">Long terme</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Prêt participatif</li>
                    <li>• Crédit-bail immobilier</li>
                    <li>• Prêt obligataire</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tableau comparatif */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tableau comparatif des sources</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-3 text-left">Source</th>
                      <th className="border border-gray-300 p-3 text-left">Coût</th>
                      <th className="border border-gray-300 p-3 text-left">Risque</th>
                      <th className="border border-gray-300 p-3 text-left">Flexibilité</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Autofinancement</td>
                      <td className="border border-gray-300 p-3 text-green-600">Faible</td>
                      <td className="border border-gray-300 p-3 text-green-600">Faible</td>
                      <td className="border border-gray-300 p-3 text-green-600">Élevée</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Emprunt bancaire</td>
                      <td className="border border-gray-300 p-3 text-orange-600">Moyen</td>
                      <td className="border border-gray-300 p-3 text-orange-600">Moyen</td>
                      <td className="border border-gray-300 p-3 text-orange-600">Moyenne</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Augmentation capital</td>
                      <td className="border border-gray-300 p-3 text-red-600">Élevé</td>
                      <td className="border border-gray-300 p-3 text-green-600">Faible</td>
                      <td className="border border-gray-300 p-3 text-red-600">Faible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Points clés à retenir</h3>
              <ul className="text-red-800 space-y-2">
                <li>• L&apos;autofinancement préserve l&apos;indépendance mais limite la croissance</li>
                <li>• Les emprunts permettent l&apos;effet de levier mais créent un risque financier</li>
                <li>• L&apos;augmentation de capital dilue le pouvoir mais renforce les fonds propres</li>
                <li>• Le crédit-bail évite l&apos;immobilisation de capitaux</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/introduction"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              ← Introduction
            </Link>
            <Link
              href="/section-2"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Section II - Critères de Choix →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
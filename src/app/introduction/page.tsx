import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Rocket, Lightbulb, Target } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-full">
              <Rocket className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Introduction</h1>
              <p className="text-gray-600">Concepts de base et définitions du financement d&apos;entreprise</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Objectifs d&apos;apprentissage</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Comprendre les enjeux du financement d&apos;entreprise</li>
                    <li>• Identifier les différents besoins de financement</li>
                    <li>• Maîtriser le vocabulaire financier essentiel</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce que le financement d&apos;entreprise ?</h2>
            
            <p className="text-gray-700 mb-6">
              Le financement d&apos;entreprise consiste à identifier, évaluer et choisir les sources de capitaux 
              nécessaires pour financer les activités, les investissements et la croissance de l&apos;entreprise.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Définition clé</h3>
              <p className="text-green-800">
                <strong>Financement :</strong> Ensemble des moyens monétaires mis à disposition d&apos;une entreprise 
                pour assurer son fonctionnement et son développement.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les besoins de financement</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Besoins permanents</h3>
                <ul className="text-purple-800 space-y-2">
                  <li>• Fonds de roulement</li>
                  <li>• Investissements durables</li>
                  <li>• Développement à long terme</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">Besoins temporaires</h3>
                <ul className="text-orange-800 space-y-2">
                  <li>• Trésorerie saisonnière</li>
                  <li>• Financement de commandes</li>
                  <li>• Besoins ponctuels</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Moyen mnémotechnique</h3>
                  <p className="text-yellow-800">
                    <strong>FRIC</strong> pour retenir les critères de choix :
                  </p>
                  <ul className="text-yellow-800 mt-2 space-y-1">
                    <li>• <strong>F</strong>lexibilité</li>
                    <li>• <strong>R</strong>isque</li>
                    <li>• <strong>I</strong>ndépendance</li>
                    <li>• <strong>C</strong>oût</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Enjeux stratégiques</h2>
            
            <p className="text-gray-700 mb-4">
              Le choix du financement impacte directement :
            </p>
            
            <ul className="text-gray-700 space-y-2 mb-8">
              <li>• La structure financière de l&apos;entreprise</li>
              <li>• Son autonomie et sa capacité de décision</li>
              <li>• Sa rentabilité et sa performance</li>
              <li>• Sa capacité d&apos;adaptation aux évolutions du marché</li>
            </ul>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">À retenir</h3>
              <p className="text-gray-700">
                Un bon choix de financement doit concilier les besoins de l&apos;entreprise, 
                ses contraintes financières et ses objectifs stratégiques à long terme.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-end mt-12 pt-8 border-t border-gray-200">
            <a
              href="/section-1"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Section I - Sources de Financement →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
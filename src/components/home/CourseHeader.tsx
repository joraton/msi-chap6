import { BookOpen, Clock, Target } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <span>Accueil</span>
        <span className="mx-2">{'>'}</span>
        <span>Cours</span>
        <span className="mx-2">{'>'}</span>
        <span className="text-blue-600 font-medium">Choix d&apos;un Financement</span>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-start gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
            <BookOpen className="h-12 w-12 text-white" />
          </div>

          {/* Course Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Choix d&apos;un Financement
            </h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Maîtrisez les différentes sources de financement et apprenez à choisir 
              la solution optimale selon le contexte de l&apos;entreprise.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span className="font-medium">Expert</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium">4h 15min</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
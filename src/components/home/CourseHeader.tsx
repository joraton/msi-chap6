import { BookOpen, Clock, Target } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 overflow-x-auto">
        <div className="flex items-center whitespace-nowrap">
          <span>Accueil</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span>Cours</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span className="text-blue-600 font-medium">Choix d&apos;un Financement</span>
        </div>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm mx-auto sm:mx-0">
            <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
          </div>

          {/* Course Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Choix d&apos;un Financement
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-4 sm:mb-6 leading-relaxed">
              Maîtrisez les différentes sources de financement et apprenez à choisir 
              la solution optimale selon le contexte de l&apos;entreprise.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full flex items-center gap-2">
                <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-medium text-sm sm:text-base">Expert</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full flex items-center gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-medium text-sm sm:text-base">4h 15min</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full flex items-center gap-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-medium text-sm sm:text-base">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
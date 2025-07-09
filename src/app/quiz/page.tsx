'use client';

import { useState } from 'react';
import Link from 'next/link';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Brain, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quel est l'avantage principal de l'autofinancement ?",
    options: [
      "Coût financier élevé",
      "Préservation de l'indépendance",
      "Dilution du capital",
      "Contraintes bancaires"
    ],
    correct: 1,
    explanation: "L'autofinancement préserve l'indépendance de l'entreprise car il ne nécessite ni apport d'actionnaires externes ni contraintes bancaires."
  },
  {
    id: 2,
    question: "Que signifie l'acronyme FRIC dans le choix d'un financement ?",
    options: [
      "Flexibilité, Risque, Indépendance, Coût",
      "Financement, Rentabilité, Investissement, Capital",
      "Fonds, Ressources, Intérêts, Crédit",
      "Finance, Ratio, Indicateur, Calcul"
    ],
    correct: 0,
    explanation: "FRIC représente les 4 critères fondamentaux : Flexibilité, Risque, Indépendance et Coût."
  },
  {
    id: 3,
    question: "L'effet de levier est positif quand :",
    options: [
      "Le coût de l'endettement > rentabilité économique",
      "La rentabilité économique > coût de l'endettement",
      "Les capitaux propres > dettes",
      "Le taux d'intérêt est fixe"
    ],
    correct: 1,
    explanation: "L'effet de levier est positif quand la rentabilité économique (Ra) est supérieure au coût de l'endettement (i)."
  },
  {
    id: 4,
    question: "Quel ratio d'autonomie financière est généralement recommandé ?",
    options: [
      "< 20%",
      "> 30%",
      "= 50%",
      "> 80%"
    ],
    correct: 1,
    explanation: "Un ratio d'autonomie financière supérieur à 30% (Capitaux propres / Total bilan) est généralement recommandé."
  },
  {
    id: 5,
    question: "Quelle source de financement offre la plus grande flexibilité ?",
    options: [
      "Emprunt bancaire long terme",
      "Augmentation de capital",
      "Autofinancement",
      "Crédit-bail"
    ],
    correct: 2,
    explanation: "L'autofinancement offre la plus grande flexibilité car l'entreprise n'a aucune contrainte externe de remboursement ou de contrôle."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="mb-8">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-10 w-10 text-orange-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz terminé !</h1>
              <p className="text-gray-600">Voici vos résultats</p>
            </div>

            <div className="mb-8">
              <div className={`text-6xl font-bold mb-4 ${
                percentage >= 80 ? 'text-green-600' : 
                percentage >= 60 ? 'text-orange-600' : 'text-red-600'
              }`}>
                {percentage}%
              </div>
              <p className="text-xl text-gray-700 mb-2">
                {score} / {questions.length} bonnes réponses
              </p>
              <p className={`text-lg font-medium ${
                percentage >= 80 ? 'text-green-600' : 
                percentage >= 60 ? 'text-orange-600' : 'text-red-600'
              }`}>
                {
                  percentage >= 80 ? 'Excellent ! Vous maîtrisez parfaitement le sujet.' :
                  percentage >= 60 ? 'Bien ! Quelques révisions seraient bénéfiques.' :
                  'À revoir. Relisez les sections du cours.'
                }
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {questions.map((q, index) => (
                <div key={q.id} className="bg-gray-50 p-4 rounded-lg text-left">
                  <div className="flex items-start gap-3">
                    {selectedAnswers[index] === q.correct ? (
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-600 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-2">{q.question}</p>
                      <p className="text-sm text-gray-600">
                        <strong>Votre réponse :</strong> {q.options[selectedAnswers[index]]}
                      </p>
                      {selectedAnswers[index] !== q.correct && (
                        <p className="text-sm text-green-600">
                          <strong>Bonne réponse :</strong> {q.options[q.correct]}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 mt-2">{q.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </button>
              <Link
                href="/questions-dscg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Cas pratique →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 p-3 rounded-full">
              <Brain className="h-8 w-8 text-orange-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">Quiz</h1>
              <p className="text-gray-600">Évaluation interactive de vos connaissances</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Question</div>
              <div className="text-2xl font-bold text-orange-600">
                {currentQuestion + 1} / {questions.length}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {question.question}
              </h2>

              <div className="space-y-4 mb-8">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => !showResult && handleAnswer(index)}
                    disabled={showResult}
                    whileHover={!showResult ? { scale: 1.02 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      showResult
                        ? index === question.correct
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : index === selectedAnswers[currentQuestion]
                          ? 'border-red-500 bg-red-50 text-red-800'
                          : 'border-gray-200 bg-gray-50 text-gray-500'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        showResult
                          ? index === question.correct
                            ? 'border-green-500 bg-green-500'
                            : index === selectedAnswers[currentQuestion]
                            ? 'border-red-500 bg-red-500'
                            : 'border-gray-300'
                          : 'border-gray-300'
                      }`}>
                        {showResult && (
                          index === question.correct ? (
                            <CheckCircle className="h-4 w-4 text-white" />
                          ) : index === selectedAnswers[currentQuestion] ? (
                            <XCircle className="h-4 w-4 text-white" />
                          ) : null
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8"
                  >
                    <h3 className="font-semibold text-blue-900 mb-2">Explication</h3>
                    <p className="text-blue-800">{question.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              {showResult && (
                <div className="flex justify-end">
                  <button
                    onClick={nextQuestion}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'} →
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
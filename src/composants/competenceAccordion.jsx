import { ChevronDown, ChevronUp } from "lucide-react";

export default function CompetenceAccordion({ index, competence, isOpen, onToggle }) {
  let content = null;

  if (index === 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Bloc 1 */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
          <h3 className="font-bold text-lg mb-2">Ce que j'ai appris</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Analyse des besoins clients + cahier des charges</li>
            <li>Conception fullstack avec rôles utilisateurs</li>
            <li>Back-end PHP : connexions, CRUD, structure modulaire</li>
            <li>Mini CRM en Java côté admin</li>
            <li>Maquette 3D en Three.js</li>
          </ul>
        </div>

        {/* Bloc 2 */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-lg mb-2">Nouveaux skills</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>PHP</li>
            <li>Java (backend admin)</li>
            <li>Three.js</li>
            <li>CRUD / Architecture modulaire</li>
            <li>Analyse fonctionnelle</li>
          </ul>
        </div>

        {/* Bloc 3 */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-lg mb-2">Pendant ces deux semestres</h3>
          <p className="text-sm text-gray-700">
            Travail en équipe sur des projets concrets, respect des délais, et montée en
            compétences sur le cycle complet de développement logiciel. J’ai appris à :
            <br /><br />
            • Créer un cahier des charges à partir des besoins clients, puis y répondre en développant une application complexe à partir de zéro.
            <br />
            • Utiliser des outils d’UX design pour concevoir une maquette de référence.
            <br />
            • Comprendre et appliquer les techniques de sécurité côté back-end en PHP.
            <br />
            • Travailler efficacement en binôme, proposer et intégrer des améliorations pertinentes.
            <br />
            • Interroger une base de données, récupérer ou modifier des données via des requêtes préparées.
            <br />
            • Inclure dynamiquement un fichier de connexion à la base de données en PHP.
            <br />
            • Mettre en place une base de données externe et indépendante avec Docker.
            <br />
            • Maîtriser GitLab et la gestion des branches.
            <br />
            • Analyser, critiquer et corriger du code.
            <br />
            • Côté Three.js : initiation au design 3D et intégration dans un site web.
          </p>
        </div>

        {/* Bloc 4 */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
          <h3 className="font-bold text-lg mb-2">Projets réalisés</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Application CRM avec gestion utilisateurs</li>
            <li>Visualisation 3D d'une peinture avec Three.js</li>
            <li>App fullstack avec interface admin + client</li>
          </ul>
        </div>
      </div>
    );
  }

  if (index === 1) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Bloc 1 */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
          <h3 className="font-bold text-lg mb-2">Ce que j'ai appris</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Méthodes d’optimisation (simplexe, gradient, linéaire)</li>
            <li>Cryptographie : congruences, restes chinois, petit théorème de Fermat, PGCD étendu</li>
            <li>Théorie des automates</li>
            <li>Conception d’algorithmes : backtracking, diviser pour régner, brute force</li>
            <li>Algorithmes stratégiques : MinMax, élagage alpha-bêta (IA pour jeux)</li>
            <li>Design patterns et modélisation UML en Java</li>
          </ul>
        </div>

        {/* Bloc 2 */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-lg mb-2">Nouveaux skills</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Choisir et implémenter un algorithme selon le type de problème</li>
            <li>Optimisation mathématique et algorithmique</li>
            <li>Création d’IA avec stratégies de décision</li>
            <li>Résolution de problèmes combinatoires</li>
            <li>Approche modulaire et réutilisable avec design patterns</li>
          </ul>
        </div>

        {/* Bloc 3 */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-lg mb-2">Pendant ces deux semestres</h3>
          <p className="text-sm text-gray-700">
            Ce parcours m’a permis de développer une véritable capacité à identifier et utiliser les bons algorithmes en fonction du contexte. J’ai appris à :
            <br /><br />
            • Reconnaître des structures de problèmes (arbre, graphe, tableau, matrice) et adapter la méthode de résolution.
            <br />
            • Résoudre des situations complexes avec des techniques avancées comme le backtracking ou le diviser pour régner.
            <br />
            • Appliquer des méthodes mathématiques pour optimiser des ressources ou valider des identités (en cryptographie).
            <br />
            • Mettre en œuvre des algorithmes dans un cadre objet structuré avec UML.
            <br />
            • Créer une IA capable de prendre des décisions dans un jeu (MinMax, alpha-bêta).
          </p>
        </div>

        {/* Bloc 4 */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
          <h3 className="font-bold text-lg mb-2">Projets réalisés</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li><strong>Mort-pions (Java)</strong> : IA MinMax avec élagage alpha-bêta, diagrammes UML</li>
            <li><strong>Projet d’optimisation</strong> : résolution d’un problème de surbooking</li>
            <li><strong>Projet automate</strong> : Déterminer si un language est minimal pour le calcul</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl shadow-md bg-white p-4 w-full max-w-5xl mx-auto transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left font-semibold text-xl"
      >
        {competence.title}
        {isOpen ? <ChevronUp className="transition-transform" /> : <ChevronDown />}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
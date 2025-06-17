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

  if (index === 2) {
  content = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {/* Bloc 1 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
        <h3 className="font-bold text-lg mb-2">Ce que j'ai appris</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Développement d’une API fullstack avec HTML, CSS, JavaScript, PHP et SQL</li>
          <li>Gestion des routes API en PHP pour servir les requêtes et interactions</li>
          <li>Conteneurisation de l’application avec Docker pour simplifier le déploiement</li>
          <li>Création et intégration d’un certificat SSL auto-signé pour sécuriser le site en HTTPS</li>
          <li>Configuration du fichier hosts pour gérer les noms de domaine locaux et tester HTTPS</li>
        </ul>
      </div>

      {/* Bloc 2 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-lg mb-2">Nouveaux skills</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>PHP & SQL pour le backend et la gestion des données</li>
          <li>JavaScript côté client et manipulation DOM</li>
          <li>Docker : création et gestion de conteneurs</li>
          <li>Configuration SSL auto-signé & HTTPS local</li>
          <li>Architecture API REST et gestion des routes</li>
        </ul>
      </div>

      {/* Bloc 3 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-lg mb-2">Pendant ce projet</h3>
        <p className="text-sm text-gray-700">
          J’ai conçu une API complète capable de détecter Asterix et Obelix sur des images, en combinant 
          frontend HTML/CSS/JS et backend PHP/SQL. 
          <br /><br />
          Pour faciliter le déploiement et la reproductibilité, nous avons conteneurisé l’application avec Docker, 
          simplifiant ainsi la configuration des environnements.
          <br /><br />
          J’ai aussi mis en place un certificat SSL auto-signé afin de sécuriser les échanges en HTTPS, 
          en configurant les noms de domaine locaux via le fichier hosts, pour une utilisation en développement.
        </p>
      </div>

      {/* Bloc 4 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
        <h3 className="font-bold text-lg mb-2">Projets réalisés</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>API Toutatix : reconnaissance d’images Asterix et Obelix (HTML, CSS, JS, PHP, SQL)</li>
          <li>Déploiement de l’API et du site via Docker</li>
          <li>Site fullstack sécurisé avec HTTPS grâce à un certificat SSL auto-signé</li>
          <li>Configuration réseau locale avec fichiers hosts pour gestion des domaines</li>
        </ul>
      </div>
    </div>
  );
}

if (index === 3) {
  content = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {/* Bloc 1 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
        <h3 className="font-bold text-lg mb-2">Ce que j'ai appris</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Mise en place d'un certificat SSL auto-signé pour sécuriser les échanges (HTTPS)</li>
          <li>Développement d'une API en PHP et SQL sécurisée par des requêtes préparées</li>
          <li>Interaction entre une API back-end et une application front-end en HTML, CSS, JS</li>
          <li>Gestion d'un système d'authentification admin pour protéger les accès sensibles</li>
          <li>Accès sécurisé à un historique des actions réservé aux administrateurs</li>
        </ul>
      </div>

      {/* Bloc 2 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-lg mb-2">Nouveaux skills</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Configuration SSL et HTTPS avec certificat auto-signé</li>
          <li>Sécurisation des bases de données via requêtes SQL préparées</li>
          <li>Développement API RESTful en PHP</li>
          <li>Gestion des sessions et authentification utilisateur</li>
          <li>Communication front-back via API JSON</li>
        </ul>
      </div>

      {/* Bloc 3 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-lg mb-2">Pendant ce projet</h3>
        <p className="text-sm text-gray-700">
          J’ai développé un site fullstack intégrant une API qui communiquait avec une base de données pour récupérer et modifier des données. 
          <br /><br />
          La sécurisation des échanges a été assurée par un certificat SSL auto-signé et la redirection HTTP vers HTTPS. 
          <br />
          L’API utilisait des requêtes SQL préparées pour éviter les injections et garantir l'intégrité des données. 
          <br />
          Un système d'authentification a permis de restreindre l'accès à certaines fonctionnalités, notamment la consultation d'un historique réservé aux administrateurs.
        </p>
      </div>

      {/* Bloc 4 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
        <h3 className="font-bold text-lg mb-2">Projet réalisé</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Site fullstack sécurisé avec API PHP/SQL et front-end HTML/CSS/JS</li>
          <li>Gestion sécurisée des données et des utilisateurs avec authentification admin</li>
          <li>Passage du projet sur Docker pour faciliter le déploiement</li>
        </ul>
      </div>
    </div>
  );
}


if (index === 4) {
  content = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {/* Bloc 1 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
        <h3 className="font-bold text-lg mb-2">Ce que j'ai appris</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Mise en place d'un Trello pour organiser les étapes de développement</li>
          <li>Recueil des besoins clients et définition des objectifs</li>
          <li>Planification avec diagramme de Gantt pour le suivi des délais</li>
          <li>Réalisation d'audits de sites web</li>
          <li>Rédaction et proposition de devis adaptés</li>
        </ul>
      </div>

      {/* Bloc 2 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-lg mb-2">Nouveaux skills</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Gestion agile avec Trello</li>
          <li>Planification de projet (Gantt)</li>
          <li>Analyse d'audit web</li>
          <li>Communication client et élaboration de devis</li>
          <li>Suivi de projet selon besoins métiers</li>
        </ul>
      </div>

      {/* Bloc 3 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-lg mb-2">Pendant ces projets</h3>
        <p className="text-sm text-gray-700">
          J'ai appris à structurer le suivi de projet en fonction des besoins métiers et des attentes des utilisateurs. Cela a impliqué :
          <br /><br />
          • La mise en place d'outils collaboratifs (Trello) pour suivre les tâches et la progression.
          <br />
          • La définition claire des étapes via un diagramme de Gantt, facilitant la gestion des délais.
          <br />
          • La réalisation d'audits de sites existants pour identifier les améliorations possibles.
          <br />
          • La communication avec les clients pour proposer des devis adaptés, en fonction des résultats de l'audit et des objectifs définis.
          <br />
          • L'adaptation constante du suivi selon les retours utilisateurs et l'évolution du projet.
        </p>
      </div>

      {/* Bloc 4 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
        <h3 className="font-bold text-lg mb-2">Projets réalisés</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Mise en place d’un Trello pour un projet web complet</li>
          <li>Création d’un planning Gantt pour la gestion des tâches</li>
          <li>Audit et proposition de devis pour un site internet</li>
        </ul>
      </div>
    </div>
  );
}

if (index === 5) {
  content = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {/* Bloc 1 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
        <h3 className="font-bold text-lg mb-2">Ce que j'ai appris</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Répartition équitable des tâches selon les compétences front-end et back-end</li>
          <li>Communication régulière via Git, Discord et Snapchat</li>
          <li>Utilisation des branches Git (main et develop) pour organiser le code</li>
          <li>Collaboration efficace sans réunions formelles</li>
          <li>Responsabilisation sur son périmètre de développement</li>
        </ul>
      </div>

      {/* Bloc 2 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-lg mb-2">Nouveaux skills</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Gestion de projet agile en mode étudiant</li>
          <li>Communication asynchrone efficace</li>
          <li>Maîtrise des branches Git et gestion des merges</li>
          <li>Collaboration multi-plateforme (Git, Discord, Snapchat)</li>
          <li>Partage des responsabilités selon domaines d’expertise</li>
        </ul>
      </div>

      {/* Bloc 3 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-lg mb-2">Pendant ces missions</h3>
        <p className="text-sm text-gray-700">
          Au sein de l’équipe, j’ai appris à collaborer efficacement en m’appuyant sur :
          <br /><br />
          • Une répartition claire et équitable des tâches, adaptée aux compétences de chacun (front/back).
          <br />
          • Une communication fluide via Git pour le code, et Discord/Snapchat pour l’échange rapide d’informations.
          <br />
          • La gestion des branches Git (main et develop) pour assurer la stabilité et le suivi des évolutions.
          <br />
          • Une autonomie et une responsabilité sur les modules qui m’étaient attribués.
          <br />
          • Un travail collaboratif sans réunions formelles, basé sur la confiance et l’organisation.
        </p>
      </div>

      {/* Bloc 4 */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm col-span-2">
        <h3 className="font-bold text-lg mb-2">Projets réalisés</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Développement front-end et back-end en équipe</li>
          <li>Gestion des branches Git pour synchroniser les contributions</li>
          <li>Communication et coordination via Discord et Snapchat</li>
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
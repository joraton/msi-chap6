'use client';

import { useState } from 'react';
import Link from 'next/link';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, ChevronDown, ChevronRight, Award, Calendar, FileText, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DSCGQuestion {
  id: string;
  session: string;
  dossier: string;
  question: string;
  correction: string;
  context?: string;
}

const dscgQuestions: DSCGQuestion[] = [
  {
    id: '2023-1',
    session: '2023',
    dossier: 'Dossier 1, Question 9',
    question: 'Après avoir défini la notion d\'urbanisation du Système d\'information, présenter un minimum de trois éléments de révision des documents d\'urbanisation dans le cadre des bascules de GED chez vos clients.',
    correction: 'L\'**urbanisation du système d\'information** vise à assurer la **cohérence des évolutions et transformations** du SI avec les objectifs métiers et opérationnels de l\'entreprise, en respectant sa stratégie. Elle assure la direction de la transformation continue du SI et la conservation d\'un **SI applicatif homogène** lors de chaque évolution ou changement de processus informatique. L\'urbanisation schématise le SI en s\'appuyant sur des concepts similaires à l\'urbanisme humain, incluant des notions d\'**infrastructure**, de flux, de service, d\'organisation, d\'utilisateurs, de sources de données et de valeurs.\n\nLes éléments de révision des documents d\'urbanisation impactés par la bascule d\'une GED (Gestion Électronique Documentaire) incluent:\n\n• Les **éléments d\'infrastructure Technique** : la nouvelle GED aura son propre Dossier d\'Architecture Technique (DAT), qui fait partie de l\'urbanisation du SI.\n• Les **éléments d\'interface** : les flux entre les applications du SI devront être décrits comme étant orientés vers la nouvelle GED.\n• Les **éléments de sécurité** : l\'urbanisation du SI doit garantir le respect des profils et sessions de connexion des utilisateurs pour l\'accès au service.\n• Les **éléments de processus** : les nouvelles fonctionnalités applicatives de la GED doivent être cataloguées sous forme de cartographie des processus.\n• Les **éléments d\'architecture applicative** : la nouvelle GED, remplaçant l\'ancienne, doit être identifiée avec ses versions, ses serveurs applicatifs (principaux, secondaires, bases de données, serveurs de stockage) dans la mise à jour de l\'urbanisation.',
    context: 'Une solution de GED est une application de type **« Client-Serveur »**. Le serveur de GED inclut un service de stockage, une base de données pour les informations sur les documents, et une application avec un serveur web, des paramètres pour organiser les documents et déterminer les droits et permissions, ainsi qu\'un moteur de recherche.'
  },
  {
    id: '2023-2',
    session: '2023',
    dossier: 'Dossier 3, Question 10',
    question: 'Définir le rôle des PDP (Plateforme de Dématérialisation Partenaire) dans le cadre de la mise en place de la nouvelle loi de finances 2024-2026.',
    correction: 'Les **Plateformes de Dématérialisation Partenaire (PDP)** sont des services fournis par des prestataires certifiés qui permettent aux entreprises d\'assurer l\'émission et la réception des factures selon les nouvelles normes. Elles agissent comme un **intermédiaire mandaté** pour faciliter le dépôt et la récupération des factures sur la Plateforme de Facturation Française (PPF), offrant des valeurs ajoutées telles que la traçabilité, le pilotage des factures, des services complémentaires et la conversion de flux comme l\'EDI.'
  },
  {
    id: '2023-3',
    session: '2023',
    dossier: 'Dossier 3, Question 13',
    question: 'Concernant la sécurité du Système d\'Information, décrire au moins 3 points d\'attention que la DSI (Direction des Systèmes d\'Information) doit intégrer dans le cadre de la mise en œuvre de la nouvelle loi de finances 2024-2026.',
    correction: 'La DSI doit intégrer plusieurs points d\'attention pour la sécurité du SI:\n\n• **Sécurité de contrôle d\'accès** : Les données sensibles (factures) étant sur une plateforme externe, l\'accès pour déposer ou récupérer ces flux doit être sécurisé pour garantir la pérennité de l\'accès et prévenir l\'usurpation de profil.\n• **Confidentialité des informations** : La Plateforme Française de Facturation devenant le référentiel, il est crucial de maintenir l\'organisation des permissions d\'accès (habilitations) pour ne pas divulguer d\'informations confidentielles.\n• **Autonomie et conservation de l\'intégrité des données** : L\'entreprise doit pouvoir produire l\'ensemble des documents pour la durée légale, et une solution de GED est recommandée pour garantir l\'intégrité des données des factures, car la PFF ne reprend pas l\'historique.\n• **RGPD** : Les factures transitant par la PFF ou un PDP restent sous la responsabilité de l\'entreprise d\'un point de vue RGPD, ce qui implique l\'application des processus RGPD (anonymisation, pseudonymisation, droit à l\'oubli, contrôle d\'accès).\n• **Haute disponibilité des flux de facture** : Le dépôt obligatoire des factures de vente sur la PFF rend ce flux critique, la sécurité du SI doit donc garantir le niveau de haute disponibilité requis pour éviter les impacts financiers.\n• **Synergie capitalisée** : La DSI doit adapter les applications actuelles (comptabilité, ERP) pour aligner les processus aux objectifs de digitalisation et d\'automatisation des déclarations réglementaires.'
  },
  {
    id: '2022-1',
    session: '2022',
    dossier: 'Dossier 1, Question 2',
    question: 'Modéliser le nouveau schéma d\'architecture que les trois sociétés doivent atteindre fin 2022.',
    correction: 'La modélisation du nouveau schéma d\'architecture pour l\'indépendance de Digital Integration implique des modifications spécifiques aux composants du SI:\n\n• **iTrace Espagne** et les **solutions Cloud (SaaS)** restent inchangées, car le SaaS est facturé au service et peut être facilement cloisonné.\n• Au siège de **SD3i – Software Intelligence** (Luxembourg) : Suppression de la GED de Digital Integration, de la base de données de SD3i France, et du lien VPN avec Digital Integration. Les autres solutions groupes restent.\n• Chez **Digital Integration** : Ajout d\'un serveur de sauvegarde, de la GED et de l\'ERP, d\'une base de données pour l\'ERP et la GED, et d\'un annuaire Active Directory (optionnel). Suppression du VPN. Conservation du modem/routeur pour le CRM et la messagerie. Le schéma visuel représente ces interconnexions.'
  },
  {
    id: '2022-2',
    session: '2022',
    dossier: 'Dossier 3, Question 1',
    question: 'Définir les deux modes de distribution (SaaS et On Premise) et proposer des arguments permettant de choisir un type de distribution pour chaque application.',
    correction: '**On-Premise** : Les infrastructures informatiques et logicielles sont hébergées et maintenues par le propre service informatique de l\'entreprise. Elles sont acquises par un investissement en licence.\n\n**SaaS (Software as a Service)** : C\'est une solution logicielle applicative hébergée dans le cloud et exploitée par un tiers (fournisseur de service). Elle est accessible via Internet depuis un navigateur web et est généralement facturée par abonnement ou à l\'usage.\n\n**Choix de distribution pour les applications** :\n• **CRM** : Généralement proposé en **SaaS** sur le marché pour sa souplesse, son adaptation au nombre d\'utilisateurs et de fonctionnalités, et son accessibilité facile (mobile, web public) grâce à l\'hébergement Cloud.\n• **ERP** : Souvent en **On Premise** pour les grandes organisations, bien que des ERP spécifiques existent en SaaS. L\'hébergement interne de l\'ERP (cœur de la production et de la gestion financière) permet une meilleure maîtrise de la sécurité.\n• **GED** : Souvent en **On Premise** pour des raisons de sécurité d\'accès et de maîtrise du stockage des documents, qui peut être plus économique en interne.'
  },
  {
    id: '2022-3',
    session: '2022',
    dossier: 'Dossier 3, Question 2',
    question: 'Citer un avantage et un inconvénient distinct d\'une solution « tout en un ».',
    correction: '**Avantages d\'une solution "tout en un"** :\n• **Relation avec un prestataire unique** : simplifie la relation client-fournisseur et l\'administration.\n• **Interopérabilité native des applications** : assure des référentiels uniques et communs, évitant les interfaces entre applications et facilitant la navigation.\n• **Avantages en coûts et simplification du SI** : l\'architecture applicative unique diminue les coûts d\'exploitation et simplifie l\'administration.\n\n**Inconvénients d\'une solution "tout en un"** :\n• **Dépendance accrue envers un fournisseur unique** : augmente le risque en cas de défaut du prestataire.\n• **Impossibilité de choisir la "meilleure" solution pour chaque domaine** : une solution "tout en un" n\'est probablement pas la meilleure pour chaque fonction métier comparée à des solutions choisies individuellement.\n• **Choix unique du mode de distribution (SaaS ou On Premise)** : peut ne pas être adapté à toutes les applications si des solutions mixtes sont nécessaires.'
  },
  {
    id: '2022-4',
    session: '2022',
    dossier: 'Dossier 3, Question 3',
    question: 'Dans le cadre du RGPD, est-ce que le DPO actuel du groupe SD3i peut devenir le DPO de la société DIGITAL INTEGRATION après le 1er janvier 2022, tout en conservant sa position de DPO pour les 2 autres sociétés ? Expliquer votre réponse.',
    correction: 'Oui, un **DPO peut être mutualisé** et exercer son rôle pour plusieurs entités juridiques distinctes, même s\'il est externe à l\'organisation. L\'article 37 du RGPD permet à un groupe d\'entreprises de désigner un seul délégué à la protection des données, à condition qu\'il soit facilement joignable de chaque établissement.'
  },
  {
    id: '2021-1',
    session: '2021',
    dossier: 'Dossier 1, Question 1',
    question: 'Vous décrirez simplement 2 types d\'organisations SI possibles pour supporter la future Direction des Systèmes d\'information en cohérence avec le contexte.',
    correction: 'Les organisations les plus courantes pour le SI sont:\n\n• Un **Système d\'Information fusionné entre les 3 organismes** : centralise les éléments du SI (infrastructure, progiciels, membres de la DSI) sur un seul site, avec interconnexion des réseaux vers le "siège" de la DSI. Le projet de fusion regroupe les solutions au sein d\'un même SI.\n• Un **Système d\'Information divisé entre les 3 organismes** : conserve une DSI répartie mais avec un SI unique. Les infrastructures restent interconnectées, les membres de la DSI ne sont pas forcément regroupés, et les services peuvent être partiellement fusionnés (certains outils métiers regroupés, d\'autres séparés comme les serveurs d\'impression).\n• Un **Système d\'Information indépendant entre les 3 organismes** : chaque SI reste séparé et indépendant. Un service complémentaire de "reporting groupe" peut être mis en œuvre.\n• Un **Système d\'information externalisé** : peut être externalisé auprès d\'un prestataire externe ou d\'un Centre de Service Partagé (CSP). Cela permet de se libérer de certaines contraintes d\'investissement via le SaaS, mais nécessite une réorganisation profonde des rôles de la DSI vers la "consommation des services". Le SI reste unique, nécessitant un projet de fusion.'
  },
  {
    id: '2021-2',
    session: '2021',
    dossier: 'Dossier 1, Question 2',
    question: 'Après avoir rappelé la définition d\'un schéma directeur (SD), il vous est demandé d\'établir un schéma directeur de cette transformation dans un des cas présentés à la question 1.',
    correction: 'Le **schéma directeur du Système d\'Information** est un document de synthèse qui définit le SI actuel, le **SI cible**, et les transformations à opérer pour atteindre les objectifs fixés. Il vise à aligner la stratégie du SI sur la stratégie de l\'organisation.\n\nLe schéma directeur d\'une transformation SI (par exemple, vers un SI indépendant) se décompose en plusieurs phases :\n\n• **Phase 1 (Cadrage et démarrage du projet)** : Audit des SI actuels, définition des besoins et fonctionnalités du nouveau SI. Livrables: Plan d\'Assurance Qualité (PAQ), présentation du projet, contractualisation avec les acteurs externes, bilan des audits, cahier de spécification fonctionnelle, contractualisation pour l\'acquisition de produits et services.\n• **Phase 2 (Modélisation du nouveau SI)** : Paramétrage des solutions, recette technique. Livrables: Installation des nouvelles infrastructures, définition de la nouvelle organisation, paramétrage des solutions.\n• **Phase 3 (Préparation à la bascule)** : Recette fonctionnelle et métier, "run à blanc" de la bascule. Livrables: PV de recette, validation du Storyboard de bascule.\n• **Phase 4 (Go/NoGo de la bascule)** : Passage au nouveau SI. Livrable: Compte-rendu de la bascule.'
  },
  {
    id: '2021-3',
    session: '2021',
    dossier: 'Dossier 1, Question 3',
    question: 'Vous proposerez deux 2 indicateurs de coût du Système d\'Information que vous définirez et caractériserez simplement.',
    correction: 'Deux indicateurs de coût du SI sont :\n\n• Le **« Coût des infrastructures SI »** : évalue le coût (interne ou externe) de la fourniture d\'infrastructure (serveurs, postes informatiques, imprimantes, réseaux, etc.), incluant le coût récurrent de remplacement des infrastructures.\n• Les **« Ressources humaines liées à la DSI »** : évalué en ETP (Equivalent Temps Plein) ou en € par an, ce coût rassemble l\'ensemble des collaborateurs internes ou externes de la DSI.\n\nAutres possibles: Coût de la maintenance du SI, Coûts de disponibilité (PCA/PRA), Coût de « Valorisation du SI », Valeur d\'amortissement du SI, Coût d\'opportunité du SI.'
  },
  {
    id: '2021-4',
    session: '2021',
    dossier: 'Dossier 3, Question 11',
    question: 'Quelles sont les améliorations recommandées sur le SI Achat pour conserver un service opérationnel dans un contexte d\'épidémie comme le Covid19 ?',
    correction: 'Les améliorations recommandées incluent l\'amélioration, la simplification et la sécurisation de l\'accès aux données achats numérisées, par exemple en déployant des outils de type **GED (Gestion Électronique des Documents)** avec des **solutions hybrides** (déployées sur site et/ou à distance via le **cloud computing/informatique en nuage**). Il est impératif de concevoir et rédiger un **plan de continuité d\'activité (PCA)** et/ou un **plan de reprise d\'activité (PRA)**, en vérifiant la fiabilité du fournisseur cloud et prévoyant la réversibilité. L\'usage d\'**accès sécurisé au SI** de l\'entreprise avec l\'utilisation de **VPN** et d\'**outils de communication** est également pertinent.'
  },
  {
    id: '2019-1',
    session: '2019',
    dossier: 'Dossier 1, Question 1',
    question: 'Pourquoi une démarche d\'urbanisation du SI est-elle, dans ce cas, opportune et pertinente ?',
    correction: 'L\'**urbanisation** est une approche visant à faciliter l\'évolutivité et l\'adéquation des SI avec les processus, à mettre en évidence les fonctions transverses, et à renforcer la cohérence du SI, tout en améliorant son efficacité et en préservant le patrimoine informationnel.\n\nElle est opportune car c\'est le "bon moment" pour déployer de nouveaux outils (CRM, P&T) adossés à l\'ERP existant, face à une concurrence accrue. Elle est pertinente car SOLIDOR a construit son SI progressivement, sans schéma directeur global, et a besoin de faire évoluer les applications existantes tout en intégrant de nouvelles solutions de manière fluide. L\'urbanisation implique également une réflexion sur les **coûts maîtrisés**.'
  },
  {
    id: '2019-2',
    session: '2019',
    dossier: 'Dossier 2, Question 1',
    question: 'En vous basant sur le modèle d\'alignement stratégique, que vous rappellerez simplement, il vous est demandé d\'analyser l\'adéquation entre la stratégie de SOLIDOR et sa stratégie SI.',
    correction: 'Le modèle d\'alignement stratégique, développé par Henderson et Venkatraman (1993), vise la cohérence de la stratégie des SI et de la stratégie générale de l\'entreprise. Il repose sur quatre domaines :\n\n1. La **stratégie de l\'entreprise** (objectifs, produits, marchés).\n2. La **stratégie de développement technologique** (domaine technologique, compétences, gouvernance).\n3. L\'**infrastructure et les processus de l\'entreprise** (administrative, d\'affaires, managériaux).\n4. L\'**infrastructure et les processus des SI** (architecture, portefeuille d\'applications, processus de développement, contrôle).\n\nL\'analyse pour SOLIDOR montre un alignement entre la stratégie d\'entreprise (accroissement des ventes via amont/aval) et la DSI qui soutient ces objectifs par le développement de nouvelles dynamiques. L\'**architecture SI** évolue progressivement avec les besoins métier, ayant déjà intégré un ERP. Cependant, l\'introduction de nouvelles solutions implique une **harmonisation des processus managériaux** et une attention aux changements induits pour éviter les résistances.'
  },
  {
    id: '2019-3',
    session: '2019',
    dossier: 'Dossier 2, Question 3',
    question: 'Après avoir expliqué ce qu\'est le mode SaaS, sur lequel est basé la solution Planning & Tracking développée par Aleth, vous en expliquerez simplement les forces et faiblesses.',
    correction: 'Le **mode Software as a Service (SaaS)** est un mode de distribution en **cloud computing** d\'une solution logicielle. L\'éditeur fournit l\'accès à l\'application web, l\'utilisateur n\'en supportant pas ou peu l\'installation sur son propre système.\n\n**Forces (avantages) du SaaS** :\n• Flexibilité de la solution.\n• Facilité d\'usage.\n• Investissement initial faible (transformé en frais d\'exploitation).\n• Mises à jour facilitées (à la charge de l\'éditeur).\n• Sécurité assurée par le prestataire.\n• Lisibilité des tarifs (pay per use).\n\n**Faiblesses (inconvénients) du SaaS** :\n• Forte dépendance envers le prestataire.\n• Vulnérabilité des données (questions sur leur protection, localisation, accès).\n• Complexité de la contractualisation/tarification.\n• Perte de compétences internes (DSI) à terme.\n• Coût de réversibilité élevé en cas de souhait de retour en arrière.'
  },
  {
    id: '2016-1',
    session: '2016',
    dossier: 'Dossier 1, Question 1',
    question: 'Après avoir défini le concept d\'alignement stratégique (AS), lister les principaux domaines à appréhender dans la logique du processus d\'AS du Système d\'information (SI) de SOVANI?',
    correction: 'L\'**alignement stratégique** consiste à faire coïncider les potentialités du système d\'information avec la stratégie « métier » définie par SOVANI. Le SI doit répondre aux besoins de la stratégie pour servir les intérêts de la société.\n\nLes principaux domaines du SI à repenser pour cette concordance incluent :\n• **Équipements, plateforme, applications, connectivité, espaces de stockage** pour les objets connectés.\n• **Interfaces ou relais entre Internet et les objets connectés** (réseaux cellulaires, réseaux dédiés).\n• **Interopérabilité des applicatifs** du système comptable et commercial.\n• **Connexion des différents bureaux** et parties prenantes (fournisseurs, clients).\n• **Fonctionnement performant de la logistique**.\n• **Hébergement et stockage des données échangées** (confidentialité, sécurité, localisation).\n• **Intégration des risques SI** pour assurer la continuité de services.\n• Repenser la **sécurité du SI**, car un serveur unique n\'est pas en phase avec la stratégie pour des domaines sensibles.'
  },
  {
    id: '2016-2',
    session: '2016',
    dossier: 'Dossier 1, Question 3',
    question: 'En tenant compte de l\'historique de SOVANI, justifier le recours à une réflexion sur l\'urbanisation du SI.',
    correction: 'La **refonte applicative** signifie repenser et reconstruire l\'ensemble de la **cartographie applicative** de SOVANI.\n\nLes raisons de cette réflexion sont :\n• Le SI a été construit **« au fur et à mesure, en urgence parfois, sans véritable schéma directeur »**, ce qui a conduit à des applications globalement non intégrées.\n• La situation actuelle présente une **succession de choix non rationnels** et un manque d\'implication des services métiers.\n• De nouveaux besoins liés aux **objets connectés** (connexions internet, stockage de données) nécessitent une mise en place intégrée.\n• L\'urbanisation doit permettre d\'isoler des **"zones, quartiers et blocs fonctionnels aptes à interagir avec le reste du système"** pour améliorer la qualité des transmissions des données (interopérabilité).'
  },
  {
    id: '2016-3',
    session: '2016',
    dossier: 'Dossier 2, Question 5',
    question: 'Dans le contexte du projet de modernisation de l\'ERP de SOVANI, proposer des éléments de comparaison entre les 3 alternatives cloud existantes.',
    correction: 'Trois solutions cloud sont disponibles :\n\n• **Cloud privé (ou dédié)** : Accès à un serveur distant via internet, dédié à une seule entreprise. Garantit l\'étanchéité et la sécurité des traitements/données. Les ressources peuvent être chez SOVANI ou une ESN. Coût plus élevé, mais plus sécurisé et adapté aux besoins spécifiques.\n• **Cloud public** : Matériel et services à distance fournis par un prestataire pour plusieurs entreprises. Coût moindre car les ressources et services applicatifs sont partagés.\n• **Cloud hybride** : Concilie le meilleur du cloud privé et public. Met à disposition des ressources sur une partie publique et restreint l\'accès pour les ressources plus sensibles. Le coût est intermédiaire.'
  },
  {
    id: '2016-4',
    session: '2016',
    dossier: 'Dossier 3, Question 1',
    question: 'Quel type de réseau peut-on mettre en place entre le service R&D de Perpignan et le bureau de prototypage situé à Lyon afin de garantir la sécurité des échanges ? Préciser les caractéristiques de fonctionnement de ce réseau.',
    correction: 'Pour garantir la sécurité des échanges confidentiels et sensibles via internet entre les sites géographiquement distants, la mise en place d\'un **Virtual Private Network (VPN)** ou **tunnelisation** est nécessaire. Il s\'agit d\'un ensemble de modalités sécuritaires lors du transport de données d\'un réseau physique à un autre via Internet, souvent appelé **réseau étendu**.'
  },
  {
    id: '2017-1',
    session: '2017',
    dossier: 'Dossier 2, Question 4',
    question: 'Apprécier le choix d\'AIDADOM de recourir à un site central d\'hébergement.',
    correction: 'Recourir à un **site central d\'hébergement (Datacenter)** présente des avantages et des limites :\n\n**Avantages** : Mutualisation et rationalisation des ressources matérielles, niveau de sécurité élevé (accès, surveillance, redondance équipements, alimentation, climatisation, anti-incendie), sécurisation des échanges entre applications, réduction des coûts d\'exploitation/administration, professionnalisation des solutions, scalabilité facilitée, disponibilité accrue.\n\n**Limites** : Temps d\'accès aux données potentiellement plus long, vieillissement des Datacenters traditionnels, coût du Giga élevé, multiples risques (dépendance prestataire, sécurité/confidentialité des données si serveurs mutualisés, perte de productivité en cas de panne réseau, interception de données, perte de données, réversibilité), questions juridiques sur la localisation des centres de données.'
  },
  {
    id: '2017-2',
    session: '2017',
    dossier: 'Dossier 2, Question 5',
    question: 'Décrire le mode "full-Web" et expliquer comment il peut être vecteur de performance.',
    correction: 'Le **mode "full-Web"** signifie que l\'application est **totalement en ligne**, accessible uniquement via un navigateur connecté à Internet.\n\nIl est vecteur de performance car il réduit le coût des applications et améliore la qualité de services, rendant les utilisateurs plus efficaces et productifs. Il permet aux employés d\'utiliser leurs propres équipements (BYOD) en se connectant à leur environnement de travail quelle que soit leur localisation ou leur matériel, avec une simple connexion Internet.'
  },
  {
    id: '2017-3',
    session: '2017',
    dossier: 'Dossier 2, Question 6',
    question: 'En quoi la virtualisation et la haute disponibilité des serveurs AidSys peuvent-ils avoir un impact sur le coût total de possession ?',
    correction: '**Virtualisation des serveurs** : Consiste à faire fonctionner plusieurs serveurs virtuels sur un seul serveur physique. L\'objectif est de mutualiser les capacités, ce qui réduit les investissements en infrastructures physiques et les coûts (consommation électrique, nombre de serveurs physiques, matériel associé comme onduleurs, sauvegarde, climatisation, locaux sécurisés).\n\n**Haute disponibilité des serveurs** : Les dispositifs de tolérance de panne réduisent ou éliminent les temps d\'interruption de service, et donc les coûts induits par ces interruptions (impossibilité de travailler, ralentissements).\n\nCes deux éléments ont un **impact positif sur le Coût Total de Possession (TCO)**, qui se trouve réduit.'
  },
  {
    id: '2018-1',
    session: '2018',
    dossier: 'Dossier 1, Question 1',
    question: 'Quels sont les organes à mettre en place pour la gestion de ce projet ? Préciser leur composition et leur rôle respectif.',
    correction: 'La gestion d\'un projet de remplacement de PGI (Progiciel de Gestion Intégré) implique la mise en place de plusieurs organes :\n\n• Le **Comité de pilotage** : Organe directeur de la maîtrise d\'ouvrage, présidé par un directeur de projet, composé de représentants opérationnels, du responsable informatique, et d\'experts. Ses rôles incluent le lancement du projet, la définition des choix stratégiques d\'**architecture** et des orientations de sécurité, l\'accompagnement de la conduite du changement, et le management du projet (suivi, risques, contrôle qualité).\n• Le **Comité des utilisateurs** : Composé d\'utilisateurs représentatifs des domaines d\'activité concernés. Ses attributions couvrent l\'expression détaillée des besoins, la validation des solutions, la participation aux tests et formations, la réception du progiciel, et l\'accompagnement du déploiement.\n• Le **Chef de projet** : Assure le pilotage du projet, coordonne les acteurs, rend compte à la direction, supervise les tests et le recettage, et valide les supports.'
  },
  {
    id: '2018-2',
    session: '2018',
    dossier: 'Dossier 1, Question 3',
    question: 'Lors du choix d\'un PGI, quels sont les points auxquels l\'entreprise doit être attentive ? Citer et expliciter quatre points clés.',
    correction: 'Lors du choix d\'un PGI, l\'entreprise doit être attentive à :\n\n• **PGI multilingue, multidevises et multi-référentiel comptable** pour l\'intégration de nouvelles entités.\n• **Coût global du PGI (TCO)** : inclut les coûts de licence, de maintenance (mises à jour), d\'installation (équipe projet, intégrateur, formation), d\'adaptation de l\'environnement matériel, et les coûts cachés (baisse de productivité).\n• **Adaptabilité du PGI (paramétrage)** : la souplesse du PGI détermine son degré d\'adaptation au contexte de l\'entreprise. Un PGI trop rigide impose d\'adapter l\'entreprise au PGI.\n• **Complexité du PGI** : un paramétrage complexe peut augmenter la durée et le coût du projet ou entraîner des difficultés d\'utilisation.\n• **Expérience et pérennité de l\'éditeur** : la relation s\'inscrit dans la durée, et l\'expérience de l\'éditeur garantit la pertinence des choix et sa capacité à perdurer.\n• **Conditions de mise en œuvre** : modes d\'accès possibles (**client lourd, client léger, solution cloud**), ressources nécessaires, aspects juridiques.'
  },
  {
    id: '2018-3',
    session: '2018',
    dossier: 'Dossier 3, Question 2',
    question: 'Après avoir défini ce qu\'est un VPN, indiquer les clés de cryptage nécessaires en précisant de manière détaillée leur rôle lors d\'un échange sécurisé par VPN depuis le siège à Angoulême vers l\'usine de Challans.',
    correction: 'Un **VPN (Virtual Private Network)** est un **tunnel sécurisé** établi entre deux sites via le réseau Internet. Les informations sont cryptées à l\'entrée et décryptées à la sortie. La sécurisation s\'effectue par une **clé de session (cryptage symétrique)**, envoyée préalablement par **cryptage asymétrique**.\n\nLe processus détaillé implique que chaque site génère son propre **couple de clé publique/privée** pour un cryptage asymétrique. L\'émetteur (le siège) génère ensuite une clé de session symétrique, la crypte avec la clé publique du destinataire (l\'usine de Challans) et l\'envoie. L\'usine utilise sa clé privée pour déchiffrer la clé de session reçue. Une fois que les deux sites possèdent la même clé de session, l\'échange crypté peut commencer.'
  },
  {
    id: '2018-4',
    session: '2018',
    dossier: 'Dossier 3, Question 3',
    question: 'Présenter quatre dispositifs, autres que le VPN, permettant à Mirlac de se prémunir des cyberattaques ou d\'en limiter les conséquences.',
    correction: 'Pour se prémunir des cyberattaques ou en limiter les conséquences, Mirlac peut mettre en place les dispositifs suivants :\n\n• **Renforcer la sécurité des machines connectées** et mettre les serveurs importants et le site Web dans une **DMZ (DeMilitarised Zone)**, une zone tampon isolée du réseau privé.\n• Adopter une **architecture composée de plusieurs serveurs** offrant le même service pour répartir la charge et avoir un ralentissement acceptable en cas d&apos;attaque.\n• Mettre en place un **serveur tampon (cleaning center)** pour filtrer et nettoyer le trafic, empêchant les requêtes malveillantes d&apos;atteindre le serveur cible.\n• **Identifier et bloquer les adresses IP** d&apos;attaque au niveau du pare-feu ou du serveur (bien que moins efficace contre les attaques distribuées).\n• Mettre en place une **politique de continuité d&apos;activité** avec des processus d&apos;urgence et une sensibilisation des utilisateurs.\n• **Auditer régulièrement le système d&apos;information**.\n• Souscrire un **contrat de cyber-assurance**.'
  }
];

export default function QuestionsDSCGCompletePage() {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [selectedSession, setSelectedSession] = useState<string>('all');

  const toggleQuestion = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  const sessions = ['all', ...Array.from(new Set(dscgQuestions.map(q => q.session))).sort().reverse()];
  const filteredQuestions = selectedSession === 'all' 
    ? dscgQuestions 
    : dscgQuestions.filter(q => q.session === selectedSession);

  const formatCorrection = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      
      // Remplacer les textes en gras
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      return (
        <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: formattedLine }} />
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BackToPlanButton />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Questions DSCG</h1>
              <p className="text-gray-600">Compilation exhaustive des questions et corrections sur les structures du Système d&apos;Information</p>
            </div>
          </div>

          {/* Filtre par session */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {sessions.map(session => (
                <button
                  key={session}
                  onClick={() => setSelectedSession(session)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedSession === session
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  {session === 'all' ? 'Toutes les sessions' : `Session ${session}`}
                </button>
              ))}
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Sessions couvertes</p>
                  <p className="text-xl font-bold text-gray-900">{sessions.length - 1}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Questions totales</p>
                  <p className="text-xl font-bold text-gray-900">{dscgQuestions.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Questions affichées</p>
                  <p className="text-xl font-bold text-gray-900">{filteredQuestions.length}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Liste des questions */}
        <div className="space-y-4">
          {filteredQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(question.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        Session {question.session}
                      </span>
                      <span className="text-sm text-gray-600">{question.dossier}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {question.question}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {expandedQuestions.has(question.id) ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {expandedQuestions.has(question.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6">
                      {question.context && (
                        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            Contexte
                          </h4>
                          <div className="text-blue-800 text-sm">
                            {formatCorrection(question.context)}
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Correction
                        </h4>
                        <div className="text-gray-700 leading-relaxed">
                          {formatCorrection(question.correction)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            Retour au plan de cours
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
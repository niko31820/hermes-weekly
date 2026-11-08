# Hermes prend ses quartiers dans le navigateur

2026-11-08

Période : 2026-11-01 — 2026-11-08

Cette semaine, Hermes Agent publie la version 0.23.0, dite The Hearth Release. Ce premier bulletin retient les changements les plus utiles à l’usage quotidien : accès Web, conversations unifiées, automatisations et précautions de migration.

## Trois publications, une synthèse à lire en priorité

Versions · Publié — 2, 3 et 5 novembre 2026

La version 0.22.6 a été publiée le 2 novembre, suivie de la 0.22.7 le 3 novembre. Ces deux correctifs annonçaient que leurs notes détaillées seraient regroupées dans la version 0.23.0.[3](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6)[2](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.7)

La 0.23.0, publiée le 5 novembre, rassemble et documente les changements des versions 0.22.1 à 0.22.7. Ses nouveautés ne sont donc pas toutes apparues pour la première fois le 5 novembre : c’est une synthèse d’un cycle plus long, pas uniquement des sept derniers jours.[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

**Impact:** Pour comprendre ce qui a changé, les notes de la 0.23.0 sont plus utiles que la lecture isolée de chaque correctif.

**Action:** À lire : les points de migration de la 0.23.0 avant toute mise à jour. Ce bulletin ne met rien à jour sur vos appareils.

### Sources

- [1] [Notes officielles — Hermes Agent v0.23.0](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

- [2] [Publication officielle — v0.22.7](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.7)

- [3] [Publication officielle — v0.22.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6)

## Le même espace de travail, dans un onglet Web

Desktop et mobilité · Publié — v0.23.0 ; accès désactivé par défaut

La Webapp expose l’espace de travail Desktop depuis votre propre gateway : conversations, discussions de groupe, plugins et paramètres peuvent être retrouvés dans un navigateur. Les notes présentent un accès sur le réseau local, ou derrière une URL publique avec connexion.[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

Cet accès reste désactivé par défaut. Il faut l’activer explicitement via webapp.enabled ou Web Access dans les paramètres ; installer la version ne rend donc pas automatiquement l’espace de travail accessible sur le Web.[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

**Impact:** C’est le changement à examiner en priorité pour retrouver Hermes sur une tablette ou un téléphone, sans le confondre avec ce magazine : le magazine est un site statique public, votre espace Hermes reste un service distinct.

**Action:** À tester d’abord sur le réseau local. Ne pas exposer la gateway sur Internet sans vérifier les réglages d’authentification et d’accès.

### Sources

- [1] [Notes officielles — Webapp et activation](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

## Une conversation unifiée et plusieurs gateways dans Desktop

Continuité de travail · Publié — bilan du cycle v0.23.0

Les notes décrivent une gateway unique par machine qui possède les sessions : CLI, TUI, Desktop, éditeurs, bots et tâches planifiées s’y raccordent comme clients, avec une file et un historique communs. Le but annoncé est d’éviter les messages dupliqués ou perdus entre interfaces.[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

Desktop peut en parallèle garder plusieurs gateways connectées, pour passer entre cet ordinateur et une gateway distante. Les onglets de terminal restent liés à leur machine d’origine.[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

**Impact:** Changer d’interface et changer de machine sont deux cas distincts. La nouvelle organisation facilite ces parcours, mais ne signifie pas que toutes les installations partagent automatiquement leurs fichiers ou leurs historiques.

**Action:** À vérifier lors d’un essai : retrouver une conversation entre interfaces, puis identifier clairement la machine sur laquelle chaque terminal exécute ses commandes.

### Sources

- [1] [Notes officielles — gateway et connexions multiples](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

## Tâches planifiées et discussions de groupe gagnent en contrôle

Automatisations · Publié — v0.22.6, v0.22.7 et synthèse v0.23.0

La 0.22.6 mentionne l’annulation d’une tâche cron en cours, une politique par tâche pour les exécutions manquées et un bouton Stop dans l’éditeur Desktop. La 0.23.0 reprend ces capacités dans sa synthèse.[3](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6)[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

La 0.22.7 mentionne les tâches planifiées qui publient dans les discussions de groupe, un routage facultatif par bot principal, ainsi qu’un objectif et des notes partagées pour les salles. La 0.23.0 décrit aussi un routeur automatique pour choisir qui répond lorsqu’aucun bot n’est nommé.[2](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.7)[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

**Impact:** Les routines deviennent plus faciles à interrompre et à coordonner. Pour une publication récurrente, il reste essentiel de distinguer préparation du contenu, publication et contrôle de la page publique.

**Action:** À vérifier sur vos routines : la destination, la conduite à tenir après une veille de l’ordinateur et la possibilité d’arrêter une exécution. Ne pas changer les tâches existantes simplement pour essayer une nouveauté.

### Sources

- [1] [Notes officielles — automatisations et Group Chats](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

- [2] [Publication officielle — changements v0.22.7](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.7)

- [3] [Publication officielle — contrôle cron v0.22.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6)

## Plugins actualisables, skills verrouillables

Extensions · Publié — bilan du cycle v0.23.0

La commande hermes plugins update permet de mettre à jour les plugins ensemble. Une option de mise à jour automatique est proposée ; les notes indiquent que les mises à jour incompatibles sont retenues plutôt qu’appliquées.[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

Le jeu de skills intégrés est resserré, avec Word, PowerPoint et Excel regroupés dans microsoft-office. La commande hermes curator lock permet de verrouiller un skill préparé manuellement contre les réécritures de l’agent.[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

**Impact:** Le verrouillage est intéressant pour préserver un brief éditorial ou une procédure stabilisée. La mise à jour des extensions reste une décision distincte de la lecture de ce bulletin.

**Action:** À examiner : les skills dont le contenu doit rester stable. Ne pas activer les mises à jour automatiques sans avoir identifié les extensions réellement utilisées.

### Sources

- [1] [Notes officielles — plugins et curator lock](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

## Avant de mettre à jour : trois changements à contrôler

Vigilance · Notes officielles de migration — pas des incidents constatés ici

Les anciens outils de navigateur intégrés ont été retirés : les prompts et listes d’outils qui nomment browser_navigate, browser_click ou les anciennes interfaces doivent être adaptés à browser_exec. Les notes décrivent Camofox comme un plugin installé automatiquement pour les profils qui l’utilisaient.[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

Desktop requiert désormais macOS 13 ou plus et Windows 64 bits. La commande de serveur MCP passe de hermes mcp serve à hermes mcp-serve, dans un plugin ; les clients qui lancent l’ancien nom doivent être modifiés explicitement.[1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

**Impact:** Les procédures enregistrées et les configurations de clients MCP méritent un contrôle avant migration. Ces points viennent des notes de version ; aucun dysfonctionnement n’a été reproduit dans le cadre de ce bulletin.

**Action:** Priorité : rechercher les anciens noms d’outils et de commandes dans vos procédures, puis vérifier les exigences système. Aucun réglage de votre installation n’est modifié par cette veille.

### Sources

- [1] [Notes officielles — Upgrade notes v0.23.0](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0)

## Notes

- Bulletin indépendant, non affilié à Nous Research. Sources primaires : publications officielles du dépôt Hermes Agent.

- Sources consultées le 8 novembre 2026 peu après minuit, heure de Paris. La période se termine à cette collecte ; aucune annonce ultérieure n’est anticipée.

- Premier numéro : certains sujets présentent un bilan du cycle 0.23.0. Les prochaines éditions éviteront de répéter les sujets déjà couverts, sauf changement matériel.

- Les impacts et actions sont des recommandations éditoriales, pas des tests matériels ni une certification de compatibilité. Aucun correctif en développement n’est présenté comme une version publiée.

- Publication indépendante, non officielle et non affiliée à Nous Research.

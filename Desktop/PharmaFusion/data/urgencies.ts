import { UrgencyProtocol } from '../types';

export const urgenciesData: UrgencyProtocol[] = [
  {
    title: "Réanimation Cardiopulmonaire (RCP) Adulte - Algorithme ACLS",
    steps: [
      {
        title: "1. Vérifier la sécurité et la réponse",
        content: "Assurez-vous que la scène est sûre. Tentez d'obtenir une réponse de la victime. Appelez à l'aide et activez les secours (SAMU/112)."
      },
      {
        title: "2. Circulation et Respiration",
        content: "Vérifiez le pouls carotidien (max 10s). Absence de pouls ou doute -> commencer RCP. Observez la respiration."
      },
      {
        title: "3. Compressions Thoraciques",
        content: "Fréquence : 100-120/min. Profondeur : 5-6 cm. Ratio : 30 compressions pour 2 ventilations. Minimiser les interruptions."
      },
      {
        title: "4. Défibrillation",
        content: "Si un défibrillateur est disponible, analysez le rythme. Si choc recommandé (FV/TV sans pouls), administrez 1 choc et reprenez immédiatement la RCP pendant 2 min."
      },
      {
        title: "5. Accès Veineux et Médicaments",
        content: "Obtenez un accès IV ou IO. Adrénaline : 1 mg toutes les 3-5 minutes. Amiodarone : 300 mg en bolus après le 3ème choc, puis 150 mg si nécessaire."
      },
    ]
  },
  {
    title: "Choc Anaphylactique",
    steps: [
      {
        title: "1. Reconnaître les signes",
        content: "Signes cutanés (urticaire, œdème), détresse respiratoire (stridor, sibilances), hypotension, tachycardie, troubles digestifs."
      },
      {
        title: "2. Adrénaline (Épinéphrine) - Traitement de première ligne",
        content: "Injecter IMMÉDIATEMENT en intramusculaire (IM) dans la cuisse antérolatérale.\nAdulte : 0.3 à 0.5 mg (1:1000).\nEnfant : 0.01 mg/kg (max 0.3 mg).\nRépéter toutes les 5-15 min si pas d'amélioration."
      },
      {
        title: "3. Position et Oxygène",
        content: "Allonger le patient, jambes surélevées. Administrer de l'oxygène à haut débit (10-15 L/min)."
      },
      {
        title: "4. Remplissage Vasculaire",
        content: "En cas d'hypotension, remplissage IV rapide avec du sérum salé isotonique (NaCl 0.9%).\nAdulte : 1-2 litres.\nEnfant : 20 mL/kg."
      },
      {
        title: "5. Traitements Adjuvants",
        content: "Antihistaminiques H1 (ex: diphenhydramine) et H2 (ex: famotidine).\nCorticoïdes (ex: méthylprednisolone) pour prévenir la réaction biphasique.\nBronchodilatateurs (salbutamol) si bronchospasme."
      }
    ]
  },
  {
    title: "Médicaments de l'Arrêt Cardiaque",
    steps: [
      {
        title: "Adrénaline (Épinéphrine)",
        content: "Dose : 1 mg (10 mL de la solution 1:10 000) IV/IO.\nFréquence : Toutes les 3 à 5 minutes.\nIndication : Tous les types d'arrêt cardiaque."
      },
      {
        title: "Amiodarone",
        content: "Indication : Fibrillation Ventriculaire (FV) ou Tachycardie Ventriculaire (TV) sans pouls, réfractaire à la défibrillation.\nDose initiale : 300 mg en bolus IV/IO.\nDose suivante : 150 mg IV/IO si nécessaire."
      },
      {
        title: "Lidocaïne (Alternative à l'amiodarone)",
        content: "Indication : FV/TV sans pouls, si l'amiodarone n'est pas disponible.\nDose initiale : 1 à 1.5 mg/kg IV/IO.\nDoses supplémentaires : 0.5 à 0.75 mg/kg toutes les 5-10 min (max 3 mg/kg)."
      },
      {
        title: "Bicarbonate de Sodium",
        content: "Indication : Utilisation controversée. À considérer en cas d'hyperkaliémie connue, d'acidose métabolique sévère préexistante ou d'intoxication aux antidépresseurs tricycliques.\nDose : 1 mEq/kg."
      }
    ]
  },
  {
    title: "Médicaments de l'Arrêt Cardiaque",
    steps: [
      {
        title: "Adrénaline (Épinéphrine)",
        content: "Dose : 1 mg (10 mL de la solution 1:10 000) IV/IO.\nFréquence : Toutes les 3 à 5 minutes.\nIndication : Tous les types d'arrêt cardiaque."
      },
      {
        title: "Amiodarone",
        content: "Indication : Fibrillation Ventriculaire (FV) ou Tachycardie Ventriculaire (TV) sans pouls, réfractaire à la défibrillation.\nDose initiale : 300 mg en bolus IV/IO.\nDose suivante : 150 mg IV/IO si nécessaire."
      },
      {
        title: "Lidocaïne (Alternative à l'amiodarone)",
        content: "Indication : FV/TV sans pouls, si l'amiodarone n'est pas disponible.\nDose initiale : 1 à 1.5 mg/kg IV/IO.\nDoses supplémentaires : 0.5 à 0.75 mg/kg toutes les 5-10 min (max 3 mg/kg)."
      },
      {
        title: "Bicarbonate de Sodium",
        content: "Indication : Utilisation controversée. À considérer en cas d'hyperkaliémie connue, d'acidose métabolique sévère préexistante ou d'intoxication aux antidépresseurs tricycliques.\nDose : 1 mEq/kg."
      }
    ]
  },
  {
    title: "Accident Vasculaire Cérébral (AVC) - Conduite à Tenir",
    steps: [
      {
        title: "1. Reconnaissance rapide",
        content: "Utiliser l'échelle FAST (Face, Arm, Speech, Time). Tout déficit neurologique brutal doit être suspecté comme un AVC."
      },
      {
        title: "2. Appel des secours",
        content: "Appeler immédiatement le SAMU/112. Noter l’heure de début des symptômes."
      },
      {
        title: "3. Surveillance initiale",
        content: "Installer le patient en position semi-assise, surveiller les fonctions vitales (FR, SpO2, TA, FC)."
      },
      {
        title: "4. Oxygénothérapie",
        content: "Administrer O2 si SpO2 < 94%."
      },
      {
        title: "5. Transport rapide",
        content: "Transfert en unité neuro-vasculaire ou service d’urgence avec imagerie (scanner cérébral sans injection en urgence)."
      }
    ]
  },
  {
    title: "Infarctus du Myocarde avec Sus-décalage du ST (STEMI)",
    steps: [
      {
        title: "1. Reconnaissance",
        content: "Douleur thoracique constrictive > 20 minutes, irradiation, sueurs, dyspnée. ECG : sus-décalage ST."
      },
      {
        title: "2. Oxygène et voie veineuse",
        content: "O2 si SpO2 < 94%. Mettre un abord IV."
      },
      {
        title: "3. Médicaments initiaux",
        content: "Aspirine 250-300 mg à croquer + Clopidogrel 300-600 mg si pas de contre-indication.\nMorfine IV si douleur persistante.\nHéparine selon protocole."
      },
      {
        title: "4. Reperfusion",
        content: "Angioplastie primaire < 120 min si disponible. Sinon thrombolyse (alteplase, tenecteplase) si délai < 12h et pas de contre-indication."
      },
      {
        title: "5. Surveillance",
        content: "Monitoring cardiaque, traitement des complications (troubles du rythme, choc cardiogénique, OAP)."
      }
    ]
  },
  {
    title: "Polytraumatisé - Prise en charge initiale",
    steps: [
      {
        title: "1. Sécuriser la scène",
        content: "S'assurer que la scène est sûre pour le sauveteur et le patient."
      },
      {
        title: "2. ABCDE",
        content: "A - Airway (voie aérienne) avec protection cervicale\nB - Breathing (respiration) : O2, ventilation\nC - Circulation : arrêt hémorragie, perfusion\nD - Disability : état neurologique, GCS\nE - Exposure : examiner tout le corps, maintenir température."
      },
      {
        title: "3. Hémorragies massives",
        content: "Contrôler par compression directe, garrot si nécessaire, perfusion rapide."
      },
      {
        title: "4. Immobilisation",
        content: "Collier cervical, planche dorsale si suspicion fracture vertébrale, attelle si fracture."
      },
      {
        title: "5. Transport rapide",
        content: "Vers centre adapté (trauma center) après stabilisation initiale."
      }
    ]
  },
  {
    title: "Hémorragie digestive haute",
    steps: [
      {
        title: "1. Évaluation initiale",
        content: "Signes vitaux : TA, pouls, FR, SpO2. Rechercher choc (pâleur, sueurs, confusion)."
      },
      {
        title: "2. Accès veineux et réanimation volémique",
        content: "2 voies veineuses larges. Remplissage avec cristalloïdes. Préparer transfusion si signes de choc ou perte > 500 mL."
      },
      {
        title: "3. Médicaments",
        content: "IPP IV (ex: oméprazole bolus puis perfusion continue), octréotide si suspicion hémorragie variqueuse."
      },
      {
        title: "4. Examens complémentaires",
        content: "Hémogramme, glycémie, coagulation. Préparer endoscopie digestive urgente."
      },
      {
        title: "5. Surveillance et transfert",
        content: "Monitorage cardiaque, urine, TA, pouls. Transfert vers service gastro-entérologie ou chirurgie si nécessaire."
      }
    ]
  },
  {
    title: "Crise d'asthme aiguë grave",
    steps: [
      {
        title: "1. Évaluation",
        content: "Dyspnée sévère, utilisation muscles accessoires, SpO2 < 90%, parole limitée."
      },
      {
        title: "2. Oxygène",
        content: "O2 à haut débit pour maintenir SpO2 > 94%."
      },
      {
        title: "3. Bronchodilatateurs",
        content: "Salbutamol inhalé via nébuliseur toutes les 20 min (ou continu si grave)."
      },
      {
        title: "4. Corticoïdes",
        content: "Prednisone PO ou méthylprednisolone IV selon gravité."
      },
      {
        title: "5. Surveillance",
        content: "Monitorage cardiorespiratoire. Préparer ventilation mécanique si insuffisance respiratoire."
      }
    ]
  },
  {
    title: "État de mal épileptique",
    steps: [
      {
        title: "1. Assurer sécurité",
        content: "Protéger patient des blessures. Ne pas introduire d’objets dans la bouche."
      },
      {
        title: "2. Oxygène",
        content: "Administrer O2 si SpO2 < 94%."
      },
      {
        title: "3. Benzodiazépines",
        content: "Diazépam 10 mg IV lent ou lorazépam 4 mg IV (adulte). Répéter si nécessaire."
      },
      {
        title: "4. Médicaments de deuxième ligne",
        content: "Phénytoïne IV 15-20 mg/kg ou lévétiracétam IV 60 mg/kg si convulsions persistent."
      },
      {
        title: "5. Surveillance et investigations",
        content: "Monitorage cardiaque, glycémie, ionogramme, examens neuro-imagerie selon contexte."
      }
    ]
  },
  {
    title: "Hypoglycémie sévère",
    steps: [
      {
        title: "1. Évaluation",
        content: "Confusion, convulsions, perte de conscience, TA et FC instables."
      },
      {
        title: "2. Voie IV",
        content: "Glycémie capillaire immédiate. Si < 3 mmol/L : perfusion de glucose 10-20% IV, 100-200 mL bolus selon poids."
      },
      {
        title: "3. Surveillance",
        content: "Surveiller glycémie toutes les 15 min jusqu’à stabilisation."
      },
      {
        title: "4. Nutrition orale",
        content: "Lorsque conscience retrouvée, donner apport glucidique oral."
      }
    ]
  },
  {
    title: "Choc septique",
    steps: [
      {
        title: "1. Reconnaissance",
        content: "Fièvre ou hypothermie, hypotension, tachycardie, polypnée, altération de l’état de conscience."
      },
      {
        title: "2. Voies veineuses et réanimation volémique",
        content: "Au moins 2 voies veineuses larges. Cristalloïdes 30 mL/kg IV en bolus."
      },
      {
        title: "3. Oxygénation",
        content: "O2 pour maintenir SpO2 > 94%. Intubation si insuffisance respiratoire."
      },
      {
        title: "4. Antibiotiques",
        content: "Administration IV rapide, adaptée à la source suspectée."
      },
      {
        title: "5. Surveillance et support",
        content: "Monitorage hemodynamique, lactates, diurèse. Vasopresseurs si hypotension persistante (noradrénaline)."
      }
    ]
  },
  {
    title: "Intoxication médicamenteuse aiguë",
    steps: [
      {
        title: "1. Évaluation initiale",
        content: "État de conscience, signes vitaux, saturation, ECG si intoxication cardiaque."
      },
      {
        title: "2. Stabilisation ABCDE",
        content: "Airway, Breathing, Circulation, Disability, Exposure."
      },
      {
        title: "3. Décontamination",
        content: "Charbon activé si ingestion récente (<1-2h) et absence de contre-indication."
      },
      {
        title: "4. Antidotes spécifiques",
        content: "Ex : N-acétylcystéine pour paracétamol, flumazénil pour benzodiazépines si indiqué."
      },
      {
        title: "5. Surveillance",
        content: "Hospitalisation, monitorage cardiaque, suivi biologique et neurologique selon toxique."
      }
    ]
  },
  {
    title: "Arrêt Respiratoire",
    steps: [
      {
        title: "1. Vérifier la sécurité et la réponse",
        content: "Assurez-vous que la scène est sûre et tentez d'obtenir une réponse du patient."
      },
      {
        title: "2. Ouvrir les voies aériennes",
        content: "Déplacement de la tête et levée du menton. Si suspicion traumatique, utiliser la technique mâchoire seulement."
      },
      {
        title: "3. Ventilation",
        content: "Si pas de respiration, commencer ventilations artificielles avec masque et ballon ou bouche-à-bouche."
      },
      {
        title: "4. Appel des secours",
        content: "Appeler immédiatement SAMU/112 et demander un défibrillateur si disponible."
      },
      {
        title: "5. Surveillance",
        content: "Monitorer respiration, SpO2, FC, et préparer la RCP si circulation absente."
      }
    ]
  },
  {
    title: "Pneumothorax sous tension",
    steps: [
      {
        title: "1. Reconnaissance",
        content: "Dyspnée sévère, hypotension, distension jugulaire, absence de murmure respiratoire d’un côté, déplacement trachéal."
      },
      {
        title: "2. Oxygénation",
        content: "O2 à haut débit pour maintenir SpO2 > 94%."
      },
      {
        title: "3. Décompression urgente",
        content: "Aiguille 14-16G en 2ème espace intercostal ligne médio-claviculaire côté affecté."
      },
      {
        title: "4. Drain thoracique",
        content: "Pose d’un drain thoracique définitif dès que possible."
      },
      {
        title: "5. Surveillance",
        content: "Monitorage cardiorespiratoire, préparation transfert en soins intensifs."
      }
    ]
  },
  {
    title: "Choc cardiogénique",
    steps: [
      {
        title: "1. Reconnaissance",
        content: "Hypotension persistante, tachycardie, signes d’insuffisance cardiaque, OAP, confusion."
      },
      {
        title: "2. Oxygène",
        content: "O2 pour SpO2 > 94%."
      },
      {
        title: "3. Accès veineux et perfusions",
        content: "Perfusion cristalloïdes prudente (risque surcharge). Préparer médicaments inotropes (dopamine, dobutamine) si nécessaire."
      },
      {
        title: "4. Surveillance",
        content: "Monitorage ECG, TA, diurèse, SpO2. Echocardiographie si possible."
      },
      {
        title: "5. Traitement définitif",
        content: "Transfert en unité de soins intensifs cardiologiques pour revascularisation ou assistance circulatoire."
      }
    ]
  },
  {
    title: "Torsade de pointes",
    steps: [
      {
        title: "1. Reconnaissance",
        content: "Palpitations, syncope, ECG : tachycardie ventriculaire polymorphe avec QT long."
      },
      {
        title: "2. Électrolytes",
        content: "Corriger hypokaliémie, hypomagnésémie si présentes."
      },
      {
        title: "3. Magnesium IV",
        content: "Administration de 2 g de sulfate de magnésium IV en 2-5 min."
      },
      {
        title: "4. Défibrillation",
        content: "Si patient instable ou collapsus, choc électrique synchronisé."
      },
      {
        title: "5. Surveillance et traitement définitif",
        content: "Monitorage ECG continu, identifier et traiter la cause (médicaments, anomalies électrolytiques)."
      }
    ]
  },
  {
    title: "Hémorragie post-partum",
    steps: [
      {
        title: "1. Reconnaissance",
        content: "Perte de sang > 500 mL (voie vaginale), hypotension, tachycardie, pâleur."
      },
      {
        title: "2. Massage utérin",
        content: "Massage du fond utérin pour stimuler contraction."
      },
      {
        title: "3. Médicaments hémostatiques",
        content: "Ocytocine IV ou IM, misoprostol selon protocole local."
      },
      {
        title: "4. Remplissage et transfusion",
        content: "Perfusion IV rapide de cristalloïdes et transfusion sanguine si nécessaire."
      },
      {
        title: "5. Surveillance et transfert",
        content: "Monitorage TA, pouls, diurèse. Transfert en unité obstétricale spécialisée si nécessaire."
      }
    ]
  },
  {
    title: "Choc hypovolémique",
    steps: [
      {
        title: "1. Reconnaissance",
        content: "Hypotension, tachycardie, pâleur, sueurs, marbrures, oligurie."
      },
      {
        title: "2. Voies veineuses",
        content: "Deux voies veineuses larges."
      },
      {
        title: "3. Réanimation volémique",
        content: "Cristalloïdes rapides 20-30 mL/kg, ajuster selon TA et signes de perfusion."
      },
      {
        title: "4. Transfusion",
        content: "Si perte sanguine importante ou persistante malgré remplissage."
      },
      {
        title: "5. Surveillance",
        content: "TA, FC, diurèse, conscience. Préparer traitement définitif (chirurgie, contrôle hémorragique)."
      }
    ]
  },
  {
    title: "Intoxication au CO (Monoxyde de carbone)",
    steps: [
      {
        title: "1. Évacuation",
        content: "Sortir le patient de la zone contaminée immédiatement."
      },
      {
        title: "2. Oxygénothérapie",
        content: "O2 100% en masque à haute concentration ou ventilation assistée si nécessaire."
      },
      {
        title: "3. Surveillance",
        content: "Signes neurologiques, TA, FC, ECG. Monitorage continu."
      },
      {
        title: "4. Traitement spécifique",
        content: "Hyperbare si intoxication sévère ou perte de conscience."
      },
      {
        title: "5. Support",
        content: "Hydratation, contrôle des complications cardiaques ou neurologiques."
      }
    ]
  }
];
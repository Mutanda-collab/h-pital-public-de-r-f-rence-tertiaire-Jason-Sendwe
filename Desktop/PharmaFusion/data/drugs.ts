
import { PharmacologicalClass } from '../types';

export const drugData: PharmacologicalClass[] = [
  {
    name: "Médicaments du système nerveux",
    subCategories: [
      {
        name: "Anesthésiques généraux",
        drugs: [
          {
            dci: "Propofol",
            definition: "Anesthésique général intraveineux à action rapide.",
            commercialNames: ["Diprivan"],
            modeOfAction: "Agit principalement en modulant les récepteurs GABA-A, entraînant une inhibition synaptique du système nerveux central.",
            indications: [
              "Induction et maintien de l’anesthésie générale",
              "Sédation en soins intensifs",
              "Sédation pour procédures diagnostiques"
            ],
            contraindications: [
              "Hypersensibilité connue au propofol ou aux composants de la formulation",
              "Allergie aux œufs ou au soja (certains préparations)"
            ],
            adverseEffects: [
              "Hypotension artérielle",
              "Bradycardie",
              "Dépression respiratoire",
              "Douleur au site d’injection",
              "Rarement, hypertriglycérimie et myopathie lors d’une utilisation prolongée"
            ],
            drugInteractions: "Augmentation de l’effet dépresseur avec sédatifs, hypnotiques, opioïdes.",
            antidotes: "Soutien cardiovasculaire et respiratoire. Intubation et ventilation si nécessaire.",
            posologyAdult: "Induction : 1,5–2,5 mg/kg IV. Maintien : 4–12 mg/kg/h IV en perfusion continue.",
            posologyPediatric: "Induction : 2,5–3,5 mg/kg IV. Maintien : 9–15 mg/kg/h IV.",
            references: [
              "ANSM - Résumé des Caractéristiques du Produit (RCP)",
              "Vidal - Monographie Diprivan",
              "UpToDate - Propofol: Anesthetic agent"
            ]
          },
          { 
            dci: "Thiopental", 
            definition: "Barbiturique à action ultra‑rapide utilisé comme anesthésique général.", 
            commercialNames: ["Pentothal"], 
            modeOfAction: "Potentialise l’effet du GABA sur les récepteurs GABA-A, inhibant l’activité neuronale.", 
            indications: ["Induction de l’anesthésie générale", "Contrôle de l’état de mal épileptique (rarement)"], 
            contraindications: ["Allergie aux barbituriques", "Insuffisance hépatique sévère", "Porphyrie aiguë intermittente"], 
            adverseEffects: ["Dépression respiratoire", "Hypotension", "Bradycardie", "Excitation paradoxale (rare)"], 
            drugInteractions: "Effets potentialisés avec autres dépresseurs du SNC. Inducteur enzymatique hépatique → réduit l’efficacité de certains médicaments.", 
            antidotes: "Maintien des fonctions respiratoires et cardiovasculaires. Intubation et ventilation si nécessaire.", 
            posologyAdult: "Induction : 3–5 mg/kg IV.", 
            posologyPediatric: "Induction : 5–6 mg/kg IV.",
            references: ["BNF - Thiopental Sodium"]
          },
          {
            dci: "Etomidate",
            definition: "Anesthésique général à action rapide avec faible effet cardiovasculaire.",
            commercialNames: ["Amidate"],
            modeOfAction: "Potentialise l’inhibition GABAergique sur le SNC.",
            indications: [
              "Induction de l’anesthésie générale, surtout chez patients instables cardiovasculaires",
              "Sédation courte pour procédures"
            ],
            contraindications: [
              "Hypersensibilité connue à l’etomidate",
              "Insuffisance surrénalienne sévère"
            ],
            adverseEffects: [
              "Myoclonies transitoires",
              "Nausées, vomissements",
              "Dépression respiratoire légère",
              "Inhibition de la synthèse des corticostéroïdes (usage prolongé)"
            ],
            drugInteractions: "Dépression accrue avec autres sédatifs et opioïdes.",
            antidotes: "Support respiratoire et cardiovasculaire.",
            posologyAdult: "Induction : 0,2–0,6 mg/kg IV.",
            posologyPediatric: "Induction : 0,3–0,6 mg/kg IV."
          },
          { 
            dci: "Kétamine",
            commercialNames: ["Ketalar"],
            definition: "Anesthésique dissociatif intraveineux et intramusculaire.",
            modeOfAction: "Bloque les récepteurs NMDA, induisant une anesthésie dissociative et analgésie.",
            indications: [
                "Induction et maintien de l’anesthésie",
                "Analgésie dans certaines procédures douloureuses",
                "Sédation en soins intensifs"
            ],
            contraindications: [
                "Hypertension sévère",
                "Antécédent de psychose",
                "Insuffisance cardiaque sévère"
            ],
            adverseEffects: [
                "Hallucinations et agitation à l’émergence",
                "Hypertension et tachycardie",
                "Nausées, vomissements"
            ],
            drugInteractions: "Potentialisation avec benzodiazépines (réduit agitation). Attention avec autres sympathomimétiques.",
            antidotes: "Support cardiovasculaire et respiratoire. Sédation si agitation sévère.",
            posologyAdult: "Induction IV : 1–2 mg/kg. Induction IM : 4–6 mg/kg.",
            posologyPediatric: "Induction IV : 1–2 mg/kg. Induction IM : 4–6 mg/kg."
          },
          {
            dci: "Sévoflurane",
            commercialNames: ["Sevorane"],
            definition: "Anesthésique volatile inhalé, à action rapide et faible irritation respiratoire.",
            modeOfAction: "Potentialise l’inhibition GABAergique et réduit l’activité neuronale.",
            indications: ["Induction et maintien de l’anesthésie générale, surtout en pédiatrie"],
            contraindications: ["Hypersensibilité connue", "Antécédent de malignant hyperthermie"],
            adverseEffects: ["Hypotension", "Bradycardie", "Rare malignant hyperthermie"],
            drugInteractions: "Effets potentialisés avec autres dépresseurs du SNC.",
            antidotes: "Arrêt du sévoflurane. Support respiratoire et cardiovasculaire. Traitement de la malignant hyperthermie si nécessaire.",
            posologyAdult: "Inhalation contrôlée selon concentration anesthésique (MAC variable)",
            posologyPediatric: "Inhalation contrôlée selon concentration anesthésique (MAC variable)"
          },
          {
            dci: "Isoflurane",
            commercialNames: ["Forane"],
            definition: "Anesthésique volatile inhalé, utilisé pour maintien de l’anesthésie générale.",
            modeOfAction: "Potentialise l’inhibition GABAergique et bloque les canaux sodiques neuronaux.",
            indications: ["Maintien de l’anesthésie générale"],
            contraindications: ["Hypersensibilité connue", "Antécédent de malignant hyperthermie"],
            adverseEffects: ["Hypotension", "Arythmies cardiaques", "Malignant hyperthermie (rare)"],
            drugInteractions: "Augmentation de la dépression cardiovasculaire avec autres anesthésiques.",
            antidotes: "Arrêt de l’agent inhalé. Support ventilatoire et cardiovasculaire.",
            posologyAdult: "Inhalation selon concentration MAC",
            posologyPediatric: "Inhalation selon concentration MAC"
          },
          {
            dci: "Desflurane",
            commercialNames: ["Suprane"],
            definition: "Anesthésique inhalé à action rapide, faible solubilité sanguine.",
            modeOfAction: "Potentialise GABA-A et réduit excitabilité neuronale.",
            indications: ["Maintien de l’anesthésie générale"],
            contraindications: ["Antécédent de malignant hyperthermie", "Hypersensibilité"],
            adverseEffects: ["Irritation des voies respiratoires", "Hypotension", "Arythmies"],
            drugInteractions: "Dépression cardiovasculaire potentialisée par autres dépresseurs du SNC.",
            antidotes: "Arrêt immédiat. Support ventilatoire et cardiovasculaire.",
            posologyAdult: "Inhalation selon concentration MAC",
            posologyPediatric: "Inhalation selon concentration MAC"
          }
        ]
      },
      {
        name: "Anesthésiques locaux",
        drugs: [
          {
            dci: "Lidocaïne",
            commercialNames: ["Xylocaïne", "Lignocaïne"],
            definition: "Anesthésique local amidé.",
            modeOfAction: "Bloque les canaux sodiques voltage‑dépendants, inhibant la conduction nerveuse.",
            indications: [
              "Anesthésie locale et régionale",
              "Bloc nerveux périphérique",
              "Analgésie topique (crèmes, gels)",
              "Traitement des arythmies cardiaques (IV)"
            ],
            contraindications: [
              "Allergie à la lidocaïne ou aux amidés",
              "Bloc cardiaque sévère sans pacemaker"
            ],
            adverseEffects: [
              "Picotements, engourdissement excessif",
              "Convulsions (surdosage)",
              "Bradycardie, hypotension",
              "Réactions allergiques rares"
            ],
            drugInteractions: "Antiarythmiques classe I. Médicaments déprimant le SNC.",
            antidotes: "Support respiratoire et cardiovasculaire. Lipides intralipidiques en cas de toxicité sévère (lipid rescue).",
            posologyAdult: "Local : 0,5–2 % solution selon type et site. Bloc nerveux : 3–5 mg/kg max 300 mg.",
            posologyPediatric: "Bloc nerveux : 1–2 mg/kg.",
            references: ["ANSM - RCP Xylocaïne", "Société Française d'Anesthésie et de Réanimation (SFAR) - Recommandations"]
          },
          {
            dci: "Bupivacaïne",
            commercialNames: ["Marcaïne", "Sensorcaïne"],
            definition: "Anesthésique local amidé à longue durée d’action.",
            modeOfAction: "Bloque les canaux sodiques voltage‑dépendants.",
            indications: [
              "Anesthésie épidurale et rachidienne",
              "Bloc nerveux périphérique",
              "Analgésie postopératoire"
            ],
            contraindications: [
              "Allergie connue",
              "Bloc cardiaque sévère"
            ],
            adverseEffects: [
              "Cardiotoxicité (arythmies, hypotension)",
              "Convulsions (surdosage)",
              "Brûlures ou picotements au site d’injection"
            ],
            drugInteractions: "Médicaments antiarythmiques. Autres dépresseurs du SNC.",
            antidotes: "Support cardiovasculaire et respiratoire. Lipid rescue pour toxicité sévère.",
            posologyAdult: "Bloc nerveux : 2–3 mg/kg. Épidurale : 0,25–0,5 %.",
            posologyPediatric: "Bloc nerveux : 1–2 mg/kg."
          },
          {
            dci: "Ropivacaïne",
            commercialNames: ["Naropin"],
            definition: "Anesthésique local amidé à longue durée, moins cardiotoxique que la bupivacaïne.",
            modeOfAction: "Bloque les canaux sodiques voltage‑dépendants, inhibe la conduction nerveuse.",
            indications: [
              "Bloc nerveux périphérique",
              "Anesthésie épidurale",
              "Analgésie postopératoire"
            ],
            contraindications: [
              "Allergie aux amidés",
              "Bloc cardiaque sévère"
            ],
            adverseEffects: [
              "Hypotension",
              "Bradycardie",
              "Convulsions rares",
              "Nausées, vertiges"
            ],
            drugInteractions: "Médicaments antiarythmiques. Dépresseurs du SNC.",
            antidotes: "Support respiratoire et cardiovasculaire. Lipid rescue si nécessaire.",
            posologyAdult: "Bloc nerveux : 2–3 mg/kg. Épidurale : 0,2–0,5 %.",
            posologyPediatric: "Bloc nerveux : 1–2 mg/kg."
          },
          {
            dci: "Prilocaïne",
            commercialNames: ["Citanest"],
            definition: "Anesthésique local amidé à action intermédiaire.",
            modeOfAction: "Bloque les canaux sodiques voltage‑dépendants.",
            indications: [
              "Anesthésie locale et infiltration",
              "Crèmes topiques (cutanées)"
            ],
            contraindications: [
              "Allergie aux amidés",
              "Déficit en méthémoglobinémie (risque aggravé)"
            ],
            adverseEffects: [
              "Picotements, engourdissement",
              "Méthémoglobinémie (rare, surtout chez enfants)",
              "Convulsions (surdosage)"
            ],
            drugInteractions: "Dépression accrue avec autres dépresseurs du SNC.",
            antidotes: "Support respiratoire et cardiovasculaire. Méthylène bleu pour méthémoglobinémie.",
            posologyAdult: "Bloc nerveux : 2–4 mg/kg",
            posologyPediatric: "Bloc nerveux : 1–2 mg/kg"
          },
          {
            dci: "Articaïne",
            commercialNames: ["Septanest"],
            definition: "Anesthésique local amidé avec un groupe thiophène, action rapide et pénétration osseuse efficace.",
            modeOfAction: "Bloque les canaux sodiques voltage‑dépendants.",
            indications: [
              "Anesthésie dentaire locale et infiltration",
              "Bloc nerveux périphérique"
            ],
            contraindications: [
              "Allergie aux amidés",
              "Déficit sévère en cholinestérase"
            ],
            adverseEffects: [
              "Douleur locale, hématome",
              "Picotements",
              "Convulsions (rare)"
            ],
            drugInteractions: "Dépression accrue avec autres dépresseurs du SNC.",
            antidotes: "Support respiratoire et cardiovasculaire. Lipid rescue si besoin.",
            posologyAdult: "Bloc dentaire : 1–1,5 mg/kg (max 7 mg/kg)",
            posologyPediatric: "Bloc dentaire : 1–2 mg/kg"
          }
        ]
      },
      {
        name: "Analgésiques opioïdes",
        drugs: [
          {
            dci: "Morphine",
            commercialNames: ["MS Contin", "Kadian"],
            definition: "Opioïde agoniste des récepteurs μ (mu).",
            modeOfAction: "Se lie aux récepteurs opioïdes centraux et périphériques, inhibe la transmission de la douleur et modifie la perception de celle-ci.",
            indications: [
              "Douleur modérée à sévère (aiguë ou chronique)",
              "Douleur cancéreuse",
              "Analgésie postopératoire"
            ],
            contraindications: [
              "Insuffisance respiratoire sévère",
              "Asthme non contrôlé",
              "Iléus paralytique",
              "Allergie aux opioïdes"
            ],
            adverseEffects: [
              "Constipation",
              "Somnolence, confusion",
              "Nausées et vomissements",
              "Dépression respiratoire",
              "Dépendance et tolérance"
            ],
            drugInteractions: "Dépresseurs du SNC (alcool, benzodiazépines). Inhibiteurs enzymatiques CYP3A4 ou CYP2D6.",
            antidotes: "Naloxone IV. Support respiratoire.",
            posologyAdult: "5–20 mg toutes les 4 heures (oral), ajuster selon tolérance. Injectable : 2–10 mg toutes les 4 heures.",
            posologyPediatric: "0,1–0,2 mg/kg/dose IV toutes les 4 heures.",
            references: ["OMS - Lignes directrices sur le traitement de la douleur", "Vidal - Morphine"]
          },
          { dci: "Codéine", definition: "Opioïde faible, souvent combiné au paracétamol.", commercialNames: ["Codoliprane", "Dafalgan Codéine"], modeOfAction: "Prodrogue métabolisée en morphine par le CYP2D6.", indications: ["Douleurs modérées", "Toux sèche"], contraindications: ["Métaboliseurs ultra-rapides du CYP2D6", "Enfants < 12 ans"], adverseEffects: ["Constipation", "Somnolence", "Nausées"], drugInteractions: "Inhibiteurs du CYP2D6 (fluoxétine) diminuent son efficacité.", antidotes: "Naloxone.", posologyAdult: "30-60 mg toutes les 4-6h.", posologyPediatric: "Non recommandé chez les < 12 ans." },
          { dci: "Fentanyl", definition: "Opioïde synthétique très puissant (50-100x plus que la morphine).", commercialNames: ["Sublimaze", "Durogesic", "Actiq"], modeOfAction: "Agoniste µ-opioïde très lipophile à action rapide.", indications: ["Douleurs sévères", "Anesthésie"], contraindications: ["Patients naïfs aux opioïdes (pour les patchs)"], adverseEffects: ["Dépression respiratoire sévère", "Rigidité thoracique", "Bradycardie"], drugInteractions: "Inhibiteurs du CYP3A4 (ex: ritonavir) augmentent sa concentration.", antidotes: "Naloxone.", posologyAdult: "Variable, dosé en microgrammes.", posologyPediatric: "Variable, dosé en microgrammes/kg." },
          {
            dci: "Sufentanil",
            commercialNames: ["Sufenta"],
            definition: "Opioïde synthétique très puissant, agoniste μ.",
            modeOfAction: "Bloque la transmission de la douleur au niveau central via récepteurs μ.",
            indications: [
              "Douleur sévère en anesthésie ou soins intensifs",
              "Analgésie postopératoire"
            ],
            contraindications: [
              "Dépression respiratoire sévère",
              "Allergie aux opioïdes"
            ],
            adverseEffects: [
              "Dépression respiratoire",
              "Bradycardie",
              "Somnolence",
              "Nausées"
            ],
            drugInteractions: "Dépresseurs du SNC. Inhibiteurs CYP3A4.",
            antidotes: "Naloxone. Support respiratoire.",
            posologyAdult: "IV : 0,1–0,5 μg/kg selon situation",
            posologyPediatric: "Usage spécialisé : 0,1–0,2 μg/kg IV"
          },
          {
            dci: "Alfentanil",
            commercialNames: ["Alfenta"],
            definition: "Opioïde synthétique à action rapide, agoniste μ.",
            modeOfAction: "Bloque la transmission de la douleur au niveau central.",
            indications: [
              "Analgésie en anesthésie",
              "Procédures chirurgicales courtes"
            ],
            contraindications: [
              "Dépression respiratoire sévère",
              "Allergie aux opioïdes"
            ],
            adverseEffects: [
              "Dépression respiratoire",
              "Bradycardie",
              "Somnolence"
            ],
            drugInteractions: "Dépresseurs du SNC. Inhibiteurs CYP3A4.",
            antidotes: "Naloxone. Support respiratoire.",
            posologyAdult: "IV : 10–20 μg/kg selon procédure",
            posologyPediatric: "Usage très spécialisé"
          },
          {
            dci: "Oxycodone",
            commercialNames: ["Oxycontin", "Oxynorm"],
            definition: "Opioïde agoniste μ intermédiaire à fort.",
            modeOfAction: "Se lie aux récepteurs μ pour moduler la douleur centrale.",
            indications: [
              "Douleur modérée à sévère",
              "Douleur cancéreuse chronique"
            ],
            contraindications: [
              "Dépression respiratoire sévère",
              "Allergie aux opioïdes"
            ],
            adverseEffects: [
              "Dépression respiratoire",
              "Constipation",
              "Somnolence",
              "Nausées"
            ],
            drugInteractions: "Dépresseurs du SNC. Inhibiteurs CYP3A4.",
            antidotes: "Naloxone. Support respiratoire.",
            posologyAdult: "5–15 mg toutes les 4–6 h, ajuster selon tolérance",
            posologyPediatric: "0,1–0,2 mg/kg/dose"
          },
          {
            dci: "Hydromorphone",
            commercialNames: ["Dilaudid"],
            definition: "Opioïde agoniste μ puissant.",
            modeOfAction: "Bloque la transmission de la douleur centrale.",
            indications: [
              "Douleur modérée à sévère",
              "Douleur cancéreuse"
            ],
            contraindications: [
              "Dépression respiratoire sévère",
              "Allergie aux opioïdes"
            ],
            adverseEffects: [
              "Dépression respiratoire",
              "Constipation",
              "Somnolence, confusion"
            ],
            drugInteractions: "Dépresseurs du SNC. Inhibiteurs CYP3A4.",
            antidotes: "Naloxone. Support respiratoire.",
            posologyAdult: "2–4 mg toutes les 4 h PO/SC. Injectable selon tolérance.",
            posologyPediatric: "Usage spécialisé : 0,015–0,03 mg/kg IV."
          },
          { dci: "Tramadol", definition: "Analgésique central à double mécanisme d'action.", commercialNames: ["Ultram", "Topalgic", "Contramal"], modeOfAction: "Faible agoniste µ-opioïde et inhibiteur de la recapture de la sérotonine et de la noradrénaline.", indications: ["Douleurs modérées à sévères"], contraindications: ["Épilepsie non contrôlée", "Association avec les IMAO"], adverseEffects: ["Nausées", "Vertiges", "Syndrome sérotoninergique", "Convulsions"], drugInteractions: "ISRS, IMAO (risque de syndrome sérotoninergique).", antidotes: "Naloxone (partiellement efficace), prise en charge des convulsions.", posologyAdult: "50-100 mg toutes les 4-6h.", posologyPediatric: "1-2 mg/kg toutes les 4-6h." },
        ]
      },
      {
        name: "Analgésiques non-opioïdes / antipyrétiques",
        drugs: [
            {
                dci: "Paracétamol",
                commercialNames: ["Doliprane", "Dafalgan", "Efferalgan", "Tylenol"],
                definition: "Analgésique et antipyrétique non opioïde, largement utilisé.",
                modeOfAction: "Action centrale, probablement par inhibition de la COX-3 dans le cerveau. Faible action anti-inflammatoire périphérique.",
                indications: ["Douleur légère à modérée", "Fièvre"],
                contraindications: ["Insuffisance hépatocellulaire sévère", "Hypersensibilité"],
                adverseEffects: ["Rarement des réactions cutanées", "Toxicité hépatique sévère en cas de surdosage"],
                drugInteractions: "Anticoagulants oraux (AVK) : augmentation de l'effet à fortes doses et sur le long terme.",
                antidotes: "N-acétylcystéine (NAC) en cas de surdosage.",
                posologyAdult: "500 mg à 1g toutes les 4-6 heures. Max 4g/jour (ou 3g/jour dans certains cas).",
                posologyPediatric: "15 mg/kg toutes les 6 heures, ou 10 mg/kg toutes les 4 heures. Max 60 mg/kg/jour."
            },
            {
                dci: "Aspirine (Acide acétylsalicylique)",
                commercialNames: ["Aspirine", "Aspégic", "Kardégic"],
                definition: "AINS de la famille des salicylates, avec des propriétés analgésiques, antipyrétiques, anti-inflammatoires et antiagrégantes plaquettaires.",
                modeOfAction: "Inhibition irréversible de la COX-1 et COX-2. L'inhibition de la COX-1 plaquettaire est responsable de son effet antiagrégant.",
                indications: ["Douleur, fièvre, inflammation (à hautes doses)", "Prévention cardiovasculaire (à faible dose)"],
                contraindications: ["Ulcère gastroduodénal", "Allergie", "Dernier trimestre de grossesse", "Syndrome de Reye chez l'enfant"],
                adverseEffects: ["Troubles gastro-intestinaux (brûlures, saignements)", "Acouphènes (surdosage)", "Risque hémorragique"],
                drugInteractions: "Anticoagulants (risque hémorragique accru), autres AINS, Méthotrexate.",
                antidotes: "Pas d'antidote spécifique. Traitement de soutien, alcalinisation des urines pour augmenter l'élimination.",
                posologyAdult: "Analgésique: 500 mg à 1g toutes les 4-6 heures. Antiagrégant: 75-160 mg/jour.",
                posologyPediatric: "A éviter en raison du risque de syndrome de Reye.",
                references: ["American Heart Association (AHA) Guidelines", "European Society of Cardiology (ESC) Guidelines"]
            }
        ]
      },
      {
        name: "Antimigraineux",
        drugs: [
          {
            dci: "Sumatriptan",
            commercialNames: ["Imigran", "Sumial"],
            definition: "Agoniste sélectif des récepteurs 5-HT1B/1D, antimigraineux.",
            modeOfAction: "Vasoconstriction des artères crâniennes et inhibition de la libération de peptides inflammatoires.",
            indications: ["Crises aiguës de migraine avec ou sans aura"],
            contraindications: [
              "Antécédent d’infarctus du myocoarde, angine instable",
              "AVC ou maladie vasculaire périphérique",
              "Hypersensibilité"
            ],
            adverseEffects: [
              "Sensation de pression thoracique ou oppression",
              "Vertiges, somnolence",
              "Paresthésies, bouffées de chaleur",
              "Nausées"
            ],
            drugInteractions: "IMAO, autres triptans, ergotamine → risque de syndrome sérotoninergique. Inhibiteurs CYP1A2 (pour forme orale).",
            antidotes: "Support symptomatique. Surveillance cardiovasculaire.",
            posologyAdult: "25–100 mg par voie orale, à répéter après 2 h si nécessaire, max 200 mg/24 h. Formes injectables ou nasales existent avec doses spécifiques.",
            posologyPediatric: "Usage très limité et spécialisé (ex. adolescents 12–17 ans, forme orale 25–50 mg).",
            references: ["American Headache Society (AHS) Guidelines"]
          },
          {
            dci: "Rizatriptan",
            commercialNames: ["Maxalt"],
            definition: "Agoniste sélectif des récepteurs 5-HT1B/1D, antimigraineux.",
            modeOfAction: "Vasoconstriction des vaisseaux cérébraux et inhibition des médiateurs inflammatoires.",
            indications: ["Crises aiguës de migraine avec ou sans aura"],
            contraindications: ["Maladies cardiovasculaires sévères", "AVC, maladie vasculaire périphérique", "Hypersensibilité"],
            adverseEffects: ["Fatigue, somnolence", "Vertiges, douleurs thoraciques", "Nausées, bouffées de chaleur"],
            drugInteractions: "IMAO, autres triptans → risque sérotoninergique. Propranolol → ajuster la dose maximale.",
            antidotes: "Support symptomatique. Surveillance cardiaque.",
            posologyAdult: "5–10 mg par voie orale, à répéter après 2 h si nécessaire, max 30 mg/24 h",
            posologyPediatric: "Adolescents 12–17 ans : 5–10 mg"
          },
          {
            dci: "Zolmitriptan",
            commercialNames: ["Zomig"],
            definition: "Agoniste sélectif des récepteurs 5-HT1B/1D, antimigraineux.",
            modeOfAction: "Vasoconstriction cérébrale et inhibition de la libération de substances inflammatoires.",
            indications: ["Crises aiguës de migraine avec ou sans aura"],
            contraindications: [
              "Maladies cardiovasculaires graves",
              "Hypersensibilité"
            ],
            adverseEffects: [
              "Vertiges, somnolence",
              "Nausées",
              "Sensations de pression thoracique ou de serrement"
            ],
            drugInteractions: "IMAO, autres triptans. Inhibiteurs puissants de CYP1A2.",
            antidotes: "Support symptomatique, surveillance cardiovasculaire.",
            posologyAdult: "2,5–5 mg par voie orale, max 10 mg/24 h. Formes nasales disponibles : 5 mg.",
            posologyPediatric: "Usage limité aux adolescents selon protocole."
          },
          {
            dci: "Eletriptan",
            commercialNames: ["Relpax"],
            definition: "Agoniste sélectif des récepteurs 5-HT1B/1D, antimigraineux.",
            modeOfAction: "Constriction sélective des artères cérébrales et inhibition de médiateurs pro-inflammatoires.",
            indications: ["Crises aiguës de migraine avec ou sans aura"],
            contraindications: [
              "Antécédents de maladie coronarienne, angine instable, AVC",
              "Hypersensibilité"
            ],
            adverseEffects: [
              "Vertiges, somnolence",
              "Douleurs thoraciques ou oppression",
              "Nausées, bouffées de chaleur"
            ],
            drugInteractions: "IMAO, autres triptans → risque sérotoninergique. Inhibiteurs puissants de CYP3A4 (ex. kétoconazole).",
            antidotes: "Support symptomatique, surveillance cardiovasculaire.",
            posologyAdult: "20–40 mg par voie orale, à répéter après 2 h si nécessaire, max 80 mg/24 h",
            posologyPediatric: "Usage très limité (adolescents), selon protocole spécialisé."
          },
          {
            dci: "Ergotamine",
            commercialNames: ["Cafergot", "Ergomar"],
            definition: "Alcaloïde de l’ergot de seigle, antimigraineux.",
            modeOfAction: "Agoniste partiel des récepteurs 5-HT1B/1D et alpha-adrénergiques → vasoconstriction des artères cérébrales.",
            indications: [
              "Crises aiguës de migraine (non prophylactique)",
              "Rarement utilisé dans certaines céphalées vasculaires"
            ],
            contraindications: [
              "Maladies cardiovasculaires graves (angine, infarctus récent)",
              "AVC, hypertension sévère",
              "Grossesse, allaitement",
              "Insuffisance hépatique ou rénale sévère"
            ],
            adverseEffects: [
              "Nausées, vomissements",
              "Sensation de pression thoracique",
              "Paresthésies, vertiges",
              "Crises d’ischémie périphérique (rare)"
            ],
            drugInteractions: "IMAO → risque d’hypertension sévère. Autres vasoconstricteurs (triptans). Macrolides, antifongiques azolés (CYP3A4).",
            antidotes: "Support symptomatique. Surveillance cardiovasculaire et perfusion de vasodilatateurs si nécessaire.",
            posologyAdult: "1 mg sublingual ou orale à répéter après 30 min si nécessaire. Max 6 mg/24 h, max 10 mg/semaine.",
            posologyPediatric: "Usage très limité, rarement recommandé"
          },
          {
            dci: "Dihydroergotamine (DHE)",
            commercialNames: ["D.H.E. 45", "Migranal (nasal)"],
            definition: "Dérivé semi-synthétique de l’ergot, antimigraineux.",
            modeOfAction: "Agoniste partiel des récepteurs 5-HT1B/1D et alpha-adrénergiques → vasoconstriction des vaisseaux crâniens et inhibition des médiateurs inflammatoires.",
            indications: [
              "Crises aiguës de migraine sévères",
              "Migraine résistante aux triptans",
              "Administration IV ou IM en contexte hospitalier pour crises sévères"
            ],
            contraindications: [
              "Maladies cardiovasculaires (angine, infarctus, AVC)",
              "Hypertension sévère",
              "Grossesse",
              "Hypersensibilité"
            ],
            adverseEffects: [
              "Nausées, vomissements",
              "Douleurs thoraciques ou sensation d’oppression",
              "Vertiges, paresthésies",
              "Rare : vasospasmes périphériques"
            ],
            drugInteractions: "IMAO, triptans → risque sérotoninergique ou vasospasme. Inhibiteurs puissants de CYP3A4.",
            antidotes: "Support symptomatique. Surveillance cardiovasculaire et perfusion de vasodilatateurs si nécessaire.",
            posologyAdult: "IV/IM : 0,5–1 mg, répétée toutes les 8 h selon tolérance. Nasale : 1 spray (0,5 mg) dans chaque narine, répétable après 15 min, max 3 doses/24 h.",
            posologyPediatric: "Usage très limité, réservé aux adolescents sous supervision médicale."
          }
        ]
      },
      {
        name: "Antidépresseurs : ISRS",
        drugs: [
            { 
              dci: "Fluoxétine", 
              commercialNames: ["Prozac"],
              definition: "Inhibiteur sélectif de la recapture de la sérotonine (ISRS).",
              modeOfAction: "Augmente la concentration de sérotonine dans la fente synaptique en bloquant sa recapture présynaptique.",
              indications: ["Dépression majeure", "Trouble obsessionnel-compulsif (TOC)", "Boulimie", "Trouble panique"],
              contraindications: ["Association avec les IMAO", "Hypersensibilité"],
              adverseEffects: ["Nausées", "Insomnie", "Anxiété", "Céphalées", "Dysfonction sexuelle"],
              drugInteractions: "IMAO, tramadol (risque de syndrome sérotoninergique). Forte inhibition du CYP2D6, affectant le métabolisme d'autres médicaments.",
              antidotes: "Pas d'antidote spécifique. Traitement de soutien. La cyproheptadine peut être utilisée pour le syndrome sérotoninergique.",
              posologyAdult: "20 mg/jour, peut être augmentée jusqu'à 80 mg/jour.",
              posologyPediatric: "Usage spécialisé chez l'enfant > 8 ans pour la dépression majeure, 10-20 mg/jour.",
              references: ["ANSM - RCP Prozac", "Vidal - Fluoxétine"]
            },
            { 
              dci: "Sertraline", 
              commercialNames: ["Zoloft"],
              definition: "Inhibiteur sélectif de la recapture de la sérotonine (ISRS).",
              modeOfAction: "Augmente la concentration de sérotonine dans la fente synaptique.",
              indications: ["Dépression majeure", "TOC", "Trouble panique", "Trouble anxiété sociale", "État de stress post-traumatique (ESPT)"],
              contraindications: ["Association avec les IMAO", "Hypersensibilité"],
              adverseEffects: ["Nausées", "Diarrhée", "Insomnie", "Somnolence", "Dysfonction sexuelle"],
              drugInteractions: "IMAO (risque de syndrome sérotoninergique). Prudence avec les anticoagulants.",
              antidotes: "Pas d'antidote spécifique. Traitement de soutien.",
              posologyAdult: "Dose initiale 50 mg/jour, peut être augmentée jusqu'à 200 mg/jour.",
              posologyPediatric: "Usage spécialisé chez l'enfant > 6 ans pour le TOC."
            },
            {
              dci: "Citalopram",
              commercialNames: ["Celexa", "Seropram"],
              definition: "Inhibiteur sélectif de la recapture de la sérotonine (ISRS).",
              modeOfAction: "Inhibe sélectivement la recapture de la sérotonine (5-HT) au niveau présynaptique.",
              indications: ["Dépression majeure", "Trouble panique"],
              contraindications: ["Association avec IMAO", "Allongement de l'intervalle QT congénital ou connu"],
              adverseEffects: ["Nausées", "Bouche sèche", "Somnolence", "Allongement de l'intervalle QT (dose-dépendant)"],
              drugInteractions: "Médicaments allongeant le QT (ex: certains antiarythmiques, antipsychotiques). IMAO.",
              antidotes: "Pas d'antidote spécifique. Surveillance ECG et traitement de soutien.",
              posologyAdult: "20 mg/jour. Dose maximale 40 mg/jour en raison du risque d'allongement du QT.",
              posologyPediatric: "Usage non recommandé."
            },
            {
              dci: "Escitalopram",
              commercialNames: ["Lexapro", "Cipralex", "Seroplex"],
              definition: "Inhibiteur sélectif de la recapture de la sérotonine (ISRS), l'énantiomère S actif du citalopram.",
              modeOfAction: "Inhibe très sélectivement la recapture de la sérotonine (5-HT).",
              indications: ["Dépression majeure", "Trouble panique", "Trouble anxiété sociale", "Trouble anxieux généralisé"],
              contraindications: ["Association avec IMAO", "Allongement de l'intervalle QT"],
              adverseEffects: ["Nausées", "Céphalées", "Insomnie", "Dysfonction sexuelle"],
              drugInteractions: "Médicaments allongeant le QT. IMAO.",
              antidotes: "Pas d'antidote spécifique. Traitement de soutien.",
              posologyAdult: "10 mg/jour. Dose maximale 20 mg/jour.",
              posologyPediatric: "Usage spécialisé chez les adolescents > 12 ans."
            },
            {
              dci: "Paroxétine",
              commercialNames: ["Paxil", "Deroxat"],
              definition: "Inhibiteur sélectif de la recapture de la sérotonine (ISRS).",
              modeOfAction: "Inhibe puissamment la recapture de la sérotonine. A aussi des effets anticholinergiques faibles.",
              indications: ["Dépression majeure", "TOC", "Trouble panique", "Trouble anxiété sociale", "ESPT"],
              contraindications: ["Association avec IMAO", "Hypersensibilité"],
              adverseEffects: ["Nausées", "Somnolence", "Dysfonction sexuelle (fréquente)", "Syndrome de sevrage important à l'arrêt"],
              drugInteractions: "Puissant inhibiteur du CYP2D6. IMAO.",
              antidotes: "Pas d'antidote spécifique. Traitement de soutien.",
              posologyAdult: "20 mg/jour, jusqu'à 50 mg/jour.",
              posologyPediatric: "Usage non recommandé."
            }
        ]
      },
      {
        name: "Antidépresseurs : IRSN",
        drugs: [
          {
            dci: "Venlafaxine",
            commercialNames: ["Effexor", "Venlift"],
            definition: "Antidépresseur IRSN, inhibiteur de la recapture de la sérotonine et de la noradrénaline.",
            modeOfAction: "Inhibe la recapture de la sérotonine (5-HT) et de la noradrénaline (NA) → augmentation de leur concentration synaptique, améliorant l’humeur et réduisant l’anxiété.",
            indications: [
              "Dépression majeure",
              "Trouble anxieux généralisé",
              "Trouble panique",
              "Phobie sociale"
            ],
            contraindications: [
              "Hypersensibilité au médicament",
              "IMAO récent (risque de syndrome sérotoninergique)",
              "Insuffisance hépatique sévère",
              "Grossesse/allaitement (à évaluer)"
            ],
            adverseEffects: [
              "Nausées, vomissements",
              "Insomnie ou somnolence",
              "Bouffées de chaleur, sueurs",
              "Hypertension possible à doses élevées",
              "Dysfonction sexuelle",
              "Agitation, tremblements"
            ],
            drugInteractions: "IMAO, autres ISRS/IRSN, triptans → risque de syndrome sérotoninergique. Anticoagulants → risque hémorragique. Médicaments augmentant la pression artérielle.",
            antidotes: "Support symptomatique. Surveillance cardiaque et neurologique. Traitement des convulsions si nécessaire.",
            posologyAdult: "Dépression : 75–225 mg/jour en 1–2 prises. Commencer à 75 mg/jour, ajuster selon réponse.",
            posologyPediatric: "Usage limité, ≥12 ans pour dépression sévère : 37,5–75 mg/jour, ajuster selon tolérance."
          },
          {
            dci: "Duloxétine",
            commercialNames: ["Cymbalta", "Yentreve"],
            definition: "IRSN, inhibiteur de la recapture de la sérotonine et de la noradrénaline.",
            modeOfAction: "Augmente la concentration synaptique de la sérotonine et de la noradrénaline → améliore l’humeur, réduit l’anxiété et la douleur neuropathique.",
            indications: [
              "Dépression majeure",
              "Trouble anxieux généralisé",
              "Douleurs neuropathiques (diabétiques, fibromyalgie)",
              "Incontinence urinaire de stress (selon AMM)"
            ],
            contraindications: [
              "Hypersensibilité au médicament",
              "IMAO récent",
              "Insuffisance hépatique sévère",
              "Grossesse/allaitement (à évaluer)"
            ],
            adverseEffects: [
              "Nausées, vomissements, diarrhée",
              "Insomnie, somnolence",
              "Bouffées de chaleur, sudation",
              "Hypertension possible",
              "Dysfonction sexuelle"
            ],
            drugInteractions: "IMAO, autres IRSN/ISRS → syndrome sérotoninergique. Anticoagulants → risque hémorragique. Médicaments hypertensifs.",
            antidotes: "Support symptomatique. Monitoring cardiaque et neurologique. Traitement des convulsions si nécessaire.",
            posologyAdult: "Dépression : 30–60 mg/jour, en une ou deux prises. Douleurs neuropathiques : 60 mg/jour.",
            posologyPediatric: "Usage limité, ≥7 ans pour anxiété : 30 mg/jour, ajuster selon tolérance."
          }
        ]
      },
      {
        name: "Antidépresseurs : Tricycliques",
        drugs: [
            {
              dci: "Amitriptyline",
              commercialNames: ["Elavil", "Laroxyl"],
              definition: "Antidépresseur tricyclique (ATC) à action sédative.",
              modeOfAction: "Inhibe la recapture de la sérotonine (5-HT) et de la noradrénaline (NA). Bloque également les récepteurs cholinergiques, histaminiques et alpha-1 adrénergiques, ce qui explique ses nombreux effets secondaires.",
              indications: ["Dépression majeure (surtout avec composante anxieuse ou insomniaque)", "Douleurs neuropathiques chroniques", "Prophylaxie des migraines"],
              contraindications: ["Infarctus du myocarde récent", "Troubles du rythme cardiaque", "Glaucome à angle fermé", "Hypertrophie prostatique"],
              adverseEffects: ["Bouche sèche, constipation, vision trouble", "Somnolence, prise de poids", "Hypotension orthostatique", "Toxicité cardiaque en cas de surdosage"],
              drugInteractions: "IMAO (contre-indication absolue), Alcool et autres dépresseurs du SNC, Médicaments allongeant l'intervalle QT.",
              antidotes: "Pas d'antidote spécifique. Surveillance cardiaque intensive, bicarbonate de sodium pour la cardiotoxicité.",
              posologyAdult: "Dépression : 75–150 mg/jour, au coucher. Douleurs : 10–25 mg/jour.",
              posologyPediatric: "Usage très limité pour énurésie nocturne, à faibles doses."
            },
            {
              dci: "Imipramine",
              commercialNames: ["Tofranil"],
              definition: "Antidépresseur tricyclique, chef de file de la classe.",
              modeOfAction: "Similaire à l'amitriptyline, inhibe la recapture de la 5-HT et de la NA.",
              indications: ["Dépression majeure", "Énurésie nocturne chez l'enfant"],
              contraindications: ["Similaires à l'amitriptyline"],
              adverseEffects: ["Effets anticholinergiques marqués", "Somnolence", "Hypotension orthostatique"],
              drugInteractions: "Similaires à l'amitriptyline.",
              antidotes: "Traitement de soutien, surveillance cardiaque.",
              posologyAdult: "Dépression : 75–200 mg/jour.",
              posologyPediatric: "Énurésie (> 6 ans) : 25–50 mg au coucher."
            },
            {
              dci: "Nortriptyline",
              commercialNames: ["Pamelor"],
              definition: "Métabolite actif de l'amitriptyline, antidépresseur tricyclique.",
              modeOfAction: "Inhibe principalement la recapture de la noradrénaline. Moins sédatif et moins d'effets anticholinergiques que l'amitriptyline.",
              indications: ["Dépression majeure", "Douleurs neuropathiques", "Sevrage tabagique (hors AMM)"],
              contraindications: ["Similaires aux autres tricycliques"],
              adverseEffects: ["Moins de sédation et d'hypotension que l'amitriptyline", "Bouche sèche, constipation"],
              drugInteractions: "Similaires aux autres tricycliques.",
              antidotes: "Traitement de soutien, surveillance cardiaque.",
              posologyAdult: "Dépression : 50–150 mg/jour.",
              posologyPediatric: "Usage très limité."
            }
        ]
      },
      {
        name: "Antidépresseurs : IMAO",
        drugs: [
            {
              dci: "Phénelzine",
              commercialNames: ["Nardil"],
              definition: "Antidépresseur de la classe des inhibiteurs de la monoamine oxydase (IMAO), non sélectif et irréversible.",
              modeOfAction: "Inhibe de manière irréversible les enzymes MAO-A et MAO-B, augmentant les concentrations cérébrales de sérotonine, noradrénaline et dopamine.",
              indications: ["Dépression majeure atypique ou résistante", "Trouble panique", "Phobie sociale"],
              contraindications: ["Phéochromocytome", "Insuffisance hépatique sévère", "Association avec sympathomimétiques, ISRS, tricycliques, etc."],
              adverseEffects: ["Hypotension orthostatique", "Vertiges, céphalées", "Prise de poids", "Insomnie", "Crise hypertensive (si interaction alimentaire)"],
              drugInteractions: "Très nombreuses. Crise hypertensive avec aliments riches en tyramine (fromages vieillis, vin rouge). Syndrome sérotoninergique avec ISRS, IRSN. Potentiation des anesthésiques et opioïdes.",
              antidotes: "Pas d'antidote. Pour crise hypertensive : Phentolamine ou nitroprussiate de sodium. Traitement de soutien.",
              posologyAdult: "15 mg 3 fois/jour, augmenté jusqu'à 60-90 mg/jour si nécessaire.",
              posologyPediatric: "Usage non recommandé."
            },
            {
              dci: "Tranylcypromine",
              commercialNames: ["Parnate"],
              definition: "IMAO non sélectif et irréversible, avec une structure proche des amphétamines.",
              modeOfAction: "Inhibition irréversible des MAO-A et MAO-B, augmentant les niveaux de neurotransmetteurs.",
              indications: ["Dépression majeure résistante au traitement"],
              contraindications: ["Identiques à la phénelzine", "Maladies cardiovasculaires sévères"],
              adverseEffects: ["Hypotension orthostatique", "Insomnie (effet stimulant)", "Vertiges", "Crise hypertensive"],
              drugInteractions: "Interactions alimentaires (tyramine) et médicamenteuses sévères, identiques à la phénelzine.",
              antidotes: "Traitement de soutien. Prise en charge de la crise hypertensive.",
              posologyAdult: "Dose initiale 10 mg 2 fois/jour, augmenté progressivement jusqu'à 60 mg/jour.",
              posologyPediatric: "Usage non recommandé."
            }
        ]
      },
      {
        name: "Anxiolytiques : Benzodiazépines",
        drugs: [
            {
                dci: "Diazépam",
                commercialNames: ["Valium"],
                definition: "Benzodiazépine à longue durée d'action avec des propriétés anxiolytiques, sédatives, myorelaxantes et anticonvulsivantes.",
                modeOfAction: "Potentialise l'effet inhibiteur du GABA sur les récepteurs GABA-A, augmentant la fréquence d'ouverture des canaux chlorure.",
                indications: ["Anxiété", "Sevrage alcoolique", "Spasmes musculaires", "État de mal épileptique"],
                contraindications: ["Insuffisance respiratoire sévère", "Myasthénie", "Syndrome d'apnée du sommeil", "Hypersensibilité"],
                adverseEffects: ["Somnolence", "Confusion", "Ataxie", "Dépendance et tolérance", "Syndrome de sevrage à l'arrêt brutal"],
                drugInteractions: "Effets potentialisés par l'alcool, les opioïdes et autres dépresseurs du SNC.",
                antidotes: "Flumazénil. Support respiratoire.",
                posologyAdult: "Anxiété : 2–10 mg, 2–4 fois/jour. État de mal épileptique : 5-10 mg IV.",
                posologyPediatric: "Usage spécialisé, ajusté au poids.",
                references: ["ANSM - RCP Valium", "Vidal - Diazépam"]
            },
            {
                dci: "Lorazépam",
                commercialNames: ["Ativan", "Temesta"],
                definition: "Benzodiazépine à durée d'action intermédiaire.",
                modeOfAction: "Potentialise l'effet inhibiteur du GABA sur les récepteurs GABA-A.",
                indications: ["Anxiété", "Insomnie liée à l'anxiété", "État de mal épileptique", "Prémédication anesthésique"],
                contraindications: ["Insuffisance respiratoire sévère", "Myasthénie", "Glaucome à angle fermé"],
                adverseEffects: ["Sédation", "Vertiges", "Faiblesse", "Amnésie antérograde"],
                drugInteractions: "Potentialisation avec les autres dépresseurs du SNC.",
                antidotes: "Flumazénil. Support respiratoire.",
                posologyAdult: "Anxiété : 1–4 mg/jour en doses divisées.",
                posologyPediatric: "Usage spécialisé."
            },
            {
                dci: "Clonazépam",
                commercialNames: ["Klonopin", "Rivotril"],
                definition: "Benzodiazépine à longue durée d'action, particulièrement utilisée comme antiépileptique.",
                modeOfAction: "Potentialise l'inhibition GABAergique, augmentant le seuil convulsif.",
                indications: ["Épilepsie (divers types, notamment absences et myoclonies)", "Trouble panique", "Anxiété sévère"],
                contraindications: ["Insuffisance respiratoire sévère", "Myasthénie"],
                adverseEffects: ["Somnolence", "Ataxie", "Troubles du comportement (surtout chez l'enfant)", "Dépendance"],
                drugInteractions: "Dépresseurs du SNC. Le valproate peut augmenter le risque de crises d'absence.",
                antidotes: "Flumazénil. Traitement de soutien.",
                posologyAdult: "Épilepsie : 1.5 mg/jour initialement, augmenté progressivement jusqu'à 20 mg/jour max.",
                posologyPediatric: "Ajusté au poids et à la réponse."
            },
            {
                dci: "Midazolam",
                commercialNames: ["Versed", "Hypnovel"],
                definition: "Benzodiazépine à action très rapide et de courte durée, utilisée pour la sédation et l'induction anesthésique.",
                modeOfAction: "Potentialise l'effet du GABA, induisant sédation et amnésie.",
                indications: ["Sédation pour procédures diagnostiques ou chirurgicales", "Induction de l'anesthésie", "Sédation en soins intensifs"],
                contraindications: ["Insuffisance respiratoire sévère", "Choc", "Glaucome à angle fermé aigu"],
                adverseEffects: ["Dépression respiratoire", "Hypotension", "Amnésie antérograde", "Agitation paradoxale"],
                drugInteractions: "Inhibiteurs puissants du CYP3A4 (ex: antifongiques azolés, macrolides) augmentent fortement sa concentration. Opioïdes potentialisent la dépression respiratoire.",
                antidotes: "Flumazénil. Support respiratoire et hémodynamique.",
                posologyAdult: "Sédation IV : 1–2.5 mg administrés lentement juste avant la procédure.",
                posologyPediatric: "Administration IV, IM, ou nasale, ajustée au poids."
            }
        ]
      },
      {
        name: "Anxiolytiques : Non Benzodiazépines",
        drugs: [
            {
                dci: "Buspirone",
                commercialNames: ["Buspar"],
                definition: "Anxiolytique non benzodiazépinique, agoniste partiel des récepteurs 5-HT1A.",
                modeOfAction: "Agit comme agoniste partiel des récepteurs sérotoninergiques 5-HT1A. N'a pas d'effet sur les récepteurs GABA, ce qui explique l'absence d'effet sédatif, myorelaxant et de risque de dépendance. Son action anxiolytique est retardée (2-4 semaines).",
                indications: ["Trouble anxieux généralisé (TAG)"],
                contraindications: ["Hypersensibilité", "Insuffisance rénale ou hépatique sévère"],
                adverseEffects: ["Vertiges", "Céphalées", "Nausées", "Nervosité", "Insomnie"],
                drugInteractions: "IMAO (risque de crise hypertensive). Inhibiteurs du CYP3A4 (ex: jus de pamplemousse, kétoconazole) augmentent sa concentration.",
                antidotes: "Pas d'antidote spécifique. Traitement de soutien.",
                posologyAdult: "Dose initiale de 5 mg, 2-3 fois/jour. Augmentée progressivement. Dose usuelle : 20-30 mg/jour.",
                posologyPediatric: "Usage non recommandé."
            }
        ]
      },
      {
        name: "Hypnotiques / sédatifs",
        drugs: [
            {
                dci: "Zolpidem",
                commercialNames: ["Stilnox", "Ambien"],
                definition: "Hypnotique non-benzodiazépinique (apparenté), utilisé pour le traitement à court terme de l'insomnie.",
                modeOfAction: "Agoniste sélectif des récepteurs GABA-A contenant la sous-unité alpha-1. Induit le sommeil sans les effets myorelaxants ou anxiolytiques marqués des benzodiazépines.",
                indications: ["Insomnie de courte durée"],
                contraindications: ["Insuffisance respiratoire sévère", "Syndrome d'apnée du sommeil", "Insuffisance hépatique sévère", "Myasthénie"],
                adverseEffects: ["Somnolence diurne", "Amnésie antérograde", "Vertiges", "Céphalées", "Comportements de sommeil complexes (somnambulisme)"],
                drugInteractions: "Alcool, opioïdes, autres dépresseurs du SNC (potentialisation de la sédation).",
                antidotes: "Flumazénil (avec prudence). Traitement de soutien.",
                posologyAdult: "10 mg au coucher. 5 mg pour les personnes âgées ou fragiles.",
                posologyPediatric: "Usage non recommandé."
            },
            {
                dci: "Zopiclone",
                commercialNames: ["Imovane"],
                definition: "Hypnotique non-benzodiazépinique de la classe des cyclopyrrolones.",
                modeOfAction: "Modulateur allostérique des récepteurs GABA-A, similaire aux benzodiazépines mais sur un site de liaison différent.",
                indications: ["Traitement à court terme de l'insomnie"],
                contraindications: ["Insuffisance respiratoire sévère", "Apnée du sommeil", "Insuffisance hépatique sévère", "Myasthénie"],
                adverseEffects: ["Goût amer ou métallique", "Somnolence", "Bouche sèche", "Vertiges"],
                drugInteractions: "Dépresseurs du SNC. Inhibiteurs du CYP3A4 (ex: clarithromycine) augmentent sa concentration.",
                antidotes: "Flumazénil. Traitement de soutien.",
                posologyAdult: "7.5 mg au coucher. 3.75 mg pour les personnes âgées.",
                posologyPediatric: "Usage non recommandé."
            },
            {
                dci: "Zaleplon",
                commercialNames: ["Sonata"],
                definition: "Hypnotique non-benzodiazépinique de la classe des pyrazolopyrimidines, à action très rapide et de courte durée.",
                modeOfAction: "Agoniste sélectif des récepteurs GABA-A (sous-unité alpha-1).",
                indications: ["Insomnie d'endormissement (difficulté à s'endormir)"],
                contraindications: ["Insuffisance respiratoire/hépatique sévère", "Apnée du sommeil"],
                adverseEffects: ["Céphalées", "Somnolence", "Amnésie", "Vertiges"],
                drugInteractions: "Dépresseurs du SNC. Cimetidine (augmente sa concentration).",
                antidotes: "Flumazénil. Traitement de soutien.",
                posologyAdult: "10 mg au coucher ou après s'être couché si difficulté à s'endormir. 5 mg chez le sujet âgé.",
                posologyPediatric: "Usage non recommandé."
            },
            {
                dci: "Témazépam",
                commercialNames: ["Restoril", "Normison"],
                definition: "Benzodiazépine à durée d'action intermédiaire, utilisée comme hypnotique.",
                modeOfAction: "Potentialise l'effet inhibiteur du GABA sur les récepteurs GABA-A.",
                indications: ["Traitement à court terme de l'insomnie"],
                contraindications: ["Insuffisance respiratoire sévère", "Apnée du sommeil", "Myasthénie"],
                adverseEffects: ["Somnolence résiduelle le lendemain", "Vertiges", "Confusion", "Dépendance"],
                drugInteractions: "Dépresseurs du SNC (alcool, opioïdes).",
                antidotes: "Flumazénil. Support respiratoire.",
                posologyAdult: "10–30 mg au coucher.",
                posologyPediatric: "Usage non recommandé."
            }
        ]
      },
      {
        name: "Antipsychotiques typiques",
        drugs: [
          {
            dci: "Halopéridol",
            commercialNames: ["Haldol"],
            definition: "Antipsychotique typique de la classe des butyrophénones.",
            modeOfAction: "Blocage des récepteurs dopaminergiques D2 dans le cerveau, réduisant les symptômes psychotiques.",
            indications: ["Schizophrénie", "Psychoses aiguës", "Manie", "Nausées et vomissements sévères"],
            contraindications: ["Parkinson avancé", "Dépression du système nerveux central sévère", "Arythmies sévères", "Hypersensibilité"],
            adverseEffects: ["Syndrome extrapyramidal (rigidité, tremblements, akathisie)", "Sédation", "Hypotension orthostatique", "Hyperprolactinémie", "Allongement QT"],
            drugInteractions: "Potentialisation avec d'autres dépresseurs du SNC, risque accru d'arythmies avec certains antiarythmiques.",
            antidotes: "Traitement symptomatique des effets extrapyramidaux : anticholinergiques (bipéridène, trihexyphénidyle).",
            posologyAdult: "Schizophrénie aiguë : 0.5–5 mg 2–3 fois/jour, ajusté selon tolérance.",
            posologyPediatric: "Usage spécialisé sous stricte surveillance.",
            references: ["ANSM - RCP Haldol", "Vidal - Halopéridol"]
          },
          {
            dci: "Chlorpromazine",
            commercialNames: ["Largactil"],
            definition: "Antipsychotique typique de la classe des phénothiazines.",
            modeOfAction: "Antagoniste des récepteurs dopaminergiques D2 et autres récepteurs (histaminique, muscarinique, alpha-adrénergique).",
            indications: ["Schizophrénie", "Psychoses", "Manie", "Nausées et vomissements sévères", "Agitation sévère"],
            contraindications: ["Dépression sévère du SNC", "Hypersensibilité aux phénothiazines", "Troubles cardiaques sévères"],
            adverseEffects: ["Syndromes extrapyramidaux", "Sédation", "Hypotension orthostatique", "Photosensibilité", "Allongement QT", "Hyperprolactinémie"],
            drugInteractions: "Potentialisation avec dépresseurs du SNC et risque accru d'effets cardiologiques avec antiarythmiques.",
            antidotes: "Anticholinergiques pour effets extrapyramidaux. Support hémodynamique si hypotension.",
            posologyAdult: "Psychoses : 25–100 mg 2–4 fois/jour, ajusté selon réponse.",
            posologyPediatric: "Usage spécialisé, ajusté au poids et à la tolérance."
          },
          {
            dci: "Fluphénazine",
            commercialNames: ["Modecate"],
            definition: "Antipsychotique typique de la classe des phénothiazines, forme injectable prolongée disponible.",
            modeOfAction: "Blocage des récepteurs dopaminergiques D2, réduisant l'activité dopaminergique excessive dans le cerveau.",
            indications: ["Schizophrénie chronique", "Psychoses sévères"],
            contraindications: ["Hypersensibilité aux phénothiazines", "Dépression sévère du SNC", "Arythmies graves"],
            adverseEffects: ["Syndromes extrapyramidaux", "Sédation", "Hypotension", "Hyperprolactinémie", "Effets anticholinergiques modérés"],
            drugInteractions: "Dépresseurs du SNC, médicaments allongeant le QT.",
            antidotes: "Anticholinergiques pour effets extrapyramidaux. Surveillance cardiaque si nécessaire.",
            posologyAdult: "Schizophrénie : 1–5 mg 2–3 fois/jour. Injection IM prolongée selon protocole.",
            posologyPediatric: "Usage très spécialisé."
          }
        ]
      },
      {
        name: "Antipsychotiques atypiques",
        drugs: [
          {
            dci: "Rispéridone",
            commercialNames: ["Risperdal"],
            definition: "Antipsychotique atypique avec action sur les récepteurs dopaminergiques D2 et sérotoninergiques 5-HT2A.",
            modeOfAction: "Blocage partiel des récepteurs D2 et antagonisme des récepteurs 5-HT2A, réduisant symptômes positifs et améliorant symptômes négatifs.",
            indications: ["Schizophrénie", "Troubles bipolaires", "Irritabilité dans l'autisme"],
            contraindications: ["Hypersensibilité", "Dépression sévère du SNC"],
            adverseEffects: ["Sédation", "Prise de poids", "Hyperprolactinémie", "Syndromes extrapyramidaux modérés", "Hypotension orthostatique"],
            drugInteractions: "Dépresseurs du SNC, inhibiteurs CYP2D6 et CYP3A4 peuvent modifier les concentrations.",
            antidotes: "Traitement symptomatique des effets extrapyramidaux : anticholinergiques. Surveillance métabolique.",
            posologyAdult: "Schizophrénie : 2–8 mg/jour en 1–2 prises.",
            posologyPediatric: "Autisme : 0.5–3 mg/jour, ajusté au poids."
          },
          {
            dci: "Olanzapine",
            commercialNames: ["Zyprexa"],
            definition: "Antipsychotique atypique, puissant antagoniste des récepteurs D2 et 5-HT2A.",
            modeOfAction: "Blocage des récepteurs dopaminergiques et sérotoninergiques, influençant l'humeur, les symptômes psychotiques et l'anxiété.",
            indications: ["Schizophrénie", "Troubles bipolaires", "Prévention des rechutes maniaques"],
            contraindications: ["Hypersensibilité", "Glaucome à angle fermé", "Troubles sévères du métabolisme"],
            adverseEffects: ["Prise de poids importante", "Sédation", "Hyperglycémie", "Dyslipidémie", "Syndrome extrapyramidal rare"],
            drugInteractions: "Dépresseurs du SNC, inhibiteurs CYP1A2 (ex: fluvoxamine) augmentent concentrations.",
            antidotes: "Traitement symptomatique. Surveillance métabolique et glycémie.",
            posologyAdult: "Schizophrénie : 10–20 mg/jour.",
            posologyPediatric: "Usage spécialisé, ajusté au poids."
          },
          {
            dci: "Quetiapine",
            commercialNames: ["Seroquel"],
            definition: "Antipsychotique atypique antagoniste des récepteurs D2 et 5-HT2A, avec effet sédatif marqué.",
            modeOfAction: "Blocage des récepteurs dopaminergiques et sérotoninergiques, régulant humeur et symptômes psychotiques.",
            indications: ["Schizophrénie", "Troubles bipolaires (maniaque et dépressif)", "Dépression résistante aux autres traitements"],
            contraindications: ["Hypersensibilité", "Hypotension sévère", "Arythmies graves"],
            adverseEffects: ["Sédation", "Prise de poids", "Hypotension orthostatique", "Dyslipidémie", "Syndromes extrapyramidaux rares"],
            drugInteractions: "Inhibiteurs CYP3A4 augmentent les concentrations. Dépresseurs du SNC potentialisent effets sédatifs.",
            antidotes: "Support symptomatique. Surveillance métabolique.",
            posologyAdult: "Schizophrénie : 150–750 mg/jour en 2–3 prises.",
            posologyPediatric: "Usage spécialisé selon poids."
          },
          {
            dci: "Aripiprazole",
            commercialNames: ["Abilify"],
            definition: "Antipsychotique atypique à mécanisme de modulation dopaminergique partielle (agoniste partiel D2).",
            modeOfAction: "Agoniste partiel des récepteurs D2 et D3 et antagoniste des 5-HT2A, stabilisant dopamine et sérotonine.",
            indications: ["Schizophrénie", "Troubles bipolaires", "Dépression résistante (adjunctive)"],
            contraindications: ["Hypersensibilité", "Insuffisance hépatique sévère"],
            adverseEffects: ["Insomnie", "Anxiété", "Nausées", "Syndromes extrapyramidaux légers", "Prise de poids modérée"],
            drugInteractions: "Inducteurs CYP3A4 et CYP2D6 diminuent concentrations. Dépresseurs du SNC potentialisent effets.",
            antidotes: "Support symptomatique des effets indésirables. Surveillance clinique.",
            posologyAdult: "Schizophrénie : 10–30 mg/jour.",
            posologyPediatric: "Usage spécialisé, ajusté au poids."
          },
          {
            dci: "Clozapine",
            commercialNames: ["Clozaril"],
            definition: "Antipsychotique atypique utilisé surtout pour les formes résistantes de schizophrénie.",
            modeOfAction: "Blocage des récepteurs dopaminergiques D2 et D4, sérotoninergiques 5-HT2A, et autres récepteurs (muscariniques, histaminiques).",
            indications: ["Schizophrénie résistante", "Prévention du comportement suicidaire chez patients schizophrènes"],
            contraindications: ["Agranulocytose préalable", "Myélosuppression sévère", "Hypersensibilité"],
            adverseEffects: ["Agranulocytose (risque majeur)", "Sédation", "Convulsions", "Myocardite rare", "Prise de poids importante", "Constipation sévère"],
            drugInteractions: "Inhibiteurs et inducteurs CYP1A2 modifient concentration. Dépresseurs du SNC potentialisent sédation.",
            antidotes: "Surveillance hématologique stricte. Traitement symptomatique des effets.",
            posologyAdult: "Schizophrénie résistante : 12.5–25 mg/jour initialement, titration progressive jusqu'à 300–600 mg/jour max.",
            posologyPediatric: "Usage très spécialisé."
          }
        ]
      },
      {
        name: "Antiépileptiques",
        drugs: [
          {
            dci: "Valproate (Acide valproïque)",
            commercialNames: ["Depakine", "Depakote"],
            definition: "Antiépileptique à large spectre utilisé aussi comme stabilisateur de l'humeur.",
            modeOfAction: "Augmente la concentration du GABA dans le SNC et inhibe les canaux sodiques et calcium voltage-dépendants.",
            indications: ["Épilepsie généralisée et partielle", "Troubles bipolaires", "Migraine (prophylaxie)"],
            contraindications: ["Hépatopathie sévère", "Troubles hématologiques graves", "Grossesse (surtout 1er trimestre)"],
            adverseEffects: ["Nausées", "Prise de poids", "Tremblements", "Hépatotoxicité", "Pancréatite", "Teratogène"],
            drugInteractions: "Anticonvulsivants inducteurs enzymatiques, aspirine, anticoagulants.",
            antidotes: "Traitement symptomatique. Hémodialyse possible en cas de surdosage sévère.",
            posologyAdult: "Épilepsie : 10–15 mg/kg/jour initialement, jusqu'à 60 mg/kg/jour max.",
            posologyPediatric: "5–15 mg/kg/jour initialement, titration selon tolérance."
          },
          {
            dci: "Carbamazépine",
            commercialNames: ["Tegretol"],
            definition: "Antiépileptique utilisé aussi dans les névralgies et troubles bipolaires.",
            modeOfAction: "Blocage des canaux sodiques voltage-dépendants, stabilisant les membranes neuronales hyperexcitées.",
            indications: ["Épilepsie focale", "Névralgie du trijumeau", "Troubles bipolaires"],
            contraindications: ["Bloc AV sévère", "Hyponatrémie sévère", "Hypersensibilité aux tricycliques"],
            adverseEffects: ["Vertiges", "Diplopie", "Hyponatrémie", "Leucopénie", "Éruptions cutanées graves (SJS/TEN)"],
            drugInteractions: "Inducteur CYP3A4 : diminue efficacité de contraceptifs oraux et autres médicaments.",
            antidotes: "Support symptomatique. Surveillance hématologique.",
            posologyAdult: "Épilepsie : 200 mg 2–3 fois/jour, augmenter progressivement jusqu'à 800–1200 mg/jour.",
            posologyPediatric: "10–20 mg/kg/jour, titration selon tolérance."
          },
          {
            dci: "Phénytoïne",
            commercialNames: ["Dilantin"],
            definition: "Antiépileptique à action sur les crises focales et généralisées tonico-cloniques.",
            modeOfAction: "Stabilise les membranes neuronales en bloquant les canaux sodiques voltage-dépendants.",
            indications: ["Épilepsie tonico-clonique généralisée", "Crises partielles", "Prévention post-traumatique"],
            contraindications: ["Bradycardie sévère", "Hypersensibilité", "Syndrome de conduction cardiaque"],
            adverseEffects: ["Ataxie", "Diplopie", "Gingivite hyperplasique", "Hirsutisme", "Arythmies cardiaques"],
            drugInteractions: "Inducteur enzymatique puissant CYP3A4, interactions avec anticoagulants, contraceptifs.",
            antidotes: "Support symptomatique. Surveillance cardiaque et neurologique.",
            posologyAdult: "100 mg 3–4 fois/jour, titration selon taux sérique (objectif 10–20 µg/mL).",
            posologyPediatric: "5 mg/kg/jour initialement, ajuster selon taux sérique et tolérance."
          },
          {
            dci: "Lévétiracétam",
            commercialNames: ["Keppra"],
            definition: "Antiépileptique à large spectre, bien toléré, mécanisme partiellement connu.",
            modeOfAction: "Lie la protéine SV2A, modulant la libération synaptique de neurotransmetteurs.",
            indications: ["Crises partielles", "Épilepsie généralisée tonico-clonique", "Épilepsie myoclonique"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Somnolence", "Asthénie", "Vertiges", "Troubles comportementaux (agitation, irritabilité)"],
            drugInteractions: "Peu d'interactions médicamenteuses connues.",
            antidotes: "Support symptomatique.",
            posologyAdult: "500–1500 mg 2 fois/jour, ajusté selon réponse.",
            posologyPediatric: "20–60 mg/kg/jour en 2 prises, selon âge et tolérance."
          },
          {
            dci: "Lamotrigine",
            commercialNames: ["Lamictal"],
            definition: "Antiépileptique à large spectre et stabilisateur de l'humeur.",
            modeOfAction: "Blocage des canaux sodiques et inhibition de la libération excessive de glutamate.",
            indications: ["Épilepsie partielle et généralisée", "Trouble bipolaire (prévention dépression)"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Éruptions cutanées sévères (SJS/TEN)", "Céphalées", "Diplopie", "Insomnie"],
            drugInteractions: "Valproate augmente les concentrations plasmatiques, inducteurs enzymatiques diminuent efficacité.",
            antidotes: "Support symptomatique. Arrêt immédiat en cas d'éruption cutanée sévère.",
            posologyAdult: "25 mg/jour initialement, augmenter progressivement jusqu'à 200–500 mg/jour.",
            posologyPediatric: "0.3–1 mg/kg/jour initialement, titration progressive."
          },
          {
            dci: "Topiramate",
            commercialNames: ["Topamax"],
            definition: "Antiépileptique à large spectre avec propriétés anti-migraineuses.",
            modeOfAction: "Bloque les canaux sodiques, potentialise GABA, antagoniste AMPA/kainate.",
            indications: ["Crises partielles et généralisées", "Prévention migraine", "Épilepsie infantile (syndromes spécifiques)"],
            contraindications: ["Hypersensibilité", "Calculs rénaux préexistants"],
            adverseEffects: ["Céphalées", "Somnolence", "Perte de poids", "Néphrolithiase", "Difficultés cognitives"],
            drugInteractions: "Inducteurs enzymatiques réduisent efficacité, contraception hormonale peut être diminuée.",
            antidotes: "Support symptomatique. Hydratation pour prévenir calculs rénaux.",
            posologyAdult: "25–50 mg/jour initialement, titration progressive jusqu'à 200–400 mg/jour.",
            posologyPediatric: "1–5 mg/kg/jour initialement, ajusté selon tolérance."
          },
          {
            dci: "Gabapentine",
            commercialNames: ["Neurontin"],
            definition: "Antiépileptique et analgésique neuropathique.",
            modeOfAction: "Modulation des canaux calciques α2δ, réduisant libération glutamate.",
            indications: ["Épilepsie partielle", "Douleurs neuropathiques", "Neuralgie post-zostérienne"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Somnolence", "Ataxie", "Fatigue", "Vertiges"],
            drugInteractions: "Peu d'interactions médicamenteuses cliniquement significatives.",
            antidotes: "Support symptomatique.",
            posologyAdult: "300 mg 3 fois/jour, augmenter selon tolérance jusqu'à 1800–3600 mg/jour.",
            posologyPediatric: "5–15 mg/kg/jour initialement, titration progressive."
          },
          {
            dci: "Prégabaline",
            commercialNames: ["Lyrica"],
            definition: "Antiépileptique et analgésique neuropathique proche de la gabapentine.",
            modeOfAction: "Lie la sous-unité α2δ des canaux calciques voltage-dépendants, diminuant neurotransmission excitatrice.",
            indications: ["Épilepsie partielle", "Douleurs neuropathiques", "Fibromyalgie"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Somnolence", "Vertiges", "Prise de poids", "Œdème périphérique"],
            drugInteractions: "Peu d'interactions importantes.",
            antidotes: "Support symptomatique.",
            posologyAdult: "150–300 mg/jour initialement, titration jusqu'à 300–600 mg/jour en 2–3 prises.",
            posologyPediatric: "Usage spécialisé selon poids."
          }
        ]
      },
      {
        name: "Antiparkinsoniens : Dopaminergiques",
        drugs: [
          {
            dci: "Lévodopa / Carbidopa",
            commercialNames: ["Sinemet", "Madopar"],
            definition: "Précurseur de la dopamine administré avec un inhibiteur périphérique de la dopa-décarboxylase (carbidopa) pour augmenter la dopamine centrale.",
            modeOfAction: "Lévodopa est convertie en dopamine dans le SNC, compensant le déficit dopaminergique de la maladie de Parkinson. Carbidopa inhibe la conversion périphérique, réduisant les effets secondaires.",
            indications: ["Maladie de Parkinson (forme idiopathique)", "Syndromes parkinsoniens atypiques parfois"],
            contraindications: ["Glaucome à angle fermé", "Hypersensibilité à la lévodopa ou carbidopa", "Antécédent de mélanome"],
            adverseEffects: ["Nausées", "Vomissements", "Hypotension orthostatique", "Dyskinesies", "Hallucinations", "Troubles du sommeil"],
            drugInteractions: "Inhibiteurs de la MAO-A, antipsychotiques typiques, antihypertenseurs puissants.",
            antidotes: "Support symptomatique. Ajustement des doses. Antiémétiques non dopaminergiques (ex: ondansétron).",
            posologyAdult: "Lévodopa/carbidopa : 100/25 mg 1–3 fois/jour initialement, titration progressive selon tolérance.",
            posologyPediatric: "Usage très spécialisé, ajusté par neurologue.",
            references: ["ANSM - RCP Sinemet", "Parkinson's Foundation Guidelines"]
          },
          {
            dci: "Pramipexole",
            commercialNames: ["Mirapex"],
            definition: "Agoniste dopaminergique non-ergotique.",
            modeOfAction: "Stimule directement les récepteurs dopaminergiques D2/D3 dans le SNC.",
            indications: ["Maladie de Parkinson (précoce et avancée)", "Syndrome des jambes sans repos (RLS)"],
            contraindications: ["Hypersensibilité", "Antécédent de psychose sévère"],
            adverseEffects: ["Nausées", "Hypotension orthostatique", "Somnolence excessive", "Hallucinations", "Compulsions"],
            drugInteractions: "Effets additifs avec autres agonistes dopaminergiques ou dépresseurs du SNC.",
            antidotes: "Support symptomatique, ajustement des doses.",
            posologyAdult: "0.125 mg 3 fois/jour initialement, augmentation progressive jusqu'à 1,5 mg 3 fois/jour.",
            posologyPediatric: "Usage très spécialisé."
          },
          {
            dci: "Ropinirole",
            commercialNames: ["Requip"],
            definition: "Agoniste dopaminergique non-ergotique.",
            modeOfAction: "Stimule directement les récepteurs dopaminergiques D2/D3.",
            indications: ["Maladie de Parkinson (précoce et avancée)", "Syndrome des jambes sans repos"],
            contraindications: ["Hypersensibilité", "Antécédent de psychose sévère"],
            adverseEffects: ["Nausées", "Hypotension orthostatique", "Somnolence", "Hallucinations", "Compulsions"],
            drugInteractions: "Dépresseurs du SNC peuvent potentialiser la somnolence.",
            antidotes: "Support symptomatique, ajustement des doses.",
            posologyAdult: "0.25 mg 3 fois/jour initialement, titration progressive jusqu'à 24 mg/jour selon tolérance.",
            posologyPediatric: "Usage très spécialisé."
          }
        ]
      },
      {
        name: "Antiparkinsoniens : Anticholinergiques",
        drugs: [
          {
            dci: "Trihexyphénidyle",
            commercialNames: ["Artane", "Benzhexol"],
            definition: "Anticholinergique central utilisé dans la maladie de Parkinson pour réduire les symptômes extrapyramidaux.",
            modeOfAction: "Bloque les récepteurs muscariniques M1 dans le SNC, rétablissant l’équilibre dopaminergique-cholinergique.",
            indications: ["Maladie de Parkinson (surtout tremblements et rigidité)", "Syndromes extrapyramidaux induits par les neuroleptiques"],
            contraindications: ["Glaucome à angle fermé", "Obstruction urinaire", "Myasthénie", "Hypersensibilité"],
            adverseEffects: ["Sécheresse buccale", "Constipation", "Rétention urinaire", "Confusion", "Troubles cognitifs surtout chez les personnes âgées"],
            drugInteractions: "Potentialisation avec d’autres anticholinergiques, risque accru de confusion avec sédatifs ou antihistaminiques.",
            antidotes: "Physostigmine en cas de surdosage sévère. Support symptomatique.",
            posologyAdult: "1–2 mg 2–3 fois/jour, ajuster selon tolérance.",
            posologyPediatric: "Usage très spécialisé, généralement évité."
          },
          {
            dci: "Bipéridène",
            commercialNames: ["Akineton"],
            definition: "Anticholinergique central utilisé pour la maladie de Parkinson et les effets secondaires des neuroleptiques.",
            modeOfAction: "Antagoniste muscarinique M1, rétablissant l’équilibre dopaminergique-cholinergique dans le striatum.",
            indications: ["Maladie de Parkinson", "Syndromes extrapyramidaux induits par les neuroleptiques"],
            contraindications: ["Glaucome à angle fermé", "Obstruction urinaire", "Myasthénie", "Hypersensibilité"],
            adverseEffects: ["Bouche sèche", "Constipation", "Rétention urinaire", "Confusion", "Tachycardie"],
            drugInteractions: "Autres anticholinergiques, sédatifs, antihistaminiques.",
            antidotes: "Physostigmine pour surdosage sévère. Support symptomatique.",
            posologyAdult: "2–4 mg 1–3 fois/jour selon tolérance.",
            posologyPediatric: "Usage très spécialisé."
          }
        ]
      }
    ]
  },
  {
    name: "Médicaments cardiovasculaires",
    subCategories: [
      {
        name: "Antihypertenseurs",
        subCategories: [
          {
            name: "Antihypertenseurs centraux",
            drugs: [
                {
                    dci: "Clonidine",
                    commercialNames: ["Catapressan"],
                    definition: "Antihypertenseur central, agoniste des récepteurs alpha-2 adrénergiques.",
                    modeOfAction: "Stimule les récepteurs alpha-2 adrénergiques présynaptiques dans le système nerveux central, ce qui diminue le flux sympathique sortant et entraîne une réduction de la fréquence cardiaque, de la relaxation des vaisseaux sanguins et de la pression artérielle.",
                    indications: ["Hypertension artérielle", "Trouble du déficit de l'attention avec ou sans hyperactivité (TDAH) (hors AMM)", "Sevrage des opiacés"],
                    contraindications: ["Bradycardie sévère", "Bloc atrio-ventriculaire de haut degré", "Hypersensibilité"],
                    adverseEffects: ["Sécheresse buccale", "Sédation, somnolence", "Hypotension orthostatique", "Constipation", "Effet rebond hypertensif à l'arrêt brutal"],
                    drugInteractions: "Bêta-bloquants (risque de potentialisation de la bradycardie, et de crise hypertensive à l'arrêt de la clonidine). Dépresseurs du SNC (alcool, barbituriques) augmentent la sédation.",
                    antidotes: "Pas d'antidote spécifique. Traitement de soutien pour l'hypotension (remplissage, vasopresseurs). Atropine pour la bradycardie. Ne pas arrêter brutalement.",
                    posologyAdult: "HTA: 0.1 mg 2 fois par jour, augmenté progressivement si nécessaire. Max 2.4 mg/jour.",
                    posologyPediatric: "Usage spécialisé pour TDAH, ajusté au poids."
                },
                {
                    dci: "Méthyldopa",
                    commercialNames: ["Aldomet"],
                    definition: "Antihypertenseur d'action centrale, souvent utilisé chez la femme enceinte.",
                    modeOfAction: "Est métabolisé en alpha-méthylnoradrénaline dans le cerveau. Ce métabolite agit comme un faux neurotransmetteur et stimule les récepteurs alpha-2 adrénergiques centraux, réduisant ainsi le tonus sympathique.",
                    indications: ["Hypertension artérielle, particulièrement l'hypertension gravidique (pendant la grossesse)."],
                    contraindications: ["Maladie hépatique active (hépatite aiguë, cirrhose active)", "Association avec les IMAO", "Hypersensibilité"],
                    adverseEffects: ["Sédation", "Hypotension orthostatique", "Anémie hémolytique (rare, test de Coombs positif)", "Hépatite (rare mais grave)", "Syndrome pseudo-grippal"],
                    drugInteractions: "IMAO (risque de crise hypertensive). Sels de fer (diminuent l'absorption de la méthyldopa).",
                    antidotes: "Pas d'antidote spécifique. Traitement de soutien.",
                    posologyAdult: "250 mg 2 à 3 fois par jour initialement, augmenté progressivement. Dose usuelle : 500 mg à 2g/jour.",
                    posologyPediatric: "10 mg/kg/jour initialement, en 2-4 doses."
                }
            ]
          },
          {
            name: "Antihypertenseurs périphériques",
            subCategories: [
                {
                  name: "Diurétiques",
                  subCategories: [
                    { 
                      "name": "Diurétiques de l'anse", 
                      "drugs": [
                        { 
                          "dci": "Furosémide", 
                          "commercialNames": ["Lasilix"], 
                          "definition": "Diurétique de l'anse puissant.", 
                          "modeOfAction": "Inhibe le cotransporteur Na-K-2Cl dans la branche ascendante de l'anse de Henlé.", 
                          "indications": ["Œdème (cardiaque, rénal, hépatique)", "Hypertension artérielle"], 
                          "contraindications": ["Déshydratation", "Anurie"], 
                          "adverseEffects": ["Hypokaliémie", "Hypotension", "Ototoxicité"], 
                          "drugInteractions": "AINS, aminosides.", 
                          "antidotes": "Correction des troubles hydroélectrolytiques.", 
                          "posologyAdult": "20-80 mg/jour.", 
                          "posologyPediatric": "1-2 mg/kg/dose.",
                          "references": ["ANSM - RCP Lasilix", "Vidal - Furosémide"]
                        }
                      ] 
                    },
                    { 
                      "name": "Diurétiques thiazidiques", 
                      "drugs": [
                        { 
                          "dci": "Hydrochlorothiazide", 
                          "commercialNames": ["Esidrex"], 
                          "definition": "Diurétique thiazidique.", 
                          "modeOfAction": "Inhibe le cotransporteur Na-Cl dans le tube contourné distal.", 
                          "indications": ["Hypertension artérielle", "Œdème"], 
                          "contraindications": ["Anurie", "Allergie aux sulfamides"], 
                          "adverseEffects": ["Hypokaliémie", "Hyperglycémie", "Hyperuricémie"], 
                          "drugInteractions": "AINS, Lithium.", 
                          "antidotes": "Correction des troubles hydroélectrolytiques.", 
                          "posologyAdult": "12.5-50 mg/jour.", 
                          "posologyPediatric": "1-2 mg/kg/jour." 
                        }
                      ] 
                    },
                    { 
                      "name": "Diurétiques épargneurs de potassium", 
                      "drugs": [
                        { 
                          "dci": "Spironolactone", 
                          "commercialNames": ["Aldactone"], 
                          "definition": "Antagoniste de l'aldostérone, diurétique épargneur de potassium.", 
                          "modeOfAction": "Bloque les récepteurs de l'aldostérone dans le tube collecteur, augmentant l'excrétion de sodium et retenant le potassium.", 
                          "indications": ["Insuffisance cardiaque", "Hyperaldostéronisme", "HTA"], 
                          "contraindications": ["Hyperkaliémie", "Insuffisance rénale sévère"], 
                          "adverseEffects": ["Hyperkaliémie", "Gynécomastie"], 
                          "drugInteractions": "IEC, ARA II (risque d'hyperkaliémie).", 
                          "antidotes": "Arrêt du médicament, résines échangeuses d'ions.", 
                          "posologyAdult": "25-100 mg/jour.", 
                          "posologyPediatric": "1-3 mg/kg/jour." 
                        }
                      ] 
                    }
                  ]
                },
                {
                  "name": "Bêta-bloquants",
                  "subCategories": [
                    {
                      "name": "Bêta-bloquants cardiosélectifs (B1)",
                      "drugs": [
                        { 
                          "dci": "Atenolol", 
                          "definition": "Bêta-bloquant sélectif B1 (cardiosélectif).", 
                          "commercialNames": ["Tenormin"], 
                          "modeOfAction": "Bloque préférentiellement les récepteurs B1 cardiaques.", 
                          "indications": ["HTA", "Angine de poitrine", "Post-infarctus"], 
                          "contraindications": ["Bradycardie", "Bloc AV", "Insuffisance cardiaque décompensée"], 
                          "adverseEffects": ["Fatigue", "Bradycardie"], 
                          "drugInteractions": "Similaires au propranolol.", 
                          "antidotes": "Glucagon.", 
                          "posologyAdult": "25-100 mg 1x/jour.", 
                          "posologyPediatric": "0.5-1 mg/kg/jour.",
                          "references": ["ANSM - RCP Tenormin", "Vidal - Atenolol"]
                        }
                      ]
                    },
                    {
                      "name": "Bêta-bloquants non cardiosélectifs (B1+B2)",
                      "drugs": [
                        { 
                          "dci": "Propranolol", 
                          "definition": "Bêta-bloquant non sélectif (B1 et B2).", 
                          "commercialNames": ["Inderal", "Avlocardyl"], 
                          "modeOfAction": "Bloque B1 (cœur) et B2 (bronches, vaisseaux).", 
                          "indications": ["HTA", "Angor", "Anxiété de performance", "Prévention migraine", "Tremblement essentiel"], 
                          "contraindications": ["Asthme", "Bradycardie sévère", "Bloc AV", "IC décompensée"], 
                          "adverseEffects": ["Bradycardie", "Bronchospasme", "Cauchemars"], 
                          "drugInteractions": "Inhibiteurs calciques bradycardisants.", 
                          "antidotes": "Glucagon, atropine, isoprénaline.", 
                          "posologyAdult": "40-320 mg/jour.", 
                          "posologyPediatric": "0.5-1 mg/kg/jour." 
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "IEC (Inhibiteurs de l'Enzyme de Conversion)",
                  drugs: [
                    {
                      dci: "Lisinopril",
                      definition: "Inhibiteur de l'enzyme de conversion de l'angiotensine (IEC).",
                      commercialNames: ["Zestril", "Prinivil"],
                      modeOfAction: "Empêche la conversion de l'angiotensine I en angiotensine II (un puissant vasoconstricteur), entraînant une vasodilatation et une réduction de la rétention de sodium.",
                      indications: ["Hypertension", "Insuffisance cardiaque", "Post-infarctus", "Néphropathie diabétique"],
                      contraindications: ["Antécédent d'angioedème sous IEC", "Grossesse", "Sténose bilatérale des artères rénales"],
                      adverseEffects: ["Toux sèche", "Hypotension", "Hyperkaliémie", "Angioedème"],
                      drugInteractions: "AINS (réduction de l'effet), diurétiques épargneurs de potassium (risque d'hyperkaliémie).",
                      antidotes: "Traitement de soutien. Icatibant pour l'angioedème.",
                      posologyAdult: "HTA: 10-40 mg 1x/jour.",
                      posologyPediatric: "Usage spécialisé.",
                      references: ["ANSM - RCP Zestril", "Vidal - Lisinopril"]
                    }
                  ]
                },
                {
                  name: "ARA II (Antagonistes des récepteurs de l'angiotensine II)",
                  drugs: [
                    {
                      dci: "Losartan",
                      definition: "Antagoniste des récepteurs de l’angiotensine II (sartan).",
                      commercialNames: ["Cozaar"],
                      modeOfAction: "Bloque sélectivement les récepteurs AT1 de l’angiotensine II, entraînant une vasodilatation et une diminution de la sécrétion d’aldostérone.",
                      indications: ["Hypertension", "Insuffisance cardiaque", "Néphropathie diabétique"],
                      contraindications: ["Grossesse", "Sténose bilatérale des artères rénales"],
                      adverseEffects: ["Hypotension", "Hyperkaliémie", "Vertiges"],
                      drugInteractions: "Diurétiques épargneurs de potassium, IEC (risque d’hyperkaliémie).",
                      antidotes: "Traitement symptomatique.",
                      posologyAdult: "50–100 mg/jour.",
                      posologyPediatric: "Usage spécialisé."
                    }
                  ]
                },
                { 
                  name: "Inhibiteurs calciques", 
                  subCategories: [
                    {
                      name: "Dihydropyridines (DHP)",
                      drugs: [
                        {
                          dci: "Amlodipine",
                          commercialNames: ["Amlor", "Norvasc"],
                          definition: "Inhibiteur calcique de la famille des dihydropyridines, à longue durée d'action.",
                          modeOfAction: "Bloque les canaux calciques lents de type L, principalement au niveau des muscles lisses vasculaires, entraînant une vasodilatation artérielle et une baisse de la pression artérielle.",
                          indications: ["Hypertension artérielle", "Angine de poitrine stable (angor)"],
                          contraindications: ["Hypotension sévère", "Choc cardiogénique", "Hypersensibilité"],
                          adverseEffects: ["Œdèmes des chevilles", "Céphalées", "Bouffées de chaleur", "Palpitations"],
                          drugInteractions: "Inhibiteurs du CYP3A4 (ex: jus de pamplemousse) peuvent augmenter ses concentrations.",
                          antidotes: "Traitement de soutien, gluconate de calcium IV, vasopresseurs.",
                          posologyAdult: "5-10 mg 1x/jour.",
                          posologyPediatric: "2.5-5 mg 1x/jour (usage spécialisé)."
                        }
                      ]
                    },
                    {
                      name: "Non Dihydropyridines",
                      drugs: [
                        {
                          dci: "Vérapamil",
                          commercialNames: ["Isoptine"],
                          definition: "Inhibiteur calcique non-DHP avec effet cardiaque marqué.",
                          modeOfAction: "Bloque les canaux calciques L au niveau cardiaque → effet inotrope négatif, chronotrope négatif, dromotrope négatif.",
                          indications: ["Angor", "HTA", "Troubles du rythme supraventriculaires"],
                          contraindications: ["Bloc AV 2e ou 3e degré", "Insuffisance cardiaque sévère"],
                          adverseEffects: ["Bradycardie", "Constipation", "Hypotension"],
                          drugInteractions: "Bêta-bloquants (risque de bradycardie sévère), digoxine.",
                          antidotes: "Atropine, isoprénaline, calcium IV.",
                          posologyAdult: "120–480 mg/jour.",
                          posologyPediatric: "Usage spécialisé."
                        }
                      ]
                    }
                  ]
                }
            ]
          }
        ]
      },
      {
        name: "Antiarythmiques",
        subCategories: [
          {
            name: "Classe I : Inhibiteurs des canaux sodiques",
            drugs: [
              {
                dci: "Quinidine",
                commercialNames: ["Cardioquin"],
                definition: "Antiarythmique de classe IA.",
                modeOfAction: "Bloque les canaux sodiques et prolonge la durée du potentiel d'action.",
                indications: ["Fibrillation auriculaire", "Flutter auriculaire"],
                contraindications: ["Bloc AV complet", "Allongement du QT"],
                adverseEffects: ["Torsades de pointes", "Troubles digestifs"],
                drugInteractions: "Augmente les taux de digoxine.",
                antidotes: "Traitement de soutien.",
                posologyAdult: "200–400 mg 3–4 fois/jour.",
                posologyPediatric: "Usage très rare."
              }
            ]
          },
          { name: "Classe II : Bêta-bloquants", reference: "Voir section 'Bêta-bloquants'" },
          {
            name: "Classe III : Inhibiteurs des canaux potassiques",
            drugs: [
              {
                dci: "Amiodarone",
                commercialNames: ["Cordarone"],
                definition: "Antiarythmique puissant à large spectre.",
                modeOfAction: "Bloque les canaux potassiques, mais aussi sodiques, calciques et les récepteurs adrénergiques.",
                indications: ["Arythmies ventriculaires et supraventriculaires sévères"],
                contraindications: ["Bradycardie sinusale", "Maladie thyroïdienne"],
                adverseEffects: ["Toxicité pulmonaire, thyroïdienne, hépatique", "Photosensibilité"],
                drugInteractions: "Très nombreuses (warfarine, digoxine).",
                antidotes: "Pas d'antidote. Traitement de soutien.",
                posologyAdult: "Dose de charge puis 100–400 mg/jour.",
                posologyPediatric: "Usage très spécialisé.",
                references: ["ANSM - RCP Cordarone", "Vidal - Amiodarone"]
              },
              {
                dci: "Sotalol",
                commercialNames: ["Sotacor"],
                definition: "Antiarythmique de classe III avec des propriétés de bêta-bloquant.",
                modeOfAction: "Bloque les canaux potassiques et les récepteurs bêta-adrénergiques.",
                indications: ["Fibrillation auriculaire", "Tachycardies ventriculaires"],
                contraindications: ["Asthme", "Bradycardie sévère", "Allongement du QT"],
                adverseEffects: ["Torsades de pointes", "Bradycardie", "Fatigue"],
                drugInteractions: "Médicaments allongeant le QT.",
                antidotes: "Traitement de soutien.",
                posologyAdult: "80–160 mg 2 fois/jour.",
                posologyPediatric: "Usage spécialisé."
              }
            ]
          },
          { name: "Classe IV : Inhibiteurs calciques non-DHP", reference: "Voir section 'Inhibiteurs calciques'" }
        ]
      },
      {
        name: "Antiangineux",
        subCategories: [
          {
            name: "Nitrates et dérivés nitrés",
            drugs: [
              {
                dci: "Nitroglycérine",
                commercialNames: ["Trinitrine", "Nitrolingual", "Natispray"],
                definition: "Vasodilatateur veineux et coronaire utilisé dans le traitement de la crise d'angine de poitrine.",
                modeOfAction: "Libère de l’oxyde nitrique (NO), qui active la guanylate cyclase → augmentation du GMPc → relaxation des muscles lisses vasculaires.",
                indications: ["Crise d'angor", "Prévention de l'angine d'effort", "Insuffisance cardiaque aiguë", "Œdème aigu du poumon"],
                contraindications: ["Hypotension sévère", "Choc cardiogénique sans assistance", "Association avec inhibiteurs de PDE5 (sildénafil, tadalafil)", "Glaucome à angle fermé non traité"],
                adverseEffects: ["Céphalées", "Hypotension orthostatique", "Bouffées vasomotrices", "Tachycardie réflexe"],
                drugInteractions: "Sildénafil et autres inhibiteurs de PDE5 (risque d’hypotension fatale). Alcool.",
                antidotes: "Symptomatique (remplissage, vasopresseurs).",
                posologyAdult: "Crise d’angor : 0.3–0.6 mg sublingual, renouvelable toutes les 5 min (max 3 comprimés/15 min).",
                posologyPediatric: "Usage exceptionnel, réservé au spécialiste.",
                references: ["ANSM - RCP Natispray", "Vidal - Trinitrine"]
              }
            ]
          },
          { name: "Bêta-bloquants (antiangineux)", reference: "Voir section 'Bêta-bloquants'" },
          { name: "Inhibiteurs calciques (antiangineux)", reference: "Voir section 'Inhibiteurs calciques'" }
        ]
      },
      {
        name: "Insuffisance cardiaque",
        drugs: [
          {
            dci: "Digoxine",
            commercialNames: ["Lanoxin", "Digitek"],
            definition: "Glucoside cardiotonique (digitalique).",
            modeOfAction: "Inhibe la pompe Na+/K+-ATPase, augmentant le calcium intracellulaire et la force de contraction (inotrope positif).",
            indications: ["Insuffisance cardiaque systolique", "Fibrillation auriculaire (contrôle de la fréquence)"],
            contraindications: ["Bloc AV de haut degré", "Bradycardie sévère"],
            adverseEffects: ["Nausées, vomissements", "Vision floue ou jaunâtre", "Arythmies (toxicité)"],
            drugInteractions: "Diurétiques hypokaliémiants, amiodarone, vérapamil.",
            antidotes: "Anticorps anti-digoxine (DigiFab).",
            posologyAdult: "Entretien : 0.125–0.25 mg/jour.",
            posologyPediatric: "Usage très spécialisé.",
            references: ["ANSM - RCP Digoxine", "Vidal - Digoxine"]
          }
        ]
      },
      {
        name: "Anticoagulants",
        subCategories: [
          {
            name: "Héparines",
            drugs: [
              {
                dci: "Héparine non fractionnée",
                commercialNames: ["Héparine sodique"],
                definition: "Anticoagulant injectable à action rapide.",
                modeOfAction: "Potentialise l'action de l'antithrombine III, qui inactive le facteur Xa et la thrombine (facteur IIa).",
                indications: ["Traitement et prévention des thromboses veineuses profondes (TVP) et embolies pulmonaires (EP)", "Syndromes coronariens aigus"],
                contraindications: ["Hémorragie active", "Antécédent de thrombopénie induite par l'héparine (TIH)"],
                adverseEffects: ["Hémorragie", "Thrombopénie induite par l'héparine (TIH)"],
                drugInteractions: "Antiagrégants plaquettaires (aspirine, clopidogrel).",
                antidotes: "Sulfate de protamine.",
                posologyAdult: "Administration IV continue avec surveillance de l'aPTT.",
                posologyPediatric: "Variable, ajusté au poids."
              },
              {
                dci: "Enoxaparine",
                commercialNames: ["Lovenox", "Clexane"],
                definition: "Héparine de bas poids moléculaire (HBPM).",
                modeOfAction: "Action prédominante sur le facteur Xa.",
                indications: ["Prévention et traitement des TVP/EP", "Syndromes coronariens aigus"],
                contraindications: ["Hémorragie active", "Antécédent de TIH", "Insuffisance rénale sévère"],
                adverseEffects: ["Hémorragie", "Hématome au site d'injection"],
                drugInteractions: "Antiagrégants plaquettaires.",
                antidotes: "Sulfate de protamine (efficacité partielle).",
                posologyAdult: "Prévention: 40 mg SC 1x/jour. Traitement: 1 mg/kg SC 2x/jour.",
                posologyPediatric: "Usage spécialisé."
              }
            ]
          },
          {
            name: "Antivitamines K (AVK)",
            drugs: [
              {
                dci: "Warfarine",
                commercialNames: ["Coumadin", "Coumadine"],
                definition: "Anticoagulant oral de la classe des antivitamines K (AVK).",
                modeOfAction: "Inhibe la synthèse des facteurs de coagulation dépendants de la vitamine K (II, VII, IX, X).",
                indications: ["Fibrillation auriculaire (prévention AVC)", "Prothèses valvulaires cardiaques", "Traitement au long cours des TVP/EP"],
                contraindications: ["Grossesse", "Hémorragie active"],
                adverseEffects: ["Hémorragie", "Nécrose cutanée"],
                drugInteractions: "Très nombreuses. Aliments riches en vitamine K.",
                antidotes: "Vitamine K, Concentrés de complexes prothrombiniques (CCP).",
                posologyAdult: "Ajustée selon l'INR (cible 2-3).",
                posologyPediatric: "Usage très spécialisé.",
                references: ["ANSM - RCP Coumadine", "Vidal - Warfarine"]
              }
            ]
          },
          {
            name: "Anticoagulants Oraux Directs (AODs)",
            drugs: [
              {
                dci: "Dabigatran",
                commercialNames: ["Pradaxa"],
                definition: "Inhibiteur direct de la thrombine.",
                modeOfAction: "Inhibe directement et de manière compétitive la thrombine (facteur IIa).",
                indications: ["Fibrillation auriculaire non valvulaire", "Traitement et prévention des TVP/EP"],
                contraindications: ["Hémorragie active", "Insuffisance rénale sévère"],
                adverseEffects: ["Hémorragie", "Dyspepsie"],
                drugInteractions: "Inhibiteurs de la P-gp (vérapamil).",
                antidotes: "Idarucizumab.",
                posologyAdult: "150 mg 2x/jour.",
                posologyPediatric: "Usage approuvé dans certaines indications."
              },
              {
                dci: "Rivaroxaban",
                commercialNames: ["Xarelto"],
                definition: "Inhibiteur sélectif du facteur Xa.",
                modeOfAction: "Inhibe directement et sélectivement le facteur Xa.",
                indications: ["Fibrillation auriculaire non valvulaire", "Traitement et prévention des TVP/EP"],
                contraindications: ["Hémorragie active", "Insuffisance hépatique sévère"],
                adverseEffects: ["Hémorragie"],
                drugInteractions: "Inhibiteurs du CYP3A4 et de la P-gp.",
                antidotes: "Andexanet alfa.",
                posologyAdult: "FA: 20 mg 1x/jour. TVP/EP: 15 mg 2x/jour puis 20 mg 1x/jour.",
                posologyPediatric: "Usage approuvé."
              },
              {
                dci: "Apixaban",
                commercialNames: ["Eliquis"],
                definition: "Inhibiteur sélectif du facteur Xa.",
                modeOfAction: "Inhibe directement et sélectivement le facteur Xa.",
                indications: ["Fibrillation auriculaire non valvulaire", "Traitement et prévention des TVP/EP"],
                contraindications: ["Hémorragie active", "Insuffisance hépatique sévère"],
                adverseEffects: ["Hémorragie"],
                drugInteractions: "Inhibiteurs du CYP3A4 et de la P-gp.",
                antidotes: "Andexanet alfa.",
                posologyAdult: "FA: 5 mg 2x/jour. TVP/EP: 10 mg 2x/jour puis 5 mg 2x/jour.",
                posologyPediatric: "Non recommandé."
              },
               {
                dci: "Edoxaban",
                commercialNames: ["Lixiana", "Savaysa"],
                definition: "Anticoagulant oral direct (AOD), inhibiteur sélectif du facteur Xa.",
                modeOfAction: "Inhibition directe du facteur Xa.",
                indications: ["Fibrillation auriculaire non valvulaire", "Traitement des TVP/EP"],
                contraindications: ["Hémorragie active", "Insuffisance hépatique sévère", "Clairance de la créatinine > 95 mL/min (pour la FA, efficacité réduite)"],
                adverseEffects: ["Hémorragie", "Anémie"],
                drugInteractions: "Inhibiteurs de la P-gp (vérapamil, quinidine).",
                antidotes: "Andexanet alfa.",
                posologyAdult: "FA: 60 mg 1x/jour (30 mg si réduction de dose).",
                posologyPediatric: "Non recommandé."
              }
            ]
          }
        ]
      },
      {
        name: "Antiagrégants plaquettaires",
        drugs: [
          {
            dci: "Acide acétylsalicylique (Aspirine)",
            commercialNames: ["Aspirine", "Aspégic", "Kardégic"],
            definition: "Anti-inflammatoire non stéroïdien utilisé à faible dose pour ses propriétés antiagrégantes.",
            modeOfAction: "Inhibe irréversiblement la COX-1 plaquettaire, bloquant la synthèse de thromboxane A2.",
            indications: ["Prévention secondaire des événements cardiovasculaires", "Syndrome coronaire aigu"],
            contraindications: ["Ulcère gastroduodénal actif", "Allergie"],
            adverseEffects: ["Saignements gastro-intestinaux", "Dyspepsie"],
            drugInteractions: "Autres anticoagulants ou antiagrégants.",
            antidotes: "Pas d'antidote. Transfusion de plaquettes.",
            posologyAdult: "75–160 mg 1x/jour.",
            posologyPediatric: "Contre-indiqué (syndrome de Reye)."
          },
          {
            dci: "Clopidogrel",
            commercialNames: ["Plavix"],
            definition: "Antiagrégant de la classe des thiénopyridines.",
            modeOfAction: "Inhibiteur irréversible du récepteur P2Y12 de l'ADP.",
            indications: ["Prévention secondaire", "Syndrome coronaire aigu", "Après pose de stent"],
            contraindications: ["Saignement actif"],
            adverseEffects: ["Saignements", "Éruptions cutanées"],
            drugInteractions: "IPP (oméprazole) peuvent réduire son efficacité.",
            antidotes: "Pas d'antidote. Transfusion de plaquettes.",
            posologyAdult: "Charge 300–600 mg, puis 75 mg 1x/jour.",
            posologyPediatric: "Non recommandé."
          },
          {
            dci: "Prasugrel",
            commercialNames: ["Efient"],
            definition: "Antiagrégant thiénopyridine plus puissant que le clopidogrel.",
            modeOfAction: "Inhibiteur irréversible du récepteur P2Y12.",
            indications: ["Syndrome coronaire aigu traité par angioplastie"],
            contraindications: ["Antécédent d'AVC", "Saignement actif"],
            adverseEffects: ["Risque hémorragique plus élevé que le clopidogrel"],
            drugInteractions: "Anticoagulants.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "Charge 60 mg, puis 10 mg 1x/jour.",
            posologyPediatric: "Non recommandé."
          },
          {
            dci: "Ticagrelor",
            commercialNames: ["Brilinta", "Brilique"],
            definition: "Inhibiteur réversible du récepteur P2Y12.",
            modeOfAction: "Se lie de manière réversible au récepteur P2Y12.",
            indications: ["Syndrome coronaire aigu"],
            contraindications: ["Saignement actif", "Antécédent d'hémorragie intracrânienne"],
            adverseEffects: ["Saignements", "Dyspnée"],
            drugInteractions: "Doses d'aspirine > 100 mg/jour réduisent son efficacité.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "Charge 180 mg, puis 90 mg 2x/jour.",
            posologyPediatric: "Non recommandé."
          },
           {
            dci: "Abciximab",
            commercialNames: ["ReoPro"],
            definition: "Inhibiteur de la glycoprotéine (GP) IIb/IIIa.",
            modeOfAction: "Bloque la voie finale commune de l'agrégation plaquettaire.",
            indications: ["En appoint de l'angioplastie coronaire (PCI)"],
            contraindications: ["Saignement actif", "Chirurgie majeure récente"],
            adverseEffects: ["Saignements", "Thrombocytopénie"],
            drugInteractions: "Autres anticoagulants et antiagrégants.",
            antidotes: "Arrêt de la perfusion. Transfusion de plaquettes.",
            posologyAdult: "Bolus IV suivi d'une perfusion IV. Usage hospitalier.",
            posologyPediatric: "Usage très spécialisé."
          }
        ]
      },
      {
        name: "Fibrinolytiques / thrombolytiques",
        drugs: [
            {
              dci: "Alteplase (tPA)",
              commercialNames: ["Actilyse"],
              definition: "Activateur tissulaire du plasminogène recombinant (tPA).",
              modeOfAction: "Convertit le plasminogène en plasmine, entraînant la lyse du caillot.",
              indications: ["Infarctus du myocarde (STEMI)", "AVC ischémique aigu", "Embolie pulmonaire massive"],
              contraindications: ["Hémorragie active", "Antécédent d'hémorragie intracrânienne", "Chirurgie majeure récente"],
              adverseEffects: ["Hémorragie", "Angioedème"],
              drugInteractions: "Anticoagulants augmentent le risque hémorragique.",
              antidotes: "Acide tranexamique ou acide aminocaproïque.",
              posologyAdult: "Variable selon l'indication (ex: 100 mg en perfusion sur 90 min pour STEMI).",
              posologyPediatric: "Usage très spécialisé.",
              references: ["ANSM - RCP Actilyse", "AHA/ASA Guidelines for Stroke Management"]
            },
            {
              dci: "Streptokinase",
              commercialNames: ["Streptase"],
              definition: "Agent fibrinolytique dérivé de streptocoques.",
              modeOfAction: "Active le plasminogène pour le convertir en plasmine.",
              indications: ["STEMI", "Embolie pulmonaire", "Thrombose veineuse profonde"],
              contraindications: ["Identiques à l'alteplase", "Infection streptococcique récente"],
              adverseEffects: ["Hémorragie", "Hypotension", "Réactions allergiques"],
              drugInteractions: "Anticoagulants.",
              antidotes: "Antifibrinolytiques.",
              posologyAdult: "Ex: 1.5 million d'unités en perfusion IV sur 60 minutes.",
              posologyPediatric: "Non recommandé."
            },
            {
              dci: "Tenecteplase",
              commercialNames: ["Metalyse", "TNKase"],
              definition: "Variant génétiquement modifié du tPA.",
              modeOfAction: "Similaire à l'alteplase, mais avec une plus grande spécificité pour la fibrine.",
              indications: ["Traitement du STEMI"],
              contraindications: ["Identiques à l'alteplase"],
              adverseEffects: ["Hémorragie"],
              drugInteractions: "Anticoagulants.",
              antidotes: "Antifibrinolytiques.",
              posologyAdult: "Bolus IV unique, ajusté au poids.",
              posologyPediatric: "Non recommandé."
            }
          ]
      },
      {
        name: "Vaso-amines / Vaso-actives",
        drugs: [
          {
            dci: "Noradrénaline",
            commercialNames: ["Levophed"],
            definition: "Amine sympathomimétique, puissant vasopresseur.",
            modeOfAction: "Agoniste puissant des récepteurs alpha-1 et alpha-2, entraînant une vasoconstriction intense. Effet bêta-1 modéré.",
            indications: ["Choc septique", "Choc cardiogénique", "Hypotension sévère"],
            contraindications: ["Hypotension due à une hypovolémie (sans remplissage préalable)"],
            adverseEffects: ["Ischémie périphérique", "Hypertension sévère", "Arythmies", "Extravasation causant une nécrose"],
            drugInteractions: "IMAO, antidépresseurs tricycliques (potentialisation).",
            antidotes: "Infiltration locale de phentolamine en cas d'extravasation.",
            posologyAdult: "Perfusion IV continue, 0.05–0.1 µg/kg/min, titrée.",
            posologyPediatric: "Perfusion IV continue, 0.05–2 µg/kg/min.",
            references: ["Surviving Sepsis Campaign Guidelines", "ANSM - RCP Noradrénaline"]
          },
          {
            dci: "Adrénaline",
            commercialNames: ["Adrenaline", "EpiPen"],
            definition: "Amine sympathomimétique, agoniste alpha et bêta.",
            modeOfAction: "Stimule les récepteurs α1, β1 et β2.",
            indications: ["Choc anaphylactique", "Arrêt cardiaque", "Choc septique réfractaire"],
            contraindications: ["Pas de contre-indication absolue en situation d'urgence vitale."],
            adverseEffects: ["Tachycardie", "Arythmies", "Hypertension", "Ischémie myocardique"],
            drugInteractions: "IMAO, tricycliques (potentialisation).",
            antidotes: "Traitement symptomatique.",
            posologyAdult: "Arrêt cardiaque : 1 mg IV toutes les 3–5 min. Anaphylaxie : 0.3–0.5 mg IM.",
            posologyPediatric: "Arrêt cardiaque : 0.01 mg/kg IV. Anaphylaxie : 0.01 mg/kg IM."
          },
          {
            dci: "Dopamine",
            commercialNames: ["Intropin"],
            definition: "Précurseur de la noradrénaline, effets dose-dépendants.",
            modeOfAction: "Faible dose : vasodilatation rénale (D1). Dose moyenne : augmentation du débit cardiaque (β1). Haute dose : vasoconstriction (α1).",
            indications: ["Choc cardiogénique avec hypotension et bradycardie"],
            contraindications: ["Phéochromocytome", "Tachyarythmies"],
            adverseEffects: ["Tachycardie", "Arythmies", "Hypertension"],
            drugInteractions: "IMAO (potentialisent l'effet).",
            antidotes: "Arrêt de la perfusion. Phentolamine pour l'extravasation.",
            posologyAdult: "Perfusion IV continue, 2–20 µg/kg/min.",
            posologyPediatric: "Perfusion IV continue, 2–20 µg/kg/min."
          },
          {
            dci: "Dobutamine",
            commercialNames: ["Dobutrex"],
            definition: "Inotrope puissant avec effet chronotrope modéré.",
            modeOfAction: "Agoniste direct des récepteurs bêta-1.",
            indications: ["Choc cardiogénique", "Insuffisance cardiaque aiguë décompensée"],
            contraindications: ["Sténose sous-aortique hypertrophique"],
            adverseEffects: ["Tachycardie", "Arythmies", "Hypotension ou hypertension"],
            drugInteractions: "Bêta-bloquants (antagonisent l'effet).",
            antidotes: "Arrêt de la perfusion.",
            posologyAdult: "Perfusion IV continue, 2.5–20 µg/kg/min.",
            posologyPediatric: "Perfusion IV continue, 2–20 µg/kg/min."
          },
          {
            dci: "Phényléphrine",
            commercialNames: ["Neo-Synephrine"],
            definition: "Agoniste alpha-1 adrénergique pur.",
            modeOfAction: "Vasoconstriction artérielle et veineuse pure.",
            indications: ["Hypotension induite par l'anesthésie", "Choc distributif"],
            contraindications: ["Hypertension sévère", "Bradycardie sévère"],
            adverseEffects: ["Bradycardie réflexe", "Hypertension", "Diminution du débit cardiaque"],
            drugInteractions: "IMAO (crise hypertensive).",
            antidotes: "Phentolamine pour l'hypertension sévère.",
            posologyAdult: "Perfusion IV : 0.5–2 µg/kg/min. Bolus IV : 50–100 µg.",
            posologyPediatric: "Perfusion IV : 0.1–0.5 µg/kg/min."
          },
          {
            dci: "Vasopressine",
            commercialNames: ["Pitressin", "Vasostrict"],
            definition: "Hormone antidiurétique synthétique, vasopresseur non-adrénergique.",
            modeOfAction: "Agit sur les récepteurs V1 vasculaires, provoquant une vasoconstriction.",
            indications: ["Choc septique réfractaire", "Diabète insipide"],
            contraindications: ["Prudence en cas de maladie coronarienne."],
            adverseEffects: ["Ischémie myocardique ou périphérique", "Hyponatrémie"],
            drugInteractions: "Peu d'interactions.",
            antidotes: "Arrêt de la perfusion.",
            posologyAdult: "Choc septique : 0.01–0.04 unités/min en perfusion IV.",
            posologyPediatric: "Usage spécialisé."
          },
          {
            dci: "Isoprénaline",
            commercialNames: ["Isuprel"],
            definition: "Agoniste bêta-adrénergique non sélectif (β1 et β2).",
            modeOfAction: "Puissant effet inotrope et chronotrope positif (β1) et vasodilatation (β2).",
            indications: ["Bradycardie symptomatique résistante", "Torsades de pointes"],
            contraindications: ["Angine de poitrine", "Tachyarythmies"],
            adverseEffects: ["Tachycardie sévère", "Arythmies ventriculaires", "Hypotension"],
            drugInteractions: "IMAO.",
            antidotes: "Arrêt de la perfusion. Bêta-bloquant cardiosélectif.",
            posologyAdult: "Perfusion IV, 2–10 µg/min.",
            posologyPediatric: "Perfusion IV, 0.05–2 µg/kg/min."
          },
          {
            dci: "Metaraminol",
            commercialNames: ["Aramine"],
            definition: "Amine sympathomimétique à action mixte.",
            modeOfAction: "Agit directement sur les récepteurs alpha-1 et indirectement en libérant la noradrénaline.",
            indications: ["Hypotension aiguë (anesthésie rachidienne)"],
            contraindications: ["Utilisation avec des anesthésiques halogénés."],
            adverseEffects: ["Hypertension", "Bradycardie réflexe", "Arythmies"],
            drugInteractions: "IMAO.",
            antidotes: "Phentolamine.",
            posologyAdult: "Bolus IV : 0.5–2 mg.",
            posologyPediatric: "Usage spécialisé."
          },
          {
            dci: "Étiléphrine",
            commercialNames: ["Effortil"],
            definition: "Amine sympathomimétique à action directe alpha et bêta.",
            modeOfAction: "Stimule les récepteurs α1 et β1.",
            indications: ["Hypotension orthostatique"],
            contraindications: ["Hypertension", "Thyrotoxicose"],
            adverseEffects: ["Palpitations", "Tachycardie", "Anxiété"],
            drugInteractions: "IMAO.",
            antidotes: "Traitement symptomatique.",
            posologyAdult: "5–10 mg PO 3x/jour.",
            posologyPediatric: "Usage spécialisé."
          }
        ]
      }
    ]
  },
  {
    name: "Médicaments anti-inflammatoires",
    subCategories: [
      {
        name: "Anti-inflammatoires stéroïdiens (Corticoïdes)",
        drugs: [
          {
            dci: "Prednisone",
            commercialNames: ["Cortancyl"],
            definition: "Corticoïde de synthèse (glucocorticoïde).",
            modeOfAction: "Module la transcription de gènes impliqués dans l'inflammation.",
            indications: ["Maladies inflammatoires (polyarthrite rhumatoïde)", "Réactions allergiques sévères", "Asthme"],
            contraindications: ["Infections non contrôlées", "Vaccins vivants"],
            adverseEffects: ["Insomnie", "Prise de poids", "Hyperglycémie", "Ostéoporose"],
            drugInteractions: "AINS (risque d'ulcère), Inducteurs enzymatiques.",
            antidotes: "Sevrage progressif indispensable.",
            posologyAdult: "5 à 60 mg/jour.",
            posologyPediatric: "Ajustée au poids.",
            references: ["ANSM - RCP Cortancyl", "Vidal - Prednisone"]
          },
          {
            dci: "Méthylprednisolone",
            commercialNames: ["Solumedrol", "Medrol"],
            definition: "Corticoïde de synthèse plus puissant que la prednisone.",
            modeOfAction: "Similaire à la prednisone.",
            indications: ["Poussées de sclérose en plaques", "Réactions allergiques sévères"],
            contraindications: ["Infections systémiques non traitées"],
            adverseEffects: ["Similaires à la prednisone", "Troubles psychiques (bolus IV)"],
            drugInteractions: "Similaires à la prednisone.",
            antidotes: "Sevrage progressif.",
            posologyAdult: "Bolus IV de 500 mg à 1g/jour sur 3-5 jours.",
            posologyPediatric: "Ajustée au poids."
          },
          {
            dci: "Dexaméthasone",
            commercialNames: ["Decadron", "Dectancyl"],
            definition: "Corticoïde de synthèse très puissant à longue durée d'action.",
            modeOfAction: "Puissant anti-inflammatoire et immunosuppresseur.",
            indications: ["Œdème cérébral", "Nausées chimio-induites"],
            contraindications: ["Infections non contrôlées"],
            adverseEffects: ["Similaires aux autres corticoïdes, moins de rétention hydrosodée."],
            drugInteractions: "Inducteurs enzymatiques.",
            antidotes: "Sevrage progressif.",
            posologyAdult: "Variable (ex: 4-24 mg/jour).",
            posologyPediatric: "Variable."
          },
          {
            dci: "Hydrocortisone",
            commercialNames: ["Hydrocortisone Roussel", "Solu-Cortef"],
            definition: "Forme synthétique du cortisol.",
            modeOfAction: "Effets glucocorticoïdes et minéralocorticoïdes.",
            indications: ["Insuffisance surrénalienne", "Choc septique (faibles doses)"],
            contraindications: ["Infections non contrôlées"],
            adverseEffects: ["Similaires, effet minéralocorticoïde plus marqué."],
            drugInteractions: "Similaires.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "Insuffisance surrénalienne : 15-25 mg/jour.",
            posologyPediatric: "Ajusté à la surface corporelle."
          },
          {
            dci: "Budésonide",
            commercialNames: ["Pulmicort", "Entocort"],
            definition: "Corticoïde avec métabolisme de premier passage élevé.",
            modeOfAction: "Action anti-inflammatoire locale puissante (bronches ou intestin).",
            indications: ["Asthme (inhalation)", "Maladie de Crohn iléocolique (oral)"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Inhalé : candidose oropharyngée. Oral : effets systémiques réduits."],
            drugInteractions: "Inhibiteurs du CYP3A4.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "Asthme : 200–1600 µg/jour. Crohn : 9 mg/jour.",
            posologyPediatric: "Asthme : ajusté à l'âge."
          }
        ]
      },
      {
        name: "Anti-inflammatoires non stéroïdiens (AINS)",
        drugs: [
            { dci: "Ibuprofène", definition: "AINS dérivé de l'acide propionique.", commercialNames: ["Advil", "Nurofen"], modeOfAction: "Inhibiteur non sélectif de COX-1 et COX-2.", indications: ["Douleur", "Fièvre", "Inflammation"], contraindications: ["Ulcère gastroduodénal", "Insuffisance rénale/hépatique/cardiaque sévère", "Dernier trimestre de grossesse"], adverseEffects: ["Troubles GI", "Insuffisance rénale", "Risque cardiovasculaire"], drugInteractions: "Anticoagulants, IEC.", antidotes: "Traitement symptomatique.", posologyAdult: "200-400 mg toutes les 4-6h.", posologyPediatric: "5-10 mg/kg toutes les 6-8h." },
            { dci: "Naproxène", definition: "AINS avec une plus longue demi-vie.", commercialNames: ["Aleve", "Naprosyn"], modeOfAction: "Inhibiteur non sélectif de la COX.", indications: ["Douleurs rhumatologiques", "Goutte", "Migraine"], contraindications: ["Identiques à l'ibuprofène"], adverseEffects: ["Similaires à l'ibuprofène."], drugInteractions: "Identiques.", antidotes: "Traitement symptomatique.", posologyAdult: "250-500 mg 2x/jour.", posologyPediatric: "Non recommandé." },
            { dci: "Diclofénac", definition: "AINS puissant avec un risque cardiovasculaire notable.", commercialNames: ["Voltaren"], modeOfAction: "Inhibiteur non sélectif de la COX.", indications: ["Douleurs inflammatoires", "Arthrose"], contraindications: ["Maladie cardiovasculaire établie"], adverseEffects: ["Risque GI et cardiovasculaire élevé."], drugInteractions: "Identiques.", antidotes: "Traitement symptomatique.", posologyAdult: "50 mg 2-3x/jour.", posologyPediatric: "Usage limité." },
            {
                dci: "Indométhacine",
                commercialNames: ["Indocid"],
                definition: "AINS puissant.",
                modeOfAction: "Inhibiteur non sélectif puissant de la COX.",
                indications: ["Rhumatismes inflammatoires", "Goutte", "Persistance du canal artériel"],
                contraindications: ["Identiques"],
                adverseEffects: ["Céphalées", "Vertiges", "Troubles GI sévères"],
                drugInteractions: "Identiques.",
                antidotes: "Traitement symptomatique.",
                posologyAdult: "25-50 mg, 2-3 fois par jour.",
                posologyPediatric: "Usage très limité."
            },
            {
                dci: "Célécoxib",
                commercialNames: ["Celebrex"],
                definition: "AINS inhibiteur sélectif de la COX-2.",
                modeOfAction: "Inhibe préférentiellement la COX-2.",
                indications: ["Arthrose", "Polyarthrite rhumatoïde"],
                contraindications: ["Allergie aux sulfamides", "Maladie cardiovasculaire"],
                adverseEffects: ["Risque accru d'événements cardiovasculaires"],
                drugInteractions: "Anticoagulants.",
                antidotes: "Traitement symptomatique.",
                posologyAdult: "100 mg 2x/jour ou 200 mg 1x/jour.",
                posologyPediatric: "Usage spécialisé."
            }
        ]
      }
    ]
  },
   {
    name: "Médicaments du système respiratoire",
    subCategories: [
      {
        name: "Bronchodilatateurs",
        subCategories: [
          {
            name: "Bêta2-mimétiques à courte durée d'action (SABA)",
            drugs: [
              {
                dci: "Salbutamol (Albuterol)",
                commercialNames: ["Ventoline", "Airomir"],
                definition: "Bronchodilatateur bêta2-mimétique à courte durée d'action (SABA).",
                modeOfAction: "Stimule les récepteurs bêta-2 adrénergiques des muscles lisses bronchiques, entraînant une bronchodilatation rapide.",
                indications: ["Traitement de la crise d'asthme", "Prévention de l'asthme d'effort", "BPCO"],
                contraindications: ["Hypersensibilité."],
                adverseEffects: ["Tachycardie", "Tremblements", "Céphalées", "Hypokaliémie"],
                drugInteractions: "Bêta-bloquants non sélectifs (antagonisme).",
                antidotes: "Traitement de soutien.",
                posologyAdult: "Crise : 1-2 bouffées (100-200 µg), renouvelable.",
                posologyPediatric: "Crise : 1 bouffée (100 µg), renouvelable.",
                references: ["GINA (Global Initiative for Asthma) Guidelines", "ANSM - RCP Ventoline"]
              },
              {
                dci: "Terbutaline",
                commercialNames: ["Bricanyl"],
                definition: "SABA.",
                modeOfAction: "Stimulation sélective des récepteurs bêta-2.",
                indications: ["Crise d'asthme", "Bronchospasme"],
                contraindications: ["Hypersensibilité"],
                adverseEffects: ["Tremblements", "Tachycardie"],
                drugInteractions: "Bêta-bloquants non sélectifs.",
                antidotes: "Traitement symptomatique.",
                posologyAdult: "Inhalé : 500 µg (1 bouffée) si besoin.",
                posologyPediatric: "Inhalé : 250-500 µg si besoin."
              }
            ]
          },
          {
            name: "Bêta2-mimétiques à longue durée d'action (LABA)",
            drugs: [
              {
                dci: "Salmétérol",
                commercialNames: ["Serevent", "Seretide (avec fluticasone)"],
                definition: "LABA.",
                modeOfAction: "Stimulation bêta-2 prolongée (12h).",
                indications: ["Asthme (toujours en association avec un corticoïde inhalé)", "BPCO"],
                contraindications: ["Ne doit jamais être utilisé en monothérapie dans l'asthme."],
                adverseEffects: ["Tachycardie", "Tremblements", "Céphalées"],
                drugInteractions: "IMAO, tricycliques.",
                antidotes: "Traitement symptomatique.",
                posologyAdult: "50 µg 2 fois par jour.",
                posologyPediatric: "> 4 ans : 50 µg 2 fois par jour."
              },
              {
                dci: "Formotérol",
                commercialNames: ["Foradil", "Symbicort (avec budésonide)"],
                definition: "LABA avec un délai d'action rapide.",
                modeOfAction: "Stimulation bêta-2 prolongée.",
                indications: ["Asthme (en association)", "BPCO"],
                contraindications: ["Ne pas utiliser en monothérapie dans l'asthme."],
                adverseEffects: ["Tremblements", "Palpitations"],
                drugInteractions: "Similaires au salmétérol.",
                antidotes: "Traitement symptomatique.",
                posologyAdult: "12-24 µg 2 fois par jour.",
                posologyPediatric: "> 6 ans : 12 µg 2 fois par jour."
              }
            ]
          }
        ]
      },
      {
        name: "Anticholinergiques inhalés",
        subCategories: [
          {
            name: "Courte durée d'action (SAMA)",
            drugs: [
              {
                dci: "Bromure d'Ipratropium",
                commercialNames: ["Atrovent"],
                definition: "SAMA.",
                modeOfAction: "Antagoniste des récepteurs muscariniques, provoquant une bronchodilatation.",
                indications: ["BPCO", "Adjuvant dans la crise d'asthme sévère"],
                contraindications: ["Hypersensibilité à l'atropine."],
                adverseEffects: ["Sécheresse buccale", "Céphalées"],
                drugInteractions: "Peu d'interactions.",
                antidotes: "Pas d'antidote.",
                posologyAdult: "20-40 µg 3-4 fois par jour.",
                posologyPediatric: "20 µg 3 fois par jour."
              }
            ]
          },
          {
            name: "Longue durée d'action (LAMA)",
            drugs: [
              {
                dci: "Tiotropium",
                commercialNames: ["Spiriva"],
                definition: "LAMA.",
                modeOfAction: "Antagoniste sélectif M1/M3, bronchodilatation de 24h.",
                indications: ["BPCO", "Asthme sévère (additionnel)"],
                contraindications: ["Hypersensibilité"],
                adverseEffects: ["Sécheresse buccale"],
                drugInteractions: "Peu d'interactions.",
                antidotes: "Pas d'antidote.",
                posologyAdult: "18 µg en inhalation 1 fois par jour.",
                posologyPediatric: "Usage spécialisé."
              }
            ]
          }
        ]
      },
      {
        name: "Méthylxanthines",
        drugs: [
          {
            dci: "Théophylline",
            commercialNames: ["Dilatrane", "Euphylline"],
            definition: "Méthylxanthine, bronchodilatateur à marge thérapeutique étroite.",
            modeOfAction: "Inhibition de la phosphodiestérase (PDE) → augmentation de l'AMPc.",
            indications: ["Asthme persistant et BPCO (en 2ème ou 3ème intention)"],
            contraindications: ["Arythmies non contrôlées", "Convulsions non contrôlées"],
            adverseEffects: ["Nausées", "Tachycardie", "Arythmies", "Convulsions"],
            drugInteractions: "Très nombreuses (CYP1A2, CYP3A4).",
            antidotes: "Charbon activé, traitement symptomatique.",
            posologyAdult: "Ajustée selon les taux sériques (cible 5-15 mg/L).",
            posologyPediatric: "Ajustée aux taux sériques."
          }
        ]
      },
      {
        name: "Corticostéroïdes inhalés",
        drugs: [
          {
            dci: "Fluticasone",
            commercialNames: ["Flixotide", "Seretide (avec salmétérol)"],
            definition: "Corticoïde inhalé puissant.",
            modeOfAction: "Action anti-inflammatoire locale puissante.",
            indications: ["Traitement de fond de l'asthme", "BPCO (en association)"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Candidose oropharyngée", "Dysphonie (raucité)"],
            drugInteractions: "Inhibiteurs du CYP3A4.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "100 à 1000 µg/jour en 2 prises.",
            posologyPediatric: "100 à 200 µg/jour en 2 prises."
          },
          {
            dci: "Beclomethasone",
            commercialNames: ["Becotide", "Qvar"],
            definition: "Corticoïde inhalé de référence.",
            modeOfAction: "Anti-inflammatoire local.",
            indications: ["Traitement de fond de l'asthme"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Candidose oropharyngée", "Dysphonie"],
            drugInteractions: "Similaires à la fluticasone.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "200-2000 µg/jour en 2 prises.",
            posologyPediatric: "50-400 µg/jour en 2 prises."
          }
        ]
      },
      {
        name: "Antileucotriènes",
        drugs: [
          {
            dci: "Montelukast",
            commercialNames: ["Singulair"],
            definition: "Antagoniste des récepteurs des leucotriènes.",
            modeOfAction: "Bloque l'action des cystéinyl-leucotriènes, réduisant l'inflammation et la bronchoconstriction.",
            indications: ["Asthme léger à modéré", "Asthme d'effort", "Rhinite allergique"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Céphalées", "Rares troubles neuropsychiatriques."],
            drugInteractions: "Inducteurs du CYP2C8.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "10 mg, 1 fois par jour le soir.",
            posologyPediatric: "4-5 mg 1x/j selon l'âge."
          }
        ]
      },
      {
        name: "Antitussifs",
        drugs: [
          {
            dci: "Dextrométhorphane",
            commercialNames: ["Tussidane", "Vicks Touche Sèche"],
            definition: "Antitussif d'action centrale.",
            modeOfAction: "Agit sur le centre de la toux dans le bulbe rachidien.",
            indications: ["Toux sèches et irritatives."],
            contraindications: ["Insuffisance respiratoire", "Asthme", "Association avec les IMAO"],
            adverseEffects: ["Somnolence", "Vertiges", "Risque d'abus"],
            drugInteractions: "IMAO, ISRS (syndrome sérotoninergique).",
            antidotes: "Naloxone en cas de surdosage massif.",
            posologyAdult: "15-30 mg toutes les 4 à 6 heures.",
            posologyPediatric: "> 6 ans : doses ajustées."
          }
        ]
      },
      {
        name: "Mucolytiques / Expectorants",
        drugs: [
          {
            dci: "N-acétylcystéine (NAC)",
            commercialNames: ["Fluimucil", "Exomuc"],
            definition: "Agent mucolytique.",
            modeOfAction: "Rompt les ponts disulfures du mucus, diminuant sa viscosité.",
            indications: ["Encombrement bronchique", "Antidote du surdosage au paracétamol"],
            contraindications: ["Hypersensibilité."],
            adverseEffects: ["Troubles GI", "Bronchospasme (en aérosol)"],
            drugInteractions: "Peu d'interactions.",
            antidotes: "N/A",
            posologyAdult: "200 mg 3x/jour ou 600 mg 1x/jour.",
            posologyPediatric: "> 2 ans : 100 mg 2-3 fois/jour."
          },
          {
            dci: "Ambroxol",
            commercialNames: ["Mucosolvan", "Surbronc"],
            definition: "Agent mucolytique et expectorant.",
            modeOfAction: "Stimule la sécrétion de surfactant et l'activité ciliaire.",
            indications: ["Toux grasse"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Troubles GI", "Rares réactions cutanées sévères."],
            drugInteractions: "Peu d'interactions.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "30 mg 3 fois/jour.",
            posologyPediatric: "Doses ajustées."
          }
        ]
      }
    ]
  },
  {
  "name": "Médicaments du système digestif",
    subCategories: [
      {
        name: "Antiacides",
        drugs: [
          {
            dci: "Hydroxydes d'aluminium et de magnésium",
            commercialNames: ["Maalox", "Gaviscon (en association)"],
            definition: "Agents neutralisants locaux de l'acidité gastrique.",
            modeOfAction: "Réaction chimique de neutralisation de l'acide chlorhydrique (HCl). L'aluminium est constipant, le magnésium laxatif, leur association équilibre l'effet.",
            indications: ["Soulagement symptomatique des brûlures d'estomac", "Reflux gastro-œsophagien (RGO) léger"],
            contraindications: ["Insuffisance rénale sévère"],
            adverseEffects: ["Constipation (Al)", "Diarrhée (Mg)", "Modification de l'absorption d'autres médicaments"],
            drugInteractions: "Diminuent l'absorption de nombreux médicaments (quinolones, tétracyclines). Prendre à distance (2h).",
            antidotes: "Pas d'antidote.",
            posologyAdult: "1 à 2 sachets ou comprimés après les repas et au coucher.",
            posologyPediatric: "Usage spécialisé.",
            references: ["ANSM - RCP Maalox", "Vidal - Antiacides"]
          }
        ]
      },
      {
        name: "Antisécrétoires",
        subCategories: [
          {
            name: "IPP (Inhibiteurs de la Pompe à Protons)",
            drugs: [
              { dci: "Oméprazole", definition: "Inhibiteur de la pompe à protons (H+/K+-ATPase).", commercialNames: ["Mopral", "Prilosec"], modeOfAction: "Bloque la dernière étape de la sécrétion d'acide gastrique.", indications: ["RGO", "Ulcères gastroduodénaux", "Éradication d'H. pylori"], contraindications: ["Hypersensibilité"], adverseEffects: ["Céphalées", "Diarrhée", "Risques à long terme (fractures, infections)"], drugInteractions: "Diminue l'absorption de certains médicaments. Inhibiteur du CYP2C19 (clopidogrel).", antidotes: "Pas d'antidote.", posologyAdult: "20-40 mg 1x/jour.", posologyPediatric: "Ajusté au poids." },
              { dci: "Pantoprazole", definition: "IPP.", commercialNames: ["Pantoloc", "Eupantol"], modeOfAction: "Identique.", indications: ["Identiques."], contraindications: ["Hypersensibilité"], adverseEffects: ["Identiques."], drugInteractions: "Moins d'effet sur le CYP2C19.", antidotes: "Pas d'antidote.", posologyAdult: "20-40 mg 1x/jour.", posologyPediatric: "Ajusté." },
              { dci: "Lansoprazole", definition: "IPP.", commercialNames: ["Lanzor"], modeOfAction: "Identique.", indications: ["Identiques."], contraindications: ["Hypersensibilité"], adverseEffects: ["Identiques."], drugInteractions: "Similaires.", antidotes: "Pas d'antidote.", posologyAdult: "15-30 mg 1x/jour.", posologyPediatric: "Ajusté." },
              { dci: "Esoméprazole", definition: "Énantiomère S de l'oméprazole.", commercialNames: ["Nexium", "Inexium"], modeOfAction: "Identique.", indications: ["Identiques."], contraindications: ["Hypersensibilité"], adverseEffects: ["Identiques."], drugInteractions: "Similaires.", antidotes: "Pas d'antidote.", posologyAdult: "20-40 mg 1x/jour.", posologyPediatric: "Ajusté." }
            ]
          },
          {
            name: "Antihistaminiques H2",
            drugs: [
              {
                dci: "Famotidine",
                commercialNames: ["Pepcid"],
                definition: "Antagoniste des récepteurs H2 de l'histamine.",
                modeOfAction: "Bloque les récepteurs H2, réduisant la sécrétion d'acide.",
                indications: ["Ulcères duodénaux", "RGO léger"],
                contraindications: ["Hypersensibilité"],
                adverseEffects: ["Céphalées", "Vertiges", "Constipation"],
                drugInteractions: "Peu d'interactions.",
                antidotes: "Pas d'antidote.",
                posologyAdult: "20 mg 2x/jour ou 40 mg au coucher.",
                posologyPediatric: "0.5 mg/kg/dose 2x/jour."
              }
            ]
          }
        ]
      },
      {
        name: "Prokinétiques",
        drugs: [
          {
            dci: "Métoclopramide",
            commercialNames: ["Primpéran"],
            definition: "Agent prokinétique et antiémétique, antagoniste D2.",
            modeOfAction: "Augmente la motilité du tractus digestif supérieur et bloque les récepteurs D2 centraux.",
            indications: ["Nausées et vomissements", "Gastroparésie"],
            contraindications: ["Hémorragie/perforation digestive", "Antécédent de dyskinésie tardive"],
            adverseEffects: ["Somnolence", "Symptômes extrapyramidaux"],
            drugInteractions: "Anticholinergiques, Neuroleptiques.",
            antidotes: "Anticholinergiques pour les réactions dystoniques.",
            posologyAdult: "10 mg jusqu'à 3x/jour. Max 5 jours.",
            posologyPediatric: "Usage très restreint."
          },
          {
            dci: "Dompéridone",
            commercialNames: ["Motilium"],
            definition: "Antagoniste D2 périphérique.",
            modeOfAction: "Similaire au métoclopramide mais ne traverse pas la BHE.",
            indications: ["Nausées et vomissements."],
            contraindications: ["Allongement de l'intervalle QT"],
            adverseEffects: ["Sécheresse buccale", "Risque d'arythmies ventriculaires"],
            drugInteractions: "Médicaments allongeant le QT.",
            antidotes: "Surveillance ECG.",
            posologyAdult: "10 mg jusqu'à 3x/jour.",
            posologyPediatric: "Contre-indiqué < 12 ans ou < 35 kg."
          }
        ]
      },
      {
        name: "Antispasmodiques",
        drugs: [
          {
            dci: "Hyoscine butylbromure",
            commercialNames: ["Buscopan"],
            definition: "Antispasmodique anticholinergique.",
            modeOfAction: "Bloque les récepteurs muscariniques des muscles lisses du tractus GI.",
            indications: ["Douleurs spasmodiques abdominales", "Syndrome de l'intestin irritable"],
            contraindications: ["Glaucome à angle fermé", "Myasthénie"],
            adverseEffects: ["Sécheresse buccale", "Tachycardie", "Constipation"],
            drugInteractions: "Effets anticholinergiques additionnés.",
            antidotes: "Physostigmine.",
            posologyAdult: "10-20 mg, 3-4 fois par jour.",
            posologyPediatric: "> 6 ans : 10 mg 3x/jour."
          }
        ]
      },
      {
        name: "Antidiarrhéiques",
        drugs: [
          {
            dci: "Lopéramide",
            commercialNames: ["Imodium"],
            definition: "Antidiarrhéique, analogue des opioïdes.",
            modeOfAction: "Agit sur les récepteurs opioïdes µ du plexus myentérique, inhibant le péristaltisme.",
            indications: ["Diarrhées aiguës non infectieuses."],
            contraindications: ["Diarrhées infectieuses avec fièvre/sang", "Enfants < 2 ans"],
            adverseEffects: ["Constipation", "Crampes abdominales", "Toxicité cardiaque à fortes doses"],
            drugInteractions: "Inhibiteurs de la P-glycoprotéine.",
            antidotes: "Naloxone en cas de surdosage massif.",
            posologyAdult: "4 mg initialement, puis 2 mg après chaque selle non moulée. Max 16 mg/jour.",
            posologyPediatric: "Ajusté au poids."
          }
        ]
      },
      {
        name: "Laxatifs",
        subCategories: [
          {
            name: "Laxatifs osmotiques",
            drugs: [
              {
                dci: "Lactulose",
                commercialNames: ["Duphalac"],
                definition: "Disaccharide synthétique non absorbable.",
                modeOfAction: "Retient l'eau dans la lumière colique par effet osmotique.",
                indications: ["Constipation", "Encéphalopathie hépatique"],
                contraindications: ["Galactosémie", "Occlusion intestinale"],
                adverseEffects: ["Flatulences", "Ballonnements"],
                drugInteractions: "Peu d'interactions.",
                antidotes: "Pas d'antidote.",
                posologyAdult: "15-45 mL par jour.",
                posologyPediatric: "Ajusté."
              },
              {
                dci: "Polyéthylène glycol (Macrogol)",
                commercialNames: ["Forlax", "Movicol"],
                definition: "Polymère inerte, laxatif osmotique.",
                modeOfAction: "Retient l'eau dans les selles.",
                indications: ["Constipation", "Préparation colique"],
                contraindications: ["Maladies inflammatoires sévères de l'intestin"],
                adverseEffects: ["Ballonnements", "Douleurs abdominales"],
                drugInteractions: "Peu d'interactions.",
                antidotes: "Pas d'antidote.",
                posologyAdult: "1-2 sachets par jour.",
                posologyPediatric: "Ajusté."
              }
            ]
          },
          {
            name: "Laxatifs stimulants",
            drugs: [
              {
                dci: "Bisacodyl",
                commercialNames: ["Dulcolax"],
                definition: "Laxatif stimulant.",
                modeOfAction: "Agit directement sur la muqueuse colique.",
                indications: ["Constipation occasionnelle"],
                contraindications: ["Occlusion intestinale", "Usage chronique"],
                adverseEffects: ["Crampes abdominales", "Diarrhée"],
                drugInteractions: "Ne pas prendre avec du lait ou des antiacides.",
                antidotes: "Réhydratation.",
                posologyAdult: "5-15 mg le soir.",
                posologyPediatric: "> 6 ans : 5 mg."
              }
            ]
          },
          {
            name: "Laxatifs de lest (bulk)",
            drugs: [
              {
                dci: "Psyllium",
                commercialNames: ["Metamucil"],
                definition: "Laxatif de lest, fibres végétales.",
                modeOfAction: "Absorbe l'eau, formant un gel volumineux.",
                indications: ["Constipation chronique"],
                contraindications: ["Sténose intestinale"],
                adverseEffects: ["Ballonnements", "Risque d'obstruction si pris avec peu d'eau"],
                drugInteractions: "Peut diminuer l'absorption d'autres médicaments.",
                antidotes: "Pas d'antidote.",
                posologyAdult: "1 cuillère à soupe dans un grand verre d'eau, 1-3 fois par jour.",
                posologyPediatric: "Ajusté."
              }
            ]
          }
        ]
      },
      {
        name: "Antiémétiques",
        subCategories: [
          {
            name: "Antagonistes 5-HT3 (Sétrons)",
            drugs: [
              {
                dci: "Ondansétron",
                commercialNames: ["Zophren"],
                definition: "Antiémétique puissant, antagoniste sélectif des récepteurs 5-HT3.",
                modeOfAction: "Bloque les récepteurs 5-HT3 au niveau périphérique et central.",
                indications: ["Nausées et vomissements chimio/radio-induits", "Nausées post-opératoires"],
                contraindications: ["Syndrome du QT long congénital"],
                adverseEffects: ["Céphalées", "Constipation", "Allongement de l'intervalle QT"],
                drugInteractions: "Médicaments allongeant le QT.",
                antidotes: "Surveillance ECG.",
                posologyAdult: "8-16 mg IV ou PO avant la chimiothérapie.",
                posologyPediatric: "Ajusté à la surface corporelle."
              }
            ]
          },
          {
            name: "Antagonistes D2 / Neuroleptiques",
            drugs: [
              {
                dci: "Prométhazine",
                commercialNames: ["Phenergan"],
                definition: "Antihistaminique H1 avec propriétés antiémétiques, sédatives et anticholinergiques.",
                modeOfAction: "Bloque les récepteurs H1, D2 et muscariniques.",
                indications: ["Nausées", "Mal des transports", "Allergies", "Sédation"],
                contraindications: ["Enfants < 2 ans"],
                adverseEffects: ["Sédation marquée", "Confusion", "Effets anticholinergiques"],
                drugInteractions: "Dépresseurs du SNC.",
                antidotes: "Traitement de soutien.",
                posologyAdult: "25 mg toutes les 4-6 heures.",
                posologyPediatric: "Usage prudent."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Médicaments du système endocrinien",
    subCategories: [
      {
        name: "Médicaments du diabète",
        subCategories: [
          {
            name: "Insulines & analogues",
            subCategories: [
              {
                name: "Action ultra-rapide",
                drugs: [
                  {
                    dci: "Insuline Lispro",
                    commercialNames: ["Humalog"],
                    definition: "Analogue de l'insuline à action ultra-rapide.",
                    modeOfAction: "Abaisse la glycémie en stimulant la captation du glucose. Début ~15 min, pic 1-2h, durée 3-5h.",
                    indications: ["Diabète de type 1 et 2, pour le contrôle prandial."],
                    contraindications: ["Hypoglycémie"],
                    adverseEffects: ["Hypoglycémie", "Lipodystrophie"],
                    drugInteractions: "Bêta-bloquants (masquent signes d'hypoglycémie).",
                    antidotes: "Glucagon ou glucose.",
                    posologyAdult: "Dose individuelle ajustée aux repas.",
                    posologyPediatric: "Dose individuelle.",
                    references: ["American Diabetes Association (ADA) Standards of Care", "Vidal - Humalog"]
                  }
                ]
              },
              {
                name: "Action intermédiaire",
                drugs: [
                  {
                    dci: "Insuline NPH",
                    commercialNames: ["Humulin N", "Insulatard"],
                    definition: "Insuline humaine à durée d'action intermédiaire.",
                    modeOfAction: "Absorption ralentie. Début 1-2h, pic 4-8h, durée 10-18h.",
                    indications: ["Diabète de type 1 et 2, pour le contrôle basal."],
                    contraindications: ["Hypoglycémie"],
                    adverseEffects: ["Hypoglycémie nocturne"],
                    drugInteractions: "Similaires.",
                    antidotes: "Glucagon ou glucose.",
                    posologyAdult: "1-2 injections/jour.",
                    posologyPediatric: "Dose individuelle."
                  }
                ]
              },
              {
                name: "Action prolongée",
                drugs: [
                  {
                    dci: "Insuline Glargine",
                    commercialNames: ["Lantus", "Toujeo"],
                    definition: "Analogue de l'insuline à longue durée d'action.",
                    modeOfAction: "Libération lente et prolongée sans pic marqué. Durée ~24h.",
                    indications: ["Diabète de type 1 et 2, pour le contrôle basal."],
                    contraindications: ["Hypoglycémie"],
                    adverseEffects: ["Hypoglycémie (moins de risque que NPH)"],
                    drugInteractions: "Similaires.",
                    antidotes: "Glucagon ou glucose.",
                    posologyAdult: "1 injection SC par jour.",
                    posologyPediatric: "Dose individuelle."
                  }
                ]
              }
            ]
          },
          {
            name: "Antidiabétiques non insuliniques",
            subCategories: [
              {
                name: "Biguanides",
                drugs: [
                  {
                    dci: "Metformine",
                    commercialNames: ["Glucophage"],
                    definition: "Antidiabétique oral, traitement de première intention du diabète de type 2.",
                    modeOfAction: "Diminue la production hépatique de glucose et augmente la sensibilité à l'insuline.",
                    indications: ["Diabète de type 2"],
                    contraindications: ["Insuffisance rénale sévère (DFG < 30)", "Acidose métabolique"],
                    adverseEffects: ["Troubles GI", "Acidose lactique (rare mais grave)"],
                    drugInteractions: "Produits de contraste iodés.",
                    antidotes: "Hémodialyse pour l'acidose lactique.",
                    posologyAdult: "500 mg 1-2x/jour, augmentée jusqu'à 2-3 g/jour.",
                    posologyPediatric: "> 10 ans : 500 mg 1x/jour, max 2g/jour.",
                    references: ["ADA Standards of Care", "ANSM - RCP Metformine"]
                  }
                ]
              },
              {
                name: "Sulfamides hypoglycémiants",
                drugs: [
                  {
                    dci: "Glibenclamide",
                    commercialNames: ["Daonil"],
                    definition: "Sulfamide hypoglycémiant.",
                    modeOfAction: "Stimule la libération d'insuline par le pancréas.",
                    indications: ["Diabète de type 2"],
                    contraindications: ["Diabète de type 1", "Insuffisance rénale ou hépatique sévère"],
                    adverseEffects: ["Hypoglycémie (sévère et prolongée)", "Prise de poids"],
                    drugInteractions: "AINS, alcool, bêta-bloquants (majorent risque d'hypo).",
                    antidotes: "Resucrage (oral ou IV). Glucagon.",
                    posologyAdult: "2.5-20 mg/jour.",
                    posologyPediatric: "Non recommandé."
                  }
                ]
              },
              {
                name: "Inhibiteurs de la DPP-4 (Gliptines)",
                drugs: [
                  {
                    dci: "Sitagliptine",
                    commercialNames: ["Januvia"],
                    definition: "Inhibiteur de l'enzyme DPP-4.",
                    modeOfAction: "Empêche la dégradation des incrétines (GLP-1), potentialisant la sécrétion d'insuline.",
                    indications: ["Diabète de type 2"],
                    contraindications: ["Hypersensibilité"],
                    adverseEffects: ["Céphalées", "Pancréatite aiguë (rare)"],
                    drugInteractions: "Augmente légèrement les taux de digoxine.",
                    antidotes: "Pas d'antidote.",
                    posologyAdult: "100 mg 1x/jour.",
                    posologyPediatric: "Non recommandé."
                  }
                ]
              },
              {
                name: "Inhibiteurs du SGLT2 (Gliflozines)",
                drugs: [
                  {
                    dci: "Empagliflozine",
                    commercialNames: ["Jardiance"],
                    definition: "Inhibiteur du cotransporteur sodium-glucose de type 2 (SGLT2).",
                    modeOfAction: "Bloque la réabsorption rénale du glucose, entraînant une glycosurie.",
                    indications: ["Diabète de type 2", "Insuffisance cardiaque", "Maladie rénale chronique"],
                    contraindications: ["Hypersensibilité"],
                    adverseEffects: ["Infections génitales mycosiques", "Infections urinaires", "Acidocétose euglycémique (rare)"],
                    drugInteractions: "Diurétiques (risque de déshydratation).",
                    antidotes: "Pas d'antidote.",
                    posologyAdult: "10-25 mg 1x/jour.",
                    posologyPediatric: "Non recommandé."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Médicaments de la thyroïde",
        subCategories: [
          {
            name: "Hormones thyroïdiennes",
            drugs: [
              {
                dci: "Lévothyroxine (T4)",
                commercialNames: ["Levothyrox", "Synthroid"],
                definition: "Hormone thyroïdienne de synthèse (T4).",
                modeOfAction: "Remplace la thyroxine endogène. Convertie en T3 (forme active).",
                indications: ["Hypothyroïdie", "Freinage de la TSH après cancer thyroïdien"],
                contraindications: ["Hyperthyroïdie non traitée"],
                adverseEffects: ["Symptômes d'hyperthyroïdie en cas de surdosage."],
                drugInteractions: "Sels de fer, de calcium (diminuent l'absorption).",
                antidotes: "Arrêt temporaire et réajustement.",
                posologyAdult: "25-50 µg/jour initialement, ajustée selon TSH.",
                posologyPediatric: "Ajustée au poids."
              }
            ]
          },
          {
            name: "Antithyroïdiens de synthèse",
            drugs: [
              {
                dci: "Méthimazole",
                commercialNames: ["Tapazole"],
                definition: "Antithyroïdien de la classe des thionamides.",
                modeOfAction: "Inhibe la thyroperoxydase, bloquant la synthèse des hormones thyroïdiennes.",
                indications: ["Hyperthyroïdie (Maladie de Basedow)"],
                contraindications: ["Agranulocytose antérieure"],
                adverseEffects: ["Agranulocytose (rare mais grave)", "Hépatite"],
                drugInteractions: "Peu.",
                antidotes: "Arrêt du traitement. G-CSF pour agranulocytose.",
                posologyAdult: "10-40 mg/jour initialement.",
                posologyPediatric: "Ajustée."
              }
            ]
          }
        ]
      },
      { name: "Corticostéroïdes", reference: "Voir section 'Médicaments anti-inflammatoires'" },
      {
        name: "Hormones sexuelles & Modulateurs",
        subCategories: [
          {
            name: "Contraceptifs hormonaux",
            drugs: [
              {
                dci: "Éthinylestradiol + Lévonorgestrel",
                commercialNames: ["Microgynon", "Minidril"],
                definition: "Contraceptif oral combiné (COC) oestroprogestatif.",
                modeOfAction: "Supprime l'ovulation et épaissit la glaire cervicale.",
                indications: ["Contraception hormonale"],
                contraindications: ["Antécédents thromboemboliques", "Cancer du sein", "Tabagisme > 35 ans"],
                adverseEffects: ["Risque accru de thrombose veineuse", "Nausées", "Tension mammaire"],
                drugInteractions: "Inducteurs enzymatiques (diminuent l'efficacité).",
                antidotes: "Pas d'antidote.",
                posologyAdult: "1 comprimé/jour, 21j/28.",
                posologyPediatric: "Après la ménarche."
              }
            ]
          }
        ]
      },
      {
        name: "Médicaments de l'ostéoporose",
        subCategories: [
          {
            name: "Bisphosphonates",
            drugs: [
              {
                dci: "Alendronate",
                commercialNames: ["Fosamax"],
                definition: "Bisphosphonate.",
                modeOfAction: "Inhibe la résorption osseuse par les ostéoclastes.",
                indications: ["Ostéoporose post-ménopausique"],
                contraindications: ["Anomalies de l'œsophage", "Hypocalcémie"],
                adverseEffects: ["Œsophagite", "Ostéonécrose de la mâchoire (rare)"],
                drugInteractions: "Aliments, calcium, antiacides diminuent l'absorption.",
                antidotes: "Pas d'antidote.",
                posologyAdult: "70 mg 1x/semaine, à jeun.",
                posologyPediatric: "Non recommandé."
              }
            ]
          },
          {
            name: "Autres agents",
            drugs: [
              {
                dci: "Denosumab",
                commercialNames: ["Prolia"],
                definition: "Anticorps monoclonal anti-RANKL.",
                modeOfAction: "Bloque le RANK Ligand, inhibant la formation et la survie des ostéoclastes.",
                indications: ["Ostéoporose post-ménopausique à haut risque"],
                contraindications: ["Hypocalcémie"],
                adverseEffects: ["Infections", "Hypocalcémie", "Ostéonécrose de la mâchoire (rare)"],
                drugInteractions: "Peu.",
                antidotes: "Pas d'antidote. Supplémentation Ca/Vit D.",
                posologyAdult: "60 mg SC tous les 6 mois.",
                posologyPediatric: "Non recommandé."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Médicaments anti-infectieux",
    subCategories: [
      {
        name: "Antibiotiques",
        subCategories: [
          {
            name: "Bêta-lactamines",
            subCategories: [
              {
                name: "Pénicillines",
                drugs: [
                  {
                    dci: "Amoxicilline",
                    commercialNames: ["Clamoxyl", "Amoxil", "Augmentin (avec acide clavulanique)"],
                    definition: "Antibiotique de la famille des pénicillines à large spectre.",
                    modeOfAction: "Inhibe la synthèse de la paroi bactérienne en se liant aux protéines de liaison des pénicillines (PBPs).",
                    indications: ["Infections ORL", "Pneumonie communautaire", "Infections urinaires simples", "Prophylaxie dentaire selon contexte"],
                    contraindications: ["Allergie aux pénicillines/céphalosporines (prudence)"],
                    adverseEffects: ["Diarrhée", "Éruption cutanée", "Réactions allergiques (urticaire, anaphylaxie)"],
                    drugInteractions: "Méthotrexate (↑toxicité). Allopurinol (↑ risque de rash).",
                    antidotes: "Pas d'antidote spécifique; adrénaline pour anaphylaxie, arrêt du traitement si réaction sévère.",
                    posologyAdult: "500 mg–1 g toutes les 8 h (ou selon AMM/formulation).",
                    posologyPediatric: "25–50 mg/kg/jour en 2–3 prises selon indication.",
                    references: ["ANSM - RCP Amoxicilline", "Vidal - Amoxicilline", "IDSA Guidelines"]
                  },
                  {
                    dci: "Pénicilline G (Benzylpénicilline)",
                    commercialNames: ["Pfizerpen"],
                    definition: "Pénicilline naturelle injectable.",
                    modeOfAction: "Inhibe la synthèse du peptidoglycane par inhibition des PBPs.",
                    indications: ["Syphilis", "Certaines méningites et infections streptococciques sensibles"],
                    contraindications: ["Allergie aux pénicillines"],
                    adverseEffects: ["Réactions allergiques", "Phlébite locale (IM/IV)"],
                    drugInteractions: "Probenecide (diminue excrétion).",
                    antidotes: "Adrénaline pour anaphylaxie, support symptomatique.",
                    posologyAdult: "1–4 millions UI IV/IM toutes les 4–6 h selon indication.",
                    posologyPediatric: "50 000–200 000 UI/kg/jour selon indication.",
                    references: ["ANSM - RCP Benzylpénicilline", "Vidal"]
                  }
                ]
              },
              {
                name: "Pénicillines à spectre élargi / anti-pseudomonas",
                drugs: [
                  {
                    dci: "Pipéracilline / Tazobactam",
                    commercialNames: ["Tazocilline", "Pip/Tazo"],
                    definition: "Association pénicilline anti-pseudomonas + inhibiteur de β-lactamase.",
                    modeOfAction: "Inhibition de la synthèse de la paroi + protection contre β-lactamases par le tazobactam.",
                    indications: ["Infections nosocomiales sévères", "Pneumonies associées aux soins", "Intra-abdominales compliquées", "Neutropéniques fébriles (selon protocole)"],
                    contraindications: ["Allergie aux β-lactamines"],
                    adverseEffects: ["Diarrhée", "Néphrotoxicité (si association)", "Thrombopénie"],
                    drugInteractions: "Vancomycine (↑ risque néphrotoxicité). Méthotrexate.",
                    antidotes: "Hémodialyse possible en surdosage; arrêt médicamenteux.",
                    posologyAdult: "4.5 g IV (pipéracilline 4 g / tazobactam 0.5 g) toutes les 6–8 h (adapter IR).",
                    posologyPediatric: "≈80 mg/kg pipéracilline toutes les 6–8 h (selon protocole).",
                    references: ["ANSM - RCP Piperacillin/Tazobactam", "IDSA Guidelines"]
                  }
                ]
              },
              {
                name: "Céphalosporines",
                subCategories: [
                  {
                    name: "1ère génération",
                    drugs: [
                      {
                        dci: "Cefazoline",
                        commercialNames: ["Ancef", "Kefzol"],
                        definition: "Céphalosporine de 1ère génération, principalement active sur les cocci Gram+.",
                        modeOfAction: "Inhibition de la synthèse de la paroi bactérienne via liaison aux PBPs.",
                        indications: ["Prophylaxie chirurgicale", "Infections cutanées", "Infections urinaires sensibles"],
                        contraindications: ["Allergie aux céphalosporines/pénicillines (prudence)"],
                        adverseEffects: ["Réactions allergiques", "Diarrhée", "Phlébite locale"],
                        drugInteractions: "Potentialisation de la néphrotoxicité avec aminosides.",
                        antidotes: "Traitement symptomatique; adrénaline en cas d'anaphylaxie.",
                        posologyAdult: "1–2 g IV toutes les 8 h selon indication.",
                        posologyPediatric: "25–50 mg/kg/jour en 3–4 prises selon indication.",
                        references: ["ANSM - RCP Céfazoline", "BNF - Cefazolin", "IDSA Surgical Antimicrobial Prophylaxis Guidelines"]
                      },
                      {
                        dci: "Cefalexine",
                        commercialNames: ["Keflex"],
                        definition: "Céphalosporine orale de 1ère génération, active surtout sur cocci Gram+.",
                        modeOfAction: "Inhibition de la synthèse de la paroi bactérienne.",
                        indications: ["Infections ORL", "Infections cutanées", "Infections urinaires simples"],
                        contraindications: ["Allergie aux β-lactamines"],
                        adverseEffects: ["Nausées", "Diarrhée", "Éruption cutanée"],
                        drugInteractions: "Peut réduire l'efficacité des contraceptifs oraux (données variables).",
                        antidotes: "Traitement symptomatique; arrêt si réaction sévère.",
                        posologyAdult: "500 mg PO toutes les 6–12 h selon indication.",
                        posologyPediatric: "25–50 mg/kg/jour en 2–4 prises selon AMM.",
                        references: ["ANSM - RCP Céfalexine", "BNF - Cephalexin"]
                      }
                    ]
                  },
                  {
                    name: "2ème génération",
                    drugs: [
                      {
                        dci: "Cefuroxime",
                        commercialNames: ["Zinnat", "Ceftin"],
                        definition: "Céphalosporine de 2ᵉ génération (oral/IV), avec meilleure activité Gram- que les 1ʳᵉ gen.",
                        modeOfAction: "Inhibition de la synthèse du peptidoglycane via PBPs.",
                        indications: ["Sinusites", "Bronchites aiguës/exacerbations", "Otites", "Infections urinaires (selon sensibilité)"],
                        contraindications: ["Allergie aux β-lactamines"],
                        adverseEffects: ["Diarrhée", "Nausées", "Éruption cutanée"],
                        drugInteractions: "AINS/anticoagulants: surveillance possible du risque hémorragique.",
                        antidotes: "Support symptomatique.",
                        posologyAdult: "250–500 mg PO 2x/jour ou 750 mg–1.5 g IV selon indication.",
                        posologyPediatric: "20–30 mg/kg/jour en 2 prises (selon indication).",
                        references: ["ANSM - RCP Céfuroxime", "BNF - Cefuroxime"]
                      }
                    ]
                  },
                  {
                    name: "3ème génération",
                    drugs: [
                      {
                        dci: "Ceftriaxone",
                        commercialNames: ["Rocephin"],
                        definition: "Céphalosporine 3ᵉ génération injectable à longue demi-vie, bonne pénétration méningée.",
                        modeOfAction: "Inhibition synthèse paroi bactérienne; large spectre Gram- et certaines Gram+.",
                        indications: ["Méningite bactérienne", "Pneumonie sévère", "Sepsis communautaire", "Gonorrhée"],
                        contraindications: ["Allergie aux céphalosporines", "Nouveau-né avec hyperbilirubinémie", "Ne pas mélanger avec solutions calciques chez nouveau-né"],
                        adverseEffects: ["Diarrhée", "Sludge biliaire", "Éruption", "Anomalies hématologiques rares"],
                        drugInteractions: "Incompatibilité avec solutions contenant du calcium (néonatologie).",
                        antidotes: "Traitement symptomatique; arrêt du médicament.",
                        posologyAdult: "1–2 g IV/IM toutes les 24 h (méningite: 2 g toutes les 12 h).",
                        posologyPediatric: "50–100 mg/kg/jour en 1–2 doses selon indication.",
                        references: ["ANSM - RCP Rocephin (Ceftriaxone)", "Vidal - Ceftriaxone", "FDA - Rocephin Prescribing Information"]
                      },
                      {
                        dci: "Cefotaxime",
                        commercialNames: ["Claforan"],
                        definition: "Céphalosporine 3ᵉ génération injectable, bonne diffusion méningée.",
                        modeOfAction: "Inhibition synthèse paroi bactérienne.",
                        indications: ["Méningite", "Sepsis", "Pneumonie sévère"],
                        contraindications: ["Allergie aux β-lactamines"],
                        adverseEffects: ["Éruption cutanée", "Troubles hépatiques (rares)"],
                        drugInteractions: "Peu d'interactions.",
                        antidotes: "Support symptomatique.",
                        posologyAdult: "1–2 g IV toutes les 6–8 h (selon indication).",
                        posologyPediatric: "50–200 mg/kg/jour en 3–4 doses.",
                        references: ["ANSM - RCP Claforan (Cefotaxime)", "BNF - Cefotaxime"]
                      }
                    ]
                  },
                  {
                    name: "4ème génération",
                    drugs: [
                      {
                        dci: "Cefepime",
                        commercialNames: ["Maxipime"],
                        definition: "Céphalosporine de 4ᵉ génération avec activité antipseudomonas et large spectre Gram-.",
                        modeOfAction: "Inhibition synthèse paroi bactérienne; meilleure résistance aux β-lactamases qu'aux générations précédentes.",
                        indications: ["Pneumonies nosocomiales", "Sepsis sévère suspect Pseudomonas", "Infections urinaires compliquées"],
                        contraindications: ["Allergie aux β-lactamines"],
                        adverseEffects: ["Neurotoxicité (convulsions chez IR sévère)", "Éruption cutanée"],
                        drugInteractions: "Potentialisation de neurotoxicité avec certains agents (ajuster si IR).",
                        antidotes: "Arrêt; traitement symptomatique; ajuster dose en IR.",
                        posologyAdult: "1–2 g IV toutes les 8–12 h selon gravité et clairance.",
                        posologyPediatric: "50 mg/kg IV toutes les 8 h (selon protocole pédiatrique).",
                        references: ["ANSM - RCP Cefepime", "FDA - Cefepime Prescribing Information", "IDSA"]
                      }
                    ]
                  },
                  {
                    name: "5ème génération",
                    drugs: [
                      {
                        dci: "Ceftaroline",
                        commercialNames: ["Teflaro"],
                        definition: "Céphalosporine de 5ᵉ génération avec activité anti-MRSA et spectre étendu sur cocci Gram+ et certains Gram-.",
                        modeOfAction: "Inhibition synthèse paroi bactérienne; affinité pour PBPs modifiés (ex: PBP2a).",
                        indications: ["Infections cutanées compliquées", "Pneumonie communautaire selon AMM locale"],
                        contraindications: ["Allergie aux β-lactamines"],
                        adverseEffects: ["Nausées", "Éruptions cutanées", "Neutropénie (rare)"],
                        drugInteractions: "Peu d'interactions majeures identifiées; vérifier interactions locales.",
                        antidotes: "Support symptomatique; arrêt si effet sévère.",
                        posologyAdult: "600 mg IV toutes les 12 h (selon AMM et protocole).",
                        posologyPediatric: "Usage spécialisé selon AMM et poids.",
                        references: ["FDA - Teflaro (Ceftaroline) Prescribing Information", "EMA - SPC Ceftaroline", "ANSM - RCP Ceftaroline"]
                      }
                    ]
                  }
                ]
              },
              {
                name: "Carbapénèmes",
                drugs: [
                  {
                    dci: "Imipénem / Cilastatine",
                    commercialNames: ["Tienam"],
                    definition: "Carbapénème à très large spectre; cilastatine prévient dégradation rénale.",
                    modeOfAction: "Inhibition synthèse paroi bactérienne; résistant à de nombreuses β-lactamases.",
                    indications: ["Infections nosocomiales sévères polymicrobiennes", "Infections résistantes aux autres β-lactamines"],
                    contraindications: ["Allergie aux carbapénèmes/β-lactamines", "Antécédent convulsions (prudence)"],
                    adverseEffects: ["Nausées", "Convulsions (si IR ou dose élevée)", "Rash"],
                    drugInteractions: "Acide valproïque (diminue valproate).",
                    antidotes: "Arrêt; benzodiazépines pour convulsions; hémodialyse si nécessaire.",
                    posologyAdult: "500 mg–1 g IV toutes les 6–8 h (adapter IR).",
                    posologyPediatric: "15–25 mg/kg/dose toutes les 6–8 h selon indication.",
                    references: ["ANSM - RCP Tienam", "IDSA"]
                  },
                  {
                    dci: "Méropénem",
                    commercialNames: ["Meronem"],
                    definition: "Carbapénème antipseudomonas.",
                    modeOfAction: "Inhibe synthèse paroi bactérienne.",
                    indications: ["Infections nosocomiales sévères, sepsis multi-résistant"],
                    contraindications: ["Allergie β-lactamines"],
                    adverseEffects: ["Convulsions (rare), nausées, rash"],
                    drugInteractions: "Peu d'interactions.",
                    antidotes: "Support, ajuster posologie si IR.",
                    posologyAdult: "500 mg–1 g IV toutes les 8 h selon indication.",
                    posologyPediatric: "20–40 mg/kg/dose selon protocole.",
                    references: ["ANSM - RCP Meropenem", "IDSA"]
                  }
                ]
              },
              {
                name: "Monobactame",
                drugs: [
                  {
                    dci: "Aztréonam",
                    commercialNames: ["Azactam"],
                    definition: "Monobactame actif sur bacilles gram négatif (dont Pseudomonas).",
                    modeOfAction: "Inhibe synthèse paroi bactérienne; peu de réactions croisées chez allergiques pénicillines.",
                    indications: ["Infections G-, alternatives si allergie β-lactamines"], 
                    contraindications: ["Hypersensibilité rare"],
                    adverseEffects: ["Réactions locales, éruption, diarrhée"],
                    drugInteractions: "Peu d'interactions.",
                    antidotes: "Support.",
                    posologyAdult: "1–2 g IV toutes les 6–8 h selon indication.",
                    posologyPediatric: "Dose selon poids et indication.",
                    references: ["ANSM - RCP Aztreonam"]
                  }
                ]
              }
            ]
          },
          {
            name: "Macrolides",
            drugs: [
              {
                dci: "Azithromycine",
                commercialNames: ["Zithromax", "Zmax"],
                definition: "Macrolide à longue demi-vie tissulaire.",
                modeOfAction: "Se lie à la sous-unité 50S ribosomale → inhibition synthèse protéique (bactériostatique).",
                indications: ["Pneumonies atypiques", "Chlamydia", "Exacerbations BPCO", "Sinusites selon guidelines"],
                contraindications: ["Hypersensibilité aux macrolides", "Allongement important du QT"],
                adverseEffects: ["Nausées", "Diarrhée", "Allongement QT (rare)", "Hépatite (rare)"],
                drugInteractions: "Médicaments prolongeant QT, Statines (interaction moindre qu'avec clarithromycine).",
                antidotes: "Support; surveillance ECG si arythmie.",
                posologyAdult: "500 mg J1 puis 250 mg/jour pendant 4 jours (Z-Pak) ou 500 mg/jour 3 jours selon schéma.",
                posologyPediatric: "10 mg/kg J1 puis 5 mg/kg/jour pendant 4 jours.",
                references: ["ANSM - RCP Azithromycin", "IDSA"]
              },
              {
                dci: "Clarithromycine",
                commercialNames: ["Biaxin"],
                definition: "Macrolide avec interactions CYP3A4 plus marquées.",
                modeOfAction: "Inhibe sous-unité 50S ribosomale.",
                indications: ["Alternatives ORL/respiratoires", "Eradication H. pylori (en association)"],
                contraindications: ["Allongement QT sévère", "Insuffisance hépatique sévère"],
                adverseEffects: ["Nausées", "Altérations gustatives", "Interaction médicamenteuse via CYP3A4"],
                drugInteractions: "Inhibiteur CYP3A4: statines, antiarythmiques (prudence).",
                antidotes: "Support.",
                posologyAdult: "250–500 mg 2x/jour selon indication.",
                posologyPediatric: "Dose selon poids et AMM.",
                references: ["ANSM - RCP Clarithromycin", "Vidal"]
              },
              {
                dci: "Érythromycine",
                commercialNames: ["Erythrocin"],
                definition: "Macrolide plus ancien, prokinétique (à faibles doses) et antibactérien.",
                modeOfAction: "Inhibe sous-unité 50S ribosomale.",
                indications: ["Alternatives en cas d'allergie β-lactamine pour certaines infections", "Prokinétique (formes spécifiques)"],
                contraindications: ["Allongement QT", "Interactions multiples CYP3A4"],
                adverseEffects: ["Troubles GI marqués", "Allongement QT", "Hépatotoxicité rare"],
                drugInteractions: "Inhibiteur CYP3A4 (nombreuses interactions).",
                antidotes: "Support.",
                posologyAdult: "250–500 mg 2–4x/j selon forme.",
                posologyPediatric: "20–50 mg/kg/jour en 3–4 prises.",
                references: ["ANSM - RCP Erythromycin"]
              }
            ]
          },
          {
            name: "Fluoroquinolones",
            subCategories: [
              {
                name: "1ère génération",
                drugs: [
                  {
                    dci: "Acide nalidixique",
                    commercialNames: ["NegGram"],
                    definition: "Quinolone de 1ʳᵉ génération à usage principalement urinaire (ancien).",
                    modeOfAction: "Inhibition de l'ADN-gyrase (topoisomérase II).",
                    indications: ["Cystites simples (usage historique/limité)"],
                    contraindications: ["Insuffisance rénale sévère", "Enfants", "Grossesse"],
                    adverseEffects: ["Nausées", "Tendinopathies rares", "Convulsions (rare)"],
                    drugInteractions: "Augmentation effet anticoagulants oraux (surveillance).",
                    antidotes: "Support symptomatique; arrêt du traitement.",
                    posologyAdult: "500 mg toutes les 6–12 h selon formule et indication.",
                    posologyPediatric: "Non recommandé/usage restreint.",
                    references: ["BNF - Nalidixic Acid", "WHO Model List (historical references)"]
                  }
                ]
              },
              {
                name: "2ème génération",
                drugs: [
                  {
                    dci: "Ciprofloxacine",
                    commercialNames: ["Ciprofloxacin", "Ciproxin", "Ciflox"],
                    definition: "Fluoroquinolone 2ᵉ génération, puissante sur bacilles Gram- dont Pseudomonas.",
                    modeOfAction: "Inhibition ADN-gyrase et topoisomérase IV → bactéricidie.",
                    indications: ["Pyélonéphrite", "Infections digestives graves", "Infections ostéo-articulaires (selon sensibilité)"],
                    contraindications: ["Allergie quinolones", "Enfants sauf indications spécifiques", "Grossesse", "Myasthénie grave"],
                    adverseEffects: ["Tendinopathie/rupture tendon", "Troubles neurologiques (confusion, convulsions)", "Photosensibilité", "Prolongation QT (variable)"],
                    drugInteractions: "Sels de fer/calcium/antiacides (↓ absorption), Théophylline (↑ concentration), Warfarine (↑ INR parfois).",
                    antidotes: "Arrêt; support symptomatique; bilan orthopédique si tendinopathie sévère.",
                    posologyAdult: "500–750 mg PO 2x/jour (selon indication) ou 400 mg IV 2x/jour.",
                    posologyPediatric: "Usage restreint (ex: mucoviscidose) selon protocole spécialisé.",
                    references: ["ANSM - RCP Ciprofloxacine", "FDA - Ciprofloxacin Prescribing Information", "IDSA Guidelines"]
                  },
                  {
                    dci: "Ofloxacine",
                    commercialNames: ["Ofloxacin", "Oflocet"],
                    definition: "Fluoroquinolone 2ᵉ génération.",
                    modeOfAction: "Inhibition de l'ADN-gyrase et topoisomérase IV.",
                    indications: ["Infections urinaires", "Infections génito-urinaires", "Certaines infections respiratoires selon guidelines"],
                    contraindications: ["Enfants", "Grossesse", "Myasthénie"],
                    adverseEffects: ["Tendinopathies", "Nausées", "Photosensibilité"],
                    drugInteractions: "Antiacides, suppléments de fer/calcium (↓ absorption).",
                    antidotes: "Support symptomatique.",
                    posologyAdult: "200–400 mg PO 2x/jour selon indication.",
                    posologyPediatric: "Non recommandé en routine.",
                    references: ["ANSM - RCP Ofloxacin", "BNF - Ofloxacin"]
                  }
                ]
              },
              {
                name: "3ème génération",
                drugs: [
                  {
                    dci: "Levofloxacine",
                    commercialNames: ["Levofloxacin", "Tavanic"],
                    definition: "Fluoroquinolone de 3ᵉ génération (isomère lévogyre) avec meilleure activité sur pneumocoques.",
                    modeOfAction: "Inhibition ADN-gyrase et topoisomérase IV.",
                    indications: ["Pneumonie communautaire (modérée à sévère)", "Sinusite sévère", "Pyélonéphrite compliquée"],
                    contraindications: ["Grossesse", "Enfant (sauf situations spécifiques)", "Antécédent tendinopathie sous quinolones"],
                    adverseEffects: ["Tendinopathies", "Troubles neuropsychiatriques rares", "Allongement QT (moins que moxi)"],
                    drugInteractions: "Antiacides/fer/calcium (↓ absorption), Warfarine (↑ INR parfois).",
                    antidotes: "Support; arrêt si signes sévères; suivi orthopédique si tendinopathie.",
                    posologyAdult: "500–750 mg PO/IV 1x/jour selon indication.",
                    posologyPediatric: "Usage restreint, selon protocole pédiatrique.",
                    references: ["ANSM - RCP Levofloxacine", "FDA - Levofloxacin Prescribing Information", "IDSA"]
                  }
                ]
              },
              {
                name: "4ème génération",
                drugs: [
                  {
                    dci: "Moxifloxacine",
                    commercialNames: ["Moxifloxacin", "Avelox"],
                    definition: "Fluoroquinolone de 4ᵉ génération, activité sur Gram+ respiratoires et anaérobies.",
                    modeOfAction: "Inhibition ADN-gyrase et topoisomérase IV.",
                    indications: ["Pneumonie communautaire (selon guidelines)", "Infections intra-abdominales (sélection)"],
                    contraindications: ["Allongement QT important", "Grossesse", "Enfant"],
                    adverseEffects: ["Prolongation QT (attention co-médication)", "Tendinopathies", "Troubles hépatiques rares"],
                    drugInteractions: "Antiarythmiques (risque arythmie additive), Antiacides (↓ absorption).",
                    antidotes: "Support; arrêt si effets sévères.",
                    posologyAdult: "400 mg PO/IV 1x/jour.",
                    posologyPediatric: "Non recommandé en routine.",
                    references: ["ANSM - RCP Moxifloxacine", "FDA - Moxifloxacin Prescribing Information"]
                  }
                ]
              }
            ]
          },
          {
            name: "Aminoglycosides (Aminosides)",
            drugs: [
              {
                dci: "Gentamicine",
                commercialNames: ["Gentalline", "Garamycin"],
                definition: "Aminoglycoside bactéricide concentration-dépendant actif sur bacilles G-.",
                modeOfAction: "Se lie irréversiblement à la sous-unité 30S ribosomale → erreur traduction et mort bactérienne.",
                indications: ["Infections sévères à BGN (en synergie)", "Endocardite (synergie)"],
                contraindications: ["Myasthénie", "Hypersensibilité"],
                adverseEffects: ["Néphrotoxicité (tubulaire)", "Ototoxicité (cochlée/vestibulaire, parfois irréversible)"],
                drugInteractions: "Diurétiques de l'anse (↑ ototox/néphrotox), Vancomycine (↑ néphrotox).",
                antidotes: "Pas d'antidote spécifique; arrêt; hémodialyse possible; monitoring taux sériques (pics/creux).",
                posologyAdult: "Dose unique quotidienne 3–5 mg/kg IV (ou selon schéma), ou doses fractionnées selon protocole.",
                posologyPediatric: "Dose adaptée au poids; monitoring requis.",
                references: ["ANSM - RCP Gentamicin", "IDSA"]
              },
              {
                dci: "Amikacine",
                commercialNames: ["Amikin"],
                definition: "Aminoglycoside semi-synthétique résistant à certaines enzymes bactériennes.",
                modeOfAction: "Se lie à la sous-unité 30S ribosomale → inhibition synthèse protéique (bactéricide).",
                indications: ["Infections sévères multi-résistantes (en synergie)"],
                contraindications: ["Myasthénie"],
                adverseEffects: ["Néphrotoxicité", "Ototoxicité"],
                drugInteractions: "Autres néphrotoxiques, diurétiques de l'anse.",
                antidotes: "Arrêt, support, dialyse si nécessaire.",
                posologyAdult: "≈15 mg/kg/jour en dose unique ou selon protocole; ajuster IR.",
                posologyPediatric: "Adapté au poids et âge.",
                references: ["ANSM - RCP Amikacin"]
              }
            ]
          },
          {
            name: "Tétracyclines",
            drugs: [
              {
                dci: "Doxycycline",
                commercialNames: ["Vibramycin", "Doxy"],
                definition: "Tétracycline à large spectre et bonne biodisponibilité orale.",
                modeOfAction: "Lie la sous-unité 30S ribosomale → inhibition synthèse protéique (bactériostatique).",
                indications: ["Chlamydia", "Rickettsioses", "Acné", "Lyme", "Prévention paludisme (selon schéma)"],
                contraindications: ["Grossesse", "Enfants <8 ans (dents)"],
                adverseEffects: ["Photosensibilité", "Œsophagite (prendre avec eau)", "Troubles digestifs"],
                drugInteractions: "Sels fer/calcium/antiacides (chélation ↓absorption).",
                antidotes: "Arrêt; support symptomatique.",
                posologyAdult: "100 mg 2x/jour (varie selon indication).",
                posologyPediatric: "Usage restreint >8 ans selon AMM.",
                references: ["ANSM - RCP Doxycycline", "IDSA"]
              },
              {
                dci: "Minocycline",
                commercialNames: ["Minocin"],
                definition: "Tétracycline lipophile utilisée en dermatologie et infections spécifiques.",
                modeOfAction: "Inhibition traduction protéique (30S).",
                indications: ["Acné, certaines infections cutanées"],
                contraindications: ["Grossesse, enfants <8 ans"],
                adverseEffects: ["Vertiges, coloration dents (chronique), photosensibilité"],
                drugInteractions: "Peu d'interactions.",
                antidotes: "Support.",
                posologyAdult: "50–100 mg 1–2x/jour selon indication.",
                posologyPediatric: "Usage restreint >8 ans.",
                references: ["ANSM - RCP Minocycline"]
              }
            ]
          },
          {
            name: "Lincosamides",
            drugs: [
              {
                dci: "Clindamycine",
                commercialNames: ["Dalacin C"],
                definition: "Lincosamide actif sur anaérobies et certains cocci Gram+.",
                modeOfAction: "Se lie à la sous-unité 50S ribosomale → inhibition synthèse protéique.",
                indications: ["Infections anaérobies (abdos, pelviennes)", "Infections cutanées à staphylocoques/streptocoques (selon sensibilité)"],
                contraindications: ["Antécédent de colite associée aux antibiotiques (C. difficile)"],
                adverseEffects: ["Diarrhée, risque colite à C. difficile", "Éruption cutanée"],
                drugInteractions: "Agents neuromusculaires (potentiellement).",
                antidotes: "Arrêt; prise en charge colite selon protocole.",
                posologyAdult: "300–600 mg toutes les 6–8 h PO/IV selon indication.",
                posologyPediatric: "10–30 mg/kg/jour en 3–4 prises.",
                references: ["ANSM - RCP Clindamycin", "IDSA"]
              }
            ]
          },
          {
            name: "Oxazolidinones",
            drugs: [
              {
                dci: "Linezolid",
                commercialNames: ["Zyvox"],
                definition: "Oxazolidinone active sur cocci Gram+ résistants (SARM, E. faecium).",
                modeOfAction: "Inhibe l'initiation de la traduction protéique (liaison au 23S ARNr 50S).",
                indications: ["Infections à SARM, entérocoques résistants (selon sensibilité)"],
                contraindications: ["Concomitance avec IMAO non contrôlée (risque syndrome sérotoninergique)"],
                adverseEffects: ["Thrombocytopénie (monitorer), neuropathie périphérique (traitement prolongé), interactions sérotoninergiques"],
                drugInteractions: "Antidépresseurs IMAO, SSRI (risque sérotoninergie).",
                antidotes: "Arrêt, mesures symptomatiques; consulter toxicologie si interaction médicamenteuse.",
                posologyAdult: "600 mg 2x/jour PO/IV.",
                posologyPediatric: "10 mg/kg 2x/jour (selon AMM/âge).",
                references: ["ANSM - RCP Linezolid", "IDSA"]
              }
            ]
          },
          {
            name: "Glycopeptides",
            drugs: [
              {
                dci: "Vancomycine",
                commercialNames: ["Vancocin"],
                definition: "Glycopeptide actif sur cocci Gram+ (incluant SARM).",
                modeOfAction: "Se lie au D-Ala-D-Ala des précurseurs peptidoglycaniques → inhibition synthèse paroi (bactéricidie).",
                indications: ["Infections à SARM", "Entérocoques résistants (selon sensibilité)", "Colite à C. difficile (voie orale)"],
                contraindications: ["Hypersensibilité"],
                adverseEffects: ["Néphrotoxicité", "Ototoxicité (rare)", "'Red man syndrome' si perfusion trop rapide", "Neutropénie (traitement prolongé)"],
                drugInteractions: "Autres néphrotoxiques/ototoxiques (aminosides, amphotéricine).",
                antidotes: "Ralentir perfusion, antihistaminiques pour 'Red man'; arrêt si toxicité sévère; monitoring taux sériques.",
                posologyAdult: "15–20 mg/kg IV toutes les 8–12 h (ajuster selon clairance, monitoring Cmin). Voie orale 125 mg 4x/j pour C. difficile.",
                posologyPediatric: "10–15 mg/kg IV toutes les 6–8 h (selon indication).",
                references: ["ANSM - RCP Vancomycin", "IDSA MRSA Guidelines"]
              },
              {
                dci: "Téicoplanine",
                commercialNames: ["Targocid"],
                definition: "Glycopeptide injectable, alternative à la vancomycine dans certains contextes.",
                modeOfAction: "Similaire à vancomycine (liaison D-Ala-D-Ala).",
                indications: ["Infections graves à cocci Gram+ (selon protocole local)"],
                contraindications: ["Hypersensibilité"],
                adverseEffects: ["Troubles hépatiques, douleurs au site d'injection"], 
                drugInteractions: "Peu d'interactions.",
                antidotes: "Support.",
                posologyAdult: "Dose de charge puis dose d'entretien selon AMM et poids.",
                posologyPediatric: "Selon AMM et poids.",
                references: ["ANSM - RCP Teicoplanin"]
              }
            ]
          },
          {
            name: "Sulfonamides & Triméthoprime",
            drugs: [
              {
                dci: "Triméthoprime / Sulfaméthoxazole (Co-trimoxazole)",
                commercialNames: ["Bactrim", "Septra"],
                definition: "Association inhibitrice séquentielle de la synthèse des folates.",
                modeOfAction: "Sulfaméthoxazole inhibe la synthèse de PABA → acide folique; triméthoprime inhibe la dihydrofolate réductase.",
                indications: ["Infections urinaires (selon sensibilité)", "Pneumocystis jirovecii (prévention/traitement)", "Certaines infections entériques"],
                contraindications: ["Allergie aux sulfonamides", "Grossesse tardive, nouveau-né", "Insuffisance hépatique sévère"],
                adverseEffects: ["Éruptions (SJS/TEN rare)", "Hématotoxicité (anémie, agranulocytose)", "Photosensibilité"],
                drugInteractions: "Warfarine (↑ INR). Méthotrexate (↑toxicité).",
                antidotes: "Arrêt; folinate de calcium si toxicité sévère sur synthèse folique.",
                posologyAdult: "Co-trimoxazole DS (160/800 mg) 1 comprimé 2x/jour pour infections urinaires; schéma selon indication.",
                posologyPediatric: "Dose TMP 8–12 mg/kg/jour en 2–3 prises selon indication.",
                references: ["ANSM - RCP Cotrimoxazole", "IDSA"]
              }
            ]
          },
          {
            name: "Nitroimidazolés / Anaérobies",
            drugs: [
              {
                dci: "Metronidazole",
                commercialNames: ["Flagyl"],
                definition: "Antiprotozoaire et antibactérien anaérobie.",
                modeOfAction: "Activation dans les cellules anaérobies → radicaux libres endommageant l'ADN (bactéricidie).",
                indications: ["Trichomonase", "Giardiase", "Amebiase", "Infections anaérobies", "Prophylaxie chirurgie colorectale (selon protocole)"],
                contraindications: ["Grossesse (1er trimestre prudence) selon indication", "Consommation alcool (effet disulfiram)"],
                adverseEffects: ["Goût métallique", "Nausées", "Neuropathie périphérique (rare)", "Réaction avec alcool (flush)"],
                drugInteractions: "Warfarine (↑ INR). Alcool (effet antabuse).",
                antidotes: "Arrêt; support symptomatique.",
                posologyAdult: "250–500 mg 2–3x/jour PO selon indication; IV selon gravité.",
                posologyPediatric: "Dose selon poids et indication.",
                references: ["ANSM - RCP Metronidazole", "WHO"]
              }
            ]
          },
          {
            name: "Nitrofuranes / Antibiotiques urinaires",
            drugs: [
              {
                dci: "Nitrofurantoïne",
                commercialNames: ["Furadantine", "Macrodantin"],
                definition: "Antibiotique urinaire de 1ʳᵉ ligne pour cystites simples.",
                modeOfAction: "Activation intracellulaire → dommages multiples à l'ADN bactérien.",
                indications: ["Cystite aiguë non compliquée", "Prophylaxie récurrente (sélectif)"],
                contraindications: ["Insuffisance rénale sévère (ClCr faible)", "Grossesse fin de terme", "Nouveau-né"],
                adverseEffects: ["Nausées", "Pulmonary fibrosis (rare si long traitement)", "Neuropathie (rare)"],
                drugInteractions: "Antiacides (↓absorption).",
                antidotes: "Arrêt; gestion supportive.",
                posologyAdult: "50–100 mg 3–4x/jour selon formulation; souvent 100 mg 2x/jour selon AMM.",
                posologyPediatric: "5–7 mg/kg/jour en 3–4 prises selon âge/poids.",
                references: ["IDSA UTI Guidelines", "ANSM - RCP Nitrofurantoin"]
              },
              {
                dci: "Fosfomycine",
                commercialNames: ["Monurol"],
                definition: "Inhibiteur unique de la synthèse du peptidoglycane, utilisé en dose unique pour cystite.",
                modeOfAction: "Inhibe MurA (première étape synthèse peptidoglycane).",
                indications: ["Cystite aiguë non compliquée (dose unique)"],
                contraindications: ["Hypersensibilité"],
                adverseEffects: ["Nausées", "Diarrhée", "Éruption (rare)"],
                drugInteractions: "Peu d'interactions.",
                antidotes: "Support.",
                posologyAdult: "3 g PO en dose unique (selon AMM).",
                posologyPediatric: "Usage pédiatrique selon protocole/AMM.",
                references: ["IDSA UTI Guidelines", "ANSM - RCP Fosfomycin"]
              }
            ]
          },
          {
            name: "Phénicolés",
            drugs: [
              {
                dci: "Chloramphénicol",
                commercialNames: ["Chloromycetin"],
                definition: "Antibiotique à large spectre; bactériostatique (parfois bactéricidie selon concentrations).",
                modeOfAction: "Inhibe la synthèse protéique en se liant à la sous-unité 50S du ribosome (bloque la peptidyltransférase).",
                indications: ["Méningite bactérienne (dans certains contextes/ressources limitées)", "Fièvre typhoïde sévère (selon recommandations locales)", "Infections graves si alternatives indisponibles ou résistances"], 
                contraindications: ["Nouveau-né (risque de 'syndrome gris')", "Antécédent d'aplasie médullaire ou hypo-plaquettose sévère", "Insuffisance hépatique sévère"],
                adverseEffects: ["Dépression médullaire réversible", "Aplasie médullaire irréversible (rare mais grave)", "Syndrome gris du nouveau-né (si perfusion/dose élevée)"],
                drugInteractions: "Inhibe métabolisme de la warfarine et de la phénytoïne → ajuster posologies / surveiller taux.",
                antidotes: "Arrêt immédiat; support hématologique (transfusions, greffe de moelle si aplasie sévère).",
                posologyAdult: "50–100 mg/kg/jour IV en 4 doses (selon indication et protocole), surveillance hématologique rapprochée.",
                posologyPediatric: "25–50 mg/kg/jour en 4 doses (ne pas utiliser chez nouveau-né sauf exception très encadrée).",
                references: [ "ANSM - RCP Chloramphénicol", "BNF - Chloramphenicol", "WHO Model List of Essential Medicines, 2023" ]
              },
              {
                dci: "Tiamphénicol",
                commercialNames: ["Thiamphenicol", "Tifomycine"],
                definition: "Dérivé méthyl-sulfoné du chloramphénicol, antibiotique à large spectre, utilisé surtout en médecine vétérinaire et dans certaines indications humaines en zones ressources limitées.",
                modeOfAction: "Inhibe la synthèse protéique bactérienne en se fixant sur la sous-unité 50S du ribosome, bloquant la peptidyltransférase.",
                indications: ["Infections respiratoires sévères (bronchite, pneumonie)", "Infections urinaires", "Fièvre typhoïde (selon protocoles nationaux)", "Certaines IST (gonocoque résistant, selon ressources locales)"],
                contraindications: ["Hypersensibilité aux phénicolés", "Insuffisance hépatique sévère", "Antécédent de dépression médullaire"],
                adverseEffects: ["Moins toxique que le chloramphénicol", "Dépression médullaire réversible (rare)", "Troubles digestifs (nausées, diarrhées)"],
                drugInteractions: "Peut potentialiser effets des anticoagulants oraux et de la phénytoïne (comme le chloramphénicol, mais interactions moins marquées).",
                antidotes: "Arrêt du traitement; soins de support hématologique si nécessaire.",
                posologyAdult: "1.5–3 g/jour per os ou IV, fractionné en 3 prises (selon protocole).",
                posologyPediatric: "30–50 mg/kg/jour en 2–3 prises.",
                references: [ "BNF - Thiamphenicol", "WHO Model List of Essential Medicines, 2023", "Martindale: The Complete Drug Reference, 2022" ]
              }
            ]
          },
          {
            name: "Polymyxines",
            drugs: [
              {
                dci: "Colistine (Polymyxine E)",
                commercialNames: ["Colimycin", "Colistin"],
                definition: "Antibiotique réservé aux infections multi-résistantes à bacilles G- (last resort).",
                modeOfAction: "Perturbation membrane externe des G- → fuite ionique et mort bactérienne.",
                indications: ["Infections à Pseudomonas/Acinetobacter multi-résistants (selon antibiogramme)"],
                contraindications: ["Hypersensibilité"],
                adverseEffects: ["Néphrotoxicité, neurotoxicité (neuropathie, paresthésies)"],
                drugInteractions: "Autres néphrotoxiques (aminoglycosides, vancomycine) ↑ risque rénal.",
                antidotes: "Arrêt; support, dialyse si grave.",
                posologyAdult: "Dose selon unité (colistiméthate sodique vs colistine), ajuster selon clairance.",
                posologyPediatric: "Usage spécialisé pédiatrique.",
                references: ["WHO AWaRe", "ANSM - RCP Colistin"]
              }
            ]
          }
        ]
      },
      {
        name: "Antituberculeux",
        subCategories: [
          {
            name: "Médicaments de première ligne",
            drugs: [
              {
                dci: "Isoniazide (INH)",
                commercialNames: ["Rimifon", "INH"],
                definition: "Antituberculeux majeur, bactéricide vis-à-vis de Mycobacterium tuberculosis (surtout sur bacilles en phase de multiplication active).",
                modeOfAction: "Pro-médicament activé par la katG mycobactérienne ; inhibe la synthèse des acides mycoliques (composant clé de la paroi mycobactérienne).",
                indications: ["Traitement de la tuberculose active en association (régimes combinés)", "Traitement de l'infection tuberculeuse latente (LTBI) en monothérapie selon stratégie locale"],
                contraindications: ["Hépatite aiguë active sévère liée au médicament", "Antécédent d'aplasie médullaire sévère liée au médicament (prudence)"],
                adverseEffects: ["Hépatotoxicité (élévation des transaminases ; risque d'hépatite)", "Neuropathie périphérique (prévenir par pyridoxine)", "Troubles neurologiques (convulsions si surdosage)", "Réactions cutanées, lupus induit (rare)"],
                drugInteractions: "Phénytoïne, carbamazépine (INH peut ↑ concentrations) ; alcool (augmente risque hépatotoxicité).",
                antidotes: "Pyridoxine (vitamine B6) pour prévenir/traiter la neuropathie ; arrêt du médicament et prise en charge hépatique en cas d'hépatite sévère.",
                posologyAdult: "Traitement quotidien : 5 mg/kg/jour (généralement 300 mg/jour). Schémas intermittents possibles selon protocole (ex. 15 mg/kg 2–3x/semaine sous surveillance).",
                posologyPediatric: "10–15 mg/kg/jour (max 300 mg/jour).",
                references: ["WHO Consolidated Guidelines on Tuberculosis, 2022", "CDC - Treatment of Latent TB Infection", "ANSM - RCP Isoniazide"]
              },
              {
                dci: "Rifampicine (Rifampin)",
                commercialNames: ["Rifadine", "Rifadin"],
                definition: "Antituberculeux majeur et antibiotique à large spectre utilisé en thérapie combinée contre la tuberculose et dans d'autres infections sélectionnées.",
                modeOfAction: "Inhibe l'ARN polymérase bactérienne (sous-unité β), bloquant la transcription de l'ADN en ARN.",
                indications: ["Tuberculose (en combinaison avec autres antituberculeux)", "Lèpre (association)", "Prophylaxie de contacts pour certaines infections (selon recommandations locales)", "Certaines infections staphylococciques en association selon contexte"],
                contraindications: ["Insuffisance hépatique sévère (prudence/CI relative)", "Certaines coadministrations d'antirétroviraux sans adaptation (ex. certains inhibiteurs de protéase)"],
                adverseEffects: ["Hépatotoxicité (surveillance transaminases)", "Coloration orange-rouge des liquides biologiques (urines, larmes, sueur)", "Syndrome pseudo-grippal (prise intermittente)", "Hématologiques rares (thrombopénie)"],
                drugInteractions: "Puissant inducteur enzymatique (CYP3A4, CYP2C9, UGT) : ↓ efficacité de contraceptifs oraux, anti-rétroviraux, anticoagulants (warfarine), certains antifongiques, etc.",
                antidotes: "Pas d'antidote spécifique ; ajuster/arrêter médicaments interactifs ; traitement de soutien en cas d'hépatotoxicité.",
                posologyAdult: "10 mg/kg/jour (généralement 450–600 mg/jour) à jeun ; schémas intermittents (p.ex. 600 mg 3x/semaine) possibles selon protocole.",
                posologyPediatric: "10–20 mg/kg/jour (généralement 10–15 mg/kg/jour selon âges et protocoles).",
                references: ["WHO Consolidated Guidelines on Tuberculosis, 2022", "CDC TB Treatment Guidelines", "ANSM - RCP Rifampicine"]
              },
              {
                dci: "Pyrazinamide (PZA)",
                commercialNames: ["PZA"],
                definition: "Antituberculeux actif en milieu acide ; important en phase initiale courte des schémas antituberculeux.",
                modeOfAction: "Pro-médicament converti en acide pyrazinoïque qui altère le métabolisme et la membrane mycobactérienne en milieu acide ; mécanisme exact multiple.",
                indications: ["Phase initiale (intensive) du traitement de la tuberculose (en association avec INH, RIF, EMB) ; permet de raccourcir la durée thérapeutique."],
                contraindications: ["Insuffisance hépatique sévère", "Goutte symptomatique ou hyperuricémie sévère non contrôlée"],
                adverseEffects: ["Hépatotoxicité (surveillance), hyperuricémie/goutte, nausées, arthralgies"],
                drugInteractions: "Interactions hépatotoxiques potentielles avec INH/RIF ; attention aux médicaments augmentant l'acide urique.",
                antidotes: "Arrêt du médicament si hépatite sévère ; traitement symptomatique ; traiter poussée goutteuse si nécessaire.",
                posologyAdult: "20–25 mg/kg/jour (généralement 1 000–1 500 mg/jour selon poids) pendant la phase intensive (2 mois typiquement).",
                posologyPediatric: "20–30 mg/kg/jour (selon protocole pédiatrique).",
                references: ["WHO Consolidated Guidelines on Tuberculosis, 2022", "CDC TB Treatment Guidelines", "ANSM - RCP Pyrazinamide"]
              },
              {
                dci: "Ethambutol",
                commercialNames: ["Myambutol"],
                definition: "Agent antituberculeux bactériostatique utilisé en combinaison pour prévenir la résistance et traiter des souches résistantes.",
                modeOfAction: "Inhibe l'arabinofuranosyl transférase → altération de la synthèse de l'arabinogalactane (paroi mycobactérienne).",
                indications: ["Traitement initial de la tuberculose en association (INH+RIF+PZA+EMB) ; utilisé aussi dans les schémas de résistances selon antibiogramme."],
                contraindications: ["Incapacité à communiquer des troubles visuels (ex. très jeune enfant non coopératif)", "Neuropathie optique préexistante (prudence)"],
                adverseEffects: ["Névrite optique (diminution de l'acuité visuelle, altération de la vision des couleurs rouge/vert) — dose-dépendant et réversible si arrêt précoce", "Éruption cutanée, nausées"],
                drugInteractions: "Peu d'interactions pharmacocinétiques majeures ; surveiller co-prescriptions neurotoxiques.",
                antidotes: "Arrêt immédiat en cas de symptômes visuels ; consultation ophtalmologique ; support (récupération souvent complète si arrêt précoce).",
                posologyAdult: "15–25 mg/kg/jour (en pratique 15 mg/kg/jour ; max ~1 200 mg/jour) selon protocole.",
                posologyPediatric: "15–20 mg/kg/jour (selon poids et protocole).",
                references: ["WHO Consolidated Guidelines on Tuberculosis, 2022", "BNF - Ethambutol", "ANSM - RCP Ethambutol"]
              }
            ]
          },
          {
            name: "Médicaments de deuxième ligne",
            drugs: [
              {
                dci: "Streptomycine",
                commercialNames: ["Streptomycin"],
                definition: "Aminoglycoside antibacillaire utilisé en seconde ligne ou contexte particulier (formes résistantes ou sévères).",
                modeOfAction: "Se lie à la sous-unité 30S ribosomale → inhibition synthèse protéique → bactéricidie (concentration-dépendant).",
                indications: ["TB pulmonaire ou extrapulmonaire résistante/complexe (selon recommandations), TB grave en association", "Utilisé en certains schémas d'attaque selon disponibilité et antibiogramme."],
                contraindications: ["Hypersensibilité aux aminosides", "Myasthénie (prudence)"],
                adverseEffects: ["Ototoxicité (cochléaire/vestibulaire parfois irréversible), néphrotoxicité (tubulaire), réactions au site d'injection (IM)"],
                drugInteractions: "Autres néphrotoxiques / ototoxiques (amphotericine, vancomycine, furosémide) ↑ risque.",
                antidotes: "Arrêt ; prise en charge supportive ; hémodialyse peut aider pour intoxication sévère ; surveillance auditif régulière.",
                posologyAdult: "15 mg/kg IM/IV une fois par jour (dose quotidienne unique ; ajuster selon clairance rénale).",
                posologyPediatric: "15 mg/kg/jour IM/IV (ajuster selon poids/clairance).",
                references: ["WHO Consolidated Guidelines on Tuberculosis, 2022", "ANSM - RCP Streptomycin", "IDSA"]
              },
              
              {
                dci: "Bedaquiline",
                commercialNames: ["Sirturo"],
                definition: "Nouveau médicament anti-tuberculeux ciblant ATP synthase mycobactérienne, utilisé pour MDR-TB.",
                modeOfAction: "Inhibe l'ATP synthase mycobactérienne → perturbation production d'énergie vitale pour le bacille.",
                indications: ["Tuberculose multirésistante (MDR-TB) en association selon recommandations WHO et protocoles nationaux."],
                contraindications: ["Allongement QT prolongé sévère non contrôlé ; interactions majeures (rifampicine) ; insuffisance hépatique sévère (prudence)"],
                adverseEffects: ["Allongement QT (monitorage ECG essentiel), nausées, arthralgies, élévation transaminases (hépatotoxicité)"],
                drugInteractions: "Contre-indiqué/à éviter avec inducteurs puissants CYP3A4 (p.ex. rifampicine) ; caution avec autres médicaments prolongeant QT.",
                antidotes: "Arrêt en cas de QT dangereux ; prise en charge cardiaque ; traitement de soutien hépatique si nécessaire.",
                posologyAdult: "400 mg PO une fois par jour pendant 2 semaines, puis 200 mg 3x/semaine pendant 22 semaines (schéma couramment utilisé) ; adapter selon protocole national.",
                posologyPediatric: "Usage pédiatrique très spécialisé ; consulter protocoles nationaux/WHO.",
                references: ["WHO Consolidated Guidelines on Tuberculosis, 2022 (Bedaquiline recommendations)", "FDA - Sirturo (Bedaquiline) Prescribing Information", "EMA - Bedaquiline SPC"]
              }
            ]
          }
        ]
      },
      {
        "name": "Antifongiques",
        "subCategories": [
          {
            "name": "Systémiques",
            "drugs": [
              {
                "dci": "Fluconazole",
                "commercialNames": ["Triflucan", "Diflucan"],
                "definition": "Antifongique triazolé à large spectre actif sur Candida et Cryptococcus.",
                "modeOfAction": "Inhibe la 14-alpha-déméthylase fongique (enzyme CYP450) → bloque synthèse de l'ergostérol → altère membrane cellulaire fongique.",
                "indications": ["Candidose oropharyngée, œsophagienne, vaginale, systémique", "Méningite à Cryptococcus", "Prévention des candidoses chez immunodéprimés"],
                "contraindications": ["Hypersensibilité aux azolés", "Association avec médicaments prolongeant QT (cisapride, terfénadine)"],
                "adverseEffects": ["Nausées, vomissements, diarrhée", "Céphalées", "Hépatotoxicité (rare)", "Allongement intervalle QT"],
                "drugInteractions": "Inhibiteur du CYP2C9, 2C19 et 3A4 → ↑ concentrations de warfarine, phénytoïne, certaines statines, sulfonylurées.",
                "antidotes": "Pas d'antidote spécifique ; traitement symptomatique et surveillance hépatique.",
                "posologyAdult": "50–800 mg/jour selon indication (prophylaxie ou infection invasive).",
                "posologyPediatric": "3–12 mg/kg/jour selon indication et poids.",
                "references": ["WHO Guidelines for the Diagnosis, Treatment and Prevention of Fungal Diseases, 2022", "ANSM - RCP Fluconazole", "BNF - Antifungals"]
              },
              {
                "dci": "Amphotéricine B",
                "commercialNames": ["Fungizone", "AmBisome (liposomale)"],
                "definition": "Antifongique polyénique à large spectre, utilisé dans les infections fongiques invasives sévères.",
                "modeOfAction": "Se lie à l'ergostérol membranaire → création de pores → fuite des ions et composants cellulaires → mort fongique.",
                "indications": ["Candidose systémique", "Aspergillose invasive", "Cryptococcose", "Leishmaniose viscérale (forme liposomale)"],
                "contraindications": ["Hypersensibilité connue aux amphotéricines (sauf risque vital majeur)"],
                "adverseEffects": ["Néphrotoxicité fréquente", "Réactions infusionnelles : fièvre, frissons, hypotension", "Troubles électrolytiques : hypokaliémie, hypomagnésémie", "Anémie"],
                "drugInteractions": "Aggravation néphrotoxicité avec aminosides, ciclosporine, vancomycine, cisplatine.",
                "antidotes": "Pas d'antidote spécifique ; pré-médication (paracétamol, antihistaminique, corticoïde) et hydratation IV pour réduire effets indésirables.",
                "posologyAdult": "Forme conventionnelle : 0.5–1.5 mg/kg/jour IV ; Forme liposomale : 3–5 mg/kg/jour IV.",
                "posologyPediatric": "Doses ajustées au poids, surveillance hépatique et rénale.",
                "references": ["WHO Guidelines for the Diagnosis, Treatment and Prevention of Fungal Diseases, 2022", "ANSM - RCP Amphotéricine B", "BNF - Amphotericin B"]
              },
              {
                "dci": "Itraconazole",
                "commercialNames": ["Sporanox"],
                "definition": "Triazolé à large spectre, actif sur Aspergillus, Candida et dermatophytes.",
                "modeOfAction": "Inhibe 14-alpha-déméthylase fongique → perturbation synthèse ergostérol → altération membrane fongique.",
                "indications": ["Aspergillose chronique, candidoses invasives", "Dermatomycoses résistantes", "Prophylaxie infections fongiques graves chez immunodéprimés"],
                "contraindications": ["Hypersensibilité aux azolés", "Insuffisance cardiaque sévère (risque ICC aggravé)"],
                "adverseEffects": ["Nausées, vomissements", "Hépatotoxicité", "Hypertension artérielle", "Allongement QT rare"],
                "drugInteractions": "Inhibiteur du CYP3A4 → ↑ concentrations de certains statines, antiarythmiques, anticoagulants.",
                "antidotes": "Arrêt en cas de toxicité ; support symptomatique.",
                "posologyAdult": "100–400 mg/jour selon indication, en une ou deux prises.",
                "posologyPediatric": "2–10 mg/kg/jour selon âge et poids.",
                "references": ["WHO Guidelines 2022", "ANSM - RCP Itraconazole", "BNF - Antifungals"]
              }
            ]
          },
          {
            "name": "Topiques",
            "drugs": [
              {
                "dci": "Clotrimazole",
                "commercialNames": ["Canesten", "Lotrimin"],
                "definition": "Imidazolé topique actif contre Candida et dermatophytes.",
                "modeOfAction": "Inhibe 14-alpha-déméthylase → bloque synthèse ergostérol → altération membrane fongique.",
                "indications": ["Dermatomycoses cutanées", "Candidose cutanée ou muqueuse", "Pied d'athlète", "Infections vaginales à Candida"],
                "contraindications": ["Hypersensibilité connue aux imidazoles"],
                "adverseEffects": ["Irritation locale, brûlure, démangeaisons", "Rare allergie cutanée"],
                "drugInteractions": "Aucune notable par voie topique",
                "antidotes": "Arrêt du produit en cas de réaction locale",
                "posologyAdult": "Application 1–3x/jour selon localisation et produit, durée 1–4 semaines",
                "posologyPediatric": "Même posologie selon poids et tolérance cutanée",
                "references": ["WHO Guidelines 2022", "ANSM - RCP Clotrimazole", "BNF - Antifungals topiques"]
              },
              {
                "dci": "Miconazole",
                "commercialNames": ["Daktarin", "Micatin"],
                "definition": "Imidazolé topique contre Candida et dermatophytes",
                "modeOfAction": "Inhibe 14-alpha-déméthylase → perturbation membrane fongique",
                "indications": ["Candidoses cutanées ou muqueuses", "Dermatomycoses superficielles"],
                "contraindications": ["Hypersensibilité aux imidazoles"],
                "adverseEffects": ["Irritation locale, brûlure, démangeaisons", "Réactions allergiques rares"],
                "drugInteractions": "Aucune notable par voie topique",
                "antidotes": "Arrêt du produit",
                "posologyAdult": "Application 1–3x/jour selon localisation, durée 2–4 semaines",
                "posologyPediatric": "Même posologie selon âge et tolérance cutanée",
                "references": ["WHO Guidelines 2022", "ANSM - RCP Miconazole", "BNF - Antifungals topiques"]
              },
              {
                "dci": "Nystatine",
                "commercialNames": ["Mycostatin"],
                "definition": "Polyène topique actif sur Candida",
                "modeOfAction": "Se lie à l'ergostérol → création de pores → lyse fongique",
                "indications": ["Candidose cutanée et muqueuse, muqueuse buccale, candidose intestinale en suspension orale"],
                "contraindications": ["Hypersensibilité aux polyènes"],
                "adverseEffects": ["Rare irritation locale", "Goût désagréable pour suspension buccale"],
                "drugInteractions": "Peu d'interactions par voie topique ou orale",
                "antidotes": "Arrêt du produit",
                "posologyAdult": "Crème/topique : 2–4x/jour ; suspension buccale 400 000–1 000 000 UI 4x/jour",
                "posologyPediatric": "Adapté au poids ; crème 2–4x/jour ; suspension buccale selon âge et poids",
                "references": ["WHO Guidelines 2022", "ANSM - RCP Nystatine", "BNF - Antifungals topiques"]
              }
            ]
          }
        ]
      },
      {
        "name": "Antiviraux",
        "subCategories": [
          {
            "name": "Anti-herpétiques",
            "drugs": [
              {
                "dci": "Aciclovir (Acyclovir)",
                "commercialNames": ["Zovirax"],
                "definition": "Antiviral, analogue de la guanosine, actif contre les virus du groupe Herpès.",
                "modeOfAction": "Phosphorylé par la thymidine kinase virale → aciclovir triphosphate inhibe ADN polymérase virale et termine l'élongation de la chaîne d'ADN.",
                "indications": ["Herpès simplex (cutané, génital, encéphalite)", "Varicelle-zona (VZV)"],
                "contraindications": ["Hypersensibilité"],
                "adverseEffects": ["IV : néphrotoxicité (cristallurie), troubles neurologiques (confusion, hallucinations)", "Oral : nausées, céphalées"],
                "drugInteractions": "Médicaments néphrotoxiques → risque accru",
                "antidotes": "Pas d'antidote. Hydratation. Hémodialyse si insuffisance rénale aiguë.",
                "posologyAdult": "Herpès génital : 200 mg 5x/jour PO. Encéphalite herpétique : 10 mg/kg IV toutes les 8h.",
                "posologyPediatric": "Doses ajustées au poids.",
                "references": ["BNF - Antivirals", "ANSM - RCP Aciclovir", "WHO Guidelines on Herpes Simplex Virus, 2021"]
              },
              {
                "dci": "Valaciclovir",
                "commercialNames": ["Valtrex"],
                "definition": "Pro-médicament de l'aciclovir avec meilleure biodisponibilité orale.",
                "modeOfAction": "Converti en aciclovir par métabolisme hépatique → même mécanisme que l'aciclovir.",
                "indications": ["Herpès génital", "Zona", "Prévention récurrente d'herpès"],
                "contraindications": ["Hypersensibilité à l'aciclovir/valaciclovir"],
                "adverseEffects": ["Céphalées, nausées, diarrhée, rares réactions rénales"],
                "drugInteractions": "Médicaments néphrotoxiques",
                "antidotes": "Pas d'antidote ; hydrater",
                "posologyAdult": "Herpès génital initial : 1 g 2x/jour PO 10 jours",
                "posologyPediatric": "Doses adaptées selon poids",
                "references": ["BNF - Antivirals", "ANSM - RCP Valaciclovir"]
              }
            ]
          },
          {
            "name": "Anti-VIH",
            "drugs": [
              {
                "dci": "Tenofovir / Emtricitabine",
                "commercialNames": ["Truvada", "Descovy (Ténofovir alafénamide)"],
                "definition": "Association de deux inhibiteurs nucléosidiques/nucléotidiques de la transcriptase inverse (INTI).",
                "modeOfAction": "Phosphorylés en formes actives → incorporation dans l'ADN viral → terminaison de chaîne",
                "indications": ["Traitement VIH (en association avec autres ARV)", "PrEP", "Hépatite B chronique (ténofovir)"],
                "contraindications": ["Insuffisance rénale sévère"],
                "adverseEffects": ["Néphrotoxicité (tubulopathie)", "Perte densité minérale osseuse"],
                "drugInteractions": "Médicaments néphrotoxiques",
                "antidotes": "Pas d'antidote",
                "posologyAdult": "1 comprimé/jour",
                "posologyPediatric": "Doses selon poids",
                "references": ["WHO HIV Guidelines 2021", "ANSM - RCP Truvada/Descovy", "BNF - HIV Therapy"]
              },
              {
                "dci": "Dolutégravir",
                "commercialNames": ["Tivicay"],
                "definition": "Inhibiteur d'intégrase de 2ᵉ génération",
                "modeOfAction": "Bloque intégration de l'ADN viral dans le génome hôte",
                "indications": ["Traitement VIH en association"],
                "contraindications": ["Hypersensibilité", "Association avec dofetilide"],
                "adverseEffects": ["Insomnie", "Céphalées", "Prise de poids", "Rare : troubles neuropsychiatriques, défaut fermeture tube neural si conception"],
                "drugInteractions": "Anti-acides, calcium, fer ↓ absorption ; metformine ↑ concentrations",
                "antidotes": "Pas d'antidote",
                "posologyAdult": "50 mg 1x/jour",
                "posologyPediatric": "Doses selon poids",
                "references": ["WHO HIV Guidelines 2021", "ANSM - RCP Dolutégravir", "BNF - HIV Therapy"]
              }
            ]
          },
          {
            "name": "Anti-hépatite",
            "drugs": [
              {
                "dci": "Sofosbuvir / Velpatasvir",
                "commercialNames": ["Epclusa"],
                "definition": "Antiviral à action directe sur le virus de l'hépatite C (VHC).",
                "modeOfAction": "Sofosbuvir : inhibiteur nucléotidique de la NS5B polymérase. Velpatasvir : inhibiteur NS5A → bloque réplication virale",
                "indications": ["Hépatite C chronique toutes génotypes"],
                "contraindications": ["Insuffisance hépatique sévère", "Co-administration avec amiodarone"],
                "adverseEffects": ["Fatigue", "Céphalées", "Nausées"],
                "drugInteractions": "Inducteurs enzymatiques puissants (rifampicine, carbamazépine) → diminuent efficacité",
                "antidotes": "Pas d'antidote ; surveillance clinique",
                "posologyAdult": "1 comprimé/jour",
                "posologyPediatric": "≥12 ans et ≥35 kg : 1 comprimé/jour",
                "references": ["WHO Hepatitis C Guidelines 2022", "ANSM - RCP Epclusa"]
              }
            ]
          },
          {
            "name": "Anti-grippaux",
            "drugs": [
              {
                "dci": "Oseltamivir",
                "commercialNames": ["Tamiflu"],
                "definition": "Inhibiteur de la neuraminidase des virus influenza A et B",
                "modeOfAction": "Bloque la libération des virions → limite propagation infection",
                "indications": ["Grippe saisonnière", "Prophylaxie post-exposition"],
                "contraindications": ["Hypersensibilité"],
                "adverseEffects": ["Nausées, vomissements, céphalées", "Rare : réactions neuropsychiatriques chez enfants"],
                "drugInteractions": "Aucune notable",
                "antidotes": "Pas d'antidote ; support symptomatique",
                "posologyAdult": "75 mg 2x/jour pendant 5 jours (infection), 75 mg/jour 10 jours (prophylaxie)",
                "posologyPediatric": "Selon poids et âge",
                "references": ["WHO Influenza Guidelines 2022", "ANSM - RCP Oseltamivir", "BNF - Antivirals"]
              }
            ]
          }
        ]
      },
      {
        name: "Antiparasitaires",
        subCategories: [
          {
            name: "Antipaludiques",
            drugs: [
              {
                dci: "Chloroquine",
                commercialNames: ["Nivaquine"],
                definition: "Antipaludique de la famille des 4-aminoquinoléines.",
                modeOfAction: "S'accumule dans la vacuole digestive du parasite (Plasmodium) et interfère avec la détoxification de l'hème, entraînant la mort du parasite. A également des effets anti-inflammatoires.",
                indications: ["Traitement et prophylaxie du paludisme (dans les zones sans résistance)", "Maladies rhumatologiques (lupus, polyarthrite rhumatoïde)"],
                contraindications: ["Rétinopathie", "Hypersensibilité."],
                adverseEffects: ["Troubles digestifs", "Prurit", "Rétinopathie (toxicité dose-cumulative, irréversible)", "Cardiotoxicité (surdosage)"],
                drugInteractions: "Antiacides (diminuent l'absorption).",
                antidotes: "Pas d'antidote. Surveillance ophtalmologique régulière indispensable lors d'un traitement au long cours.",
                posologyAdult: "Paludisme (traitement) : dose de charge puis doses dégressives sur 3 jours.",
                posologyPediatric: "Doses ajustées au poids."
              },
              {
                dci: "Artéméther / Luméfantrine",
                commercialNames: ["Coartem", "Riamet"],
                definition: "Association thérapeutique à base d'artémisinine (ACT), traitement de référence du paludisme non compliqué à P. falciparum.",
                modeOfAction: "L'artéméther est un dérivé de l'artémisinine à action rapide qui tue rapidement les parasites. La luméfantrine est un partenaire à longue demi-vie qui élimine les parasites restants.",
                indications: ["Traitement du paludisme non compliqué à Plasmodium falciparum."],
                contraindications: ["Paludisme sévère", "Premier trimestre de la grossesse (sauf si indispensable)."],
                adverseEffects: ["Céphalées", "Vertiges", "Troubles digestifs", "Allongement du QT"],
                drugInteractions: "Médicaments allongeant le QT. Inhibiteurs/inducteurs du CYP3A4.",
                antidotes: "Pas d'antidote.",
                posologyAdult: "Schéma fixe sur 3 jours (ex: 4 comprimés 2x/jour pendant 3 jours), à prendre avec un repas gras pour améliorer l'absorption.",
                posologyPediatric: "Comprimés dispersibles, doses ajustées au poids."
              }
            ]
          },
          {
            name: "Antihelminthiques",
            drugs: [
              {
                dci: "Albendazole",
                commercialNames: ["Zentel"],
                definition: "Antihelminthique à large spectre de la classe des benzimidazolés.",
                modeOfAction: "Inhibe la polymérisation de la tubuline des helminthes, perturbant leur motilité et leur métabolisme énergétique.",
                indications: ["Infections par les vers ronds (ascaris, oxyures), les vers plats (ténia)", "Hydatidose, cysticercose"],
                contraindications: ["Grossesse", "Hypersensibilité."],
                adverseEffects: ["Bien toléré en dose unique. Pour les traitements longs : hépatotoxicité, leucopénie."],
                drugInteractions: "Praziquantel, dexaméthasone augmentent ses concentrations.",
                antidotes: "Pas d'antidote.",
                posologyAdult: "Oxyurose : 400 mg en dose unique. Hydatidose : 400 mg 2x/jour pendant plusieurs semaines.",
                posologyPediatric: "Doses similaires."
              }
            ]
          }
        ]
      },
      {
        name: "Antiprotozoaires",
        drugs: [
          {
            dci: "Métronidazole",
            commercialNames: ["Flagyl"],
            definition: "Antibiotique et antiprotozoaire de la famille des nitro-imidazolés.",
            modeOfAction: "Après pénétration dans les microorganismes anaérobies (bactéries ou protozoaires), est réduit en un composé cytotoxique qui endommage l'ADN.",
            indications: ["Infections à bactéries anaérobies (abcès, péritonite)", "Colite à Clostridioides difficile", "Vaginose bactérienne", "Trichomonase", "Amibiase", "Giardiase"],
            contraindications: ["Hypersensibilité aux imidazolés", "Premier trimestre de la grossesse."],
            adverseEffects: ["Goût métallique", "Nausées", "Neuropathie périphérique (traitement prolongé)", "Effet Antabuse (réaction violente avec l'alcool)"],
            drugInteractions: "Alcool (effet Antabuse : bouffées de chaleur, vomissements). Warfarine (augmente son effet).",
            antidotes: "Pas d'antidote.",
            posologyAdult: "500 mg 3x/jour PO ou IV. Schémas variables selon l'indication.",
            posologyPediatric: "Doses ajustées au poids."
          }
        ]
      }
    ]
  },
  {
    name: "Médicaments du sang et hématopoïèse",
    subCategories: [
      {
        name: "Antianémiques",
        drugs: [
          {
            dci: "Sulfate Ferreux",
            commercialNames: ["Tardyferon", "Fero-Grad"],
            definition: "Sel de fer utilisé pour traiter et prévenir l'anémie ferriprive.",
            modeOfAction: "Fournit le fer nécessaire à la synthèse de l'hémoglobine.",
            indications: ["Anémie par carence en fer"],
            contraindications: ["Hémochromatose", "Anémies non ferriprives"],
            adverseEffects: ["Constipation", "Nausées", "Selles noires"],
            drugInteractions: "Les tétracyclines, les quinolones et les antiacides diminuent son absorption.",
            antidotes: "Déféroxamine (chélateur du fer) en cas d'intoxication aiguë.",
            posologyAdult: "80-160 mg de fer élément par jour.",
            posologyPediatric: "3-6 mg/kg/jour de fer élément."
          },
          {
            dci: "Vitamine B12 (Cyanocobalamine)",
            commercialNames: ["Cyanocobalamine Gerda"],
            definition: "Vitamine essentielle pour l'érythropoïèse et la fonction neurologique.",
            modeOfAction: "Coenzyme dans la synthèse de l'ADN et le métabolisme des acides gras.",
            indications: ["Anémie de Biermer", "Anémie par carence en B12"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Très rares réactions allergiques."],
            drugInteractions: "Peu d'interactions.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "1000 µg IM/SC par mois.",
            posologyPediatric: "Ajusté."
          },
          {
            dci: "Érythropoïétine (EPO)",
            commercialNames: ["Eprex", "Aranesp"],
            definition: "Hormone stimulant la production de globules rouges.",
            modeOfAction: "Stimule la différenciation et la prolifération des précurseurs érythroïdes.",
            indications: ["Anémie de l'insuffisance rénale chronique", "Anémie chimio-induite"],
            contraindications: ["HTA non contrôlée"],
            adverseEffects: ["Hypertension artérielle", "Risque thromboembolique"],
            drugInteractions: "Peu d'interactions.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "SC ou IV, dose ajustée selon le taux d'hémoglobine.",
            posologyPediatric: "Ajustée."
          }
        ]
      },
      {
        name: "Facteurs de stimulation leucopoïèse",
        drugs: [
          {
            dci: "Filgrastim (G-CSF)",
            commercialNames: ["Neupogen"],
            definition: "Facteur de croissance stimulant la production de neutrophiles.",
            modeOfAction: "Stimule la prolifération et la différenciation des précurseurs des granulocytes neutrophiles.",
            indications: ["Neutropénie chimio-induite", "Mobilisation de cellules souches"],
            contraindications: ["Hypersensibilité"],
            adverseEffects: ["Douleurs osseuses", "Fièvre", "Splénomégalie (rare)"],
            drugInteractions: "Ne pas administrer 24h avant ou après une chimiothérapie.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "5 µg/kg/jour SC ou IV.",
            posologyPediatric: "Ajustée."
          }
        ]
      }
    ]
  },
  {
    name: "Médicaments du système urinaire",
    subCategories: [
      {
        name: "Alpha-bloquants (urologie)",
        drugs: [
          {
            dci: "Tamsulosine",
            commercialNames: ["Omnic", "Flomax"],
            definition: "Alpha-1A bloquant sélectif.",
            modeOfAction: "Relaxe les muscles lisses de la prostate et du col de la vessie.",
            indications: ["Hypertrophie bénigne de la prostate (HBP)"],
            contraindications: ["Hypotension orthostatique sévère"],
            adverseEffects: ["Vertiges", "Hypotension orthostatique", "Éjaculation anormale"],
            drugInteractions: "Autres antihypertenseurs, inhibiteurs du CYP3A4.",
            antidotes: "Traitement de soutien.",
            posologyAdult: "0.4 mg 1x/jour.",
            posologyPediatric: "Non indiqué."
          }
        ]
      },
      {
        name: "Inhibiteurs de la 5-alpha-réductase",
        drugs: [
          {
            dci: "Finastéride",
            commercialNames: ["Proscar", "Propecia"],
            definition: "Inhibiteur de l'enzyme 5-alpha-réductase de type 2.",
            modeOfAction: "Empêche la conversion de la testostérone en dihydrotestostérone (DHT).",
            indications: ["HBP (réduction du volume prostatique)", "Alopécie androgénétique"],
            contraindications: ["Grossesse (catégorie X)"],
            adverseEffects: ["Dysfonction sexuelle", "Gynécomastie"],
            drugInteractions: "Peu d'interactions.",
            antidotes: "Pas d'antidote.",
            posologyAdult: "HBP : 5 mg/jour. Alopécie : 1 mg/jour.",
            posologyPediatric: "Non indiqué."
          }
        ]
      },
      {
        name: "Antimuscariniques (vessie)",
        drugs: [
          {
            dci: "Oxybutynine",
            commercialNames: ["Ditropan"],
            definition: "Anticholinergique/antispasmodique urinaire.",
            modeOfAction: "Relaxe le muscle détrusor de la vessie.",
            indications: ["Hyperactivité vésicale", "Incontinence par impériosité"],
            contraindications: ["Glaucome à angle fermé", "Rétention urinaire"],
            adverseEffects: ["Sécheresse buccale", "Constipation", "Vision floue"],
            drugInteractions: "Autres anticholinergiques.",
            antidotes: "Physostigmine.",
            posologyAdult: "5 mg 2-3 fois/jour.",
            posologyPediatric: "> 5 ans : 5 mg 2x/jour."
          }
        ]
      }
    ]
  },
  {
  "name": "Médicaments anticancéreux",
  "subCategories": [
    {
      "name": "Agents alkylants",
      "drugs": [
        {
          "dci": "Cyclophosphamide",
          "commercialNames": ["Endoxan"],
          "definition": "Agent alkylant de la classe des moutardes à l'azote.",
          "modeOfAction": "Forme des liaisons covalentes avec l'ADN, entraînant des pontages et la mort cellulaire.",
          "indications": ["Lymphomes", "Leucémies", "Cancers du sein", "Maladies auto-immunes"],
          "contraindications": ["Myélosuppression sévère"],
          "adverseEffects": ["Myélosuppression", "Cystite hémorragique", "Nausées/vomissements", "Alopecie"],
          "drugInteractions": "Inducteurs/inhibiteurs enzymatiques.",
          "antidotes": "Mesna (pour prévenir la cystite hémorragique).",
          "posologyAdult": "Variable selon protocole.",
          "posologyPediatric": "Variable.",
          "references": ["BNF - Cyclophosphamide", "ANSM - RCP Endoxan", "WHO Cancer Chemotherapy Guidelines"]
        },
        {
          "dci": "Cisplatine",
          "commercialNames": ["Cisplatin"],
          "definition": "Agent alkylant à base de platine, provoquant des liaisons croisées avec l'ADN.",
          "modeOfAction": "Forme des pontages intras-trand et interstrand avec l'ADN, bloquant la réplication et induisant l'apoptose.",
          "indications": ["Cancers des testicules, ovaires, poumons, vessie"],
          "contraindications": ["Insuffisance rénale sévère", "Hypersensibilité aux composés de platine"],
          "adverseEffects": ["Néphrotoxicité", "Ototoxicité", "Nausées/vomissements sévères", "Myélosuppression"],
          "drugInteractions": "Autres agents néphrotoxiques, aminoglycosides, ciclosporine.",
          "antidotes": "Hydratation IV et amifostine pour protection rénale.",
          "posologyAdult": "50-100 mg/m² IV tous les 3-4 semaines selon protocole.",
          "posologyPediatric": "50 mg/m² IV selon protocole.",
          "references": ["BNF - Cisplatin", "ANSM - RCP Cisplatin", "WHO Cancer Chemotherapy Guidelines"]
        }
      ]
    },
    {
      "name": "Antimétabolites",
      "drugs": [
        {
          "dci": "Méthotrexate",
          "commercialNames": ["Methotrexate"],
          "definition": "Antimétabolite, analogue de l'acide folique.",
          "modeOfAction": "Inhibe la dihydrofolate réductase, bloquant la synthèse de l'ADN et la prolifération cellulaire.",
          "indications": ["Leucémies", "Lymphomes", "Cancers du sein et de l'ovaire", "Maladies auto-immunes"],
          "contraindications": ["Insuffisance hépatique sévère", "Myélosuppression sévère", "Grossesse"],
          "adverseEffects": ["Myélosuppression", "Hépatotoxicité", "Stomatite", "Nausées/vomissements", "Alopecie"],
          "drugInteractions": "AINS, sulfamides, triméthoprime → augmentent toxicité.",
          "antidotes": "Acide folinique (leucovorine) pour surdosage.",
          "posologyAdult": "Variable selon protocole, par voie orale ou IV.",
          "posologyPediatric": "Variable selon protocole et poids.",
          "references": ["BNF - Methotrexate", "ANSM - RCP Methotrexate", "WHO Cancer Chemotherapy Guidelines"]
        },
        {
          "dci": "5-Fluorouracile (5-FU)",
          "commercialNames": ["Adrucil"],
          "definition": "Antimétabolite, analogue des pyrimidines.",
          "modeOfAction": "Inhibe la thymidylate synthase, empêchant la synthèse d'ADN et entraînant la mort cellulaire.",
          "indications": ["Cancers colorectaux, gastriques, pancréatiques, du sein"],
          "contraindications": ["Insuffisance hépatique sévère", "Hypersensibilité"],
          "adverseEffects": ["Myélosuppression", "Stomatite", "Nausées/vomissements", "Diarrhée", "Alopecie"],
          "drugInteractions": "Capécitabine (prodrug), inhibiteurs enzymatiques du foie",
          "antidotes": "Uridine triacetate en cas de surdosage aigu.",
          "posologyAdult": "500-1000 mg/m² IV bolus ou perfusion continue selon protocole.",
          "posologyPediatric": "10-15 mg/kg/dose IV selon protocole.",
          "references": ["BNF - 5-Fluorouracile", "ANSM - RCP Adrucil", "WHO Cancer Chemotherapy Guidelines"]
        }
      ]
    },
    {
      "name": "Anthracyclines",
      "drugs": [
        {
          "dci": "Doxorubicine",
          "commercialNames": ["Adriamycine"],
          "definition": "Antibiotique anticancéreux de la classe des anthracyclines.",
          "modeOfAction": "Intercale l'ADN, inhibe la topoisomérase II et produit des radicaux libres, entraînant la mort cellulaire.",
          "indications": ["Lymphomes, leucémies, cancers du sein et de l'ovaire"],
          "contraindications": ["Insuffisance cardiaque sévère", "Myélosuppression sévère"],
          "adverseEffects": ["Cardiotoxicité cumulative", "Myélosuppression", "Nausées/vomissements", "Alopecie"],
          "drugInteractions": "Autres cardiotoxiques, inhibiteurs CYP3A4",
          "antidotes": "Dexrazoxane pour protection cardiaque en cas de doses élevées.",
          "posologyAdult": "60-75 mg/m² IV toutes les 3 semaines.",
          "posologyPediatric": "30-50 mg/m² IV selon protocole.",
          "references": ["BNF - Doxorubicine", "ANSM - RCP Adriamycine", "WHO Cancer Chemotherapy Guidelines"]
        }
      ]
    },
    {
      "name": "Taxanes",
      "drugs": [
        {
          "dci": "Paclitaxel",
          "commercialNames": ["Taxol"],
          "definition": "Antimicrotubulaire stabilisant les microtubules.",
          "modeOfAction": "Empêche la dépolymérisation des microtubules, bloquant la mitose et provoquant l'apoptose.",
          "indications": ["Cancers du sein, ovaires, poumon non à petites cellules"],
          "contraindications": ["Hypersensibilité aux taxanes", "Neutropénie sévère"],
          "adverseEffects": ["Myélosuppression", "Neuropathie périphérique", "Hypersensibilité à l’infusion", "Alopecie"],
          "drugInteractions": "Inhibiteurs CYP2C8 et CYP3A4",
          "antidotes": "Pré-médication (corticoïdes, antihistaminiques) pour hypersensibilité.",
          "posologyAdult": "175 mg/m² IV toutes les 3 semaines.",
          "posologyPediatric": "Doses ajustées selon protocole.",
          "references": ["BNF - Paclitaxel", "ANSM - RCP Taxol", "WHO Cancer Chemotherapy Guidelines"]
        }
      ]
    },
    {
      "name": "Inhibiteurs de tyrosine kinase",
      "drugs": [
        {
          "dci": "Imatinib",
          "commercialNames": ["Glivec"],
          "definition": "Inhibiteur sélectif de la tyrosine kinase BCR-ABL.",
          "modeOfAction": "Bloque la kinase BCR-ABL, inhibant la prolifération cellulaire dans la leucémie myéloïde chronique (LMC).",
          "indications": ["Leucémie myéloïde chronique", "GIST (tumeurs stromales gastro-intestinales)"],
          "contraindications": ["Hypersensibilité"],
          "adverseEffects": ["Œdèmes périphériques", "Nausées", "Myalgies", "Myélosuppression"],
          "drugInteractions": "Inhibiteurs/inducteurs CYP3A4",
          "antidotes": "Pas d'antidote spécifique.",
          "posologyAdult": "400 mg/jour PO (LMC chronique), ajustement selon tolérance.",
          "posologyPediatric": "Ajusté selon poids et protocole.",
          "references": ["BNF - Imatinib", "ANSM - RCP Glivec", "WHO Cancer Chemotherapy Guidelines"]
        }
      ]
    },
    {
      "name": "Immunothérapies",
      "drugs": [
        {
          "dci": "Nivolumab",
          "commercialNames": ["Opdivo"],
          "definition": "Anticorps monoclonal anti-PD-1, inhibiteur de point de contrôle immunitaire.",
          "modeOfAction": "Bloque PD-1 sur les lymphocytes T, renforçant la réponse immunitaire contre les cellules tumorales.",
          "indications": ["Cancers du poumon, mélanome, rein, etc."],
          "contraindications": ["Maladies auto-immunes sévères", "Hypersensibilité"],
          "adverseEffects": ["Réactions auto-immunes : pneumopathie, colite, hépatite, endocrinopathies"],
          "drugInteractions": "Immunosuppresseurs → peuvent diminuer l'efficacité",
          "antidotes": "Corticothérapie en cas de réactions sévères.",
          "posologyAdult": "240 mg IV toutes les 2 semaines ou 480 mg toutes les 4 semaines.",
          "posologyPediatric": "Usage en essais ou selon protocole.",
          "references": ["BNF - Nivolumab", "ANSM - RCP Opdivo", "NCCN Guidelines on Immunotherapy"]
        }
      ]
    }
  ]
},

{
  "name": "Contraceptifs",
  "subCategories": [
    {
      "name": "Contraceptifs hormonaux",
      "drugs": [
        {
          "dci": "Œstroprogestatifs combinés",
          "commercialNames": ["Microgynon", "Yasmin", "Marvelon"],
          "definition": "Pilule contraceptive orale combinant un œstrogène et un progestatif.",
          "modeOfAction": "Inhibe l’ovulation, épaissit la glaire cervicale et modifie l’endomètre pour empêcher la nidation.",
          "indications": ["Prévention de la grossesse", "Régulation du cycle menstruel", "Traitement de l’acné hormonodépendante", "Dysménorrhée"],
          "contraindications": ["Antécédent de thrombose veineuse ou artérielle", "Migraine avec aura", "Cancer du sein actif", "Insuffisance hépatique sévère"],
          "adverseEffects": ["Nausées", "Sensibilité mammaire", "Prise de poids", "Risque thromboembolique (rare)"],
          "drugInteractions": ["Antibiotiques à large spectre, anticonvulsivants (phénytoïne, carbamazépine) → diminution de l’efficacité"],
          "antidotes": "Pas d’antidote; grossesse non prévue → contraception d’urgence.",
          "posologyAdult": "1 comprimé par jour, même heure, 21 jours + 7 jours d’arrêt ou placebo.",
          "posologyPediatric": "Utilisation après consultation médicale, même schéma.",
          "references": ["WHO - Medical Eligibility Criteria for Contraceptive Use", "BNF - Combined Oral Contraceptives", "ANSM - RCP Microgynon"]
        },
        {
          "dci": "Progestatifs seuls (minipilule)",
          "commercialNames": ["Cerazette", "Microlut"],
          "definition": "Pilule contraceptive orale contenant uniquement un progestatif.",
          "modeOfAction": "Épaissit la glaire cervicale et inhibe parfois l’ovulation.",
          "indications": ["Contraception pour femmes ayant contre-indications aux œstroprogestatifs", "Allaitement"],
          "contraindications": ["Cancer du sein actif", "Hypersensibilité au progestatif"],
          "adverseEffects": ["Troubles du cycle menstruel", "Acné", "Maux de tête", "Sensibilité mammaire"],
          "drugInteractions": ["Inducteurs enzymatiques (anticonvulsivants, rifampicine) → diminution efficacité"],
          "antidotes": "Pas d’antidote; utiliser contraception d’urgence si échec possible.",
          "posologyAdult": "1 comprimé à la même heure chaque jour sans interruption.",
          "posologyPediatric": "Même schéma selon âge et poids.",
          "references": ["WHO - Progestin-only Pills", "BNF - Progestogen-only Contraception", "ANSM - RCP Cerazette"]
        },
        {
          "dci": "Contraceptif injectable (progestatif)",
          "commercialNames": ["Depo-Provera", "Sayana Press"],
          "definition": "Injection intramusculaire ou sous-cutanée de progestatif pour contraception prolongée.",
          "modeOfAction": "Inhibe l’ovulation, épaissit la glaire cervicale, modifie l’endomètre.",
          "indications": ["Contraception à longue durée (12 semaines)"],
          "contraindications": ["Grossesse confirmée", "Antécédent de cancer du sein", "Troubles hépatiques sévères"],
          "adverseEffects": ["Troubles menstruels", "Prise de poids", "Ostéoporose à long terme", "Céphalées"],
          "drugInteractions": ["Inducteurs enzymatiques (anticonvulsivants, rifampicine)"],
          "antidotes": "Pas d’antidote; grossesse non prévue → contraception d’urgence.",
          "posologyAdult": "150 mg IM toutes les 12 semaines ou 104 mg SC toutes les 12 semaines.",
          "posologyPediatric": "Utilisation selon poids et avis médical.",
          "references": ["WHO - Injectable Contraceptives", "BNF - Progestogen Injection", "ANSM - RCP Depo-Provera"]
        },
        {
          "dci": "Implants contraceptifs (progestatif)",
          "commercialNames": ["Nexplanon", "Implanon"],
          "definition": "Implant sous-cutané à libération prolongée de progestatif.",
          "modeOfAction": "Inhibe l’ovulation, épaissit la glaire cervicale, modifie l’endomètre.",
          "indications": ["Contraception longue durée (3 ans)"],
          "contraindications": ["Grossesse", "Cancer du sein actif", "Hypersensibilité au lévonorgestrel ou éthinylestradiol"],
          "adverseEffects": ["Troubles menstruels", "Acné", "Céphalées", "Sensibilité mammaire"],
          "drugInteractions": ["Inducteurs enzymatiques → efficacité diminuée"],
          "antidotes": "Retrait de l’implant en cas d’effets indésirables sévères.",
          "posologyAdult": "1 implant sous-cutané, durée 3 ans.",
          "posologyPediatric": "À partir de la puberté, selon avis médical.",
          "references": ["WHO - Contraceptive Implants", "BNF - Levonorgestrel Implant", "ANSM - RCP Nexplanon"]
        }
      ]
    },
    {
      "name": "Dispositifs intra-utérins (DIU)",
      "drugs": [
        {
          "dci": "DIU au cuivre",
          "commercialNames": ["Paragard", "TT Cuivre"],
          "definition": "Dispositif intra-utérin non hormonal à action spermicidale.",
          "modeOfAction": "Libération de cuivre → toxicité pour les spermatozoïdes et altération de l’endomètre.",
          "indications": ["Contraception longue durée (10 ans selon modèle)"],
          "contraindications": ["Grossesse", "Infection pelvienne active", "Malformations utérines"],
          "adverseEffects": ["Saignements menstruels abondants", "Douleurs pelviennes", "Perforation rare"],
          "drugInteractions": "Aucun majeur connu.",
          "antidotes": "Retrait immédiat du DIU en cas de complication.",
          "posologyAdult": "Insertion par professionnel de santé, efficacité 10 ans.",
          "posologyPediatric": "Non recommandé avant maturité utérine complète.",
          "references": ["WHO - Intrauterine Devices", "BNF - Copper IUD", "ANSM - RCP DIU cuivre"]
        },
        {
          "dci": "DIU hormonal (lévonorgestrel)",
          "commercialNames": ["Mirena", "Kyleena"],
          "definition": "DIU libérant un progestatif à faible dose.",
          "modeOfAction": "Épaissit la glaire cervicale, inhibe partiellement l’ovulation, modifie l’endomètre.",
          "indications": ["Contraception longue durée (3-5 ans selon modèle)", "Traitement de ménorragies"],
          "contraindications": ["Grossesse", "Cancer du sein actif", "Infection pelvienne active"],
          "adverseEffects": ["Spotting irrégulier", "Amenorrhée progressive", "Douleurs pelviennes"],
          "drugInteractions": ["Inducteurs enzymatiques → réduction de l’efficacité"],
          "antidotes": "Retrait du DIU si effets indésirables sévères.",
          "posologyAdult": "Insertion par professionnel, durée 3-5 ans.",
          "posologyPediatric": "À partir de la maturité utérine complète.",
          "references": ["WHO - Hormonal IUD", "BNF - Levonorgestrel IUD", "ANSM - RCP Mirena"]
        }
      ]
    },
    {
      "name": "Méthodes locales / barrières",
      "drugs": [
        {
          "dci": "Préservatif masculin",
          "commercialNames": ["Durex", "Trojan"],
          "definition": "Méthode contraceptive barrière en latex ou polyuréthane.",
          "modeOfAction": "Empêche la rencontre spermatozoïdes-ovule et protège contre les IST.",
          "indications": ["Contraception", "Prévention IST"],
          "contraindications": ["Allergie au latex (utiliser polyuréthane)"],
          "adverseEffects": ["Réaction allergique locale rare", "Déchirure possible si mauvaise utilisation"],
          "drugInteractions": "Aucun.",
          "antidotes": "Pas nécessaire; retrait immédiat en cas de rupture.",
          "posologyAdult": "À utiliser avant chaque rapport sexuel.",
          "posologyPediatric": "Non applicable.",
          "references": ["WHO - Male Condoms", "CDC - Contraceptive Methods", "ANSM - Préservatif"]
        },
        {
          "dci": "Spermicides",
          "commercialNames": ["Nonoxynol-9"],
          "definition": "Substance chimique détruisant les spermatozoïdes.",
          "modeOfAction": "Détruit ou immobilise les spermatozoïdes au niveau vaginal.",
          "indications": ["Contraception locale", "Complément barrière (préservatif, diaphragme)"],
          "contraindications": ["Allergie au produit", "Irritation vaginale sévère"],
          "adverseEffects": ["Irritation locale", "Réaction allergique rare"],
          "drugInteractions": "Aucun majeur.",
          "antidotes": "Arrêt immédiat et lavage vaginal si irritation.",
          "posologyAdult": "Application avant chaque rapport sexuel.",
          "posologyPediatric": "Non applicable.",
          "references": ["WHO - Spermicides", "BNF - Spermicide", "ANSM - Nonoxynol-9"]
        }
      ]
    }
  ]
},


{
  "name": "Autres classes",
  "subCategories": [
    {
      "name": "Immunosuppresseurs",
      "drugs": [
        {
          "dci": "Ciclosporine (Cyclospoprine A)",
          "commercialNames": ["Sandimmun", "Neoral"],
          "definition": "Immunosuppresseur inhibiteur de la calcineurine.",
          "modeOfAction": "Inhibe l'activation des lymphocytes T en bloquant la calcineurine et la transcription de l'IL-2.",
          "indications": ["Prévention du rejet de greffe d'organe", "Maladies auto-immunes sévères (psoriasis, rhumatisme, néphropathie)"],
          "contraindications": ["Hypersensibilité", "Insuffisance rénale sévère", "Infections sévères non contrôlées"],
          "adverseEffects": ["Néphrotoxicité", "Hypertension", "Hypertrichose", "Tremblements", "Hyperglycémie"],
          "drugInteractions": "CYP3A4 → nombreuses interactions (antifongiques azolés, macrolides, anticonvulsivants).",
          "antidotes": "Pas d'antidote spécifique; ajustement posologique et surveillance biologique.",
          "posologyAdult": "2-5 mg/kg/jour PO en 2 doses selon protocole et concentration sanguine.",
          "posologyPediatric": "5-8 mg/kg/jour PO selon protocole.",
          "references": ["BNF - Ciclosporine", "ANSM - RCP Sandimmun", "UpToDate - Immunosuppressants"]
        },
        {
          "dci": "Tacrolimus",
          "commercialNames": ["Prograf"],
          "definition": "Inhibiteur de la calcineurine, immunosuppresseur puissant.",
          "modeOfAction": "Bloque l'activation des lymphocytes T en inhibant la calcineurine et la transcription de l'IL-2.",
          "indications": ["Prévention du rejet de greffe", "Dermatite atopique sévère (topique)"],
          "contraindications": ["Hypersensibilité", "Infections sévères"],
          "adverseEffects": ["Néphrotoxicité", "Neurotoxicité (tremblements, céphalées)", "Hyperglycémie", "Hypertension"],
          "drugInteractions": "CYP3A4 → antifongiques, macrolides, anticonvulsivants.",
          "antidotes": "Pas d'antidote spécifique; ajustement posologique et surveillance.",
          "posologyAdult": "0.1-0.2 mg/kg/jour PO en 2 doses, ajuster selon taux sanguin.",
          "posologyPediatric": "0.15-0.3 mg/kg/jour PO, surveillance taux sanguin.",
          "references": ["BNF - Tacrolimus", "ANSM - RCP Prograf", "UpToDate - Immunosuppressants"]
        },
        {
          "dci": "Méthotrexate (dose immunosuppressive)",
          "commercialNames": ["Methotrexate"],
          "definition": "Antimétabolite à dose faible utilisé comme immunosuppresseur.",
          "modeOfAction": "Inhibe la prolifération des lymphocytes T et B, réduction de la synthèse des cytokines.",
          "indications": ["Polyarthrite rhumatoïde", "Psoriasis sévère", "Maladies auto-immunes diverses"],
          "contraindications": ["Insuffisance hépatique sévère", "Myélosuppression sévère", "Grossesse"],
          "adverseEffects": ["Hépatotoxicité", "Myélosuppression", "Stomatite", "Nausées/vomissements"],
          "drugInteractions": "AINS, sulfamides → augmentent toxicité.",
          "antidotes": "Acide folinique (leucovorine).",
          "posologyAdult": "7.5-25 mg/semaine PO ou SC selon protocole.",
          "posologyPediatric": "0.3-0.6 mg/kg/semaine selon protocole.",
          "references": ["BNF - Methotrexate", "ANSM - RCP Methotrexate", "UpToDate - Low-dose Methotrexate"]
        },
        {
          "dci": "Mycophénolate mofétil",
          "commercialNames": ["Cellcept"],
          "definition": "Immunosuppresseur inhibant la prolifération des lymphocytes B et T.",
          "modeOfAction": "Inhibe l'inosine monophosphate déshydrogénase, bloquant la synthèse de guanine et la prolifération lymphocytaire.",
          "indications": ["Prévention du rejet de greffe d'organe"],
          "contraindications": ["Hypersensibilité", "Grossesse (risque tératogène)"],
          "adverseEffects": ["Myélosuppression", "Diarrhée", "Nausées", "Infections"],
          "drugInteractions": "Antiviraux, antibiotiques diminuant absorption.",
          "antidotes": "Pas d'antidote spécifique; traitement de soutien.",
          "posologyAdult": "1-1.5 g 2x/jour PO.",
          "posologyPediatric": "600-1200 mg/m²/jour PO en 2 doses.",
          "references": ["BNF - Mycophenolate", "ANSM - RCP Cellcept", "UpToDate - Immunosuppressants"]
        },
        {
          "dci": "Azathioprine",
          "commercialNames": ["Imurel"],
          "definition": "Immunosuppresseur antipurique.",
          "modeOfAction": "Inhibe la synthèse d'ADN dans les lymphocytes, réduisant la prolifération.",
          "indications": ["Prévention du rejet de greffe", "Maladies auto-immunes (PR, MICI)"],
          "contraindications": ["Hypersensibilité", "Déficit en TPMT"],
          "adverseEffects": ["Myélosuppression", "Hépatotoxicité", "Nausées/vomissements"],
          "drugInteractions": "Allopurinol augmente toxicité.",
          "antidotes": "Arrêt du médicament et traitement symptomatique.",
          "posologyAdult": "1-3 mg/kg/jour PO selon tolérance.",
          "posologyPediatric": "1-2 mg/kg/jour PO.",
          "references": ["BNF - Azathioprine", "ANSM - RCP Imurel", "UpToDate - Immunosuppressants"]
        }
      ]
    },
   {
      "name": "Vaccins et immunoglobulines",
      "drugs": [
        {
          "dci": "Vaccin antitétanique",
          "commercialNames": ["Tétanosvac"],
          "definition": "Vaccin contenant le toxoïde tétanique inactivé pour prévenir le tétanos.",
          "modeOfAction": "Stimule le système immunitaire à produire des anticorps neutralisants la toxine tétanique.",
          "indications": ["Prévention du tétanos chez l'enfant et l'adulte", "Rappels vaccinaux selon calendrier national"],
          "contraindications": ["Hypersensibilité aux composants du vaccin (aluminium, néomycine, formaldehyde)"],
          "adverseEffects": ["Douleur, rougeur, œdème au site d'injection", "Fièvre légère", "Réaction allergique rare"],
          "drugInteractions": "Aucun majeur connu; peut retarder la réponse immunitaire avec immunoglobulines administrées simultanément.",
          "antidotes": "Pas d'antidote spécifique.",
          "posologyAdult": "Rappel tous les 10 ans ou selon exposition à risque.",
          "posologyPediatric": "Selon le calendrier vaccinal pédiatrique (séries initiales + rappels).",
          "references": ["WHO - Tetanus Vaccine Guidelines", "CDC Vaccine Recommendations", "ANSM - Vaccin antitétanique RCP"]
        },
        {
          "dci": "Vaccin hépatite B",
          "commercialNames": ["Engerix-B", "HBVaxPro"],
          "definition": "Vaccin recombinant contre le virus de l'hépatite B.",
          "modeOfAction": "Induit la production d'anticorps neutralisants HBsAg.",
          "indications": ["Prévention de l'hépatite B", "Vaccination post-exposition"],
          "contraindications": ["Hypersensibilité à l'HBsAg ou aux composants du vaccin"],
          "adverseEffects": ["Douleur au site d'injection", "Fièvre légère", "Fatigue", "Réactions allergiques rares"],
          "drugInteractions": "Peut interférer avec immunoglobulines administrées simultanément.",
          "antidotes": "Pas d'antidote spécifique.",
          "posologyAdult": "0, 1, 6 mois (série de 3 doses).",
          "posologyPediatric": "Selon calendrier vaccinal pédiatrique.",
          "references": ["WHO - Hepatitis B Vaccine", "CDC Vaccine Guidelines", "ANSM - RCP Engerix-B"]
        },
        {
          "dci": "Immunoglobulines humaines IV (IGIV)",
          "commercialNames": ["Privigen", "Gammagard"],
          "definition": "Préparation d'anticorps polyclonaux humains pour immunité passive.",
          "modeOfAction": "Fournit des anticorps circulants capables de neutraliser des agents infectieux ou moduler l'immunité.",
          "indications": ["Immunodéficiences primaires", "Prophylaxie post-exposition (hépatite B, varicelle)", "Certaines maladies auto-immunes (ITP, myasthénie)"],
          "contraindications": ["Hypersensibilité aux immunoglobulines humaines ou excipients", "Déficit en IgA sévère"],
          "adverseEffects": ["Fièvre, céphalées, frissons", "Réactions allergiques", "Thrombose rare", "Insuffisance rénale (surtout en perfusion rapide)"],
          "drugInteractions": ["Peut interférer avec l'efficacité des vaccins vivants"],
          "antidotes": "Arrêt et traitement symptomatique; antihistaminiques ou corticostéroïdes si réaction sévère.",
          "posologyAdult": "0.4-2 g/kg IV selon indication, administré sur 1-5 jours selon protocole.",
          "posologyPediatric": "0.4-2 g/kg IV selon indication et poids.",
          "references": ["BNF - Immunoglobulins", "ANSM - RCP IGIV", "UpToDate - IVIG Therapy"]
        }
      ]
    },
    {
      "name": "Médicaments dermatologiques",
      "drugs": [
        {
          "dci": "Isotrétinoïne",
          "commercialNames": ["Roaccutane", "Isotane"],
          "definition": "Rétinoïde oral puissant pour l'acné sévère résistante aux traitements conventionnels.",
          "modeOfAction": "Réduit la production sébacée, normalise la kératinisation folliculaire, diminue l'inflammation.",
          "indications": ["Acné nodulokystique sévère", "Acné résistante aux antibiotiques"],
          "contraindications": ["Grossesse (tératogène)", "Hypersensibilité aux rétinoïdes", "Troubles hépatiques sévères"],
          "adverseEffects": ["Tératogène", "Sécheresse cutanée et muqueuse", "Élévation des transaminases", "Hyperlipidémie", "Douleurs musculosquelettiques"],
          "drugInteractions": ["Tétracyclines (risque hypercalcémie), vitamine A (toxicité additive)"],
          "antidotes": "Arrêt immédiat du traitement et contraception efficace pendant et 1 mois après le traitement.",
          "posologyAdult": "0.5-1 mg/kg/jour PO en 1-2 doses, durée 16-24 semaines selon protocole.",
          "posologyPediatric": "0.5-1 mg/kg/jour selon âge et tolérance, durée similaire.",
          "references": ["BNF - Isotretinoin", "ANSM - RCP Roaccutane", "UpToDate - Acne Therapy"]
        },
        {
          "dci": "Bétaméthasone topique",
          "commercialNames": ["Betnesol", "Diprosone"],
          "definition": "Corticostéroïde topique à activité anti-inflammatoire et immunosuppressive locale.",
          "modeOfAction": "Réduit la réponse inflammatoire cutanée et l'activation immunitaire locale.",
          "indications": ["Dermatite, eczéma, psoriasis", "Inflammations cutanées sévères"],
          "contraindications": ["Infections cutanées actives (bactériennes, virales, fongiques non traitées)"],
          "adverseEffects": ["Atrophie cutanée, télangiectasies, irritation locale, hyperpigmentation"],
          "drugInteractions": ["Autres immunosuppresseurs topiques → potentiel d’augmentation des effets locaux"],
          "antidotes": "Arrêt du traitement et traitement symptomatique local.",
          "posologyAdult": "Application 1-2 fois/jour selon localisation et sévérité.",
          "posologyPediatric": "Durée limitée à 1-2 semaines selon tolérance cutanée.",
          "references": ["BNF - Topical corticosteroids", "ANSM - RCP Betamethasone"]
        },
        {
          "dci": "Clotrimazole (topique)",
          "commercialNames": ["Canesten", "Lotrimin"],
          "definition": "Antifongique azolé topique à large spectre.",
          "modeOfAction": "Inhibe la synthèse de l'ergostérol, altérant la membrane fongique.",
          "indications": ["Dermatomycoses cutanées", "Candidoses cutanées"],
          "contraindications": ["Hypersensibilité aux azolés"],
          "adverseEffects": ["Irritation locale, démangeaisons, brûlure légère"],
          "drugInteractions": "Peu d’interactions significatives topiques.",
          "antidotes": "Arrêt et traitement symptomatique local.",
          "posologyAdult": "Application 1-2x/jour pendant 2-4 semaines selon lésion.",
          "posologyPediatric": "Même posologie selon âge et tolérance cutanée.",
          "references": ["BNF - Clotrimazole", "ANSM - RCP Canesten"]
        },
        {
          "dci": "Pimecrolimus (topique)",
          "commercialNames": ["Elidel"],
          "definition": "Immunomodulateur topique inhibant l’activation des lymphocytes T cutanés.",
          "modeOfAction": "Inhibe la calcineurine, réduisant l’inflammation dans les lésions d’eczéma atopique.",
          "indications": ["Eczéma atopique modéré à sévère, lorsque corticostéroïdes topiques sont contre-indiqués ou insuffisants"],
          "contraindications": ["Hypersensibilité", "Infections cutanées actives"],
          "adverseEffects": ["Brûlure, picotement, prurit local", "Rougeur", "Risque théorique lymphome cutané à long terme"],
          "drugInteractions": "Peu d’interactions locales significatives.",
          "antidotes": "Arrêt et soins locaux symptomatiques.",
          "posologyAdult": "Application 2x/jour sur les lésions.",
          "posologyPediatric": "2x/jour à partir de 3 mois, durée limitée selon tolérance.",
          "references": ["BNF - Pimecrolimus", "ANSM - RCP Elidel", "UpToDate - Atopic Dermatitis"]
        }
      ]
    },
    {
      "name": "Médicaments ophtalmologiques",
      "drugs": [
        {
          "dci": "Latanoprost",
          "commercialNames": ["Xalatan"],
          "definition": "Prostaglandine topique pour le traitement du glaucome et de l'hypertension oculaire.",
          "modeOfAction": "Augmente l'écoulement de l'humeur aqueuse par la voie uvéosclérale, réduisant la pression intraoculaire.",
          "indications": ["Glaucome à angle ouvert", "Hypertension oculaire"],
          "contraindications": ["Hypersensibilité au latanoprost ou excipients"],
          "adverseEffects": ["Hyperpigmentation de l'iris", "Hypertrichose ciliaire", "Irritation oculaire, rougeur"],
          "drugInteractions": "Aucun majeur connu avec collyres concomitants.",
          "antidotes": "Arrêt du traitement.",
          "posologyAdult": "1 goutte le soir dans l'œil affecté.",
          "posologyPediatric": "Selon protocole pédiatrique.",
          "references": ["BNF - Latanoprost", "ANSM - RCP Xalatan", "UpToDate - Glaucoma Therapy"]
        },
        {
          "dci": "Timolol (topique)",
          "commercialNames": ["Timoptic"],
          "definition": "Bêta-bloquant topique pour réduire la pression intraoculaire.",
          "modeOfAction": "Diminue la production d’humeur aqueuse via blocage des récepteurs bêta-adrénergiques.",
          "indications": ["Glaucome à angle ouvert", "Hypertension oculaire"],
          "contraindications": ["Asthme sévère, BPCO sévère, bradycardie sévère"],
          "adverseEffects": ["Bradycardie, hypotension", "Fatigue", "Irritation oculaire"],
          "drugInteractions": "Bêta-bloquants systémiques → potentialisation effets cardiaques.",
          "antidotes": "Arrêt du traitement et surveillance cardiaque.",
          "posologyAdult": "1 goutte 1-2x/jour dans l'œil affecté.",
          "posologyPediatric": "Selon protocole pédiatrique.",
          "references": ["BNF - Timolol ophthalmic", "ANSM - RCP Timoptic", "UpToDate - Glaucoma Therapy"]
        },
        {
          "dci": "Tropicamide",
          "commercialNames": ["Mydriaticum Tropicamide"],
          "definition": "Mydriatique à action courte pour examen ophtalmologique.",
          "modeOfAction": "Antagoniste muscarinique → relaxation du muscle sphincter de l'iris, provoquant mydriase.",
          "indications": ["Examen ophtalmologique", "Préparation à la chirurgie"],
          "contraindications": ["Glaucome à angle fermé", "Hypersensibilité"],
          "adverseEffects": ["Photophobie", "Irritation oculaire", "Augmentation transitoire de la pression intraoculaire"],
          "drugInteractions": "Peu significatives.",
          "antidotes": "Arrêt du collyre, anticholinestérases en cas de mydriase prolongée (rare).",
          "posologyAdult": "1 goutte avant examen selon protocole.",
          "posologyPediatric": "1 goutte, ajuster selon âge et poids.",
          "references": ["BNF - Tropicamide", "ANSM - RCP Tropicamide", "UpToDate - Mydriatics"]
        }
      
]
}
]
}
];

import { Interaction } from '../types';

export const interactionsData: Interaction[] = [
  // Déjà présents
  {
    drugs: ["Warfarine", "Aspirine (Acide acétylsalicylique)"],
    severity: 'high',
    description: "Risque hémorragique majeur. L'aspirine augmente l'effet anticoagulant de la warfarine et inhibe la fonction plaquettaire. L'association est généralement contre-indiquée sauf avis cardiologique strict."
  },
  {
    drugs: ["Lisinopril", "Spironolactone"],
    severity: 'high',
    description: "Risque d'hyperkaliémie sévère, potentiellement mortelle. L'association d'un IEC et d'un diurétique épargneur de potassium nécessite une surveillance très stricte de la kaliémie."
  },
  {
    drugs: ["Tramadol", "Fluoxétine"],
    severity: 'high',
    description: "Risque accru de syndrome sérotoninergique. L'association peut provoquer confusion, agitation, fièvre, sueurs, tremblements et diarrhée. Association déconseillée."
  },
  {
    drugs: ["Azithromycine", "Ondansétron"],
    severity: 'moderate',
    description: "Risque additif d'allongement de l'intervalle QT, pouvant conduire à des arythmies ventriculaires graves comme les torsades de pointes. Une surveillance ECG est recommandée si l'association est inévitable."
  },
  {
    drugs: ["Méthotrexate", "Ibuprofène"],
    severity: 'moderate',
    description: "Les AINS comme l'ibuprofène peuvent diminuer l'excrétion rénale du méthotrexate, augmentant sa concentration plasmatique et sa toxicité hématologique. Utiliser avec une grande prudence et surveiller la fonction rénale et la NFS."
  },

  // Nouvelles interactions (50+)
  {
    drugs: ["Clarithromycine", "Atorvastatine"],
    severity: 'high',
    description: "Risque de rhabdomyolyse par augmentation des concentrations plasmatiques d'atorvastatine via inhibition du CYP3A4 par la clarithromycine."
  },
  {
    drugs: ["Digoxine", "Amiodarone"],
    severity: 'high',
    description: "Augmentation des taux de digoxine avec risque de toxicité digitalique. Nécessite une réduction de dose et un suivi régulier."
  },
  {
    drugs: ["Lithium", "Diurétiques thiazidiques"],
    severity: 'high',
    description: "Les thiazidiques diminuent l'élimination rénale du lithium, augmentant fortement son risque de toxicité neurologique et cardiaque."
  },
  {
    drugs: ["Inhibiteurs de la MAO", "ISRS (Fluoxétine, Paroxétine, etc.)"],
    severity: 'high',
    description: "Risque de syndrome sérotoninergique grave et potentiellement fatal. Association contre-indiquée."
  },
  {
    drugs: ["Ciprofloxacine", "Théophylline"],
    severity: 'moderate',
    description: "Inhibition du métabolisme hépatique de la théophylline par la ciprofloxacine. Risque de convulsions et arythmies."
  },
  {
    drugs: ["Corticoïdes (Prednisone)", "AINS (Ibuprofène, Kétoprofène)"],
    severity: 'moderate',
    description: "Augmentation du risque d’ulcères et hémorragies digestives. Prévoir un IPP protecteur."
  },
  {
    drugs: ["Amiodarone", "Simvastatine"],
    severity: 'high',
    description: "Augmentation du risque de myopathie et rhabdomyolyse par inhibition du métabolisme de la simvastatine. Dose max recommandée : 20 mg/j."
  },
  {
    drugs: ["Rifampicine", "Contraceptifs oraux"],
    severity: 'high',
    description: "La rifampicine induit le métabolisme des œstrogènes, réduisant l'efficacité contraceptive. Méthode alternative requise."
  },
  {
    drugs: ["Warfarine", "Amiodarone"],
    severity: 'high',
    description: "Augmentation de l'effet anticoagulant par inhibition du métabolisme de la warfarine. Surveillance stricte de l'INR."
  },
  {
    drugs: ["Clopidogrel", "Oméprazole"],
    severity: 'moderate',
    description: "L’oméprazole inhibe le CYP2C19 et diminue l’activation du clopidogrel, réduisant son efficacité antiagrégante. Préférer pantoprazole."
  },
  {
    drugs: ["Metformine", "Produit de contraste iodé"],
    severity: 'high',
    description: "Risque d’acidose lactique en cas d’insuffisance rénale déclenchée par le produit de contraste. Suspendre la metformine avant et après l’examen."
  },
  {
    drugs: ["Spironolactone", "AINS"],
    severity: 'moderate',
    description: "Risque d’hyperkaliémie et d’insuffisance rénale aiguë par réduction de la perfusion rénale. Surveillance biologique nécessaire."
  },
  {
    drugs: ["Macrolides (Clarithromycine)", "Antihistaminiques (Terfénadine, Astémizole)"],
    severity: 'high',
    description: "Risque d’arythmie grave (torsades de pointes) par inhibition du métabolisme des antihistaminiques."
  },
  {
    drugs: ["Phénytoïne", "Isoniazide"],
    severity: 'moderate',
    description: "L’isoniazide inhibe le métabolisme de la phénytoïne, augmentant son risque de toxicité neurologique."
  },
  {
    drugs: ["Valproate de sodium", "Lamotrigine"],
    severity: 'moderate',
    description: "Augmentation du risque de syndrome de Stevens-Johnson par inhibition du métabolisme de la lamotrigine. Ajustement de dose nécessaire."
  },
  {
    drugs: ["Antidépresseurs tricycliques", "ISRS"],
    severity: 'moderate',
    description: "Risque de syndrome sérotoninergique et allongement du QT. Prudence extrême."
  },
  {
    drugs: ["Linezolide", "Aliments riches en tyramine"],
    severity: 'moderate',
    description: "Risque d’hypertension sévère par effet IMAO du linezolide. Éviter fromages fermentés, charcuteries, etc."
  },
  {
    drugs: ["Tacrolimus", "Azoles (Voriconazole, Itraconazole)"],
    severity: 'high',
    description: "Risque de néphrotoxicité par augmentation massive des taux de tacrolimus. Ajuster la dose et surveiller."
  },
  {
    drugs: ["Ciclosporine", "AINS"],
    severity: 'moderate',
    description: "Augmentation du risque de néphrotoxicité par effet additif. Surveillance de la créatinine."
  },
  {
    drugs: ["Warfarine", "Millepertuis"],
    severity: 'high',
    description: "Le millepertuis induit les CYP, réduisant l’effet anticoagulant de la warfarine et augmentant le risque thrombotique."
  },
  {
    drugs: ["ISRS", "Triptans"],
    severity: 'moderate',
    description: "Risque de syndrome sérotoninergique. Utilisation possible mais sous surveillance clinique."
  },
  {
    drugs: ["Methadone", "Antirétroviraux (Efavirenz, Nevirapine)"],
    severity: 'moderate',
    description: "Induction enzymatique accélérant le métabolisme de la méthadone, réduisant son efficacité. Risque de sevrage."
  },
  {
    drugs: ["Halopéridol", "Quinolones (ex. Lévofloxacine)"],
    severity: 'moderate',
    description: "Allongement du QT et risque de torsades de pointes. Surveillance ECG."
  },
  {
    drugs: ["Antivitamine K", "Céphalospirines de 3e génération"],
    severity: 'moderate',
    description: "Augmentation de l’effet anticoagulant par altération de la flore intestinale productrice de vitamine K."
  }
];


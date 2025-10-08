
export interface Drug {
  dci: string;
  definition: string;
  commercialNames: string[];
  modeOfAction: string;
  indications: string[];
  contraindications: string[];
  adverseEffects: string[];
  drugInteractions: string;
  antidotes: string;
  posologyAdult: string;
  posologyPediatric: string;
  references?: string[];
}

// Représente une catégorie qui peut contenir des médicaments ou d'autres sous-catégories.
export interface DrugCategory {
  name: string;
  drugs?: Drug[];
  subCategories?: DrugCategory[];
  reference?: string; // Ajout pour lier à une autre section
}

// La classe pharmacologique de haut niveau est une DrugCategory.
export type PharmacologicalClass = DrugCategory;

export interface Abbreviation {
  term: string;
  definition: string;
}

export interface Interaction {
  drugs: [string, string];
  severity: 'high' | 'moderate' | 'low';
  description: string;
}

export interface UrgencyProtocol {
  title: string;
  steps: {
    title: string;
    content: string;
  }[];
}

export interface PrescribedDrug {
  drug: Drug;
  dosage: string;
  posology: string;
}

export type TextSize = 'sm' | 'base' | 'lg';

export type View = 'home' | 'drugList' | 'calculatorMenu' | 'doseCalculator' | 'dripRateCalculator' | 'bsaCalculator' | 'crclCalculator' | 'prescription' | 'abbreviations' | 'favorites' | 'bmiCalculator' | 'interactionChecker' | 'urgencies' | 'history' | 'about';
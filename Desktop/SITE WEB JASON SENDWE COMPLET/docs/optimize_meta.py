#!/usr/bin/env python3
import os
import re
import glob

# Dictionnaire des meta descriptions optimisées par page
META_DESCRIPTIONS = {
    'direction_medicale.html': 'Directeur Médical de l\'Hôpital Jason Sendwe - Leadership médical et coordination des services spécialisés',
    'direction_generale.html': 'Directeur Général de l\'Hôpital Jason Sendwe - Vision stratégique et gestion hospitalière',
    'directeur_nursing.html': 'Directrice de Nursing de l\'Hôpital Jason Sendwe - Leadership et gestion des soins infirmiers',
    'temoignage.html': 'Témoignages patients - Hôpital Jason Sendwe - Retours d\'expérience et satisfaction des patients',
    'contact.html': 'Contact Hôpital Jason Sendwe - Coordonnées, horaires, plan d\'accès et informations pratiques',
    'doctor.html': 'Équipe médicale Hôpital Jason Sendwe - Médecins spécialistes et professionnels de santé qualifiés',
    'galerie-photo.html': 'Galerie photos Hôpital Jason Sendwe - Images des installations, équipements et activités hospitalières',
    'videos-sendwetv.html': 'Vidéos Hôpital Jason Sendwe - Reportages, témoignages et présentation des services médicaux',
    'conventionnes.html': 'Patients Conventionnés - Hôpital Jason Sendwe - Prise en charge et avantages pour les patients conventionnés',
    'affilies.html': 'Patients Affiliés - Hôpital Jason Sendwe - Services et tarifs pour les patients affiliés',
    'prives.html': 'Patients Privés - Hôpital Jason Sendwe - Soins médicaux et tarifs pour les patients privés',
    'assures.html': 'Patients Assurés - Hôpital Jason Sendwe - Prise en charge par les assurances et mutuelles',
    'evenements.html': 'Actualités et Événements Hôpital Jason Sendwe - Dernières nouvelles, formations et innovations médicales',
    'conseils-sante.html': 'Conseils Santé - Hôpital Jason Sendwe - Fiches pratiques et recommandations médicales',
    'actualites-medicales.html': 'Actualités Médicales - Hôpital Jason Sendwe - Innovations, recherches et avancées médicales',
    'prevention-bien-etre.html': 'Prévention et Bien-être - Hôpital Jason Sendwe - Conseils pour maintenir une bonne santé'
}

def update_meta_description(file_path):
    """Met à jour la meta description d'un fichier HTML"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Créer une sauvegarde
        backup_path = file_path + '.backup_meta'
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Obtenir le nom du fichier
        filename = os.path.basename(file_path)
        
        # Vérifier si on a une description personnalisée pour ce fichier
        if filename in META_DESCRIPTIONS:
            new_description = META_DESCRIPTIONS[filename]
            
            # Remplacer la meta description générique
            pattern = r'<meta name="description" content="[^"]*">'
            replacement = f'<meta name="description" content="{new_description}">'
            content = re.sub(pattern, replacement, content)
            
            # Écrire le fichier modifié
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ {filename} - Meta description mise à jour")
            return True
        else:
            print(f"⏭️ {filename} - Pas de description personnalisée définie")
            return False
        
    except Exception as e:
        print(f"❌ Erreur lors de la mise à jour de {file_path}: {e}")
        return False

def main():
    """Fonction principale"""
    print("🚀 Optimisation des meta descriptions...")
    
    # Trouver tous les fichiers HTML dans le répertoire courant
    html_files = glob.glob('*.html')
    
    updated_count = 0
    total_count = len(html_files)
    
    for file_path in html_files:
        if update_meta_description(file_path):
            updated_count += 1
    
    print(f"\n📊 Résumé: {updated_count}/{total_count} fichiers mis à jour avec succès")
    print("💾 Les sauvegardes sont disponibles avec l'extension .backup_meta")

if __name__ == "__main__":
    main()

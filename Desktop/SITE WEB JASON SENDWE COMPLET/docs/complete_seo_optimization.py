#!/usr/bin/env python3
import os
import re
import glob

# Schema.org JSON-LD pour les pages de services
SERVICE_SCHEMA = '''    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Hôpital Public de Référence Tertiaire Jason Sendwe",
      "url": "https://www.hjasonsendwe.cd/",
      "logo": "images/bg/images_jason_sendwe/logosendwe.png",
      "image": "images/bg/Hopital Jason Sendwe.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Likasi N°05, Quartier Makutano",
        "addressLocality": "Lubumbashi",
        "addressRegion": "Haut-Katanga",
        "addressCountry": "CD"
      },
      "telephone": "+243 999 984 585",
      "email": "hprtjasonsendwe@gmail.com",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-11.664",
        "longitude": "27.479"
      },
      "medicalSpecialty": [
        "Emergency", "Pediatrics", "Surgery", "Cardiovascular", "Obstetrics", "Ophthalmology", "Dermatology", "Radiology"
      ],
      "openingHours": "Mo-Su 00:00-23:59"
    }
    </script>'''

# Meta descriptions pour toutes les pages restantes
META_DESCRIPTIONS_COMPLETE = {
    'index.html': 'Hôpital Public de Référence Tertiaire Jason Sendwe à Lubumbashi (RDC). Services médicaux, urgences, spécialités, prise en charge de qualité et équipe de spécialistes.',
    'apropos.html': 'À propos de l\'Hôpital Jason Sendwe - Historique, mission et valeurs de l\'hôpital public de référence tertiaire de Lubumbashi',
    'department.html': 'Services médicaux Hôpital Jason Sendwe - Découvrez tous nos services spécialisés et notre équipe médicale qualifiée',
    'service-urgences.html': 'Service des Urgences Hôpital Jason Sendwe - Prise en charge 24h/24 des urgences médicales et chirurgicales',
    'chirurgie.html': 'Service de Chirurgie Hôpital Jason Sendwe - Chirurgie générale et spécialisée avec équipe de chirurgiens expérimentés',
    'pediatrie.html': 'Service de Pédiatrie Hôpital Jason Sendwe - Soins spécialisés pour enfants et adolescents à Lubumbashi',
    'imagerie.html': 'Service d\'Imagerie Médicale Hôpital Jason Sendwe - Radiologie, scanner, IRM et échographie',
    'reanimation.html': 'Service d\'Anesthésie et Réanimation Hôpital Jason Sendwe - Soins intensifs et anesthésie',
    'ophtalmologie.html': 'Service d\'Ophtalmologie Hôpital Jason Sendwe - Soins des yeux et chirurgie ophtalmologique',
    'dermatologie.html': 'Service de Dermatologie Hôpital Jason Sendwe - Soins de la peau et traitement des maladies cutanées',
    'gyneco_obstetrique.html': 'Service de Gynécologie-Obstétrique Hôpital Jason Sendwe - Soins de la femme et maternité',
    'medecine_interne.html': 'Service de Médecine Interne Hôpital Jason Sendwe - Diagnostic et traitement des maladies internes',
    'cardiologie.html': 'Service de Cardiologie Hôpital Jason Sendwe - Soins cardiaques et prévention des maladies cardiovasculaires',
    'neurologie.html': 'Service de Neuro-Psychiatrie Hôpital Jason Sendwe - Soins neurologiques et psychiatriques',
    'orl.html': 'Service d\'ORL Hôpital Jason Sendwe - Soins des oreilles, nez et gorge',
    'kinesitherapie.html': 'Service de Kinésithérapie Hôpital Jason Sendwe - Rééducation fonctionnelle et thérapie physique',
    'dentisterie.html': 'Service de Dentisterie Hôpital Jason Sendwe - Soins dentaires et chirurgie buccale',
    'pharmacie.html': 'Service de Pharmacie Hôpital Jason Sendwe - Dispensation et conseil pharmaceutique',
    'laboratoire.html': 'Service de Laboratoire Hôpital Jason Sendwe - Analyses biologiques et diagnostic médical',
    'blog-avc-signes.html': 'Signes précoces de l\'AVC - Hôpital Jason Sendwe - Reconnaître les symptômes pour agir rapidement',
    'blog-fatigue-visuelle.html': 'Prévention de la fatigue visuelle - Hôpital Jason Sendwe - Conseils pour protéger vos yeux',
    'blog-eviter-caries.html': 'Comment éviter les caries dentaires - Hôpital Jason Sendwe - Prévention bucco-dentaire',
    'blog-gestes-arret-cardiaque.html': 'Gestes qui sauvent en cas d\'arrêt cardiaque - Hôpital Jason Sendwe - Formation aux premiers secours',
    'blog-alimentation-equilibree.html': 'Importance d\'une alimentation équilibrée - Hôpital Jason Sendwe - Conseils nutritionnels',
    'blog-prevenir-hypertension.html': 'Prévenir l\'hypertension artérielle - Hôpital Jason Sendwe - Conseils de prévention',
    'blog-grossesse-securite.html': 'Grossesse en sécurité - Hôpital Jason Sendwe - Conseils pour une grossesse saine',
    'blog-diabete.html': 'Signes précoces du diabète - Hôpital Jason Sendwe - Reconnaître les symptômes du diabète',
    'blog-fievre-enfant.html': 'Fièvre chez l\'enfant - Hôpital Jason Sendwe - Quand consulter un médecin',
    'blog-chirurgie-cardiaque.html': 'Nouvelle technique de chirurgie cardiaque - Hôpital Jason Sendwe - Innovation médicale',
    'blog-habitudes-quotidiennes.html': 'Habitudes quotidiennes pour préserver sa santé - Hôpital Jason Sendwe - Conseils bien-être',
    'blog-biomarqueur-cancer.html': 'Nouveau biomarqueur pour le diagnostic du cancer - Hôpital Jason Sendwe - Recherche médicale',
    'blog-equipement-imagerie.html': 'Nouvel équipement d\'imagerie médicale - Hôpital Jason Sendwe - Technologie de pointe',
    'blog-gestion-stress.html': 'Gestion du stress - Hôpital Jason Sendwe - Techniques pour votre bien-être mental',
    'blog-super-aliments.html': 'Super-aliments pour booster l\'immunité - Hôpital Jason Sendwe - Nutrition et santé',
    'blog-grossesse-securite.html': 'Grossesse en sécurité - Hôpital Jason Sendwe - Conseils pour une grossesse saine'
}

def add_schema_and_meta(file_path):
    """Ajoute le Schema.org et met à jour la meta description"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Créer une sauvegarde
        backup_path = file_path + '.backup_schema'
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        filename = os.path.basename(file_path)
        updated = False
        
        # Ajouter Schema.org si pas déjà présent
        if 'application/ld+json' not in content:
            # Insérer le Schema.org avant la fermeture de </head>
            schema_insertion = SERVICE_SCHEMA + '\n\n</head>'
            content = content.replace('</head>', schema_insertion)
            updated = True
        
        # Mettre à jour la meta description si nécessaire
        if filename in META_DESCRIPTIONS_COMPLETE:
            new_description = META_DESCRIPTIONS_COMPLETE[filename]
            
            # Remplacer la meta description générique
            pattern = r'<meta name="description" content="[^"]*">'
            replacement = f'<meta name="description" content="{new_description}">'
            if re.search(pattern, content):
                content = re.sub(pattern, replacement, content)
                updated = True
        
        # Écrire le fichier modifié
        if updated:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ {filename} - Schema.org et meta description mis à jour")
            return True
        else:
            print(f"⏭️ {filename} - Aucune mise à jour nécessaire")
            return False
        
    except Exception as e:
        print(f"❌ Erreur lors de la mise à jour de {file_path}: {e}")
        return False

def main():
    """Fonction principale"""
    print("🚀 Ajout du Schema.org et optimisation des meta descriptions...")
    
    # Trouver tous les fichiers HTML dans le répertoire courant
    html_files = glob.glob('*.html')
    
    updated_count = 0
    total_count = len(html_files)
    
    for file_path in html_files:
        if add_schema_and_meta(file_path):
            updated_count += 1
    
    print(f"\n📊 Résumé: {updated_count}/{total_count} fichiers mis à jour avec succès")
    print("💾 Les sauvegardes sont disponibles avec l'extension .backup_schema")

if __name__ == "__main__":
    main()

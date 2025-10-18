#!/usr/bin/env python3
import os
import re
import glob

# Dictionnaire des descriptions alt optimisées par fichier et contexte
ALT_DESCRIPTIONS = {
    'index.html': {
        'logosendwe.png': 'Logo de l\'Hôpital Public de Référence Tertiaire Jason Sendwe',
        'DG.jpeg': 'Directeur Général de l\'Hôpital Jason Sendwe',
        'service-1.jpg': 'Service des Urgences de l\'Hôpital Jason Sendwe',
        'service-2.jpg': 'Service de Chirurgie de l\'Hôpital Jason Sendwe',
        'service-3.jpg': 'Service de Pédiatrie de l\'Hôpital Jason Sendwe',
        'service-4.jpg': 'Service d\'Imagerie Médicale de l\'Hôpital Jason Sendwe',
        'service-5.jpg': 'Service d\'Anesthésie et Réanimation de l\'Hôpital Jason Sendwe',
        'service-6.jpg': 'Service d\'Ophtalmologie de l\'Hôpital Jason Sendwe',
        'service-7.jpg': 'Service de Dermatologie de l\'Hôpital Jason Sendwe',
        'service-8.jpg': 'Service de Dentisterie de l\'Hôpital Jason Sendwe',
        'service-9.jpg': 'Service de Pharmacie de l\'Hôpital Jason Sendwe',
        'service-10.jpg': 'Service de Laboratoire de l\'Hôpital Jason Sendwe',
        'blog-1.jpg': 'Article de blog sur les actualités médicales',
        'blog-2.jpg': 'Article de blog sur les conseils santé',
        'blog-3.jpg': 'Article de blog sur la prévention',
        'blog-4.jpg': 'Article de blog sur les innovations médicales'
    },
    'department.html': {
        'service-1.jpg': 'Service des Urgences - Hôpital Jason Sendwe',
        'service-2.jpg': 'Service de Chirurgie - Hôpital Jason Sendwe',
        'service-3.jpg': 'Service de Pédiatrie - Hôpital Jason Sendwe',
        'service-4.jpg': 'Service d\'Imagerie Médicale - Hôpital Jason Sendwe',
        'service-5.jpg': 'Service d\'Anesthésie et Réanimation - Hôpital Jason Sendwe',
        'service-6.jpg': 'Service d\'Ophtalmologie - Hôpital Jason Sendwe',
        'service-7.jpg': 'Service de Dermatologie - Hôpital Jason Sendwe',
        'service-8.jpg': 'Service de Dentisterie - Hôpital Jason Sendwe',
        'service-9.jpg': 'Service de Pharmacie - Hôpital Jason Sendwe',
        'service-10.jpg': 'Service de Laboratoire - Hôpital Jason Sendwe'
    },
    'doctor.html': {
        'team/1.jpg': 'Dr. Marie KABONGO - Directrice de Nursing',
        'team/2.jpg': 'Dr. Jean MUKAMBA - Chirurgien Général',
        'team/3.jpg': 'Dr. Sarah KATEMBO - Pédiatre',
        'team/4.jpg': 'Dr. Paul MULUMBA - Cardiologue',
        'team/5.jpg': 'Dr. Grace KASONGO - Gynécologue',
        'team/6.jpg': 'Dr. Michel KABONGO - Neurologue'
    },
    'galerie-photo.html': {
        'gallery/gallery-1.jpg': 'Façade principale de l\'Hôpital Jason Sendwe',
        'gallery/gallery-2.jpg': 'Salle d\'attente moderne de l\'hôpital',
        'gallery/gallery-3.jpg': 'Bloc opératoire équipé de l\'Hôpital Jason Sendwe',
        'gallery/gallery-4.jpg': 'Service des urgences 24h/24',
        'gallery/gallery-5.jpg': 'Laboratoire d\'analyses médicales',
        'gallery/gallery-6.jpg': 'Service de radiologie et imagerie',
        'gallery/gallery-7.jpg': 'Chambre de patient moderne',
        'gallery/gallery-8.jpg': 'Équipe médicale de l\'Hôpital Jason Sendwe'
    }
}

def optimize_alt_attributes(file_path):
    """Optimise les attributs alt des images"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Créer une sauvegarde
        backup_path = file_path + '.backup_alt'
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        filename = os.path.basename(file_path)
        updated = False
        
        # Vérifier si on a des descriptions alt pour ce fichier
        if filename in ALT_DESCRIPTIONS:
            alt_dict = ALT_DESCRIPTIONS[filename]
            
            # Parcourir chaque image et son alt correspondant
            for img_src, alt_text in alt_dict.items():
                # Pattern pour trouver l'image avec src contenant img_src
                pattern = rf'<img[^>]*src="[^"]*{re.escape(img_src)}"[^>]*alt="[^"]*"[^>]*>'
                
                # Nouveau pattern avec alt optimisé
                def replace_alt(match):
                    img_tag = match.group(0)
                    # Remplacer l'attribut alt existant
                    new_img_tag = re.sub(r'alt="[^"]*"', f'alt="{alt_text}"', img_tag)
                    return new_img_tag
                
                # Appliquer le remplacement
                new_content = re.sub(pattern, replace_alt, content)
                if new_content != content:
                    content = new_content
                    updated = True
        
        # Remplacer les alt vides ou génériques par des descriptions plus spécifiques
        generic_patterns = [
            (r'alt=""', 'alt="Image de l\'Hôpital Jason Sendwe"'),
            (r'alt=" "', 'alt="Image de l\'Hôpital Jason Sendwe"'),
            (r'alt="image"', 'alt="Image de l\'Hôpital Jason Sendwe"'),
            (r'alt="img"', 'alt="Image de l\'Hôpital Jason Sendwe"'),
            (r'alt="photo"', 'alt="Photo de l\'Hôpital Jason Sendwe"')
        ]
        
        for pattern, replacement in generic_patterns:
            if re.search(pattern, content):
                content = re.sub(pattern, replacement, content)
                updated = True
        
        # Écrire le fichier modifié
        if updated:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ {filename} - Attributs alt optimisés")
            return True
        else:
            print(f"⏭️ {filename} - Aucune optimisation alt nécessaire")
            return False
        
    except Exception as e:
        print(f"❌ Erreur lors de l'optimisation de {file_path}: {e}")
        return False

def main():
    """Fonction principale"""
    print("🚀 Optimisation des attributs alt des images...")
    
    # Trouver tous les fichiers HTML dans le répertoire courant
    html_files = glob.glob('*.html')
    
    updated_count = 0
    total_count = len(html_files)
    
    for file_path in html_files:
        if optimize_alt_attributes(file_path):
            updated_count += 1
    
    print(f"\n📊 Résumé: {updated_count}/{total_count} fichiers mis à jour avec succès")
    print("💾 Les sauvegardes sont disponibles avec l'extension .backup_alt")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
import os
import re
import glob

def remove_phone_line(file_path):
    """Supprime la ligne du numéro de téléphone du header"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Créer une sauvegarde
        backup_path = file_path + '.backup_phone'
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Supprimer la ligne du numéro de téléphone
        phone_pattern = r'<li class="list-inline-item" style="background-color: red; padding: 2px 8px; border-radius: 12px; color: white; text-decoration: none; display: inline-block; font-weight: bold;"><i class="fa fa-phone mr-2"></i>\+243 999 984 585 </li>\s*'
        content = re.sub(phone_pattern, '', content)
        
        # Écrire le fichier modifié
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ {file_path} - Ligne téléphone supprimée")
        return True
        
    except Exception as e:
        print(f"❌ Erreur lors de la mise à jour de {file_path}: {e}")
        return False

def main():
    """Fonction principale"""
    print("🚀 Suppression de la ligne téléphone du header...")
    
    # Trouver tous les fichiers HTML dans le répertoire courant
    html_files = glob.glob('*.html')
    
    updated_count = 0
    total_count = len(html_files)
    
    for file_path in html_files:
        if remove_phone_line(file_path):
            updated_count += 1
    
    print(f"\n📊 Résumé: {updated_count}/{total_count} fichiers mis à jour avec succès")
    print("💾 Les sauvegardes sont disponibles avec l'extension .backup_phone")

if __name__ == "__main__":
    main()

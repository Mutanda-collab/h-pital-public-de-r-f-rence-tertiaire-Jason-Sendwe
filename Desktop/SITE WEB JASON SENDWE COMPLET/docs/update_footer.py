#!/usr/bin/env python3
import os
import re
import glob

# Nouveau contenu pour la section Services
NEW_SERVICES = '''			<div class="col-lg-2 col-md-6 col-sm-6">
				<div class="widget mb-5 mb-lg-0">
				  <h4 class="text-capitalize mb-3" style="color: #07d9e4;">Services</h4>
				  <div class="divider mb-4"></div>
			  
				  <ul class="list-unstyled footer-menu lh-35" style="color: white;">
					<li><a href="chirurgie.html" style="color: white;">Chirurgie</a></li>
					<li><a href="service-urgences.html" style="color: white;">Urgences</a></li>
					<li><a href="imagerie.html" style="color: white;">Imagérie</a></li>
					<li><a href="pediatrie.html" style="color: white;">Pédiatrie</a></li>
					
					<li><a href="gyneco_obstetrique.html" style="color: white;">Maternité</a></li>
				  </ul>
				</div>
			  </div>'''

# Nouveau contenu pour la section Liens rapides
NEW_LINKS = '''			  <div class="col-lg-2 col-md-6 col-sm-6">
				<div class="widget mb-5 mb-lg-0">
				  <h4 class="text-capitalize mb-3" style="color: #07d9e4;">Liens rapides</h4>
				  <div class="divider mb-4"></div>
			  
				  <ul class="list-unstyled footer-menu lh-35">
					<li><a href="apropos.html" style="color: white;">A propos</a></li>
					
					<li><a href="direction_generale.html" style="color: white;">Direction Générale</a></li>
					<li><a href="direction_medicale.html" style="color: white;">Direction Médicale</a></li>
					<li><a href="department.html" style="color: white;">Services</a></li>
					
					<li><a href="evenement.html" style="color: white;">Evénements</a></li>

					
				  </ul>
				</div>
			  </div>'''

def update_footer(file_path):
    """Met à jour le footer d'un fichier HTML"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Créer une sauvegarde
        backup_path = file_path + '.backup'
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Remplacer la section Services
        services_pattern = r'<div class="col-lg-2 col-md-6 col-sm-6">\s*<div class="widget mb-5 mb-lg-0">\s*<h4 class="text-capitalize mb-3" style="color: #07d9e4;">Services</h4>.*?</div>\s*</div>'
        content = re.sub(services_pattern, NEW_SERVICES, content, flags=re.DOTALL)
        
        # Remplacer la section Liens rapides
        links_pattern = r'<div class="col-lg-2 col-md-6 col-sm-6">\s*<div class="widget mb-5 mb-lg-0">\s*<h4 class="text-capitalize mb-3" style="color: #07d9e4;">Liens rapides</h4>.*?</div>\s*</div>'
        content = re.sub(links_pattern, NEW_LINKS, content, flags=re.DOTALL)
        
        # Écrire le fichier modifié
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ {file_path} mis à jour avec succès")
        return True
        
    except Exception as e:
        print(f"❌ Erreur lors de la mise à jour de {file_path}: {e}")
        return False

def main():
    """Fonction principale"""
    print("🚀 Début de la mise à jour du footer...")
    
    # Trouver tous les fichiers HTML dans le répertoire courant
    html_files = glob.glob('*.html')
    
    updated_count = 0
    total_count = len(html_files)
    
    for file_path in html_files:
        if update_footer(file_path):
            updated_count += 1
    
    print(f"\n📊 Résumé: {updated_count}/{total_count} fichiers mis à jour avec succès")
    print("💾 Les sauvegardes sont disponibles avec l'extension .backup")

if __name__ == "__main__":
    main()

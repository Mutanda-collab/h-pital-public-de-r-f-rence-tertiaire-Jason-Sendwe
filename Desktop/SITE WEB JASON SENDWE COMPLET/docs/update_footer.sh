#!/bin/bash

# Script pour mettre à jour le footer de toutes les pages HTML
# Remplace les sections "Services" et "Liens rapides" dans le footer

echo "Début de la mise à jour du footer..."

# Nouveau contenu pour la section Services
NEW_SERVICES='<div class="col-lg-2 col-md-6 col-sm-6">
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
			  </div>'

# Nouveau contenu pour la section Liens rapides  
NEW_LINKS='<div class="col-lg-2 col-md-6 col-sm-6">
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
			  </div>'

# Fonction pour mettre à jour une page
update_page() {
    local file="$1"
    echo "Mise à jour de $file..."
    
    # Créer une copie de sauvegarde
    cp "$file" "$file.backup"
    
    # Utiliser Python pour faire le remplacement de manière plus précise
    python3 << EOF
import re

# Lire le fichier
with open('$file', 'r', encoding='utf-8') as f:
    content = f.read()

# Remplacer la section Services
services_pattern = r'<div class="col-lg-2 col-md-6 col-sm-6">\s*<div class="widget mb-5 mb-lg-0">\s*<h4 class="text-capitalize mb-3" style="color: #07d9e4;">Services</h4>.*?</div>\s*</div>'
content = re.sub(services_pattern, '''$NEW_SERVICES''', content, flags=re.DOTALL)

# Remplacer la section Liens rapides
links_pattern = r'<div class="col-lg-2 col-md-6 col-sm-6">\s*<div class="widget mb-5 mb-lg-0">\s*<h4 class="text-capitalize mb-3" style="color: #07d9e4;">Liens rapides</h4>.*?</div>\s*</div>'
content = re.sub(links_pattern, '''$NEW_LINKS''', content, flags=re.DOTALL)

# Écrire le fichier modifié
with open('$file', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fichier $file mis à jour avec succès")
EOF
}

# Trouver tous les fichiers HTML dans docs/ (exclure les sous-dossiers)
find docs -maxdepth 1 -name "*.html" -type f | while read -r file; do
    # Ignorer les fichiers dans les sous-dossiers
    if [[ "$file" == docs/*.html ]]; then
        update_page "$file"
    fi
done

echo "Mise à jour terminée pour tous les fichiers HTML."
#!/bin/bash
cd "$(dirname "$0")"
git add .
git commit -m "Update $(date '+%d.%m.%Y %H:%M')"
git push
echo ""
echo "✅ Fertig! Die Website wird in ca. 1 Minute aktualisiert."
echo "   → https://chrismuellr.de"
echo ""
read -p "Fenster schließen..."

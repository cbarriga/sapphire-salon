#!/bin/bash
# Run from project root: bash scripts/download-images.sh
set -e
DEST="public/images"
mkdir -p "$DEST"
echo "Downloading images..."
curl -# -o "$DEST/header.png"       "https://sapphiresalonnh.com/wp-content/uploads/2017/09/header.png"
curl -# -o "$DEST/salon-1.jpg"      "https://sapphiresalonnh.com/wp-content/uploads/2017/09/CB_20151218-Sapphire-Salon_6537.jpg"
curl -# -o "$DEST/salon-2.jpg"      "https://sapphiresalonnh.com/wp-content/uploads/2017/09/CB_20151218-Sapphire-Salon_6693.jpg"
curl -# -o "$DEST/salon-3.jpg"      "https://sapphiresalonnh.com/wp-content/uploads/2017/09/CB_20151218-Sapphire-Salon_6632.jpg"
curl -# -o "$DEST/team-mia.jpg"     "https://sapphiresalonnh.com/wp-content/uploads/2023/05/Resized_Resized_20230721_124627.jpg"
curl -# -o "$DEST/team-katy.jpg"    "https://sapphiresalonnh.com/wp-content/uploads/2017/09/CB_20150228-Sapphire-Salon-Katy_1750.jpg"
curl -# -o "$DEST/team-elisha.jpg"  "https://sapphiresalonnh.com/wp-content/uploads/2017/09/CB_20141006-Sapphire-Salon_9651.jpg"
curl -# -o "$DEST/team-dori.jpg"    "https://sapphiresalonnh.com/wp-content/uploads/2016/03/CB_20141006-Sapphire-Salon_9641.jpg"
echo "Done. Images in $DEST/"
ls -lh "$DEST/"

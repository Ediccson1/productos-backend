#!/bin/bash

# Obtener credenciales de MySQL de Aiven (reemplaza <project-name> y <service-name>)
AIVEN_PROJECT="sena-e4ab"
AIVEN_SERVICE="<mysql-15b5d310>"

DB_HOST=$(aiven service get $AIVEN_SERVICE --project $AIVEN_PROJECT --json | jq -r '.service_uri_params.host')
DB_USER=$(aiven service get $AIVEN_SERVICE --project $AIVEN_PROJECT --json | jq -r '.service_uri_params.user')
DB_PASSWORD=$(aiven service get $AIVEN_SERVICE --project $AIVEN_PROJECT --json | jq -r '.service_uri_params.password')
DB_NAME=$(aiven service get $AIVEN_SERVICE --project $AIVEN_PROJECT --json | jq -r '.service_uri_params.database')

# Sincronizar las variables de entorno en Vercel (Backend)
vercel env add DB_HOST $DB_HOST -y --scope=production --project=productos-backend
vercel env add DB_USER $DB_USER -y --scope=production --project=productos-backend
vercel env add DB_PASSWORD $DB_PASSWORD -y --scope=production --project=productos-backend
vercel env add DB_NAME $DB_NAME -y --scope=production --project=productos-backend
vercel env add PORT 4000 -y --scope=production --project=productos-backend

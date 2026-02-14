# Configuración de Supabase

## Pasos para conectar tu base de datos:

### 1. Obtén tus credenciales de Supabase
- Ve a https://app.supabase.com
- Selecciona tu proyecto
- Ve a Settings > API
- Copia:
  - Project URL (NEXT_PUBLIC_SUPABASE_URL)
  - anon/public key (NEXT_PUBLIC_SUPABASE_ANON_KEY)

### 2. Configura las variables de entorno
Edita el archivo `.env.local` y reemplaza con tus credenciales:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

### 3. Configura el nombre de tu tabla
En `app/page.tsx`, línea 18, cambia `'your_table_name'` por el nombre de tu tabla en Supabase:

```typescript
.from('tu_tabla') // Por ejemplo: 'usuarios', 'productos', etc.
```

### 4. Reinicia el servidor
```bash
npm run dev
```

## Estructura creada:

- ✅ `/lib/supabase.ts` - Cliente de Supabase
- ✅ `/app/page.tsx` - Página principal que muestra datos
- ✅ `.env.local` - Variables de entorno (debes configurar)
- ✅ Instalado `@supabase/supabase-js`

## Funcionalidades:

- Conexión a Supabase
- Lectura de datos de cualquier tabla
- Visualización en tabla responsive
- Botón para recargar datos
- Manejo de errores y estados de carga

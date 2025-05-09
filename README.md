🚀 Cómo ejecutar CryptoTracker en Android o Web
Este proyecto usa React Native con Expo. Puedes correr la app fácilmente en un emulador Android, un dispositivo físico o en el navegador.

⚙️ Requisitos previos
Node.js instalado (recomendado: LTS)

Expo CLI global:

bash
Copiar
Editar
npm install -g expo-cli
Un emulador Android o un dispositivo físico con Expo Go instalado (Play Store)

Android Studio (si deseas emular en PC)

▶️ Iniciar el proyecto

npm install      # Instala todas las dependencias
npm run start    # Inicia Expo y el bundler
Se abrirá la consola interactiva de Expo y verás un código QR.

📱 Opciones para correr la app
✅ 1. Dispositivo físico (recomendado)
Asegúrate de que tu PC y tu celular estén en la misma red Wi-Fi.

Instala la app Expo Go desde la Play Store.

Escanea el código QR con la cámara o desde la app Expo Go.

🖥️ 2. Emulador Android (Android Studio)
Abre Android Studio.

Lanza un emulador desde el AVD Manager.

En la consola de Expo, presiona la tecla:

text
Copiar
Editar
a
Esto abrirá automáticamente la app en el emulador.

Si ves un error como "No Android connected device found", asegúrate de que el emulador esté activo y con permisos ADB habilitados.

🌐 3. Vista Web (opcional)
Presiona:

text
Copiar
Editar
w
Esto abrirá la app en tu navegador en modo web (experimental para proyectos móviles).

🔁 Atajos útiles en la consola de Expo
a: abrir en Android

w: abrir en web

r: recargar la app

j: abrir depurador

m: mostrar menú

shift + m: más herramientas

?: ver todos los comandos disponibles

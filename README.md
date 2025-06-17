# 🧩 Poke App

**Poke App** es una aplicación web desarrollada con [Lit](https://lit.dev/) que permite explorar una pequeña biblioteca de Pokémon, incluyendo información de sus tipos y evoluciones. El proyecto también incluye una colección modular de componentes reutilizables.

---

## 🚀 Tecnologías

- [Lit](https://lit.dev/)
- [json-server](https://github.com/typicode/json-server)
- HTML, CSS, JavaScript
- Web Components

---

## 📦 Instalación y ejecución local

Sigue los siguientes pasos para instalar y ejecutar la aplicación en modo local.

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/LobitomasterRe/poke-app-challenge.git
cd poke-app-challenge
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Instalar `json-server` (si no lo tienes)

```bash
npm install -g json-server
```

Este paquete se utiliza para simular una API REST con un archivo `pokemon.json` incluido en el proyecto.

---

## 🧪 Ejecución del proyecto

La aplicación consta de dos servidores: uno para los datos (json-server) y otro para la app.

### ▶️ Iniciar el servidor de datos (json-server)

```bash
npm run serve:json
```

Esto levantará un servidor local en [http://localhost:3002](http://localhost:3002) que expone el archivo `db.json`.

### ▶️ Iniciar la aplicación (Poke App)

Abre un nuevo terminal y ejecuta:

```bash
npm run start
```

Esto lanzará la aplicación en [http://localhost:8000](http://localhost:8000)

---

## ⚙️ Personalización

Si necesitas cambiar los puertos por defecto, puedes editar los scripts en el archivo `package.json` y en el poke-data-service:

```json
"scripts": {
  "serve:json": "json-server --watch db.json --port 3002",
  "start": "es-dev-server --app-index index.html --port 8000 --open"
}
```

---

## 🧠 Nota

Este proyecto se desarrolló como un challenge técnico con fines educativos. Puedes adaptarlo libremente a tus necesidades o utilizar sus componentes para otros proyectos web.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

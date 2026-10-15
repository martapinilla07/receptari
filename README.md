# Receptari

## Descripció

Receptari és una aplicació web desenvolupada amb Vue 3 que permet consultar diferents receptes emmagatzemades a Firebase Cloud Firestore.

L'aplicació utilitza components reutilitzables, Vue Router per a la navegació entre pàgines i Firebase Hosting per a la publicació de la web.

---

## Tecnologies utilitzades

- Vue 3
- Vue Router
- Firebase
- Cloud Firestore
- Firebase Hosting
- JavaScript
- CSS

---

## Instal·lació del projecte

Clonar el repositori:

```bash
git clone URL_DEL_REPOSITORI
```

Accedir a la carpeta del projecte:

```bash
cd receptari
```

Instal·lar les dependències:

```bash
npm install
```

---

## Execució local

Per iniciar el servidor de desenvolupament:

```bash
npm run dev
```

L'aplicació estarà disponible a:

```text
http://localhost:5173
```

---

## Generació de la versió de producció

Per generar la carpeta de producció:

```bash
npm run build
```

Els fitxers generats es desaran a la carpeta:

```text
dist
```

---

## Publicació amb Firebase Hosting

Per desplegar l'aplicació:

```bash
firebase deploy
```

---

## Components utilitzats

### Navbar.vue

Mostra el menú de navegació principal de l'aplicació.

### ReceptaCard.vue

Mostra la informació d'una recepta individual utilitzant les dades rebudes per 
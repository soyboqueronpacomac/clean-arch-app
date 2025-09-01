# Mi Proyecto Node Clean Architecture

![License](https://img.shields.io/badge/license-MIT-green)

## Descripción

Backend en **Node.js** implementado siguiendo los principios de **Clean Architecture**, enfocado en escalabilidad, mantenibilidad y APIs REST robustas.  

- **Capa de dominio:** Entidades, agregados y reglas de negocio puras.  
- **Capa de aplicación:** Casos de uso, servicios y DTOs.  
- **Capa de infraestructura:** Persistencia (MongoDB), repositorios, adaptadores y servicios externos.  
- **Beneficios:** Código más mantenible, escalable y testeable; fácil integración de nuevas tecnologías sin afectar la lógica de negocio.
- **Basado:** Del curso de Fernando Herrera de node clean archicture de Devtalles

---

## Estado del proyecto

⚠️ **Alpha** – Proyecto en desarrollo inicial.

Versión: `0.0.1-alpha.1`

---

## Tecnologías utilizadas

- Node.js
- TypeScript
- Express
- MongoDB + Mongoose
- Bcryptjs (hash de contraseñas)
- Jest (tests unitarios)
- ts-node-dev (desarrollo)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/soyboqueronpacomac/clean-arch-app.git
cd clean-arch-app
```

2. Instalar dependencia

```bash
npm install
```

3. Para desarrollo corre el comando

```bash
node --run dev
```
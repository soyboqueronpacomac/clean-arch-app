# Imagen oficial de Bun
FROM oven/bun:latest

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package.json bun.lockb ./
COPY src ./src

# Instalar dependencias
RUN bun install --production

# Compilar
RUN bun build ./src/main.ts --outdir dist --target bun

# Exponer puerto
EXPOSE 8000

# Ejecutar app
CMD ["bun", "run", "dist/main.js"]
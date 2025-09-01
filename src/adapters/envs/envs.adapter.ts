import pkg from "env-var";
const { get } = pkg;

export const envsAdapter = {
    PORT: get("PORT").default("8000").asPortNumber(),
}
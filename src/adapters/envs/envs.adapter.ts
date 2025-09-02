import pkg from "env-var";
const { get } = pkg;

export const envsAdapter = {
    PORT: get("PORT").default("8000").asPortNumber(),
    API_VERSION: get('API_VERSION').default("v1").asString(),
}
import { env } from './env';
import { app } from './app';

const HOST = '0.0.0.0';

app.listen({
    host: HOST,
    port: env.PORT
}).then(() => {
    console.log(`Server running on ${HOST}:${env.PORT}`)
});
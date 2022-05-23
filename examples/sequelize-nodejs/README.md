# Sequelize & Sequelize CLI

## Empezando

1.  Iniciar el archivo de configuracion de sequelize,  mas adelante lo ajustaremos.
```bash
npx sequelize init:config --config ./config/database.js
```

2. Crear las carpetas para las migraciones, modelos y seeders

```bash
npx sequelize init:models --models-path ./db/models/
npx sequelize init:migrations --migrations-path ./db/migrations/
npx sequelize init:seeders --seeders-path ./db/seeders/
```

3. `.sequelizerc`: Este es un archivo de configuración especial. Le permite especificar las siguientes opciones que normalmente pasaría como argumentos a la CLI, [link](https://sequelize.org/docs/v6/other-topics/migrations/#the-sequelizerc-file)

```js
const path = require('path');

module.exports = {
  env: process.env.NODE_ENV || 'development',
  config: path.resolve('config', 'database.js'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
};
```

4. Ajustar el archivo `./config/database.js` con la siguiente info:

```js
module.exports = {
  development: {
    username: 'postgres',
    password: 'password',
    database: 'top_v20_development',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
    logging: false,
  },
};
```

5. Crear la base de datos `npx sequelize db:create` esta instruccion toma el `env` y el nombre de la db de la config

6. Agregar el modelo de usuarios:

```bash
npx sequelize model:generate \
  --name User \
  --attributes name:string,email:string,password:string
```

7. Incluir un seed para este modelos de usuarios `npx sequelize-cli seed:generate --name user` esto creara un archivo en la carpeta `./db/seeders/<numeros>-user.js`

Vamos a configurar este archivo para generar 10 usuarios random usando la libreria `faker.js`

```js
'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = Array.from({ length: 10 }, () => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
```

8. Correr las migraciones que tenemos hasta el momento `npx sequelize db:migrate` esto creara la tabla `Users` en la base de datos de Postgres.

9. Ejecutar el seed que hicimos anteriormente para poblar la base de datos con estos usuarios: `npx sequelize db:seed:all`

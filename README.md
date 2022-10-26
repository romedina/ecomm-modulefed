# Module Federation Setup for Vanilla JS

This repo is a PoC for module federation working on a Vanilla JS environment. The idea is to have a container app handling 2 light Micro Front End apps to test the architecture for studying purposes.

## Install and Run the environment

### Installing Products

From `/eccom`

```shell
cd products
npm i
npm run build
npm start
```

Go to `localhost:8080`

### Installing Container

From `/eccom`

```shell
cd container
npm i
npm run build
npm start
```

Go to `localhost:8081`

### Installing Cart

From `/eccom`

```shell
cd cart
npm i
npm run build
npm start
```

Go to `localhost:8082`

To see the architecture working is important to have all the environments running at the same time.

Author: Ro Medina

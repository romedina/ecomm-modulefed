# Module Federation Setup for Vanilla JS

This repo is a PoC for module federation working on a Vanilla JS environment. The idea is to have a container app handling 2 light Micro Front End apps to test the architecture for studying purposes.

## Install and Run the environment

### Installing Container

From `/eccom`

```shell
cd container
npm i
npm run build
npm start
```

Go to `localhost:8081`

### Installing Products

From `/eccom`

```shell
cd products
npm i
npm run build
npm start
```

Go to `localhost:8080`

To see the architecture working is important to have both environments running at the same time.

Author: Ro Medina

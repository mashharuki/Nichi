# API (built with Hono)

## How to work

- Instal

  ```bash
  pnpm install
  ```

- start at local

  ```bash
  pnpm run dev
  ```

- Build Docker Contrainer Image

  ```bash
  docker build . -t agent-api:latest
  ```

- Run Docker Contrainer

  ```bash
  docker run -p 3000:3000 --env-file .env agent-api:latest
  ```

  get Image ID

  ```bash
  docker image ls
  ```

- Stop Docker Contrainer

  ```bash
  docker stop <imageid>
  ```

  remove Docker Contrainer Iamge

  ```bash
  docker image rm -f <imageid>
  ```


# CDK for Terraform

## How to work

- install

  ```bash
  bun install
  ```

- diff

  ```bash
  bun run diff
  ```

- deploy to Cloud Run

  ```bash
  bun run deploy 'agent-api'
  ```

  result:

  ```bash
  cdktf
  region = us-central1
  service_name = agent-api
  service_url = https://<固有値>.a.run.app
  ```

- Delete

  ```bash
  bun run destroy 'agent-api'
  ```

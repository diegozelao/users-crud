# Template CRUD
## Using in docker
  - React
  - Nest
  - Postgresql

# First Steps to Run
## You need run first postgres database

  ```bash
    docker compose  -f "docker-compose.yml" up -d --build db 
  ```

# After run 'DB', can run all containers
## Run docker compose to up build.
  ```bash
    docker compose -f "docker-compose.yml" up -d --build
  ```

## Stop docker compose 

  ```bash
    docker compose -f "docker-compose.yml" down 
  ```
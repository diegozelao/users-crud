# Template CRUD
## Using in docker
  - React
  - Nest
  - Postgresql

# First Steps to Run
## You need run first postgres database
## After run 'DB', can run all containers

  ```bash
    docker compose  -f "docker-compose.yml" up -d --build db && docker compose -f "docker-compose.yml" up -d --build
  ```
## Stop docker compose 

  ```bash
    docker compose -f "docker-compose.yml" down 
  ```

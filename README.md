### DOCKER COMMANDS

# to run our services

docker-compose up -d --build

# to enter a container

docker exec -it <container_id> /bin/bash

# to check live logs/out put of container

docker logs -f <container_id>

### STEPS TO RUN MIGRATION

STEP 1: Enter into auth container (see above docker step)
STEP 2: Run the following commmand
npx knex migrate:latest --knexfile ./pg/knexfile.js

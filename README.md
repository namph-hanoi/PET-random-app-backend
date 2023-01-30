* To do:
- Install and apply validator
* Done:
- Generate template using yo node-express-typescript-api
- Switch from pnpm to yarn due to the bug when generate migration files with typeORM 

* Notice:
- To generate a migration file, run ```yarn typeorm migration:generate ./src/db/migrations/{name_of_the_file}```
- To run migartions, run  ```yarn typeorm migration:run```
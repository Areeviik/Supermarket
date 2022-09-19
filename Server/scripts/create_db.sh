# !/bin/bash
#!/usr/bin/env bash

source ../.env

mysql -u "root" -p$DB_PASSWORD< "./clean_db.sql"
mysql -u "root" -p$DB_PASSWORD < "./create_db.sql"
#!/bin/bash
name=les-backend

base_path=/home/site/${name}
git pull
yarn
yarn build
OUT=$?

if [ $OUT -eq 0 ];then
  pm2 reload lesBack --update-env
  echo Done ${name}.
else
  echo Build failed!
fi

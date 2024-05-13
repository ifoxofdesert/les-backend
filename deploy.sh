#!/bin/bash
name=les-backend

base_path=/home/site/${name}
git pull
yarn
yarn build
OUT=$?

if [ $OUT -eq 0 ];then
  ls -dt ${base_path}/*/ | tail -n +4 | xargs rm -rf

  pm2 reload lesBack --update-env
  echo Done ${name}.
else
  echo Build failed!
fi

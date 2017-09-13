#!/bin/bash

git clone --depth 1 https://github.com/guedouari/desktop.xstr.me.git

cp client.xstr.me-$TRAVIS_TAG.tar.gz desktop.xstr.me/www.tar.gz

cd desktop.xstr.me/

git add www.tar.gz

git commit -m "update package from xstr.me via script "$TRAVIS_TAG

git tag $TRAVIS_TAG

git push

git push --tags


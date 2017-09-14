#!/bin/bash

git clone --depth 1 https://travis-ci:${GITHUB_TOKEN}@github.com/guedouari/desktop.xstr.me.git
cd desktop.xstr.me/
# git remote rm origin
# git remote add origin https://travis-ci:${GITHUB_TOKEN}@github.com/guedouari/desktop.xstr.me.git



cp ../client.xstr.me-$TRAVIS_TAG.tar.gz www.tar.gz



git add www.tar.gz

git commit -m "update package from xstr.me via script "$TRAVIS_TAG

git tag $TRAVIS_TAG

git push

git push --tags


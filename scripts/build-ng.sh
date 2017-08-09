#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit -1
}
[ -z $TRAVIS_BRANCH ] && abort "branch is undefined"
if [ "$TRAVIS_BRANCH" = "next" ]
then
	echo "building for gh-pages"
    npm run build:dev
else
	npm run build
fi

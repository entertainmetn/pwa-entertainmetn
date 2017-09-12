#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit -1
}
[ -z $TRAVIS_BRANCH ] && abort "branch is undefined"
if [ "$TRAVIS_BRANCH" = "master" ]
then
	echo "building streamline"
    npm run build
fi
if [ "$TRAVIS_BRANCH" = "next" ]
then
	echo "building beta for gh-pages"
    npm run build:next
fi
if [ "$TRAVIS_BRANCH" = "$TRAVIS_TAG" ]
then
	echo "building a distributable release"
    npm run build:release
fi

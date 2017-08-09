#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit -1
}
[ -z $TRAVIS_BRANCH ] && abort "branch is undefined"
if [ "$TRAVIS_BRANCH" == "next" ]
then
	cp "$TRAVIS_BUILD_DIR/www/index.html" "$TRAVIS_BUILD_DIR/www/404.html"
	echo "created 404.html for gh-pages"
else
	echo "nothing to do ..."
fi

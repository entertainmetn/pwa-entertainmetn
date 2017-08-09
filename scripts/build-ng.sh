#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit -1
}
args= ""
[ -z $TRAVIS_BRANCH ] && abort "branch is undefined"
if [ "$TRAVIS_BRANCH" = "next" ]
then
	args= "--bh /xstr.me/"
	echo "building for gh-pages"
else
	echo "nothing to do ..."
fi
ng build --prod $args

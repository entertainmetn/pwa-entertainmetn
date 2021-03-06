#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit 0
}
[ -z $TRAVIS_TAG ] && abort "tag-undefined"
echo "creating archive for ""$TRAVIS_TAG"
tar -zcvf client.xstr.me-$TRAVIS_TAG.tar.gz www

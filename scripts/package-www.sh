#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit -1
}
[ -z $TRAVIS_TAG ] && abort "tag undefined"
echo "creating archive for ""$TRAVIS_TAG"
tar -cvf www/client.xstr.me-"$TRAVIS_TAG".tar.gz www

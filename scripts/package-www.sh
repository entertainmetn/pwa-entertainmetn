#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit 0
}
[ -z $TRAVIS_TAG ] && abort "tag-undefined"
echo "creating archive for ""$TRAVIS_TAG"
echo "content of www :"
echo "build dir => " $TRAVIS_BUILD_DIR
echo $(ls -l $TRAVIS_BUILD_DIR/www)
tar -zcvf $TRAVIS_BUILD_DIR"/www/client.xstr.me-"$TRAVIS_TAG".tar.gz" $TRAVIS_BUILD_DIR"/www"

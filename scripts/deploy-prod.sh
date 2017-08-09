#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit -1
}
[ -z $FTP_PASSWORD ] && abort "FTP_PASSWORD is undefined"
[ -z $FTP_USER ] && abort "FTP_USER is undefined"
[ -z $FTP_SERVER ] && abort "FTP_SERVER is undefined"
lftp -u $FTP_USER,$FTP_PASSWORD $FTP_SERVER  -e "rm -r www; exit";
echo "old files deleted"
find www -type f  -exec curl  --ftp-create-dirs -T {} -u $FTP_USER:$FTP_PASSWORD $FTP_SERVER/{} \;
echo "finishied upload"

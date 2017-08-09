#!/bin/bash
lftp -u $FTP_USER,$FTP_PASSWORD $FTP_SERVER  -e "rm -r www; exit";
echo "old files deleted"
find www -type f  -exec curl  --ftp-create-dirs -T {} -u $FTP_USER:$FTP_PASSWORD $FTP_SERVER/{} \;
echo "finishied upload"

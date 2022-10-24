// returnType
//  Unpacked
// infer


#!/bin/bash
cd / root / backup / daily /
    DATE_YYYYMMDDHHMMSS=`date '+%Y%m%d%H%M%S'`
dailysql = $DATE_YYYYMMDDHHMMSS'_daily.sql'
password = 'password'echo "mysql dailysql dump start.."mysqldump - uroot - p$password--single - transaction databasename > ./ $dailysqlecho 'dumpfile : '$dailysqltar cvzf./ $dailysql'.tar.gz'./ $dailysqlrm./ $dailysqlecho 'compression file : './ $dailysql'.tar.gz'echo "mysql dailysql dump stop.."
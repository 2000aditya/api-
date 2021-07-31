const Pool = require('pg').Pool;


const pool = new Pool({
    user:'estkqtdq',
    password:'NVtkFLyArcHOpoOECaj7xaRp_RmYAFJK',
    host:"satao.db.elephantsql.com",
    port:5432,
    database:"estkqtdq"

});

module.exports =pool;

const knex = require ('../database/index')
const moment = require ('moment')

module.exports = {
    async registry (payload){
        try{
        const temp = parseFloat(JSON.parse(payload).temperatura)
        const time = moment().utc().format();
        console.log (temp);
        console.log (time);
        await knex ('nome-tabela-banco-de-dados').insert({
        temperatura:temp,
        timestamp: time
        })
        }
        catch(error){
        throw error
        }
    },

    async list (req,res){
        try{
         const results = await knex ('nome-tabela-banco-de-dados')
         return res.json(results) 
            }
            catch(error){
            throw error
            }
    }
}
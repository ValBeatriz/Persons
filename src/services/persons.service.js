const { models } = require('../libs/sequelize');

class PersonsService {

    constructor(){}

     async find(){
        const res = await models.Person.findAll() ;
        return res;
    }

     async findOne(id){
        const res = await models.Person.findByPk(id);
        return res;
    }

     async create(data){
        const res = await models.Person.create(data);
        return res;
    }
     async update(id, data){
        const person = await this.findOne(id);
        const res = await person.update(data);
        return res;
    }
    
    async delete(id){
        const person = await this.findOne(id);
        await person.destroy();
        return { deleted: true } ;
    }
    
}

module.exports = PersonsService;
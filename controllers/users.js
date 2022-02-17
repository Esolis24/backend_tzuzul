const db = require("../database");
class UserController {
    async create(user){
        const result = await db.insert('users',user)
        return result
    }
    async edit(id,user){
        const results = await db.query("UPDATE users SET ? WHERE id=?", [user, id]);
        return results
    }
    async readAll(){
        const users = await db.query("SELECT * FROM users")
        return users
    }
    async read(id){
        const user= await db.query("SELECT * FROM users WHERE id=?",[id])
        return user
    }
    async del(id){
        const results = await db.query("DELETE FROM users WHERE id=?", [id]);
        return results;
    }
}

module.exports=UserController
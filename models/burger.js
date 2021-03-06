var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res)
        })
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", condition, function(res){
            cb(res)
        })
    },
    delete: function(condition, cb) {
        orm.delete("cats", condition, function(res){
            cb(res);
        })
    }
};

module.exports = burger;
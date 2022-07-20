const DB = require("./db.json");

const getRecordForWorkout = (workoutId) =>{
    try{
        const record = DB.records.filter((record) => record.workout === workoutId);
        if(!record){
            throw{status:400,message:`Cannot find workout with the id ${workoutId}, please try again.`};
        }
        return record;
    }catch(error){
        throw{status:error?.status || 500, message:error?.message || error};
    }
};

module.exports = {getRecordForWorkout};
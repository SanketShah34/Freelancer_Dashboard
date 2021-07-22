const mongoose = require ('mongoose')

const invoiceSchema = {
    invId : {type:Number, required:true},
    projectName:{type:String, required:true},
    clientName:{type:String, required:true},
    generatedDate:{type:Date, required:true},
    dueDate:{type:Date, required:true},
    taskendDate:{type:Date, required:true},
    hourlyRate:{type:Number, required:true},
    totalCost:{type:Number},
    paymentStatus:{type:String, required:true},
    tags:[{
        description:{type:String, required:true},
        hours:{type:Number, required:true},
        total:{type:Number, required:true},
    }]
}

const invoices = mongoose.model('invoices', invoiceSchema);

module.exports = invoices;
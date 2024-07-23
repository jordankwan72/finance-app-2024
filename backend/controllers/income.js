const IncomeSchema = require("../models/incomeModel")


exports.addIncome = async (request, response) => {
    const {title, amount, category, description, date} = request.body
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
    })
    try{
        if(!title || !category || !description || !date){
            return response.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return response.status(400).json({message: 'Must be a positive number!'})
        }
        await income.save()
        response.status(200).json({message: 'Income Added'})
    }
    catch(error){
        console.log(error)
        response.status(500).json({message: 'Server Error'})
 
    }


}

exports.getIncomes = async (request, response) => {
    try{
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        response.status(200).json(incomes)
    }  
    catch(error){
        response.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (request, response) => {
    const {id} = request.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            response.status(200).json({message: 'Income Deleted'})
        })
        .catch((error)=> {
            response.status(500).json({message: 'Server Error'})
        })
}
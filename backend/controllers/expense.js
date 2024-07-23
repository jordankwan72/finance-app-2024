const ExpenseSchema = require("../models/expenseModel")


exports.addExpense = async (request, response) => { 
    const {title, amount, category, description, date} = request.body
    const expense = ExpenseSchema({
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
        await expense.save()
        response.status(200).json({message: 'Expense Added'})
    }
    catch(error){
        console.log(error)
        response.status(500).json({message: 'Server Error'})
 
    }


}

exports.getExpenses = async (request, response) => {
    try{
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        response.status(200).json(expenses)
    }  
    catch(error){
        response.status(500).json({message: 'Server Error'})
    }
}

exports.deleteExpense = async (request, response) => {
    const {id} = request.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            response.status(200).json({message: 'Expense Deleted'})
        })
        .catch((error)=> {
            response.status(500).json({message: 'Server Error'})
        })
}
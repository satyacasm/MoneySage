const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {isEmail}=require('validator');

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,'Please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please Enter a valid email']
    },
    password:{
        type:String,
        required:[true,'Please enter an password'],
        minlength:[6,'Minimum password length is 6 characters']

    },
    balance: {
        type: Number,
        default: 0,
      },
      savingsGoal: {
        type: Number,
        default: 0,
      },
      
      transactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Transaction',
        },
      ],
      categories: [
        {
          type: String,
          
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      }
});

module.exports=User=mongoose.model('user',UserSchema);
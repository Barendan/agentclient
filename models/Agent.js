const mongoose = require('mongoose')

// {
//     "_id": 101, 
//     "name": "John Doe",
//     "address": "123 Main Street #200",
//     "city": "Seattle",
//     "state": "WA",
//     "zipCode": "98101",
//     "tier": 2,
//     "phone":{
//         "primary": "206-221-2345",
//         "mobile": "206-555-3211"
//     }
// }

const AgentSchema = new mongoose.Schema({
	_id: { type: Number },
	name: {
		type: String,
		trim: true,
		required: [true, 'Please enter a name']
	},
	address: {
		type: String,
		required: [true, 'Please enter an address']
	},
	city: {
		type: String,
		trim: true,
		required: [true, 'Please enter the city']
	},
	state: {
		type: String,
		trim: true,
		required: [true, 'Please enter the state']
	},
	zipCode: {
		type: String,
		trim: true,
		minLength: 5,
		required: [true, 'Please enter a zipcode']
	},
	tier: {
		type: Number,
		required: [true, 'Please enter a positive number']
	},
	phone: {
		primary: {
			type: String,
			trim: true,
			required: [true, 'Please enter primary number']
		},
		mobile: {
			type: String,
			trim: true,
			required: [true, 'Please enter mobile number']
		}
	}
})

module.exports = mongoose.model('Agent', AgentSchema)

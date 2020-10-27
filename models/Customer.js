const mongoose = require('mongoose')

// {
//     "_id": 5054,
//     "agent_id": 1987,
//     "guid": "54fc8606-0630-42f9-9e3c-716772df09bf",
//     "isActive": true,
//     "balance": "$1,578.40",
//     "age": 57,
//     "eyeColor": "blue",
//     "name": {
//         "first": "Neva",
//         "last": "Calderon"
//     },
//     "company": "ISOTRONIC",
//     "email": "neva.calderon@isotronic.info",
//     "phone": "+1 (985) 502-2956",
//     "address": "573 Turner Place, Yukon, Federated States Of Micronesia, 762",
//     "registered": "Wednesday, January 31, 2018 12:40 PM",
//     "latitude": "76.989498",
//     "longitude": "26.410977",
//     "tags": [
//         "eiusmod",
//         "reprehenderit",
//         "labore",
//         "ut",
//         "dolor"
//     ]
// }

const CustomerSchema = new mongoose.Schema({
	_id: { type: Number },
	agent_id: {
		type: Number,
		trim: true,
		required: [true, 'Please enter an agent id']
	},
	guid: {
		type: String,
		trim: true,
		required: [true, 'Please enter an guid']
	},
	isActive: {
		type: Boolean,
		required: [true, 'Please specify true or false']
	},
	balance: {
		type: String,
		trim: true,
		required: [true, 'Please enter a balance']
	},
	age: {
		type: Number,
		trim: true,
		maxLength: 3,
		required: [true, 'Please enter an age']
	},
	eyeColor: {
		type: String,
		required: [true, 'Please enter a color']
	},
	name: {
		first: {
			type: String,
			trim: true,
			required: [true, 'Please enter first name']
		},
		last: {
			type: String,
			trim: true,
			required: [true, 'Please enter last name']
		}
	},
	company: {
		type: String,
		trim: true,
		required: [true, 'Please enter company name']
	},
	email: {
		type: String,
		trim: true,
		required: [true, 'Please enter a valid email']
	},
	phone: {
		type: String,
		trim: true,
		minLength: 10,
		required: [true, 'Please enter a phone number']
	},
	address: {
		type: String,
		required: [true, 'Please enter an address']
	},
	registered: {
		type: Date,
		default: Date.now
	},
	latitude: {
		type: String,
		required: [true, 'Please enter a number']
	},
	longitude: {
		type: String,
		required: [true, 'Please enter a number']
	},
	tags: {
		type: Array
	}
})

module.exports = mongoose.model('Customer', CustomerSchema)

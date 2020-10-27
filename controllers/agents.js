const Agent = require('../models/Agent')
const Customer = require('../models/Customer')

// @desc Get all agents
// @route GET /api/v1/agents
// @access Public
exports.getAgents = async (req,res, next) => {
	try {
		const agents = await Agent.find()

		return res.status(200).json({
			success: true,
			count: agents.length,
			data: agents
		})
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		})
	}
}

// @desc Add an agent
// @route POST /api/v1/agents
// @access Public
exports.addAgent = async (req,res, next) => {
	try {
		const agent = await Agent.create(req.body)

		return res.status(201).json({
			success: true,
			data: agent
		})
	} catch (err) {
		if (err.name === 'ValidationError') {
			const messages = Object.values(err.errors).map(val => val.message)
			
			return res.status(400).json({
				success: false,
				error: messages
			})
		} else {
			return res.status(500).json({
				success: false,
				error: 'Server Error'
			})
		}
	}
}

// @desc Get agent by id
// @route GET /api/v1/agents/:id
// @access Public
exports.getAgent = async (req,res, next) => {
	try {
		// console.log("here",await Agent.find({name: 'Bob Loblaw'}))
		const agent = await Agent.findById(req.params.id)

		return res.status(200).json({
			success: true,
			data: agent
		})
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		})
	}
}

// @desc Update an agent by id
// @route POST /api/v1/agents/:id
// @access Public
exports.updateAgent = async (req,res, next) => {
	const {
	    name,
	    address,
	    city,
	    state,
	    zipCode,
	    tier,
	    phone,
	} = req.body

	try {
		const agent = await Agent.findById(req.params.id)

		if (agent) {
			agent.name = name
		    agent.address = address
		    agent.city = city
		    agent.state = state
		    agent.zipCode = zipCode
		    agent.tier = tier
		    agent.phone = phone

			const updatedAgent = await agent.save()
			return res.status(200).json({
				success: true,
				data: updatedAgent
			})
		} else {
			return res.status(404).json({
				success: false,
				error: 'No agent found'
			})
		}
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		})
	}
}


// *********************************************************
// CUSTOMERS

// @desc Get all agent customers
// @route GET /api/v1/agents/:id/customers
// @access Public
exports.getAgentCustomers = async (req,res, next) => {
	const agentId = req.params.id
	try {
		const customers = await Customer.find({ agent_id: agentId})

		return res.status(200).json({
			success: true,
			count: customers.length,
			data: customers
		})
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		})
	}
}

// @desc Add agent customer
// @route POST /api/v1/agents/:id/customers
// @access Public
exports.addAgentCustomer = async (req,res, next) => {
	try {
		const {
		    isActive,
		    balance,
		    age,
		    eyeColor,
		    name,
		    company,
		    email,
		    phone,
		    address,
		    registered,
		    latitude,
		    longitude,
		    tags
		} = req.body

		const customer = await Customer.create(req.body)

		return res.status(201).json({
			success: true,
			data: customer
		})
	} catch (err) {
		if (err.name === 'ValidationError') {
			const messages = Object.values(err.errors).map(val => val.message)
			
			return res.status(400).json({
				success: false,
				error: messages
			})
		} else {
			return res.status(500).json({
				success: false,
				error: 'Server Error'
			})
		}
	}
}

// @desc Get agent customer by id
// @route GET /api/v1/agents/:id/customers/:id
// @access Public
exports.getAgentCustomer = async (req,res, next) => {
	try {
		const customer = await Customer.findById(req.params.id)

		return res.status(200).json({
			success: true,
			data: customer
		})
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		})
	}
}

// @desc Update agent customer by id
// @route POST /api/v1/agents/:id/customers/:id
// @access Public
exports.updateAgentCustomer = async (req,res, next) => {
	const {
		agent_id,
		guid,
	    isActive,
	    balance,
	    age,
	    eyeColor,
	    name,
	    company,
	    email,
	    phone,
	    address,
	    registered,
	    latitude,
	    longitude,
	    tags
	} = req.body

	try {
		const customer = await Customer.findById(req.params.id)

		if (customer) {
			customer.agent_id = agent_id
			customer.guid = guid
		    customer.isActive = isActive
		    customer.balance = balance 
		    customer.age = age
		    customer.eyeColor = eyeColor
		    customer.name = name
		    customer.company = company
		    customer.email = email
		    customer.phone = phone
		    customer.address = address
		    customer.registered = registered
		    customer.latitude = latitude
		    customer.longitude = longitude
		    customer.tags = tags

			const updatedCustomer = await customer.save()
			return res.status(200).json({
				success: true,
				data: updatedCustomer
			})
		} else {
			return res.status(404).json({
				success: false,
				error: 'No customer found'
			})
		}
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		})
	}
}


// @desc Delete agent customer by id
// @route DELETE /api/v1/agents/:id/customers/:id
// @access Public
exports.deleteAgentCustomer = async (req,res, next) => {
	try {
		const customer = await Customer.findById(req.params.id)

		if(!customer) {
			return res.status(404).json({
				success: false,
				error: 'No customer found'
			})
		}
		await customer.remove()
		return res.status(200).json({
			success: true,
			data: {}
		})
		
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		})
	}
}
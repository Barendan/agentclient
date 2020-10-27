const express = require('express')
const router = express.Router()
const { 
	getAgents,
	addAgent,
	getAgent,
	updateAgent,
	getAgentCustomers,
	addAgentCustomer,
	getAgentCustomer,
	updateAgentCustomer,
	deleteAgentCustomer
} = require('../controllers/agents')

router
	.route('/')
	.get(getAgents)
	.post(addAgent)

router
	.route('/:id')
	.get(getAgent)
	.put(updateAgent)

router
	.route('/:id/customers')
	.get(getAgentCustomers)
	.post(addAgentCustomer)

router
	.route('/:id/customers/:id')
	.get(getAgentCustomer)
	.put(updateAgentCustomer)
	.delete(deleteAgentCustomer)


module.exports = router;
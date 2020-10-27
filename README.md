INSTRUCTIONS ON HOW TO RUN

CLONE GIT REPO:
	https://github.com/Barendan/agentclient.git

INSTALL MODULES
	cd agentclient 
	npm install
 
RUN CLIENT AND SERVER
	npm run dev
 
RUN SERVER ONLY
	npm run server
 
RUN CLIENT ONLY
	npm run client

ACCESSING CLIENT WEBPAGE
	Type localhost:3000 in web browser



ALL SERVER ROUTES
		
	// @desc Get all agents
	// @route GET /api/v1/agents

	// @desc Add an agent
	// @route POST /api/v1/agents

	// @desc Get agent by id
	// @route GET /api/v1/agents/:id

	// @desc Update an agent by id
	// @route POST /api/v1/agents/:id

	// @desc Get all agent customers
	// @route GET /api/v1/agents/:id/customers

	// @desc Add agent customer
	// @route POST /api/v1/agents/:id/customers

	// @desc Get agent customer by id
	// @route GET /api/v1/agents/:id/customers/:id

	// @desc Update agent customer by id
	// @route POST /api/v1/agents/:id/customers/:id

	// @desc Delete agent customer by id
	// @route DELETE /api/v1/agents/:id/customers/:id


ASSUMPTIONS
	This is an agent and customer directory showing all information on agents and their respective clientele.


QUESTIONS
	What is the guid value and how is it determined?
	What purpose do the longitude/latitude coordinates provide?
		Is there a better way to get them from the client?
	Do the id's follow any specific pattern?

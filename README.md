INSTRUCTIONS ON HOW TO RUN
-------------------------------------------
<br/><br/>
CLONE GIT REPO:<br/>
	https://github.com/Barendan/agentclient.git <br/><br/>

INSTALL MODULES<br/>
	cd agentclient<br/>
	npm install<br/><br/>
 
RUN CLIENT AND SERVER<br/>
	npm run dev<br/><br/>
 
RUN SERVER ONLY<br/>
	npm run server<br/><br/>
 
RUN CLIENT ONLY<br/>
	npm run client<br/><br/>

ACCESSING CLIENT WEBPAGE<br/>
	Type localhost:3000 in web browser<br/><br/>

<br/><br/>

ALL SERVER ROUTES<br/>
	@desc Get all agents
	@route GET /api/v1/agents

	@desc Add an agent
	@route POST /api/v1/agents

	@desc Get agent by id
	@route GET /api/v1/agents/:id

	@desc Update an agent by id
	@route POST /api/v1/agents/:id

	@desc Get all agent customers
	@route GET /api/v1/agents/:id/customers

	@desc Add agent customer
	@route POST /api/v1/agents/:id/customers

	@desc Get agent customer by id
	@route GET /api/v1/agents/:id/customers/:id

	@desc Update agent customer by id
	@route POST /api/v1/agents/:id/customers/:id

	@desc Delete agent customer by id
	@route DELETE /api/v1/agents/:id/customers/:id

<br/><br/>
ASSUMPTIONS<br/>
	This is an agent and customer directory showing all information on agents and their respective clientele.<br/><br/>


QUESTIONS<br/>
	What is the guid value and how is it determined?<br/>
	What purpose do the longitude/latitude coordinates provide?<br/>
		Is there a better way to get them from the client?<br/>
	Do the id's follow any specific pattern?<br/>

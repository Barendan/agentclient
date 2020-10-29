import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

export const AgentList = () => {
	const { agentList, getAgents, addAgent, getAgentDetails } = useContext(GlobalContext)

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipcode] = useState('');
    const [tier, setTier] = useState(0);
    const [phone, setPhone] = useState({ primary: '', mobile: ''});

    const handleChangePhone = e => {
      const { name, value } = e.target

      setPhone(prevState => ({
        ...prevState,
        [name]: value
      }))
    }

	useEffect(() => {
	  getAgents()
	}, [])

	const clearAgentForm = () => {
	  setName('')
	  setAddress('')
	  setCity('')
	  setState('')
	  setZipcode('')
	  setTier(0)
	  setPhone({primary: '', mobile:''})
	}

	const createAgent = e => {
	  e.preventDefault()

	  const newAgent = {
	  	_id: +(Math.random()*10000).toFixed(0),
	  	name,
	  	address,
	  	city,
	  	state,
	  	zipCode,
	  	tier: +tier,
	  	phone
	  }
	  addAgent(newAgent)
	  clearAgentForm()
	}

	const renderForm = () => (
		<div className="form-container">
		  <h2 className="form-title"> Add New Agent Form </h2>
		  <form onSubmit={createAgent}>
			<div className="form-control">
	          <label htmlFor="name">Name</label>
	          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter first and last name..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="address">Address</label>
	          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter an address..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="city">City</label>
	          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter an city..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="state">State</label>
	          <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter a state..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="zipcode">Zipcode</label>
	          <input type="text" value={zipCode} onChange={(e) => setZipcode(e.target.value)} placeholder="Enter a zipcode..." />
	        </div>
	        <div className="form-control">
	          <label htmlFor="tier">
	          	Tier <br />
	          </label>
	          <input type="number" value={tier} onChange={(e) => setTier(e.target.value)} placeholder="Enter amount..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="primary">Primary Phone</label>
	          <input type="text" name="primary" value={phone.primary} onChange={handleChangePhone} placeholder="Enter a phone number..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="mobile">Mobile Phone</label>
	          <input type="text" name="mobile" value={phone.mobile} onChange={handleChangePhone} placeholder="Enter a mobile number..." />
	        </div>
	        <button className="btn">Add agent</button>
		  </form>
		</div>
	)

	return (
	  <>
	    <ul className="list">
	      <h2>List of Agents</h2>
		  { agentList.map( agent => (
		    <Link key={agent._id} 
		    	  onClick={ () => getAgentDetails(agent._id) } 
		    	  to={`/agents/${agent._id}`}
		    >
		      <li>
			  	{agent.name}
		      </li>
		    </Link>
		  ))}
	    </ul>
		{ renderForm() }
	  </>
	)
}

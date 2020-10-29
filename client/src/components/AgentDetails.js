import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

export const AgentDetails = (object) => {
	const { agent, getAgentDetails, updateAgentDetails, getCustomers } = useContext(GlobalContext)
	const id = object.match.params.id
	// console.log("begin",useContext(GlobalContext))
	// console.log("begin2",useContext(GlobalContext))

	const [isUpdating, setUpdating] = useState(false)
	const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipcode] = useState('')
    const [tier, setTier] = useState('')
    const [phone, setPhone] = useState({ primary: '', mobile: ''})

	useEffect(() => {
	  if (agent) {
	  	setName(agent.name)
	  	setAddress(agent.address)
	  	setCity(agent.city)
	  	setState(agent.state)
	  	setZipcode(agent.zipCode)
	  	setTier(agent.tier)
	  	setPhone({primary: agent.phone.primary, mobile: agent.phone.mobile})
	  } else {
	  	getAgentDetails(id)
	  }
	}, [agent])


    const handleChangePhone = e => {
      const { name, value } = e.target

      setPhone(prevState => ({
        ...prevState,
        [name]: value
      }))
    }

    const viewDetails = () => (
		<>
	    	<h3>{agent.name}'s Agent Details</h3>
			<ul className="list">
	          <label>Name</label>
	          	<li>{name}</li>
	          <label>Address</label>
	          	<li>{address}</li>
	          <label>City</label>
	          	<li>{city}</li>
	          <label>State</label>
	          	<li>{state} </li>
	          <label>Zipcode</label>
	          	<li>{zipCode} </li>
	          <label> Tier <br /></label>
	          	<li>{tier} </li>
	          <label>Primary Phone</label>
	          	<li>{phone.primary}</li>
	          <label>Mobile Phone</label>
	          	<li>{phone.mobile} </li>
	        </ul>
	        <button className="btn" onClick={ () => setUpdating(true) }>Edit Agent Info</button>
		</>
    )

	const editDetails = () => (
		<>
		  <h3> Editting {agent.name}</h3>
		  <form onSubmit={updateAgentDetails}>
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
	            (number between 1-9)</label>
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
	        <button className="btn" onClick={ () => setUpdating(false) }>Update agent</button>
		  </form>
		</>
	)

	const renderCustomers = () => (
		id ?
			<Link onClick={ () => getCustomers(id)}
				  to={`/agents/${id}/customers`}>
			    <button className="btn">List of Customers</button>
			</Link>
		: null
	)

	return (
	  <div className="details">
	    { agent ? isUpdating ? editDetails() : viewDetails() : "Loading Data..." }
	    { renderCustomers() }
        <button className="btn" onClick={ () => object.history.goBack() }>Go Back</button>
	  </div>
	)
}

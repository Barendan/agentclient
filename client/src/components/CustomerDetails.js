import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const CustomerDetails = (object) => {
	const { customer, getCustomerDetails, updateCustomerDetails } = useContext(GlobalContext)

	const [isUpdating, setUpdating] = useState(false)
	const [agentId, setAgentId] = useState(0)
	const [guid, setGuid] = useState('')
	const [isActive, setActive] = useState(true)
	const [balance, setBalance] = useState('')
	const [age, setAge] = useState(0)
	const [eyeColor, setEyeColor] = useState('')
	const [name, setName] = useState({first: '', last: ''})
	const [company, setCompany] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')
	const [tags, setTags ] = useState([])
	let parseDate = ''

	useEffect(() => {
	  if (customer) {
		setAgentId(customer.agent_id)
	    setGuid(customer.guid)
	    // setActive(customer.isActive)
	    setBalance(customer.balance)
	    setAge(customer.age)
	    setEyeColor(customer.eyeColor)
	    setName({first: customer.name.first, last: customer.name.last})
	    setCompany(customer.company)
	    setEmail(customer.email)
	    setPhone(customer.phone)
	    setAddress(customer.address)
	    setLatitude(customer.latitude)
	    setLongitude(customer.longitude)
	    setTags([customer.tags])
	  } else {
		const c_id = object.match.params.id
	  	getCustomerDetails(agentId, c_id)
	  }
	}, [customer])

	const handleChangeName = e => {
      const { name, value } = e.target

      setName(prevState => ({
        ...prevState,
        [name]: value
      }))
    }


    const viewDetails = () => (
		<>
    	  <h2><center>{name.first} {name.last}'s Details</center></h2>
		  <ul className="list">
			<label>Registered</label>
			  <li>{customer.registered}</li>
			<label>id</label>
			  <li>{customer._id}</li> 
			<label>agent id</label>
			  <li>{agentId} </li>			
			<label>guid</label>
			  <li>{guid} </li>		
			<label>Is Active</label>
			  <li>{isActive.toString()} </li>
			<label>Name</label>
			  <li>{name.first} {name.last}</li>
			<label>Address</label>
			  <li>{address}</li>
			<label>Company</label>
			  <li>{company}</li>
			<label>Age</label>
			  <li>{age}</li>
			<label>Eye Color</label>
			  <li>{eyeColor} </li>
			<label>Phone</label>
			  <li>{phone}</li>
			<label>Email</label>
			  <li>{email}</li>
			<label>Latitude, Longitude</label>
			  <li>{latitude}, {longitude}</li>
			<label>Tags</label>
			  <li>{tags.toString()}</li>
          </ul>
          <button className="btn" onClick={ () => setUpdating(true) }>Edit Customer Info</button>
		</>
    )

    const editDetails = () => (
    	<>
    	  <h3>Editing {customer.name.first} {customer.name.last}'s Details</h3>
	   	  <form onSubmit={updateCustomerDetails}>
			<div className="form-control">
	          <label htmlFor="balance">Balance</label>
	          <input type="text" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="Enter the balance amount..." />
	        </div>
	        <div className="form-control">
	          <label htmlFor="age"> Age </label>
	          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age (number)..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="eyeColor">Eye Color</label>
	          <input type="text" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} placeholder="Enter eye color..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="first">First Name</label>
	          <input type="text" name="first" value={name.first} onChange={handleChangeName} placeholder="Enter first name..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="last">Last Name</label>
	          <input type="text" name="last" value={name.last} onChange={handleChangeName} placeholder="Enter last name..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="company">Company</label>
	          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter a company..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="email">Email</label>
	          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter an email..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="phone">Phone</label>
	          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="address">Address</label>
	          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter an address..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="latitude">Latitude</label>
	          <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder="Enter a latitude..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="longitude">Longitude</label>
	          <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder="Enter a longitude..." />
	        </div>
			<div className="form-control">
	          <label htmlFor="tags">Tags</label>
	          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Enter some tags (separated by commas)..." />
	        </div>
	        <button className="btn" onClick={ () => setUpdating(false) }>Update customer</button>
		  </form>
    	</>
    )

	return (
	  <div className="details">
	    { customer ? isUpdating ? editDetails() : viewDetails() : "Loading Data..." }
          <button className="btn" onClick={ () => object.history.goBack() }>Go Back</button>
	  </div>
	)
}

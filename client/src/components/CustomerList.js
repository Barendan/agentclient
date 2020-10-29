import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

export const CustomerList = (object) => {
	const { 
		customerList, 
		getCustomers, 
		addCustomer, 
		getCustomerDetails,
		deleteCustomer
	} = useContext(GlobalContext)

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

	const a_id = object.match.params.id

	useEffect( () => {
		if (customerList.length < 1){
			getCustomers(a_id)
		}
	},[])

	const clearCustomerForm = () => {
      setGuid('')
      setActive(true)
      setBalance('')
      setAge(0)
      setEyeColor('')
      setName({first: '', last: ''})
      setCompany('')
      setEmail('')
      setPhone('')
      setAddress('')
      setLatitude('')
      setLongitude('')
      setTags([])
	}

	const handleChangeName = e => {
      const { name, value } = e.target

      setName(prevState => ({
        ...prevState,
        [name]: value
      }))
    }

	const createCustomer = e => {
	  e.preventDefault()

	  const newCustomer = {
		_id: +(Math.random()*10000).toFixed(0),
	    agent_id: +a_id,
	    guid,
	    isActive,
	    balance,
	    age: +age,
	    eyeColor,
	    name,        
	    company,
	    email,
	    phone,
	    address,
	    registered: new Date().toString(),
	    latitude,
	    longitude,
	    tags: [tags],
	  }
	  addCustomer(a_id,newCustomer)
	  clearCustomerForm()
	}

	const renderForm = () => (
		<div className="form-container">
		  <h2 className="form-title"> Add New Customer Form </h2>
	   		<form onSubmit={createCustomer}>
			  <div className="form-control">
	            <label htmlFor="balance">Balance</label>
	            <input type="text" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="Enter the balance amount..." />
	          </div>
			  <div className="form-control">
	            <label htmlFor="guid">Guid</label>
	            <input type="text" value={guid} onChange={(e) => setGuid(e.target.value)} placeholder="Enter the guid..." />
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
	        <button className="btn">Add customer</button>
		</form>
		</div>
	)

	const extractCity = (address) => {
		const addressArr = address.split(',')
		return (
			addressArr[1]
		)
	}

	const extractState = (address) => {
		let addressArr = address.split(',')
		return (
			addressArr[2]
		)
	}

	return (
	  <>
	    <ul className="list">
	      <h2>List of Customers</h2>
		  { customerList.map( customer => (
		    <Link key={customer._id} 
		    	  onClick={ () => getCustomerDetails(a_id,customer)}
		    	  // onClick={ () => console.log(agentId,customer)}
		    	  to={`/agents/${a_id}/customers/${customer._id}`}>
		      <li>
			    {customer.name.last}, {customer.name.first}<br/>
			    <small>{extractCity(customer.address)}, {extractState(customer.address)}</small>
			    <button className="delete-btn"
			    		onClick={() => deleteCustomer(customer._id)}
			    > x </button>
		      </li>
		    </Link>
		  ))}
	    </ul>
	    {renderForm()}
	    <div className="details">
        	<button className="btn" onClick={ () => object.history.goBack() }>Go Back</button>
	  	</div>
	  </>
	)
}

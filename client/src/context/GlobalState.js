import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial State
const initialState = {
	agentList: [],
	customerList:[],
	agent: null,
	customer: null,
	error: null,
	loading: true
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [state,dispatch] = useReducer(AppReducer, initialState)

	// Actions
	async function getAgents() {
		try {
			const res = await axios.get('/api/v1/agents/')

			dispatch({
				type: 'GET_AGENTS',
				payload: res.data.data
			})
		} catch (err) {
			dispatch({
				type: 'AGENT_ERROR',
				payload: err.response.data.error
			})
		}
	}

	async function addAgent(agent) {
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}

		try {
			const res = await axios.post('/api/v1/agents', agent, config)

			dispatch({
				type: 'ADD_AGENT',
				payload: res.data.data
			})
		} catch (err) {
			dispatch({
				type: 'AGENT_ERROR',
				payload: err.response.data.error
			})
		}
	}
	
	async function getAgentDetails(id) {
		try {
			const res = await axios.get(`/api/v1/agents/${id}`)

			dispatch({
				type: 'GET_AGENT_DETAILS',
				payload: res.data.data
			})
		} catch (err) {
			dispatch({
				type: 'AGENT_ERROR',
				payload: err.response.data.error
			})
		}
	}

	async function updateAgentDetails(agent) {
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}
		
		try {
			const res = await axios.put(`/api/v1/agents/${agent._id}`, agent, config)

			dispatch({
				type: 'UPDATE_AGENT_DETAILS',
				payload: res.data.data
			})
		} catch (err) {
			dispatch({
				type: 'AGENT_ERROR',
				payload: err.response.data.error
			})
		}
	}

	async function getCustomers(id) {
		try {
			const res = await axios.get(`/api/v1/agents/${id}/customers`)

			dispatch({
				type: 'GET_CUSTOMERS',
				payload: res.data.data
			})
		} catch (err) {
			dispatch({
				type: 'CUSTOMER_ERROR',
				payload: err.response.data.error
			})
		}
	}

	async function addCustomer(id, customer) {
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}

		try {
			const res = await axios.post(`/api/v1/agents/${id}/customers`, customer, config)

			dispatch({
				type: 'ADD_CUSTOMER',
				payload: res.data.data
			})
		} catch (err) {
			dispatch({
				type: 'CUSTOMER_ERROR',
				payload: err.response.data.error
			})
		}
	}

	async function getCustomerDetails(id, c_id) {
		try {
			const res = await axios.get(`/api/v1/agents/${id}/customers/${c_id}`)

			dispatch({
				type: 'GET_CUSTOMER_DETAILS',
				payload: res.data.data
			})
		} catch (err) {
			dispatch({
				type: 'CUSTOMER_ERROR',
				payload: err.response.data.error
			})
		}
	}

	async function updateCustomerDetails(id, customer) {
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}

		try {
			const res = await axios.post(`/api/v1/agents/${id}/customers/${customer.id}`, customer, config)

			dispatch({
				type: 'UPDATE_CUSTOMER_DETAILS',
				payload: res.data.data
			})
		} catch (err) {
			dispatch({
				type: 'CUSTOMER_ERROR',
				payload: err.response.data.error
			})
		}
	}

	async function deleteCustomer(id, c_id) {
		try {
			await axios.delete(`/api/v1/agents/${id}/customers/${c_id}`)

			dispatch({
				type: 'DELETE_CUSTOMER',
				payload: id
			})
		} catch (err) {
			dispatch({
				type: 'CUSTOMER_ERROR',
				payload: err.response.data.error
			})
			console.log("here", err.response.data.error)
		}
	}

	return (<GlobalContext.Provider value={{
		agentList:state.agentList,
		customerList:state.customerList,
		agent:state.agent,
		customer:state.customer,
		error: state.error,
		loading: state.loading,
		getAgents,
		addAgent,
		getAgentDetails,
		updateAgentDetails,
		getCustomers,
		addCustomer,
		getCustomerDetails,
		updateCustomerDetails,
		deleteCustomer
	}}>
		{children}
	</GlobalContext.Provider>)
}
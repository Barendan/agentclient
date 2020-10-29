export default (state,action) => {
  switch(action.type) {
	case 'GET_AGENTS':
	  return {
		...state,
		loading: false,
		agentList: action.payload
	  }
	case 'ADD_AGENT':
	  return {
	  	...state,
	  	agentList: [...state.agentList, action.payload]
	  }
	case 'GET_AGENT_DETAILS':
	  return {
		...state,
		loading: false,
		agent: action.payload
	  }
	case 'UPDATE_AGENT_DETAILS':
	  return {
	  	...state,
	  	loading: false,
	  	agent: action.payload
	  }
	case 'GET_CUSTOMERS':
	  return {
		...state,
		loading: false,
		customerList: action.payload
	  }
	case 'ADD_CUSTOMER':
	  return {
	  	...state,
	  	customerList: [...state.customerList, action.payload]
	  }
	case 'GET_CUSTOMER_DETAILS':
	  return {
		...state,
		loading: false,
		customer: action.payload
	  }
	case 'UPDATE_CUSTOMER_DETAILS':
	  return {
	  	...state,
	  	loading: false,
	  	customer: action.payload
	  }
	case 'DELETE_CUSTOMER':
	  return {
	  	...state,
	  	customerList: state.customerList.filter(customer => customer._id !== action.payload)
	  }
	case 'AGENT_ERROR':
	  return {
	  	...state,
		error: action.payload
	  }  
	case 'CUSTOMER_ERROR':
	  return {
	  	...state,
		error: action.payload
	  }  
	default:
		return state
	}
}
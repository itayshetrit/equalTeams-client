import authReducer from './auth/auth-reducer'
import clientsReducer from './clients/clients-reducer'
import clientReducer from './clients/client-reducer'
import tablesReducer from './tables/tables-reducer'
import guestsReducer from './guests/guests-reducer'


export const reducers = {
	clientsReducer,
	clientReducer,
	authReducer,
	tablesReducer,
	guestsReducer
}

import { observer } from 'mobx-react-lite'
import { Route, Routes } from 'react-router-dom'
import { AnimePage } from '../page/Anime/AnimePage'
import { CounterPage } from '../page/CounterPage/CounterPage'

export const MainRoutes = observer(() => {
	return (
		<Routes>
			<Route path='/' element={<CounterPage />} />
			<Route path='/anime' element={<AnimePage />} />
		</Routes>
	)
})
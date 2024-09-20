import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { counterStore } from '../../store/counter-store/counter-store'
import s from './CounterPage.module.scss'

export const CounterPage = observer(() => {
	const { count, plusCount, minusCount } = counterStore
	const navigate = useNavigate()

	return (
		<div className={s.main}>
			<div className={s.container}>
				<span>{count}</span>
				<div className={s.btns}>
					<button
						onClick={plusCount}
					>
						+
					</button>

					<button
						onClick={minusCount}
					>
						-
					</button>

					<button onClick={() => navigate('/anime')}>К аниме листу</button>
				</div>
			</div>
		</div>
	)
})
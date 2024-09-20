
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { animeListApi } from '../../store/api/anime-list/anime-list'
import s from './AnimePage.module.scss'

export const AnimePage = observer(() => {
	const { animeList, getAnimeReleasesAction } = animeListApi

	useEffect(() => { getAnimeReleasesAction() }, [])

	return (
		<div className={s.main}>
			<div className={s.container}>
				{animeList?.state == 'pending' ? (
					<div className={s.loading}>
						<span>Loading...</span>
					</div>
				) : (
					<div className={s.list}>
						{/* @ts-ignore */}
						{animeList?.value?.data?.map((anime: any) => {
							return (
								<div
									key={anime?.id}
									className={s.card}
								>
									<span>Название: {anime?.name?.main}</span>
								</div>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
})
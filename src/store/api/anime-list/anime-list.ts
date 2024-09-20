
import { makeAutoObservable } from "mobx"
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
import { getAnimeReleases } from '../../../shared/api/anime/api'

class AnimeListApi {
	constructor() { makeAutoObservable(this) }

	animeList?: IPromiseBasedObservable<any> = undefined

	getAnimeReleasesAction = async () => {
		try { this.animeList = fromPromise(getAnimeReleases()) }
		catch (err) { console.log(err) }
	}

}

export const animeListApi = new AnimeListApi()
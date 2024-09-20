import { baseInstanceV1 } from '../base'

export const getAnimeReleases = async () => await baseInstanceV1.get('/anime/releases/latest')
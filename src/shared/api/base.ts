import axios from 'axios'
import { toast } from 'react-toastify'

function createInstance() {
	const instance = axios.create({
		baseURL: 'https://anilibria.top/api/v1',
	})

	instance.interceptors.request.use((req) => {
		console.log(req)
		return req
	})

	instance.interceptors.response.use((res) => {
		if (res?.status == 200) toast.success('Запрос прошел успешно')
		return res
	})



	return instance
}

export const baseInstanceV1 = createInstance()
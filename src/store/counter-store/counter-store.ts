import { makeAutoObservable, reaction } from 'mobx'

class CounterStore {
	constructor() {
		makeAutoObservable(this)
		reaction(() => [this.count], () => localStorage.setItem('count', this.count + ''))
	}

	count = localStorage.getItem('count') ? Number(localStorage.getItem('count')!) : 0

	plusCount = () => this.count = this.count + 1
	minusCount = () => this.count = this.count - 1

}

export const counterStore = new CounterStore()
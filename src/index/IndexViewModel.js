'use strict'
export * from '../scss/app.scss'
import $ from 'jquery'
import ko from 'knockout'
import { led } from './led'
import { ViewModelBase, Global } from 'chaudron'

export class IndexViewModel extends ViewModelBase {

    constructor() {
        super()
    }

    loadData() {
        return new Promise((resolve, reject) => {
            resolve()
        })
    }

    loadViewModel() {
        this.led = ko.observableArray(led)
    }

    send(el) {
        fetch(Global.api + 'led/' + el.code, {
            method: 'GET',
        })
    }

}
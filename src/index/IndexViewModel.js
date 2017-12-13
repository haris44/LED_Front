'use strict'
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
        this.ip = ko.observable()
        this.led = ko.observableArray(led)
    }

    send(_, el) {
        console.log(el)
        fetch("http://" + this.ip() + ':8000/led/' + el.code, {
            method: 'GET',
        })
    }

}
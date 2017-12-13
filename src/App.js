import { Framework } from 'chaudron'
import { IndexViewModel } from './index/IndexViewModel'
import {  config } from '../config'

window.onload = () => {

    const routes = [{
        base: 'index.html',
        surfaces: ['logo', 'content'],
        vms: [
            { 'index.html': IndexViewModel },
        ]
    }]

    const app = {
        viewModels: routes,
        entryPoint: 'index.html',
        config: { vmContainer: 'body' },
        global: [{
            api: () => config.API
        }]
    }
    Framework.create(app)
}
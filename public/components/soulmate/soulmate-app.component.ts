import {Component} from "@angular/core";        //path is resolved in systemjs.config.js
import {NavBarComponent} from '../navbar/nav-bar.component'   //path (and which file to use) is resolved in systemjs.config.js


@Component ({
selector: 'soulmate-app',
templateUrl: '../components/soulmate/soulmate-app.html',   //path is resolved in server.js
directives: [NavBarComponent]
})

export class SoulmateAppComponent{}
import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { faAngleLeft, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    
    public router: Router;

    public constructor(router: Router) {
        this.router = router;
    }

    public faAngleLeft: IconDefinition = faAngleLeft;
    public hide: boolean = true;

}

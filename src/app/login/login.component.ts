import { Component, OnInit } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates/lib/components/po-page-login';
import { PoDialogService } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exceededAttempts: number

  constructor(private poDialog: PoDialogService,private router: Router) { }

  ngOnInit(): void {
    this.exceededAttempts = 0;
  }

  loginSubmit(formData: PoPageLogin) {
   /* if (this.exceededAttempts <= 0) {
      this.poDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData)
      });
    }*/
    this.router.navigate(['home'])
  }

}

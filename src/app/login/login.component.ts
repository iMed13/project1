import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from '../shared/store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<{ login: any }>, private router: Router) { 
  }

  ngOnInit(): void {
  }

  login(path: string){
    if(path!=='dashboard'){
      this.store.dispatch(login({username: "imeda", password: '1996'}));
    }
    this.router.navigate(['/dashboard'])
  }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {

  constructor(private router:Router){}

 goTohelp(){
   this.router.navigate(['contact']);
 }

}

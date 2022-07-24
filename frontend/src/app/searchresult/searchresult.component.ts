import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {
  

  @Input() hero: any; 
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { agendaData } from './Posts';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  agendaData = null;
  constructor() { }

  ngOnInit() {
    this.agendaData = agendaData;
  }

}

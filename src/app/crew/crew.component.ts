import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }
  
  add(nameNew: string, first: boolean): void {
    let duplicate = false;
    for (let i of this.crew) {
      if (i['name'] === nameNew) {
        duplicate = true;
      }
    }
    if (!duplicate && nameNew) {
      this.crew.push({name: nameNew, firstMission: first});
    }
  }

  remove(member: object): void {
    this.crew.splice(this.crew.indexOf(member), 1);
  }

  edit(guy: object): void {
    this.memberBeingEdited = guy;
  }

  save(names: string, dude: object): void {
    let duplicate = false;
    for (let i of this.crew) {
      if (i['name'] === names) {
        duplicate = true;
      }
    }
    if ((!duplicate && names) || names === dude['name']) {
      dude['name'] = names;
      this.memberBeingEdited = null;
    }
  }

}

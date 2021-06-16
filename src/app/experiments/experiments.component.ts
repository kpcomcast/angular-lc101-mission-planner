import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  box: object[] = [
    {name: "Mars soil sample"},
    {name: "Plant growth in habitat"},
    {name: "Human bone density"}
  ];

  itemBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(nameNew: string): void {
    let duplicate = false;
    for (let i of this.box) {
      if (i['name'].toLowerCase() === nameNew.toLowerCase()) {
        duplicate = true;
      }
    }
    if (!duplicate && nameNew) {
      this.box.push({name: nameNew});
    }
  }

  remove(thing: object): void {
    this.box.splice(this.box.indexOf(thing), 1);
  }

  edit(equip: object): void {
    this.itemBeingEdited = equip;
  }

  save(names: string, dude: object): void {
    let duplicate = false;
    for (let i of this.box) {
      if (i['name'].toLowerCase() === names.toLowerCase()) {
        duplicate = true;
      }
    }
    if ((!duplicate && names) || names.toLowerCase() === dude['name'].toLowerCase()) {
      dude['name'] = names;
      this.itemBeingEdited = null;
    }
  }


}

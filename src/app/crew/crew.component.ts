import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    { name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', dog: "yes" },
    { name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', dog: "plant" },
    { name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', dog: "yes" },
    { name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', dog: "cat" },
    { name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', dog: "yes" },
    { name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', dog: "no" },
    { name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', dog: "yes" },
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(crewmate): void {
    if (this.crew.length < 3 && !this.crew.includes(crewmate)) {
      this.crew.push(crewmate);
    } else if (this.crew.includes(crewmate)) {
      this.crew.splice(this.crew.indexOf(crewmate), 1);
    }
  }
}

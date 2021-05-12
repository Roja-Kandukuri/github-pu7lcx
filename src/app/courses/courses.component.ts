import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List of courses';
  today: number = Date.now();
  courses = [
    {
      name: 'course1',
      description: 'mathematics',
      imgsrc:
        'https://raw.githubusercontent.com/Roja-Kandukuri/github-pu7lcx/feature/courses-images/src/assets/images/maths.png'
    },
    {
      name0: 'course2',
      description: 'physics',
      imgsrc:
        'https://raw.githubusercontent.com/Roja-Kandukuri/github-pu7lcx/feature/courses-images/src/assets/images/Phisics.png'
    },
    { name: 'course3', description: 'science', imgsrc: '' }
  ];

  constructor() {}

  ngOnInit(): void {}
}

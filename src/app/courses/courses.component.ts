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
    { name: 'course1', description: 'mathematics', imgsrc: '' },
    { name0: 'course2', description: 'physics' },
    { name: 'course3', description: 'science' }
  ];

  constructor() {}

  ngOnInit(): void {}
}

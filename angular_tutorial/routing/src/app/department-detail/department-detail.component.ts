import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
})
export class DepartmentDetailComponent implements OnInit {
  // departmentId cannot be null
  departmentId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // SNAPSHOT approach
    // let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.departmentId = id;

    // PARAMMAP observable approach
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;
    });
  }

  goPrevious() {
    let prevId = this.departmentId - 1;
    this.router.navigate(['/departments', prevId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    // absolute routing
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId;
    // optional routing
    // id will appear in the url, but will affect the actual routing

    // absolute routing
    // optional params included
    // this.router.navigate(['/departments', { id: selectedId }]);

    // relative routing
    // this means - go 1 step back and append optional params to it
    this.router.navigate(['../', { id: selectedId }]);
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
}

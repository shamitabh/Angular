import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  selectedId: any;

  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectedId = id;
    });
  }

  onSelect(department: any) {
    // absolute routing
    // this.router.navigate(['/departments', department.id]);

    // relative routing
    // this.route points to current url, so simply append department id to current url
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department: { id: any }) {
    return department.id === this.selectedId;
  }
}

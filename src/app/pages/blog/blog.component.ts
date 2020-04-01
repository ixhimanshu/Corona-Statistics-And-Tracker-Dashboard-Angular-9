import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  nameTimeline: string;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    // this.nameTimeline = this.route.snapshot.paramMap.get("name").toLowerCase();
  }

}

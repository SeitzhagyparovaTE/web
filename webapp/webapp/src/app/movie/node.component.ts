import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NodeService} from "./shared/NodeService";
import {Node} from "./shared/movie.entity";

@Component({
  selector: 'app-movie',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  nodes: Node[];
  ok: number;

  constructor(private nodeService: NodeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getMovies();
  }



  getMovies() {
      this.nodeService.getNodes().subscribe(
        nodes => this.nodes = nodes
      );
    }
}

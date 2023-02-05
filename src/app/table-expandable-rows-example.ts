import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { PeriodicService } from "./periodic.service";

/**
 * @title Table with expandable rows
 */
@Component({
  selector: "table-expandable-rows-example",
  styleUrls: ["table-expandable-rows-example.css"],
  templateUrl: "table-expandable-rows-example.html",
  animations: [
    trigger("detailCollapse", [
      transition(":leave", [
        style({ height: "*" }),
        animate(
          "225ms cubic-bezier(0.4, 0.0, 0.2, 1)",
          style({ height: "0px", minHeight: "inherit" })
        )
      ])
    ])
  ]
})
export class TableExpandableRowsExample implements OnInit {
  dataSource: Array<PeriodicElement> = new Array<PeriodicElement>();
  columnsToDisplay = ["name", "weight", "symbol", "position"];
  expandedElement: PeriodicElement | null;

  constructor(private periodicService: PeriodicService) {}

  public ngOnInit(): void {
    this.periodicService.getList().subscribe(list => {
      this.dataSource = list;
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

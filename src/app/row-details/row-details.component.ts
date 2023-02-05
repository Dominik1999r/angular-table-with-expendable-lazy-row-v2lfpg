import { animate, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { PeriodicService } from "../periodic.service";
import { PeriodicElement } from "../table-expandable-rows-example";

@Component({
  selector: "app-row-details",
  templateUrl: "./row-details.component.html",
  styleUrls: ["./row-details.component.css"],
  animations: [
    trigger("detailExpand", [
      transition(":enter", [
        style({ height: "0px", minHeight: "inherit" }),
        animate(
          "225ms cubic-bezier(0.4, 0.0, 0.2, 1)",
          style({ height: "*", maxHeight: "inherit" })
        )
      ])
    ])
  ]
})
export class RowDetailsComponent implements OnInit {
  @Input() periodicElementName: string;

  public periodicElement: PeriodicElement;

  constructor(private periodicService: PeriodicService) {}

  public ngOnInit(): void {
    this.periodicService
      .getPeriodicByName(this.periodicElementName)
      .subscribe(periodicElement => {
        if (periodicElement) {
          this.periodicElement = periodicElement;
        }
      });
  }
}

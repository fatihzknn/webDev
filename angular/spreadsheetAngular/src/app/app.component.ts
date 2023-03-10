import { Component, ViewChild, ElementRef } from "@angular/core";
import * as jexcel from "jexcel-pro";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("spreadsheet") spreadsheet: ElementRef;
  title = "an";

  ngAfterViewInit() {
    console.log(this.spreadsheet.nativeElement);
    jexcel(this.spreadsheet.nativeElement, {
      minDimensions: [40, 10],
      freezeColumns: 2,
      tableOverflow: true,
      tableWidth: "600px"
    });
  }
}

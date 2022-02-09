import {Component, Input, OnInit, ViewChild} from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
import {DataService} from "../../../core/services/data.service";
import {Observable} from "rxjs";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: "app-metropolis-data-history",
  templateUrl: "./metropolis-data-history.component.html",
  styleUrls: ["./metropolis-data-history.component.css"]
})
export class MetropolisDataHistoryComponent implements OnInit {

  @Input() extendEvent!: Observable<void>

  @Input() consommations: any[] = []
  @Input() dates: any[] = []
  @Input() code!: string

  private subscribe: any
  private flag: boolean = true

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  constructor(private dataservice: DataService) {
  }

  ngOnInit(): void {
    this.extendEvent.subscribe(() => this.initChart())
  }

  initChart() {
    if (this.flag) {
      this.flag = false
      this.subscribe = this.dataservice.getConsumption(this.code, 30).subscribe(response => {
        response.history.forEach(e => {
          this.consommations.push(e.consumption)
          this.dates.push(e.date)
        })

        this.chartOptions = {
          series: [
            {
              name: "",
              data: this.consommations
            }
          ],
          chart: {
            offsetX: -0,
            type: "area",
            height: 350,
            zoom: {
              enabled: true
            }
          },
          dataLabels: {
            offsetX: -400,
            enabled: false
          },
          stroke: {
            curve: "straight"
          },

          title: {
            text: "Historique de la consommation (MWh)",
            align: "left"
          },
          subtitle: {
            text: "",
            align: "left"
          },
          labels: this.dates,
          xaxis: {
            type: "datetime",
            title: {
              text: "Heure"
            }

          },
          yaxis: {
            show: true,
          },
          legend: {
            offsetX: -400,
            horizontalAlign: "left"
          },
        };
      })
    }
  }
}

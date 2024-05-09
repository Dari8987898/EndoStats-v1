import { Component, OnInit, inject } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ActivatedRoute } from "@angular/router";

import { RigaInterface } from "../interfaces/riga.interface";
import { MainService } from "../main.service";
import { ToolbarComponent } from "../toolbar/toolbar.component";

@Component({
    selector: 'detail',
    standalone: true,
    imports: [
        MatCardModule,
        MatIconModule,
        MatTooltipModule
    ],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
    readonly id: number = -1;

    iconaTabella: string;
    tooltipDex: string;

    route: ActivatedRoute = inject(ActivatedRoute);
    dataSource!: RigaInterface;

    constructor(private service: MainService) {
        ToolbarComponent.staticTabIndex = -1;
        
        this.id = Number(this.route.snapshot.params['id']);

        if(this.id < 0)  console.log("Detail contsructor - Detail ID: " + this.id);

        this.iconaTabella = "error";
        this.tooltipDex = "Errore";
    }

    ngOnInit(): void {
        this.dataSource = this.service.getDetail(this.id);
        
        switch(this.dataSource.discriminante) {
            case "G":
                this.iconaTabella = "groups_3";
                this.tooltipDex = "Gruppi multidisciplinari";
                break;

            case "A":
                this.iconaTabella = "local_hospital";
                this.tooltipDex = "Ambulatorio";
                break;

            case "?":
                this.iconaTabella = "live_help";
                this.tooltipDex = "Da decidere";
                break;

            default:
                break;
        }
    }
}

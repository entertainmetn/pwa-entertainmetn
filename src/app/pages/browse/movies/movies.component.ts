import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'xstr-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

    id = 'default string';
    private sub: any;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number :)

            // In a real app: dispatch action to load the details here.
            if (this.id.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
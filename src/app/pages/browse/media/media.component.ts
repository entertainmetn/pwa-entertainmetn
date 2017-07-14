import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'xstr-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit, OnDestroy {

    mediaType: string;
    id: string;
    private sub: any;

    sublinks = [
        {
            routerlink: '.',
            title: 'Overview'
        },
        {
            routerlink: 'w',
            title: 'Watch'
        },
        {
            routerlink: 'reviews',
            title: 'Reviews'
        },
    ]

    constructor(private router: Router, private route: ActivatedRoute) {
        this.mediaType = 'default';
        this.id = 'default';
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.mediaType = params['mtype'];
            this.id = params['id']; // (+) converts string 'id' to a number :)

            // In a real app: dispatch action to load the details here.
            if (this.mediaType.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
            if (this.id.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
        });
    }

    public isActivated(routerlink: string): boolean {
        let linkurl = '/' + this.mediaType + '/' + this.id;
        if (!routerlink.endsWith('.')) {
            linkurl = linkurl + '/' + routerlink
            // console.log(  'not equals .');
        }
        // console.log(linkurl);
        // console.log(this.router.isActive(linkurl, true));
        return this.router.isActive(linkurl, true);
        // this.router.isActive(this.route.url, );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}

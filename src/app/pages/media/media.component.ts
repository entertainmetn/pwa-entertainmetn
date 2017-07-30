import { MediaService } from './media.service';
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
    se: string;
    private sub: any;

    sublinks: Sublink[];


    /* waiting for fix */

    /* istanbul ignore branch */
    constructor(private router: Router,
        private route: ActivatedRoute,
        private mediaService: MediaService) {
        this.mediaType = 'default';
        this.id = 'default';
        this.se = 'default';

        this.sublinks = [
            new Sublink('.', 'Overview'),
            new Sublink('w', 'Watch'),
            new Sublink('seasons', 'Seasons'),
            new Sublink('reviews', 'Reviews')
        ]
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.mediaType = params['mtype'];
            this.id = params['id'];
            this.se = params['se'];
            // console.log('Season de => ' + this.se);
            /* if (!this.mediaService.createMedia(this.mediaType, this.id)) {
                this.router.navigateByUrl('/404');
            } */
        });
        // this.sublinks.push(new Sublink('w', 'dgdgdg'));
    }

    public isActivated(routerlink: string): boolean {
        let linkurl = '/' + this.mediaType + '/' + this.id;
        if (!routerlink.endsWith('.')) {
            linkurl = linkurl + '/' + routerlink
        }
        // console.log('routeIsActive : ' + routerlink + ' => ' + this.router.isActive(routerlink, false));
        return this.router.isActive(linkurl, true);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
class Sublink {
    constructor(public routerlink: string, public title: string) {
        this.routerlink = routerlink;
        this.title = title;
    }
}

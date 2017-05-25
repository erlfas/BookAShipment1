import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject }    from 'rxjs';

@Injectable()
/**
 * https://stackoverflow.com/questions/35884451/angular-2-sibling-component-communication
 */
export class NavigationService {

    currentPage: Subject<string> = new BehaviorSubject<string>('type');

    public setPage(page: string) {
        this.currentPage.next(page);
    }

}
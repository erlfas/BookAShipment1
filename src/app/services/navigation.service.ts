import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject }    from 'rxjs';

@Injectable()
export class NavigationService {

    currentPage: Subject<string> = new BehaviorSubject<string>('type');

    public setPage(page: string) {
        this.currentPage.next(page);
    }

}
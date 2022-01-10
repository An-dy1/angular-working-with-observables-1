import { Component } from '@angular/core';
import { oActor, oName, oFlops } from './Observables';
import { pipe } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name;
  flops;

  ngOnInit() {
    /**
     * 1a. log out the actor's name from the oActor
     */
    // oActor.subscribe((actor) => {
    //   console.log(actor.name);
    // });

    /**
     * 1b. can you do it by modifying the stream before you subscribe to it?
     */

    oActor
      .pipe(
        // map((response) => {
        //   response.name;
        // })
        tap((response) => {
          console.log(`oActor response: ${response}`);
        }),
        pluck('name')
      )
      /**
       * 2. set the name property of this component to be the data in the oName observable
       */

      .subscribe((response) => {
        this.name = response;
      });

    /*
      3. get the flops out of the oFlops observable and get them displaying on the screen
    */
    oFlops
      .pipe(
        tap((response) => {
          console.log(`oFlops response: ${response}`);
        })
      )
      .subscribe((response) => {
        this.flops = response;
      });
  }
}

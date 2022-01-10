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
        // map(response => {
        //   return response.name
        // }
        map((response) => {
          response.name;
        })
      )
      .subscribe((response) => {
        console.log(response);
      });

    /*
      
      2. set the name property of this component to be the data in the oName observable
      3. get the flops out of the oFlops observable and get them displaying on the screen
    */
  }
}

import {of} from 'rxjs';

export let oName = of('Flopbuster')
export let oFlops = of([
  {
		"title": "Catwoman"
	},
	{
		"title": "The Last Airbender"
	},
	{
		"title": "Spider-Man 3"
	}])

export let oActor = of(
  {"name":"Arnold Schwarzenegger","movieTitle":"Batman and Robin", "credits":75, "born":"July 30, 1947"}
)
import {Component} from '@angular/core';

@Component({
  template: '<main></main>',
})
export class SvelteComponent {
  ngOnInit() {
    let script = document.getElementById('svelte');

    if (script) {
      script.parentNode.removeChild(script);
    }

    script = document.createElement('script');
    script.setAttribute('src', '/svelte/bundle_svelte.es6.js');
    script.setAttribute('id', 'svelte');
    document.head.appendChild(script);
  }
}

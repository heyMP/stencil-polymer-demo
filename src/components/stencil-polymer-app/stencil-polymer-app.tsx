import { Component } from '@stencil/core';

@Component({
  tag: 'stencil-polymer-app'
})
export class StencilPolymerApp {
  componentWillLoad() {
    const importTag:any = document.createElement('link')
    importTag.setAttribute('rel', 'import');
    importTag.setAttribute('href', 'https://rawgit.com/LRNWebComponents/build/master/build/default/build.html');
    // document.head.appendChild(importTag);
    // console.log(importTag);
  }
}
import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Element} from '@angular/compiler';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Input('items') items;
  thumbupPic = '../../assets/images/nothumbup.png';
  thumbdownPic = '../../assets/images/nothumbdown.png';
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }
  thumbup(event, i): void {
    let reg = /nothumbup\.png$/g ;
    if(reg.test(event.target.src)){
      this.renderer.setAttribute(event.target, 'src', '../../assets/images/thumbup.png');
      this.items[i].thumbup++;
    }
    else {
      this.renderer.setAttribute(event.target, 'src', '../../assets/images/nothumbup.png');
      this.items[i].thumbup--;
    }
  }
  thumbdown(event, i): void {
    let reg = /nothumbdown\.png$/g ;
    if(reg.test(event.target.src)){
      this.renderer.setAttribute(event.target, 'src', '../../assets/images/thumbdown.png');
      this.items[i].thumbdown++;
    }
    else {
      this.renderer.setAttribute(event.target, 'src', '../../assets/images/nothumbdown.png');
      this.items[i].thumbdown--;
    }
  }
}

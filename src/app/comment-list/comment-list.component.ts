import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {CommentService} from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [CommentService]
})
export class CommentListComponent implements OnInit {
  show = false;
  hasReply = true;
  thumbupPic = '../../assets/images/nothumbup.png';
  thumbdownPic = '../../assets/images/nothumbdown.png';
  comments = this.commentService.comments;
  constructor(private commentService: CommentService,
              private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }
  thumbup(event, i): void {
    let reg = /nothumbup\.png$/g ;
    if(reg.test(event.target.src)){
      this.renderer.setAttribute(event.target, 'src', '../../assets/images/thumbup.png');
      this.comments[i].thumbup++;
    }
    else {
      this.renderer.setAttribute(event.target, 'src', '../../assets/images/nothumbup.png');
      this.comments[i].thumbup--;
    }
  }
  thumbdown(event, i): void {
    let reg = /nothumbdown\.png$/g ;
    if(reg.test(event.target.src)){
      this.renderer.setAttribute(event.target, 'src', '../../assets/images/thumbdown.png');
      this.comments[i].thumbdown++;
    }
    else {
      this.renderer.setAttribute(event.target, 'src', '../../assets/images/nothumbdown.png');
      this.comments[i].thumbdown--;
    }
  }
  toogle(event, i): void{
    if(event.target.childNodes[0].data === '查看回复') {
      event.target.childNodes[0].data = '收起回复';
      this.el.nativeElement.children[i].children[4].hidden = false;
    }
    else {
      event.target.childNodes[0].data = '查看回复';
      this.el.nativeElement.children[i].children[4].hidden = true;
    }
  }
}

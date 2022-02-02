import { Component, OnInit, AfterViewInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { CarControlService } from '../services/car/car-control.service';
import { CarGameService } from '../services/car/car-game.service';

@Component({
  selector: 'app-car-racing',
  templateUrl: './car-racing.component.html',
  styleUrls: ['./car-racing.component.css']
})
export class CarRacingComponent implements AfterViewInit {

	@ViewChild('canvas') public canvas: ElementRef;
	subscription: any;
	showLoader = true;

	constructor(
		private appService: CarControlService,
		private gameService: CarGameService
	) {}

	public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
		this.appService.createPlayGround(canvasEl);
		this.subscription = this.appService.getImageLoadEmitter()
			.subscribe((item) => {
				this.showLoader = false;
				this.gameService.startGameLoop();
      },
      (error) => {
        console.log(error);
      });
	}

	@HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
		this.appService.movePlayer(event, 'keydown');
	}

	@HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
		this.appService.movePlayer(event, 'keyup');
	}
}

import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
   
    <div style="width: 100%">
    <textarea style="width: 100%" #text></textarea>
    </div>
    <div *ngFor="let voice of voices" style="padding: 5px; margin: 5px">
    <button (click)="onButtonClick(voice, text.value)">{{voice.name}}</button>
    
    </div>
  `,
})
export class App implements OnInit {
  name = 'Angular';
  voices: any[] = [];
  text: any = '';

  ngOnInit(): void {
    this.voices = window.speechSynthesis.getVoices();
  }

  onButtonClick(voice: any, text: any) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  }

}

bootstrapApplication(App);

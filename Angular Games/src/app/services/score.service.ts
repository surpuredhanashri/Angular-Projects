import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public store(gameName: string, score: number) {
    localStorage.setItem(gameName, JSON.stringify({ 'best_score': score }));
  }

  public retrieve(gameName: string) {
    let storage = this.parse(gameName);
    if (!storage) {
      this.store(gameName, 0);
      storage = this.parse(gameName);
    }

    return storage.best_score;
  }

  private parse(gameName: string) {
    return JSON.parse(localStorage.getItem(gameName));
  }
}

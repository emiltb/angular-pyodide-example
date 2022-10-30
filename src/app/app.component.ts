import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  factorialResult!: number;
  factorialInput: number = 1;
  loading = true;
  pythonWorker: Worker;

  constructor() {
    this.pythonWorker = this.setupWorker();
    this.calculateFactorial();
  }

  setupWorker() {
    const worker = new Worker(new URL('./python.worker', import.meta.url));
    // Create a new
    worker.onmessage = ({ data }) => {
      this.factorialResult = data;
      this.loading = false;
    };
    return worker;
  }

  calculateFactorial() {
    this.loading = true;
    this.pythonWorker.postMessage(this.factorialInput);
  }
}

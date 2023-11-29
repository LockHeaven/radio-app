import { Injectable, computed, signal } from '@angular/core';
import { Radio, dataRadio } from 'src/assets/data/radios.data';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private _isPlaying = signal(false);

  private _currentRadio = signal<Radio>({
    category: '',
    id: '',
    title: '',
    author: '',
    background: '',
    cover: '',
  });

  private _volume = signal(100);

  private _isMuted = signal(false);

  private _hasError = signal(false);

  private _radioReady = signal(false);

  public get isPlaying(): boolean {
    return this._isPlaying();
  }
  public setIsPlaying(value: boolean) {
    this._isPlaying.set(value);
  }

  public get currentRadio() {
    return this._currentRadio();
  }
  public setCurrentRadio(value: Radio) {
    this._currentRadio.set(value);
  }
  public nextRadio(): void {
    const radio = dataRadio.find(
      (radio) => radio.id === this._currentRadio().id
    );
    const index = dataRadio.indexOf(radio!);
    this.setCurrentRadio(dataRadio[index + 1]);
  }
  public previousRadio(): void {
    const radio = dataRadio.find(
      (radio) => radio.id === this._currentRadio().id
    );
    const index = dataRadio.indexOf(radio!);
    this.setCurrentRadio(dataRadio[index - 1]);
  }

  public hasNextRadio(): boolean {
    const radiosLength = dataRadio.length;
    const radio = dataRadio.find(
      (radio) => radio.id === this._currentRadio().id
    );
    const index = dataRadio.indexOf(radio!);
    if (index < radiosLength - 1) {
      return true;
    }
    return false;
  }

  public hasPreviousRadio(): boolean {
    const radio = dataRadio.find(
      (radio) => radio.id === this._currentRadio().id
    );
    const index = dataRadio.indexOf(radio!);
    if (index > 0) {
      return true;
    }
    return false;
  }

  public findRadio(id: string): Radio {
    const currentRadio = dataRadio.find((radio) => radio.id === id)!;
    return currentRadio;
  }

  public get volume() {
    return this._volume();
  }
  public setVolume(value: number) {
    this._volume.set(value);
  }

  public get isMuted() {
    return this._isMuted();
  }
  public setIsMuted(value: boolean) {
    this._isMuted.set(value);
  }

  public get hasError() {
    return this._hasError();
  }
  public setHasError(value: boolean) {
    this._hasError.set(value);
  }

  public get radioReady() {
    return this._radioReady();
  }
  public setRadioReady(value: boolean) {
    this._radioReady.set(value);
  }
}

import { makeObservable, action, observable } from "mobx";
import { dataSet } from "../../data/asmr/dataSet";
import aniamteBg from "../../video/animate-study.mp4";
import narutoBg from "../../video/naruto-bg.mp4";
import sasukeBg from "../../video/sasuke-study.mp4";

interface Startprops {
  id: number;
  audio: string;
  pic: string;
  title: string;
}

export class DataReadingStoreImpl {
  @observable Time: number = 1;
  @observable AsmrSong: string[] = [];
  @observable Background: number = 0;
  @observable timeOut: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  change_time(time: number) {
    this.Time = time;
  }

  @action
  add_asmrSound(img: string) {
    this.AsmrSong.push(img);
  }

  @action
  filter_asmrSound(img: string) {
    this.AsmrSong = this.AsmrSong.filter((item) => item !== img);
  }

  @action
  clear_asmr() {
    this.AsmrSong = [];
  }

  @action
  change_bg(index: number) {
    this.Background = index;
  }

  @action
  start_focus() {
    return this.AsmrSong;
  }

  @action
  get_bg() {
    const animate = [aniamteBg, narutoBg, sasukeBg];
    return animate[this.Background];
  }
}

export const DataReadingStore = new DataReadingStoreImpl();

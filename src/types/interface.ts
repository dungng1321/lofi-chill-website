export interface IModifierBoardProps {
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  pause: () => void;
  resume: () => void;
  setTimerHandler: (hour: number, minute: number, second: number) => void;
  setTimerStart: (timerStart: boolean) => void;
  timerStart: boolean;
  restart: any;
}

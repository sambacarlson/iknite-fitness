/**
 * Props and types are defined here for the entire Application.
 */

export interface RestProp {
  restTimeOut: number;
  exCount: number; // number of exercises on the currently working exercises.
  unsub: any;
  nextExercise: {
    exNumber: number;
    exTitle: string;
    exDuration: number;
  };
}

export interface GoingProp {
  exDuration: number;
  exTitle: string;
  unsub: any;
}

export interface ReadyProp {
  readyDuration: number;
  exTitle: string;
  unsub: any;
}

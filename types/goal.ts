interface Target {
  goal?: string;
  code: string;
  title: string;
  description: string;
  uri: string;
  indicators: any[];
}
export interface Goal {
  title: string;
  description: string;
  uri: string;
  targets: Target[];
}

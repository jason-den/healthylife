interface Target {
  goal?: string;
  code: string;
  title: string;
  description: string;
  uri: string;
  indicators: any[];
}
export interface goal {
  title: string;
  description: string;
  uri: string;
  targets: Target[];
}

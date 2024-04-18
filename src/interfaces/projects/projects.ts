export interface Projects {
  name:        string;
  description: string;
  github:      Github;
  category: string;
}

export interface Github {
  href:  string;
  label: string;
}

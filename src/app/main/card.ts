export interface ICards {
    id: number;
    uniqId: string;
    title: string;
    subtitle: string;
    image: string;
    author: string;
    medialists: IMedialists[];
    genere: string;
    link: string;
  }
  
  export interface IMedialists {
    duration: string;
    title: string;
    media: string;
    like: number;
  }
export interface BaseResp {
  code: number;
  msg: string;
  data: string;
}

export interface Pastebin {
  data: string;
  expired: number;
}

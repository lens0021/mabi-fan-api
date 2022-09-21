import { WikiPageInfo } from '../WikiPageInfo';

export interface Item {
  [key: string]: any;
  pageInfo: WikiPageInfo;
}

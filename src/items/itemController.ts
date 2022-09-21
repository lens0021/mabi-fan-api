import { Item } from './item';
import {
  // Body,
  Controller,
  Get,
  Path, // Query,
  Route, // SuccessResponse,
} from 'tsoa';

@Route('items')
export class ItemsController extends Controller {
  @Get('{itemName}')
  public async getUser(@Path() itemName: string): Promise<Item> {
    return {
      name: itemName,
      pageInfo: {
        id: 0,
        url: '',
      },
    };
  }
}

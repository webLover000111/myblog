import {Reply} from './reply.model';
export interface Comment {
  id: string;
  userName: string;
  userUrl?: string;
  content: string;
  reply?: Reply[];
  thumbup: number;
  thumbdown: number;
  passTime: string;
}

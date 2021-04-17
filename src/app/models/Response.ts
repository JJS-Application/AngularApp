export class APIResponseDto{   
  Succeeded:boolean;
  Message:string;
  Errors: any;
  Data: any;
  PageIndex: number;
  TotalPages: number;
  TotalItems: number;
  HasPreviousPage: boolean;
  HasNextPage: boolean;
}
export class UserInfo {
  id: string;
  userName: string;
  email: string;
  roles: string[];
  isVerified: boolean;
  jwToken?: string;
}
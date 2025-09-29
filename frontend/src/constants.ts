export enum AppRoute {
  Main = '/',
  Login = '/login',
  NotFound = '/*',
  Basket = '/basket',
  CurrentProduct = '/current'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  Unknown = 'UNKNOWN',
  NoAuth = 'NO_AUTH',
}

export enum NameSpace {
  Products = 'Products',
}

export enum ApiRoute {
  Products = '/products',
}

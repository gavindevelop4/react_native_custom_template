export enum DialogResultType {
  CONFIRM = 'CONFIRM',
  CANCEL = 'CANCEL',
}

export interface DialogResult {
  type: DialogResultType
  result?: any
}

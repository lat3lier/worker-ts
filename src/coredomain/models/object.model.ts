abstract class ObjectReference {
  protected _createdAt: Date
  protected _modifiedAt: Date
  constructor() {
    this._createdAt = new Date()
    this._modifiedAt = new Date()
  }
}

export class ObjectOne extends ObjectReference {
  constructor() {
    super()
  }
}

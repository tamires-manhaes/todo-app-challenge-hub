interface IsEmptyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T extends Record<PropertyKey, any>>(obj: T): boolean
}

const isObjEmpty: IsEmptyObject = obj => 
  Object.keys(obj).length === 0 && obj.constructor === Object;

  export { isObjEmpty }

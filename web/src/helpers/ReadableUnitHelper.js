function readableUnitHelper(size) {
  if(size > Math.pow(2.0, 30.0))
    return `${Math.round(size / Math.pow(2.0, 30.0))} GB`
  else if(size > Math.pow(2.0, 20.0))
    return `${Math.round(size / Math.pow(2.0, 20.0))} MB`
  else if(size > Math.pow(2.0, 10.0))
    return `${Math.round(size / Math.pow(2.0, 10.0))} KB`
  else
    return `${size} B`
}

export default readableUnitHelper;
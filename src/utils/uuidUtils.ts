const uuidUtils = {
  generate() {
    return (Math.random() + 1).toString(36).substring(24)
  },
}

export default uuidUtils

let id = 0
export const httpGet = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name) return reject('please define id')
      resolve({
        id: id++,
        name: name,
        age: Math.floor((Math.random() * 10) + 20)
      })
    }, 2000)
  })
}
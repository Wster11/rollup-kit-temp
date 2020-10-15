const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const md5 = require('md5')
const srcDirPath = 'build'
const destDirPath = 'examples'
let preveMd5 = null
let srcDir = path.join(__dirname, '..', srcDirPath)

if (!fs.existsSync(srcDir)) {
  fs.mkdir(srcDir, (err) => {
    if (err) throw err
  })
}

console.log(`正在监听 ${srcDirPath}`)
fs.watch(srcDirPath, (event, filename) => {
  var srcFile = path.join(__dirname, '..', srcDirPath, filename)
  var destFile = path.join(__dirname, '..', destDirPath, filename)
  var currentMd5 = md5(fs.readFileSync(srcFile))
  if (currentMd5 === preveMd5) {
    return
  }
  preveMd5 = currentMd5
  console.log(`${srcFile}文件发生更新`)
  fsPromises.copyFile(srcFile, destFile)
})

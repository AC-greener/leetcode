    // 请补全JavaScript代码，该函数接收两个参数分别为旧版本、新版本，当新版本高于旧版本时表明需要更新，返回true，否则返回false。
    // 注意：
    // 1. 版本号格式均为"X.X.X"
    // 2. X∈[0,9]
    // 3. 当两个版本号相同时，不需要更新
    const _shouldUpdate = (oldVersion, newVersion) => {
      // 补全代码
      if (oldVersion === newVersion) return false

      const newVersionList = newVersion.split('.')
      const oldVersionList = oldVersion.split('.')
      for(let i = 0; i < newVersionList.length; i++) {
        const oldStr = oldVersionList[i] ? +oldVersionList[i] : '0'
        if(+newVersionList[i] > oldStr) {
          return true
        } else if(+newVersionList[i] < oldStr) {
          return false
        }
      }
      return false
    }
    console.log(_shouldUpdate('0.0.1', '0.1.2'))
    console.log(_shouldUpdate('1.0.1', '0.1.2'))
    console.log(_shouldUpdate('1.0.1', '1.1.2'))
    console.log(_shouldUpdate('1.0.1', '1.0.0'))
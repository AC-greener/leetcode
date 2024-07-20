 // 输入：
    // 'rgb(255, 255, 255)'
    // 输出：
    // #ffffff
    function rgb2hex(sRGB) {
      if (!sRGB.includes('rgb')) return sRGB
      let result = '#'
      sRGB = sRGB.replace('rgb(', '').replace(')', '')
      const rgbList = sRGB.split(',').map(item => Number(item.trim()))
      rgbList.forEach(item => {
        let s = item.toString(16)
        if (s.length <= 1) {
          s = '0' + s
        }
        result += s
      })
      console.log(result)
      return result
    }

    rgb2hex('rgb(255, 255, 255)')
    rgb2hex('rgb(5, 16, 255)')
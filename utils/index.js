import readXlsxFile from 'read-excel-file'
import jwtDecode from 'jwt-decode'
import cookieParser from 'cookieparser'

export const parsePlayersFile = async (file) => {
  const rows = await readXlsxFile(file)

  // remove headers
  rows.splice(0, 2)

  const players = []
  const dataMap = {
    0: 'id',
    1: 'role',
    2: 'name',
    3: 'team' 
  }

  rows.forEach((row, index) => {
    const player = {}
    
    row.forEach((cell, index) => {
      if (dataMap[index]) player[dataMap[index]] = cell
    })

    players.push(player)
  })
  
  return players
}

export const getUserFromCookie = (req) => {
  if (process.server && process.static)return
  
  if (!req.headers.cookie) return {}

  const parsed = cookieParser.parse(req.headers.cookie)
  const accessTokenCookie = parsed.access_token
  
  if (!accessTokenCookie) return {}

  const decodedToken = jwtDecode(accessTokenCookie)

  if (!decodedToken) return {}
    
  return decodedToken
}

export const slugify = (string) => {
  const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
  const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
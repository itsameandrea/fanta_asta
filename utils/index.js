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
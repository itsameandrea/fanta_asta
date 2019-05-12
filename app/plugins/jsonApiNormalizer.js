import normalize from 'json-api-normalizer'

export default ({ app }, inject) => {
  inject('normalize', (json) => normalize(json, { camelizeKeys: false, camelizeTypeValues: false }))
}

/**
 * The purpose of this module is to get data from optimizely
 */
module.exports.initOptimizely = () => {
  const optimizely = require('@optimizely/optimizely-sdk')
  const rp = require('request-promise')

  const DATAFILE_URL = 'https://cdn.optimizely.com/datafiles/5fdYKjdo1DVzqQ6TBfpFjg.json'

  const datafile = async () => {
    await rp({ uri: DATAFILE_URL, json: true }).then(data => console.log(data))
  }

  // console.log('Datafile:', datafile())

  const optimizelyClient = optimizely.createInstance({
    datafile,
  })
}

// const path = require('path')
const { AutoLanguageClient } = require('atom-languageclient')

class DevReplayLanguageClient extends AutoLanguageClient {
  getGrammarScopes () {
    // return ['source.python']
    return ['source.js',
            'source.js.jsx',
            'source.json',
            'text.html.vue',
            'source.python',
            'source.java',
            'text.html.markdown']
    }

  getLanguageName () { return  'JavaScript, Python, Java' }
  getServerName () { return 'DevReplay' }

  startServerProcess () {
    // return super.spawnChildNode([require.resolve('devreplay-server/bin/devreplay-server')], {
    //   stdio: [null, null, null, 'ipc']
    // })
    // const startServer = path.resolve(
    //   path.join(
    //     __dirname,
    //     '../node_modules/devreplay-server/bin/devreplay-server'))
    return super.spawnChildNode([
      require.resolve('devreplay-server/bin/devreplay-server'), '--stdio' ]
    // , {stdio: [null, null, null, 'ipc']}
  ); // --node-ipc, stdio, socket={number}
  }
}

module.exports = new DevReplayLanguageClient();

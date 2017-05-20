import test from 'ava'
import sao from 'sao'

const template = {
  fromPath: __dirname
}

test('defaults', async t => {
  const res = await sao.mockPrompt(template, {})
  t.deepEqual(res.fileList, [ 
    '.editorconfig',
    '.gitignore',
    'README.md',
    'index.ejs',
    'package.json',
    'poi.config.js',
    'src/components/App.vue',
    'src/index.js',
    'src/pwa.js',
    'static/favicon.ico',
    'static/icons/android-chrome-192x192.png',
    'static/icons/android-chrome-512x512.png',
    'static/manifest.json' 
  ])
})
import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

test('defaults', async t => {
  const res = await sao.mockPrompt(template, {})
  t.snapshot(res.fileList)
})

test('no unit test', async t => {
  const res = await sao.mockPrompt(template, {
    unitTest: false
  })
  t.snapshot(res.fileList)
  const pkg = JSON.parse(res.fileContents('package.json'))
  t.snapshot(pkg.scripts, 'scripts')
  t.snapshot(pkg.devDependencies, 'devDependencies')
})

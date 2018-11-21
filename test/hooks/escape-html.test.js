const feathers = require('@feathersjs/feathers')
const escapeHtml = require('../../src/hooks/escape-html')

describe('\'escapeHtml\' hook', () => {
  let app

  beforeEach(() => {
    app = feathers()

    app.use('/dummy', {
      async create (obj) {
        return obj
      }
    })

    app.service('dummy').hooks({
      before: escapeHtml('message')
    })
  })

  it('escapes the html characters in defined fields only', async () => {
    expect.assertions(1)
    const result = await app.service('dummy').create({
      message: '<script>message</script>',
      nonEscapedMessage: '<script>message</script>'
    })
    expect(result).toEqual({
      message: '&lt;script&gt;message&lt;/script&gt;',
      nonEscapedMessage: '<script>message</script>'
    })
  })
})

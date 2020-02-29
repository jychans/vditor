import VditorPreview from '../src/method'
import '../src/assets/scss/index.scss'

VditorPreview.preview(document.getElementById('preview'),
  document.getElementById(`${location.search.split('=')[1]}Text`).textContent, {
    customEmoji: {
      'sd': '💔',
      'j': 'https://unpkg.com/vditor@1.3.1/dist/images/emoji/j.png',
    },
    speech: {
      enable: true,
    },
    anchor: true,
  })

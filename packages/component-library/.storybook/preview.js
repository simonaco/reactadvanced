// .storybook/preview.js
import { configure } from '@storybook/react'

function loadStories() {
  require('../src/components/alert/index.stories.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)

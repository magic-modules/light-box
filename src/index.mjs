export const View = (p = {}) => {
  p.right = p.right === 'true'

  CHECK_PROPS(p, propTypes, 'LightBox')

  const { url, right, text, img, height, width, title, state } = p
  const { float = {} } = state

  const props = {
    class: {
      LightBox: true,
      right,
    },
    title,
  }

  const onclick = [actions.lightbox.toggle, img]
  const show = float && float[img]

  return figure(props, [
    img && Img({ src: img, height, width, onclick }),
    (text || url) && figcaption(url ? Link({ to: url, text: text || url }) : text),
    img && div({ class: { focused: true, show }, onclick }, Img(img)),
  ])
}

export const state = {
  float: {},
}

export const actions = {
  lightbox: {
    toggle: (state = {}, img) => {
      let { float = {} } = state

      state.float = {
        ...float,
        [img]: !float[img],
      }

      return {
        ...state,
      }
    },
  },
}

export const globals = {
  state: {
    float: true,
  },
  actions: {
    lightbox: true,
  },
}

export const style = vars => ({
  float: 'left',
  margin: '0 0 1.5em',
  cursor: 'pointer',
  maxWidth: '800px',

  img: {
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  '&.right': {
    float: 'right',
    textAlign: 'right',
  },

  figcaption: {
    fontSize: '0.8em',
    fontStyle: 'italic',
    lineHeight: '1',
    margin: '0',
    padding: '0',
  },

  '.focused': {
    backgroundColor: '#000000cc',
    left: 0,
    height: 0,
    opacity: 0,
    left: '-100vw',
    position: 'fixed',
    top: 0,
    transition: `background-color ${vars.fadeDuration}, opacity ${vars.fadeDuration}`,
    width: 0,
    zIndex: 1000,

    '&.show': {
      height: '100vh',
      opacity: 1,
      padding: '50vh 0 0',
      width: '100vw',
      left: 0,
    },

    '.light &&': {
      backgroundColor: '#ffffffaa',
    },

    img: {
      display: 'block',
      height: 'auto',
      width: '90vw',
      margin: '0 auto',
      maxWidth: '90vh',
      transform: 'translateY(-50%)',
    },
  },

  [`@media screen and (min-width: ${(vars.widths && vars.widths.tablet) || '600px'})`]: {
    width: '45%',
    maxWidth: '800px',
    margin: '0 1.5em 1.5em 0',

    '&.right': {
      margin: '0 0 1.5em 1.5em',
    },
  },
})

//url, text, img, right = false, height, width, title, state
export const propTypes = {
  LightBox: [
    { key: 'url', type: 'string' },
    { key: 'text', type: 'string' },
    { key: 'img', type: 'string', required: true },
    { key: 'right', type: 'boolean' },
  ],
}

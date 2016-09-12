export default {
  root: {
    height: '100%',
    width: '100%',
    fontFamily: 'Arial',
  },
  app: {
    maxWidth: '600px',
    width: '100%',
    margin: '0 auto',
  },
  input: {
    appearance: 'none',
    border: '1px solid #ccc',
    height: '40px',
    width: '100%',
    paddingLeft: '10px',
    margin: 0,
    fontSize: '16px',
    outline: 'none',
    ':focus': {
      border: '1px solid #90C3D4',
    },
  },
  switcher: {
    display: 'flex',
    width: '250px',
    margin: '0 auto',
  },
  link: {
    padding: 0,
    margin: '5px',
    textDecoration: 'none',
    color: '#000',
  },
  active: {
    color: 'blue',
  },
};

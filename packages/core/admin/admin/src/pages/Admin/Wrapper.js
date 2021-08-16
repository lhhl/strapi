import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  min-width: 0;

  p,
  span {
    font-family: Lato;
  }

  .adminPageRightWrapper {
    width: ${props => `calc(100% - ${props.theme.main.sizes.leftMenu.width})`};
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      sizes: {
        leftMenu: {},
      },
    },
  },
};

export default Wrapper;

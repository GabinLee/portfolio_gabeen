import styled from "styled-components";

export const Container = styled.div`
  &.scroll header{
    background-color: white;
    border-bottom: 1px solid var(--gray_e);
    box-shadow: 0 6px 15px 3px rgba(0, 0, 0, 0.06);
  }

  .inner {
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
  }

  header {
    height: 80px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 101;
    .inner {
      padding: 0 40px;
      display: flex;
      align-items:   center;
      justify-content: center;
      img{
        height: 32px;
      }
    }
  }


  @media screen and (max-width: 600px) {
    header{
      height: 60px;
      .inner img{
        height: 24px;
      }
    }
  }
`

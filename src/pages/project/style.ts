import styled from "styled-components";


export const Container = styled.section`
  .area{
    &.card, .card{
      border: 1px solid #e5e5e5;
      border-radius: 24px;
      box-shadow: 2px 2px 6px 2px rgba(34, 34, 34, 0.1);
      overflow: hidden;
    }

    .list.use_skill{
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      > li{
        padding: 4px;
        .badge{
          padding: 4px 8px;
          border-radius: 4px;
          background-color: var(--gray_f023);
          display: flex;
          align-items: center;
          img {
            max-width: 24px;
            max-height: 13px;
            margin-right: 6px;
          }
          span{
            text-transform: capitalize;
          }
        }
      }
    }

    &.menu{
      margin-bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        padding: 0 12px;
        border: none;
        background-color: transparent;
        position: relative;
        &:not(.active):before{
          content: '';
          width: 100%;
          height: 0;
          background: linear-gradient(90deg, #8FC8EB, #8f9aeb);
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(0, -50%);
          transition: height .25s;
        }

        h1{
          padding: 8px 0;
          background: linear-gradient(to right, #8FC8EB, #8f9aeb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          transition: all .25s;
          position: relative;
        }

        &.active{
          cursor: default;
          h1{
            &::before, &::after{
              content: "";
              width: 100%;
              height: 4px;
              background: linear-gradient(90deg, #8FC8EB, #8f9aeb);
              position: absolute;
              left: 0;
            }
            &::before{
              top: 0;
            }
            &:after{
              bottom: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 601px) {
    .area.menu button{
      + button{
        margin-left: 36px;
      }
    }
  }

  @media screen and (min-width: 481px) {
    .area{
      &.menu{
        button:not(.active):hover{
          &::before{
            height: 100%;
          }
          h1{
            -webkit-text-fill-color: white;
          }
        }
      }
    }
  }

  @media screen and (min-width: 501px) {
    .badge span{
      font-size: 14px;
    }
  }

  @media screen and (max-width: 500px) {
    .badge span{
      font-size: 12px;
    }
  }
`

export const CareerDescriptionViewContainer = styled.ul`
  padding: 30px 0;

  li.career_item{
    position: relative;
    + li{
      margin-top: 90px;
    }
    &::before{
      content: '';
      border-right: 1px dashed #bebebe;
      position: absolute;
    }
    &:first-child::before{
      height: calc(100% - 40px);
      bottom: 0;
    }
    &:not(:first-child):not(:last-child)::before{
      height: calc(100% + 90px);
      top: -90px;
    }
    &:last-child::before{
      height: 130px;
      top: -90px;
    }
    
    .row{
      &_right{
        flex: 1;
      }

      &.top{
        margin-bottom: 12px;
        position: relative;
        &::before{
          content: '';
          width: 7px;
          height: 7px;
          border: 2px solid var(--blue);
          border-radius: 50%;
          background-color: white;
          box-shadow: 0 0 3px 3px rgba(70, 117, 192, .25);
          position: absolute;
          transform: translate(-50%, -50%);
        }

        .title{
          white-space: nowrap;
          color: var(--blue);
        }

        .tag{
          margin: -3px -6px;
          font-size: 14px;
          li{
            padding: 3px 6px;
            white-space: nowrap;
          }
        }
      }
      
      &.bottom{
        .cont{
          margin-top: 20px;
          list-style-type: disc;
          padding-inline-start: 12px;
          li{
            padding: 4px 0;
          }
        }

        .link{
          padding: 4px 0;
          align-items: center;
          + .link{
            margin-top: 10px;
          }

          &_bx{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .ic{
            width: 16px;
            height: 16px;
            margin-right: 6px;
          }
          .txt{
            border-bottom: 1px solid #aaa;
            span{
              font-size: inherit;
              position: relative;
            }
          }

          &.develop{
            .ic{
              background: url(images/ic_document.svg) no-repeat center center / cover;
            }
          }

          &.homepage{
            .ic{
              background: url(images/ic_home.svg) no-repeat center center / cover;
            }
          }

          &:hover{
            span{
              animation: textup 1.5s;
              &:nth-of-type(1) {
                animation-delay: .1s;
              }
              &:nth-of-type(2) {
                animation-delay: .2s;
              }
              &:nth-of-type(3) {
                animation-delay: .3s;
              }
              &:nth-of-type(4) {
                animation-delay: .4s;
              }
              &:nth-of-type(5) {
                animation-delay: .5s;
              }
            }
          }

          &_account{
            margin: 6px 0 0 24px;
            font-size: 14px;
          }
        }

        .use_skill{
          margin: 20px -4px -4px;
        }
      }
    }
  }


  @media screen and (min-width: 769px) {
    li.career_item{
      &::before{
        left: 239.5px;
      }
      .row{
        &.top{
          align-items: center;
          &::before{
            left: 240px;
          }

          .period{
            width: 240px;
            min-width: 240px;
            padding: 0 36px 0 24px;
          }

          .row_right{
            display: flex;
            align-items: center;
            .tag{
              justify-content: flex-end;
            }
          }
        }

        &.bottom{
          padding: 0 12px 0 276px;
          display: flex;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    li.career_item{
      &::before{
        left: 199.5px;
      }
      .row{
        &.top{
          &::before{
            left: 200px;
          }

          .row_right{
            .tag{
              margin-top: 4px;
            } 
          }
        }

        &.bottom{
          .participation{
            margin: 16px -12px 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) and (min-width: 501px) {
    .period{
      width: 200px;
      min-width: 200px;
      padding: 0 24px;
      font-size: 15px;
    }

    .row.bottom{
      padding: 0 24px 0 236px;
    }
  }


  /* mobile */
  @media screen and (min-width: 501px) {
    li.career_item{
      padding: 30px 0;
      .row_right{
        padding: 0 24px 0 36px;
      }

      .row{
        &.top{
          display: flex;
          &::before{
            top: 10.5px;
          }

          .period{
            text-align: right;
          }
        }

        &.bottom{
          .participation{
            font-size: 14px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    li.career_item{
      padding: 24px 24px 24px 48px;
      &::before{
        left: 24px;
      }

      .row{
        &.top{
          &::before{
            top: 7px;
            left: -23.5px;
          }

          .period{
            margin-bottom: 6px;
          }
        }

        &.bottom{
          .participation{
            font-size: 12px;
          }
        }
      }
    }
  }

  @keyframes textup {
    0% { top: 0; }
    20% { top: -3px; }
    40% { top: 0 }
    100% { top: 0 }
  }
`

export const ProjectViewContainer = styled.ul`
  margin: -24px;
  display: flex;
  flex-wrap: wrap;
  > li {
    width: calc(100% * 1 / 3);
    padding: 24px;
    .card {
      height: 100%;
      display: flex;
      flex-direction: column;
      &_img {
        height: 200px;
        padding: 12px 0;
        background: var(--gray_f023);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      &_description {
        padding: 20px;

        .info{
          margin: 4px 0 6px;
          font-size: 14px;
        }
        
        .period{
          color: var(--gray_5);
          font-size: 13px;
          line-height: 21px;
        }
      }

      &_link{
        margin-top: auto;
        border-top: 1px solid var(--gray_e);
        display: flex;
        a{
          height: 46px;
          flex: 1;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transform-style: preserve-3d;

          + a{
            position: relative;
            &:before{
              content: '';
              width: 1px;
              height: 100%;
              background-color: var(--gray_e);
              position: absolute;
              left: 0;
              top: 0;
              transform: translateX(-50%)
            }
          }

          &.page .ic{
            mask: url(images/homepage.png) no-repeat center center / cover;
          }
          &.git .ic{
            mask: url(images/github.png) no-repeat center center / cover;
          }

          
          p{
            position: absolute;
            top: 50%;
            left: 50%;
            transform-style: preserve-3d;
            transition: .5s ease-in-out;
            backface-visibility: hidden;
            &.ic{
              width: 18px;
              height: 18px;
              background-color: var(--blue);
              transform: translate(-50%, -50%);
            }
            &.text{
              transform: translate(-50%, -50%) perspective(200px) rotateY(180deg);
            }
          }

          &:hover{
            .ic{
              transform: translate(-50%, -50%) perspective(200px) rotateY(180deg);
            }
            .text{
              transform: translate(-50%, -50%) perspective(200px) rotateY(360deg);
            }
          }
        }
      }
    }
  }
  .list.use_skill{
    margin: 8px -4px -4px;
  }
`
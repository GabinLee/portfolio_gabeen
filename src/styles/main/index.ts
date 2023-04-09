import styled from "styled-components";

export const Container = styled.div`

/* box-shadow: 4px 12px 20px 6px rgba(0,0,0,.18); */

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
      align-items: center;
      justify-content: center;
      img{
        height: 32px;
      }
    }
  }

  main {
    margin-top: -80px;
    padding-bottom: 120px;
    .inner {
      padding: 120px 40px;
    }

    section {
      .section_title{
        margin-bottom: 48px;
        text-align: center;
        span{
          padding: 6px 0;
          font-size: 20px;
          display: inline-block;
          position: relative;

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
      
      &.intro {
        min-height: 80vh;
        padding:  80px;
        background: url(images/intro_bg.jpg) no-repeat center center / cover;
        display: flex;
        align-items: center;
        justify-content: center;
        .card{
          max-width: 1200px;
          padding: 36px;
          border-radius: 24px;
          color: white;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          > div{
            margin: 0 auto;
            padding: 24px;
          }
          .profile{
            &_img{
              .img{
                width: 200px;
                height: 200px;
                border-radius: 50%;
                background: url(images/me.jpg) no-repeat 60% center / cover;
              }
            }
            &_txt{
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              p{
                margin-bottom: 24px;
                font-size: 20px;
                line-height: 1.5;
                span{
                  color: var(--blue);
                  font-weight: 600;
                }
              }
              a{
                padding-left: 26px;
                color: var(--gray_5);
                font-size: 14px;
                &:hover{
                  text-decoration: underline;
                }
                + a{
                  margin-top: 12px;
                }
                &.mail{
                  background: url(images/icon/mail_blue.png) no-repeat left 0.5px center / 16px 16px;
                }
                &.tel{
                  background: url(images/icon/tel_blue.png) no-repeat left center / 17px 17px;
                }
                &.git{
                  background: url(images/icon/git_blue.png) no-repeat left center / 17px 17px;
                }
              }
            }
          }
        }
      }

      &.project {
        .project_list{
          margin: -24px;
          display: flex;
          flex-wrap: wrap;
          > li {
            width: calc(100% * 1 / 3);
            padding: 24px;
            .card {
              height: 100%;
              border: 1px solid #e5e5e5;
              border-radius: 24px;
              display: flex;
              flex-direction: column;
              overflow: hidden;
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

                .use_skill_list{
                  margin: 8px -4px -4px;
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;

                  > li{
                    padding: 4px;
                    .badge{
                      padding: 4px 12px;
                      border-radius: 20px;
                      background-color: var(--gray_f023);
                      display: flex;
                      align-items: center;
                      img {
                        max-width: 24px;
                        max-height: 13px;
                        margin-right: 6px;
                      }
                      span{
                        font-size: 13px;
                        text-transform: capitalize;
                      }
                    }
                  }
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
        }
      }

      &.career{
        padding: 120px 40px;
        ul{
          max-width: 600px;
          margin: 0 auto;
          li{
            padding: 24px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            + li{
              border-top: 1px solid #ddd;
            }

            p{
              font-size: 14px;
              &:nth-child(1){
                flex: 1;
                padding-right: 12px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    main{
      section{
        &.project{
          .project_list{
            > li{
              width: 50%;
            }
          }
        }
      }
    }
    
  }

  @media screen and (max-width: 540px) {
    main{
      .inner {
        padding: 120px 24px;
      }

      section{
        .section_title span{ font-size: 18px; }
        &.intro{
          padding: 120px 60px 80px;
          .card{
            padding: 12px;
            .profile_txt{
              p{
                font-size: 16px;
              }
              a{
                font-size: 12px;
                background-size: 14px 14px !important;
              }
              br{
                display: none;
              }
            }
          }
        }
        &.project{
          .project_list{
            > li{
              width: 100%;
              .card_description{
                .info{
                  margin: 4px 0 4px;
                  font-size: 12px;
                }
                .period{
                  font-size: 11px;
                }
                .use_skill_list{
                  > li .badge{
                    img{
                      max-width: 20px;
                      max-height: 12px;
                    }
                    span{
                      font-size: 11px;
                    }
                  }
                }
              }
            }
          }
        }

        &.career{
          padding: 60px 24px;
          ul li p{
            font-size: 12px;
          }
        }
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.main`
  margin-top: -80px;
  padding-bottom: 120px;
  .inner {
    padding: 120px 40px;
  }

  section {
    h1.section_title{
      margin-bottom: 48px;
      text-align: center;
      span{
        padding: 8px 0;
        background: linear-gradient(to right, #8FC8EB, #8f9aeb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: inherit;
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
    
    &.intro{
      min-height: 80vh;
      padding:  80px;
      background: url(images/intro_bg.jpg) no-repeat center center / cover;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
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
        .profile{
          margin: 0 auto;
          padding: 24px;
          &.img{
            .image{
              width: 200px;
              height: 200px;
              border-radius: 50%;
              background: url(images/me.jpg) no-repeat 60% center / cover;
            }
          }
          &.txt{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .introduce{
              padding-bottom: 24px;
              p{
                font-size: 20px;
                line-height: 1.5;
                span{
                  color: var(--blue);
                  font-weight: 600;
                }
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

      .wave{
        width: 100%;
        position: absolute;
        bottom: 0;
        > div{
          width: 100%;
          height: 100px;
          background: url(images/wave.png);
          background-size: 1000px 100px;
          position: absolute;
          left: 0;

          &.wave1{
            opacity: 1;
            bottom: 0;
            z-index: 13;
            animation: animate 6s linear infinite; 
          }
          &.wave2{
            opacity: .5;
            bottom: 10px;
            z-index: 12;
            animation: animate2 6s linear infinite;
          }
          &.wave3{
            opacity: .25;
            bottom: 15px;
            z-index: 11;
            animation: animate 4s linear infinite;
          }
          &.wave4{
            opacity: .75;
            bottom: 20px;
            z-index: 12;
            animation: animate2 4s linear infinite;
          }
        }

        @keyframes animate{
          0%{
            background-position-x: 1000px;
          }
          100%{
            background-position-x: 0;
          }
        }
        @keyframes animate2{
          0%{
            background-position-x: 0;
          }
          100%{
            background-position-x: 1000px;
          }
        }
      }
    }

    &.skills{
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        ul{
          margin: 6px 0 -6px;
        }
      }
      > ul{
        margin: -6px -6px 0;
      }
      ul{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li{
          padding: 6px;
          p{
            height: 30px;
            line-height: 30px;
            border-radius: 15px;
            padding: 0 15px 0 40px;
            &.html{
              background: #e2f3e6 url(images/skill/html.png) no-repeat left 15px center / auto 16px;
            }
            &.css{
              background: #e2f3e6 url(images/skill/css.png) no-repeat left 15px center / auto 16px;
            }
            &.scss{
              background: #e2f3e6 url(images/skill/scss.png) no-repeat left 15px center / auto 16px;
            }
            &.react{
              background: #e2f3e6 url(images/skill/react.png) no-repeat left 15px center / auto 16px;
            }
            &.javascript{
              background: #e2f3e6 url(images/skill/javascript.png) no-repeat left 15px center / auto 16px;
            }
            &.typescript{
              background: #e2f3e6 url(images/skill/typescript.png) no-repeat left 15px center / auto 16px;
            }

            &.xd{
              background: #fff7d5 url(images/skill/xd.png) no-repeat left 15px center / auto 16px;
            }
            &.figma{
              background: #fff7d5 url(images/skill/figma.png) no-repeat left 15px center / auto 16px;
            }
            &.zeplin{
              background: #ffebeb url(images/skill/zeplin.png) no-repeat left 15px center / auto 16px;
            }
            &.git{
              background: #ffebeb url(images/skill/github.png) no-repeat left 15px center / auto 16px;
            }
          }
        }
      }
    }

    &.career{
      ul{
        max-width: 600px;
        margin: 0 auto;
        li{
          padding: 24px 0;
          border-bottom: 1px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: space-between;

          p:nth-child(1){
            flex: 1;
            padding-right: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
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

  @media screen and (max-width: 600px) {
    .inner {
      padding: 120px 24px;
    }

    section{
      .section_title span{ font-size: 18px; }
      &.intro{
        padding: 120px 60px 120px;
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

      &.skills{
        .inner div{
          display: block;
        }
        ul{
          li{
            p{
              height: 24px;
              line-height: 24px;
              border-radius: 12px;
              font-size: 13px;
              padding: 0 12px 0 30px;
              &.html{
                background: #e2f3e6 url(images/skill/html.png) no-repeat left 12px center / auto 12px;
              }
              &.css{
                background: #e2f3e6 url(images/skill/css.png) no-repeat left 12px center / auto 12px;
              }
              &.scss{
                background: #e2f3e6 url(images/skill/scss.png) no-repeat left 12px center / auto 12px;
              }
              &.react{
                background: #e2f3e6 url(images/skill/react.png) no-repeat left 12px center / auto 12px;
              }
              &.javascript{
                background: #e2f3e6 url(images/skill/javascript.png) no-repeat left 12px center / auto 12px;
              }
              &.typescript{
                background: #e2f3e6 url(images/skill/TypeScript.png) no-repeat left 12px center / auto 12px;
              }

              &.xd{
                background: #fff7d5 url(images/skill/xd.png) no-repeat left 12px center / auto 12px;
              }
              &.figma{
                background: #fff7d5 url(images/skill/figma.png) no-repeat left 12px center / auto 12px;
              }
              &.zeplin{
                background: #ffebeb url(images/skill/zeplin.png) no-repeat left 12px center / auto 12px;
              }
              &.git{
                background: #ffebeb url(images/skill/github.png) no-repeat left 12px center / auto 12px;
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
`

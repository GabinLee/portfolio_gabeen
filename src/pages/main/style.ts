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

  main {
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

      &.career{
        padding: 120px 40px;
        ul{
          max-width: 600px;
          margin: 0 auto;
          li{
            padding: 24px 0;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
            justify-content: space-between;

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

  @media screen and (max-width: 600px) {
    header{
      height: 60px;
      .inner img{
        height: 24px;
      }
    }

    main{
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

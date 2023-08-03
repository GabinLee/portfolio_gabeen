import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 40px;

  section{
    padding: 60px 0;

    h1{
      margin-bottom: 24px;
      padding-bottom: 6px;
      border-bottom: 2px solid #e5e5e5;
    }

    div.area{
      border-left: 2px solid var(--blue);
      padding-left: 12px;
    }

    h6{
      margin-top: 50px;
      margin-bottom: 8px;
      padding-bottom: 12px;
      border-bottom: 1px dashed #ccc;
      font-weight: normal;
    }

    .todo{
      padding-left: 4px;
      color: #bebebe;
      font-size: calc(1rem - 4px);
    }

    .list{
      list-style-type: disc;
      padding-inline-start: 12px;
      > li{
        padding: 4px 0;
        line-height: 1.4;
        + li{
          margin-top: 4px;
        }

        .ttl{
          /* color: #FB6A87; */
          color: #EC6600;
        }

        .double_list{
          list-style-type: circle;
          padding-inline-start: 14px;
          li{
            margin-top: 6px;
          }
        }
      }

      &.api{
        li{
          span:not(.ttl){
            padding-left: 6px;
            font-size: calc(1rem - 2px);
          }
        }
      }
    }

    &.process{
      li{
        .img_bx{
          width: 100%;
          margin: 12px 0 0;
          padding-top: 100%;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          overflow: hidden;
          position: relative;
          button{
            width: 100%;
            height: 100%;
            padding: 6px;
            border: none;
            background-color: transparent;
            position: absolute;
            top: 0;
            left: 0;
            img{
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }


  @media screen and (min-width: 768px){
    section{
      &.process{
        li{
          flex: 1;
          + li{
            margin: 0 0 0 120px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 391px) and (max-width: 767px){
    section{
      &.process{
        ul{
          justify-content: space-between;
        }
        li{
          width: calc(50% - 20px);
          max-width: 240px;
          &:nth-child(2){
            margin: 0;
            ~ li{
              margin-top: 60px;
            }
          }

          &:nth-child(even){
            margin-left: 40px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 391px){
    section + section{
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 390px){
    padding: 40px 20px;
    section{
      &.process{
        li{
          width: 100%;
          .img_bx{
            padding-top: 50%;
          }
        }
        /* ul{
          justify-content: space-between;
        }
        li{
          width: calc(50% - 20px);
          max-width: 240px;
          &:nth-child(2){
            margin: 0;
            ~ li{
              margin-top: 60px;
            }
          }

          &:nth-child(even){
            margin-left: 40px;
          }
        } */
      }
    }
  }
`

export const CashbookProcessImage = styled.div`
  .btn.clear{
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    transition: background-color .2s;
    position: absolute;
    top: 36px;
    right: 36px;
    img{
      width: 20px;
      height: 20px;
      margin: auto;
    }
    &:hover{
      background-color: rgba(0, 0, 0, .25);
    }
  }

  .card{
    max-width: 100%;
    padding: 36px;
    border-radius: 6px;
    background-color: white;
    img{
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    .btn.clear{
      top: 10px;
      right: 0;
    }

    .card{
      padding: 24px;
    }
  }
`
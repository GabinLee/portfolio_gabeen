import styled from "styled-components";

type StyledProps = {
  width: string
}

type ParticipationProps = {
  name: string
  percentage: string
  // children: React.ReactNode
  styles: StyledProps
}


export default function ParticipationView(props: ParticipationProps) {
  return (
    <ParticipationItem
      {...props.styles}
      className={props.name}
    >
      <div>
        <span>
          {(props.name === 'plan') && '기획'}
          {(props.name === 'design') && '디자인'}
          {(props.name === 'publisher') && '퍼블리싱'}
        </span>
        <span>{props.percentage}</span>
      </div>
    </ParticipationItem>
  )
}

const ParticipationItem = styled.li<StyledProps>`
  padding: 4px 12px;
  div{
    width: 180px;
    height: 22px;
    padding: 0 16px;
    border-radius: 12px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::before{
      content: '';
      width: ${props => props.width};
      height: 100%;
      border-radius: inherit;
      position: absolute;
      top: 0;
      left: 0;
    }
    span{
      position: relative;
    }
  }

  &.plan div:before{
    background-color: #ffe6e6;
  }

  &.design div::before{
    background-color: #fff6cb;
  }

  &.publisher div::before{
    background-color: #e2f3e6;
  }
`
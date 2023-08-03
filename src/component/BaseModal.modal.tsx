import styled from "styled-components";
// import { ModalData } from "../models/AlertModal";

type BaseModalProps = {
  children: React.ReactNode,
}

export default function BaseModal(prosp: BaseModalProps) {

  return (
    <>
    <BaseModalDiv className="base_modal">
      {prosp.children}
    </BaseModalDiv>
    </>
  );
}


const BaseModalDiv = styled.div`
  padding: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  inset: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 101;

  @media screen and (max-width: 480px){
    padding: 20px;
  }
`
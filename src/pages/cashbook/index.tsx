import { useEffect, useState } from 'react';
import BaseModal from '../../component/BaseModal.modal';
import { CashbookProcessImage, Container } from './style';


export default function CashbookPage() {
  const processList = [
    { name: '로그인 화면', image: 'login.svg' },
    { name: '메인화면', image: 'main.svg' },
    { name: 'Cashbook 상세화면', image: 'detail.svg' }
  ]
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if(showImage === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showImage])

  return (
    <>
      <Container className='cashbook'>
        <section className='process'>
          <h1>기획 - Process 정리</h1>
          <ul className='list flex f-wrap'>
            {processList.map((process, index) => (
              <li key={`process${index}`}>
                {process.name}
                <div className="img_bx">
                  <button onClick={() => {
                    setShowImage(true)
                    setSelectedImage(process.image)
                  }}>
                    <img src={`images/cashbook/${process.image}`} alt={process.name} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h1>화면별 상세</h1>

          <div className='area'>
            <h6>[로그인 화면] SignInPage</h6>
            <ul className='list'>
              <li>아이디, 비밀번호를 입력하여 로그인합니다. <span className='todo'>아이디, 비밀번호 찾기 추가 예정</span></li>
              <li>로그인 버튼 비활성화 → ID, PW 입력 시 활성화</li>
              <li>또는 카카오 로그인을 합니다.</li>
              <li>회원이 아닌 경우 회원가입 모달(SignupModal)을 통해 진행합니다.</li>
            </ul>
          </div>
          
          <div className="area">
            <h6>[Layout] LayoutPage</h6>
            <ul className='list'>
              <li>캐쉬북 목록을 랜더링합니다. (모임통장 구분하여 표시 필요)</li>
              <li>모임통장인 캐쉬북의 멤버를 초대하여 추가할 수 있습니다.<span className="todo">(추가  작업 예정)</span></li>
              <li>캐쉬북을 추가로 생성하며 모달(EditCashbookModal)을 통해 진행합니다.</li>
              <li>캐쉬북을 수정하여 추가와 동일한 모달(EditCashbookModal)을 통해 진행합니다.</li>
              <li>캐쉬북을 삭제합니다.</li>
              <li>유저 닉네임을 확인하고 로그아웃 할 수 있습니다.<span className="todo">정보 수정 추가 예정</span></li>
            </ul>
          </div>

          <div className="area">
            <h6>[Cashbook 상세] CashbookPage</h6>
            <ul className='list'>
              <li>HomeView
                <ul className='double_list'>
                  <li>선택한 캐쉬북의 이달의 지출, 저축, 수입 현황 요약을 랜더링합니다.</li>
                </ul>
              </li>
              <li>ListView
                <ul className='double_list'>
                  <li>선택한 캐쉬북의 지출, 저축, 합계를 랜더링합니다.</li>
                  <li>월, 거래유형, 1차 카테고리, 결제수단 등을 기준으로 필터를 사용할 수 있습니다.</li>
                  <li>내역을 추가하며 모달(EditHistoryModal)을 통해 진행합니다.</li>
                  <li>월의 전체 내역 렌더링합니다.</li>
                  <li>각 내역별 수정, 삭제 가능하며 수정은 추가와 동일한 모달(EditHistoryModal)을 통해 진행합니다.</li>
                </ul>
              </li>
              <li>CalendarView
                <ul className="double_list">
                  <li>월별로 조회할 수 있습니다.</li>
                  <li>선택한 캐쉬북의 지출, 저축, 합계를 랜더링합니다.</li>
                  <li>캘린더의 형식으로 일별 내역 및 주별 결산을 랜더링합니다.</li>
                </ul>
              </li>
              <li>StatisticsView
                <ul className="double_list">
                  <li>월별로 조회할 수 있습니다.</li>
                  <li>지출, 저축, 수입별 통계 내역을 랜더링합니다.</li>
                </ul>
              </li>
              <li>SettingsView
                <ul className="double_list">
                  <li>거래유형별 1차, 2차 카테고리를 설정(추가, 수정, 삭제)하며 추가, 수정은 모달(EditSecondCategoryModal, EditThirdCategoryModal)을 통해 진행합니다.</li>
                  <li>결제수단을 설정(추가, 수정, 삭제)하며 추가, 수정은 모달(EditPaymentMethodModal)을 통해 진행합니다.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h1>API 요청</h1>

          <div className="area">
            <h6>[로그인 화면] SignInPage</h6>
            <ul className='list api'>
              <li><span className='ttl'>signIn</span>: user의 id, password로 로그인 요청<span>(POST/auth/token)</span></li>
              <li><span className="ttl">signinKakao</span>: 카카오를 통한 로그인 요청<span>(POST/auth/token)</span></li>
              <li><span className="ttl">signUp</span>: 유저의 정보로 회원가입 요청<span>(POST/auth/sign-up)</span></li>
            </ul>
          </div>

          <div className="area">
            <h6>[Layout] LayoutPage</h6>
            <ul className='list api'>
              <li><span className="ttl">getUser</span>: 유저의 정보를 받아옵니다.<span>(GET/user/me)</span></li>
              <li><span className="ttl">getCashbookList</span>: 전체 캐쉬북 목록을 가져옵니다.<span>(GET/user/me/cash-book)</span></li>
              <li><span className="ttl">addCashbook</span>: 캐쉬북을 생성합니다.<span>(POST/cash-book)</span></li>
              <li><span className="ttl">editCashbook</span>: 캐쉬북을 수정합니다.<span>(PATCH/cash-book/:id)</span></li>
              <li><span className="ttl">deleteCashbook</span>: 캐쉬북을 삭제합니다.<span>(DELETE/cash-book/:id)</span></li>
            </ul>
          </div>

          <div className="area">
            <h6>[Cashbook 상세] CashbookPage</h6>
            <ul className='list api'>
              <li><span className="ttl">getHistory</span>: 특정 id의 캐쉬북에 속한 상세 내역 전체를 받아옵니다.<span>(GET/cash-book/:id/detail)</span></li>
              <li><span className="ttl">addHistory</span>: 특정 id의 캐쉬북에 내역을 추가합니다.<span>(POST/cash-book/:id/detail)</span></li>
              <li><span className="ttl">editHistory</span>: 캐쉬북 내역을 수정합니다.<span>(PATCH/cash-book-detail/:id)</span></li>
              <li><span className="ttl">deleteHistory</span>: 캐쉬북 내역을 삭제합니다.<span>(DELETE/cash-book-detail/:id)</span></li>
              <li><span className="ttl">getCategory</span>: 특정 id의 캐쉬북에 속한 카테고리 목록을 받아옵니다.<span>(GET/cash-book/:id/trade-category)</span></li>
              <li><span className="ttl">addSecondCategory</span>: 1차 카테고리를 생성합니다.<span>(POST/trade-category/second)</span></li>
              <li><span className="ttl">editSecondCategory</span>: 1차 카테고리를 수정합니다.<span>(PATCH/trade-category/second/:id)</span></li>
              <li><span className="ttl">deleteSecondCategory</span>: 1차 카테고리를 삭제합니다.<span>(DELETE/trade-category/second/:id)</span></li>
              <li><span className="ttl">addThirdCateogry</span>: 2차 카테고리를 생성합니다.<span>(POST/trade-category/third)</span></li>
              <li><span className="ttl">editThirdCategory</span>: 2차 카테고리를 수정합니다.<span>(PATCH/trade-category/third/:id)</span></li>
              <li><span className="ttl">deleteThirdCategory</span>: 2차 카테고리를 삭제합니다.<span>(DELETE/trade-category/third/:id)</span></li>
              <li><span className="ttl">getPaymentMethod</span>: 특정 id의 캐쉬북에 속한 결제수단 목록을 받아옵니다.<span>(GET/cash-book/:id/payment-method)</span></li>
              <li><span className="ttl">addPaymentMethod</span>: 결제수단을 생성합니다.<span>(POST/payment-method)</span></li>
              <li><span className="ttl">editPaymentMethod</span>: 결제수단을 수정합니다.<span>(PATCH/payment-method/:id)</span></li>
              <li><span className="ttl">deletePaymentMethod</span>: 결제수단을 삭제합니다.<span>(DELETE/payment-method/:id)</span></li>
            </ul>
          </div>
        </section>

        <section className='components'>
          <h1>Components</h1>

          <div className='area'>
            <h6><strong>한가지 역할</strong>만 하는 재사용 가능한 컴포넌트</h6>
            <ul className='list'>
              <li><span className='ttl'>BaseModal</span>: 모든 모달의 기본이 되는 컴포넌트입니다.</li>
              <li><span className='ttl'>AlertModal</span>: 메세지를 표시하기 위한 컴포넌트입니다.</li>
            </ul>
          </div>

          <div className='area'>
            <h6><strong>특정 기능</strong>을 위한 재사용 불가한 컴포넌트</h6>
            <ul className='list'>
              <li><span className='ttl'>SignUpModal</span>: 회원가입 진행을 위한 모달 컴포넌트입니다.</li>
              <li><span className='ttl'>EditCashbookModal</span>: 캐쉬북 추가 및 수정을 위한 모달 컴포넌트입니다.</li>
              <li><span className='ttl'>EditHistoryModal</span>: 특정 id를 가진 캐쉬북의 내역 추가 및 수정을 위한 모달 컴포넌트입니다.</li>
              <li><span className='ttl'>EditSecondCategoryModal</span>: 특정 id를 가진 캐쉬북의 1차 카테고리 추가 및 수정을 위한 모달 컴포넌트입니다.</li>
              <li><span className='ttl'>EditThirdCategoryModal</span>: 특정 id를 가진 캐쉬북의 2차 카테고리 추가 및 수정을 위한 모달 컴포넌트입니다.</li>
              <li><span className='ttl'>EditPaymentMethodModal</span>: 특정 id를 가진 캐쉬북의 결제수단 추가 및 수정을 위한 모달 컴포넌트입니다.</li>
              <li><span className='ttl'>HomeView</span>: 이달의 요약을 위한 View 컴포넌트입니다.</li>
              <li><span className='ttl'>ListView</span>: 특정 월의 전체 내역을 테이블로 표시하기 위한 View 컴포넌트입니다.</li>
              <li><span className='ttl'>CalendarView</span>: 특정 월의 일별 전체 내역 및 주별 결산을 캘린더 형식으로 표시하기 위한 View 컴포넌트입니다.</li>
              <li><span className='ttl'>StatisticsView</span>: 특정 월의 지출, 저축, 수입에 대한 통계를 표시하기 위한 View 컴포넌트입니다.</li>
              <li><span className='ttl'>SettingsView</span>: 카테고리 및 결제수단 설정을 위한 View 컴포넌트입니다.</li>
            </ul>
          </div>
        </section>
      </Container>

      {showImage && (
        <BaseModal>
          <CashbookProcessImage>
            <button className='btn clear'
              onClick={() => setShowImage(false)}
            >
              <img src="images/icon/clear_white.svg" alt="닫기" />
            </button>

            <div className="card">
              <img src={`images/cashbook/${selectedImage}`} alt="flow chart" />
            </div>
          </CashbookProcessImage>
        </BaseModal>
      )}

    </>
  )
}
import { useAuthStore } from '@/bookStore/bookStore';
import { ROUTES } from '@/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledMain = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .mainPage__modal {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      .mainPage__btn {
          width: 310px;
          height: 70px;
          border-radius: 5px;
          font-size: 25px;
          border: none;
          outline: none;
          cursor: pointer;
          transition: 0.2s ease-in;
          background-color: #000000ea;
          color: #fff;
          &:hover {
            transform: scale(0.97);
          }
      }
      .mainPage__joinRoom {
        margin-bottom: 25px;
      }
    }
`

const MainPage = () => {

  const router = useRouter();
  const setRedirectAfterSuccess = useAuthStore(state => state.setRedirectAfterSuccess);

  const handleJoin = () => {
    setRedirectAfterSuccess('join');
    router.push(ROUTES.registrationPage);
  }
  const handleCreate = () => {
    setRedirectAfterSuccess('create');
    router.push(ROUTES.registrationPage);
  }

  return (
    <StyledMain>
      <div className='mainPage__wrap'>
        <div className="mainPage__modal">
            <button className='mainPage__joinRoom mainPage__btn' onClick={handleJoin}>Join to room</button>
            <button className='mainPage__createRoom mainPage__btn' onClick={handleCreate}>Create room</button>
        </div>
      </div>
    </StyledMain>
  )
}

export default MainPage;
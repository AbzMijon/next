import LoginCard from '@/Components/LoginCard';
import SignupCard from '@/Components/SignupCard';
import { useAuthStore } from '@/bookStore/bookStore';
import styled from 'styled-components';

const StyledRegistationPage = styled.div `
    
`
interface buttonType {
    id: number,
    label: string,
    active: boolean,
}

function RegistrationPage() {
    const regirstationButtons = useAuthStore(state => state.authButtons);    
    const setActiveButton = useAuthStore(state => state.setActiveButton);
    const activeBtn = regirstationButtons?.find((btn: buttonType) => btn.active);

    return (
        <StyledRegistationPage>
            <div className='registration'>
                <h1 className='registration__title'>Welcome to the egr.com!</h1>
                    <div className="registration__card">
                        <div className="registration__toggles">
                            {regirstationButtons && regirstationButtons.map((btn: buttonType) => {
                                return (
                                    <button 
                                        key={btn.id} 
                                        className={btn.active ? 
                                            'registration__toggle-btn registration__toggle-btn--active' : 
                                            'registration__toggle-btn'
                                        }
                                        onClick={() => setActiveButton(btn.id)}
                                    >
                                        {btn.label}
                                    </button>
                                )
                            })}
                        </div>
                        {activeBtn?.id === 0 ? 
                            <LoginCard />
                            :
                            <SignupCard />
                        }
                    </div>
            </div>
        </StyledRegistationPage>
    )
}

export default RegistrationPage;
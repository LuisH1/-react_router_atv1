import styled from 'styled-components'


export const HeaderComponent = styled.header`
    width: 100%;
    position: fixed;
    height: 90px;
    top: 2%;
    
`

export const DivHeader = styled.div`
    width: 60%;
    margin: 20px auto;
    display: flex;
    padding: 0 30px;
    justify-content: space-between; 
    font-size: 24px;
  
    
`

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    transition:  all 1s ease;
  
    li{
        list-style: none;
        a{
            text-decoration: none;
            color: #4B4453;
            padding-bottom: 10px;
            
            &:hover{
                border-bottom: 2px solid #00C9A7 ;
            }
        }
    }
`
import styled from 'styled-components'

export const ContainerHomeForm = styled.div`
    padding: 20px;

    
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    input{
        font-size:15px;
        padding: 10px;
        border: 1px solid #d9d9d9;
    }
    
    input:focus{
        outline: none;
        border: 2px solid var(--secundary-blue);
    }

    h3{
        text-transform: uppercase;
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        margin: 25px 0 25px 0;
        font-size: 30px;
    }

    p{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;

        strong{
            cursor: pointer;
            color: var(--primary-red)
        }
    }
`
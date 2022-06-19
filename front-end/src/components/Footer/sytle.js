import styled from "styled-components";

export const ContainerFooter = styled.footer`

    height: 60px;
    background-color: var(--primary-red-dark) ;
    position: absolute ;
    bottom: 0;
    width: 100%;

    margin-top: 64px;

    img {
        display: flex;
        flex-flow: row wrap;
        margin: 10px 0 0 40px;
        width: 45px;

    }

    div{
        width: 900px;
        margin: 0 auto;
    }

    div ul{
        display: flex;
        list-style: none;
        margin-left: 60em;
    }

    div li{
        margin: 0 1em;
    }

    div ul li{
        margin-top: -30px;
    }


    div ul li svg{
        width: 20px;
        height: 20px;
        color: var(--white);
        cursor: pointer;
    }

    @media (max-width: 1400px) {
        div ul{
            margin-left: 50em;
        }
    }

    @media (max-width: 1090px) {
        div ul{
            margin-left: 45em;
        }
    }

    @media (max-width: 912px) {
        overflow: hidden !important;
        div ul{
            margin-left: 35em;
        }
        img {
            width: 35px;
        }

    @media (max-width: 750px) {
        div ul{
            margin-left: 30em;
        }
    }

    @media (max-width: 670px) {
        div ul{
            margin-left: 25em;
        }
    }

    @media (max-width: 580px) {
        div ul{
            margin-left: 20em;
        }
    }

    @media (max-width: 510px) {
        div ul{
            margin-left: 15em;
        }
    }

    @media (max-width: 450px) {
        div ul{
            margin-left: 10em;
        }
    }
`
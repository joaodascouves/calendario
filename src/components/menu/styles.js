import styled from 'styled-components';

export const MenuToggle = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 10em;
    height: 3em;

    border-radius: 5%;

    background: blue;
    opacity: .2;

    &::before {
        content: 'Toggle';
    }
`;

export const MenuContainer = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;

    width: calc((100vw/7)*2);
    height: 100vh;

    flex-direction: column;

    border-right: 1px solid black;
    background: white;
    overflow-y: auto;

    transition: width .15s;

    &.hidden {
        width: 0;
    }

    @media screen and (max-width: 600px) {
        width: 80vw;
    }
`;

export const MenuItem = styled.div`
    padding: 8% 0;

    border-bottom: 1px solid black;

    &::before {
        content: attr(data-title);
        padding: 0 1em;
    }

    &:hover {
        background: rgba(200, 10, 10, .5);
    }
`;

export const ProfileBar = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh/6);
    background: rgba(20, 30, 230, .8);
`;

export const ProfileThumb = styled.img`
    width: 6.7vw;
    height: 6.7vw;

    padding: .2em;
    margin: .5em;

    border-radius: 50%;
    background: white;

    float: left;
`;

export const ProfileName = styled.span`

    line-height: 10vh;
    margin-left: 2%;

    font-size: 1.2em;

    &::before {
        content: attr(data-name);
        color: #fff;
    }
`;

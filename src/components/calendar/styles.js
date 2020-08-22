import styled from 'styled-components';

export const CalendarContainer = styled.div`
    position: relative;
    display: flex;

    width: 100%;
    height: 100%;

    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 600px) {
        width: 200vw;
    }
`;

export const CalendarDay = styled.div`
    position: relative;
    box-sizing: border-box;

    width: calc(100%/7);

    border: 1px solid black;
    border-width: 0 1px 1px 0;
    
    &::before {
        content: attr(data-monthday);
        position: absolute;

        top: .2em;
        left: .2em;
    }

    &::after {
        content: attr(data-weekday);
        position: absolute;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }

    &:hover {
        text-align: center;
        line-height: calc(100vh/6);
    }

    &.past:hover::after {
        content: 'Já passou';

        width: 100%;
        height: 100%;

        background: rgba(100, 20, 200);
    }

    &.future:hover::after {
        content: 'Adicionar meta';

        width: 100%;
        height: 100%;

        background: rgba(20, 250, 20);
    }

    &.faded {
        background: rgba(100, 100, 100, .8);
    }

    &.focused {
        background: rgba(230, 20, 20, .8);
    }
`;

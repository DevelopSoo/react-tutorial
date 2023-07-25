import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /* style 전역 관리 */ 
    :root {
            /* color palette */
            --color-white : #fff;
            --color-gray: #eee;
            --color-black : #000;
            --color-blue : skyblue;
            --color-orange : orange;
            --color-red : red;

        }
        
`;

export default GlobalStyle;

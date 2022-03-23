import 'styled-components/native';
 
declare module 'styled-components/native'{
    export interface DefaultTheme {
        title: string;

        colors: {
          primary: string,
          secundary: string,
          white: string,
          black: string,
        },

    }
}
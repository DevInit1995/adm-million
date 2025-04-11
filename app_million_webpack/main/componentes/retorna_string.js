export const Componente = {
    mostra: function(dado){
        return dado + "------";
    },
    //exemplo de arrow function
    mostra2: dado => {
        return dado + "---[]---";
    },
    //função coringa
    mostra3: dado => (
        `${dado} ---[3]---`
    ),
};
export const procesoPesado = (iteraciones: number): string => {
    for (let index = 0; index < iteraciones; index++) {
        console.log("Se ha mostrado: " + iteraciones);

    }
    return `${iteraciones} iteraciones procesadas`;
}
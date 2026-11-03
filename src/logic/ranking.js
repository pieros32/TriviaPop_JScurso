// Ranking por nivel, guardado en localStorage (sin servidor).
const CLAVE = "trivia-pop-ranking";
const MAXIMO = 10;

const VACIO = { facil: [], intermedio: [], experto: [] };

export function cargarRanking() {
    try {
        const guardado = JSON.parse(localStorage.getItem(CLAVE));
        return { ...VACIO, ...guardado };
    } catch {
        return { ...VACIO };
    }
}

export function guardarRanking(ranking) {
    try {
        localStorage.setItem(CLAVE, JSON.stringify(ranking));
    } catch {
        // Sin almacenamiento disponible: el ranking solo vive mientras la página esté abierta
    }
}

// Más puntaje primero; en empate, gana el menor tiempo
function comparar(a, b) {
    return b.puntaje - a.puntaje || a.tiempo - b.tiempo;
}

export function agregarResultado(ranking, nivel, resultado) {
    const lista = [...ranking[nivel], resultado].sort(comparar).slice(0, MAXIMO);
    return { ...ranking, [nivel]: lista };
}
